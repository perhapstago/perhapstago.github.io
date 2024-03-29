<template><div><h1 id="关于runloop" tabindex="-1"><a class="header-anchor" href="#关于runloop" aria-hidden="true">#</a> 关于RunLoop</h1>
<p>RunLoop 是 iOS 和 macOS 中非常重要的概念之一，它是一个事件循环机制，能够管理事件和计时器，也可以用于处理输入源和输出源。 <br></p>
<p>RunLoop 是一个事件循环机制，用于在应用程序中处理事件和计时器。RunLoop 为应用程序提供了一种机制，以等待输入源和输出源，同时避免 CPU 的空转。<br>
RunLoop 是一种基于消息循环的机制。当一个事件发生时，RunLoop 将该事件添加到消息队列中，然后开始处理该消息队列中的事件。这个过程会一直持续下去，直到没有事件需要处理为止。</p>
<h2 id="实现机制" tabindex="-1"><a class="header-anchor" href="#实现机制" aria-hidden="true">#</a> 实现机制</h2>
<p>RunLoop 是一个由内核层和用户层共同实现的事件循环机制。在内核层，RunLoop 使用了系统调用 select 和 kevent，用于监听输入源事件和计时器事件。在用户层，RunLoop 主要使用了三个数据结构：CFRunLoop、CFRunLoopMode 和 CFRunLoopSource。</p>
<h3 id="内核层" tabindex="-1"><a class="header-anchor" href="#内核层" aria-hidden="true">#</a> 内核层</h3>
<p>在内核层，RunLoop 主要使用了两个系统调用：select 和 kevent。</p>
<h4 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h4>
<p>select 是一个阻塞式的系统调用，它能够监听文件描述符（文件、标准输入、套接字等）的变化，并在事件发生时通知程序。在 iOS 和 macOS 中，RunLoop 将输入源封装成了文件描述符，因此可以使用 select 监听输入源事件。<br></p>
<p>select 的参数包括三个文件描述符集：读集合、写集合和异常集合。当监听到读集合中有文件描述符变为可读时，select 将返回一个大于 0 的整数，表示该文件描述符已准备好读取数据。当监听到写集合中有文件描述符变为可写时，select 将返回一个大于 0 的整数，表示该文件描述符已准备好写入数据。当监听到异常集合中有文件描述符出现异常时，select 将返回一个大于 0 的整数，表示该文件描述符发生了异常。<br></p>
<p>当 select 返回时，程序需要使用循环来检查每个文件描述符是否发生了事件。如果没有发生事件，则继续调用 select 监听事件。如果发生了事件，则程序需要处理该事件，并继续监听下一个事件。</p>
<h4 id="kevent" tabindex="-1"><a class="header-anchor" href="#kevent" aria-hidden="true">#</a> kevent</h4>
<p>kevent 是一个更加高效的系统调用，它可以同时监听多种类型的事件。kevent 接收一个 kevent 结构体数组作为参数，用于描述需要监听的事件。每个 kevent 结构体包含以下信息：</p>
<ul>
<li>ident：文件描述符、套接字等标识符。</li>
<li>filter：事件类型，例如读事件、写事件等。</li>
<li>flags：事件标志，例如边沿触发、水平触发等。</li>
<li>fflags：过滤器标志，例如是否处于带外数据模式等。</li>
<li>data：事件相关的数据，例如可读数据的长度。</li>
<li>udata：用户数据。
当监听到事件后，kevent 将调用相应的回调函数来处理事件。与 select 不同，kevent 不需要循环检查文件描述符是否发生事件，因此可以减少 CPU 占用率。</li>
</ul>
<h3 id="用户层" tabindex="-1"><a class="header-anchor" href="#用户层" aria-hidden="true">#</a> 用户层</h3>
<p>在用户层，RunLoop 主要使用了三个数据结构：CFRunLoop、CFRunLoopMode 和 CFRunLoopSource。<br></p>
<h4 id="cfrunloop" tabindex="-1"><a class="header-anchor" href="#cfrunloop" aria-hidden="true">#</a> CFRunLoop</h4>
<p>CFRunLoop 是 Core Foundation 框架中的一个数据类型，用于实现 RunLoop。CFRunLoop 与线程一一对应，每个线程都有一个与之关联的 CFRunLoop 对象。<br></p>
<p>CFRunLoop 包含一个 currentMode 成员变量，用于指定当前的运行模式。当向 CFRunLoop 中添加事件源时，RunLoop 会在相应的 CFRunLoopMode 中查找该事件源所属的 inputSources 或者 timerSources 集合，并将其加入到该集合中。RunLoop 在事件循环时会检查当前的 CFRunLoopMode 是否有事件需要处理，如果有，则会调用该事件源的回调函数来处理事件。<br></p>
<p>CFRunLoop 还包含一个 commonModes 成员变量，它是一个 CFSet 对象，包含了所有公共的运行模式。当向 CFRunLoop 中添加事件源时，RunLoop 会将该事件源同时加入当前运行模式和公共运行模式的 inputSources 或者 timerSources 集合中，这样即使当前运行模式被切换，该事件源仍然可以被处理。</p>
<h3 id="cfrunloopmode" tabindex="-1"><a class="header-anchor" href="#cfrunloopmode" aria-hidden="true">#</a> CFRunLoopMode</h3>
<p>CFRunLoopMode 是 CFRunLoop 中的一个数据类型，用于管理事件源和定时器。CFRunLoopMode 包含两个集合：inputSources 和 timerSources。</p>
<p>inputSources 集合中存储了所有的输入源，例如触摸事件、网络请求等。每个输入源包含一个回调函数，当该输入源被触发时，RunLoop 会调用该回调函数来处理事件。</p>
<p>timerSources 集合中存储了所有的定时器，例如 NSTimer、CADisplayLink 等。每个定时器包含一个时间间隔，当时间间隔到达时，RunLoop 会调用该定时器的回调函数来处理事件。</p>
<h3 id="cfrunloopsource" tabindex="-1"><a class="header-anchor" href="#cfrunloopsource" aria-hidden="true">#</a> CFRunLoopSource</h3>
<p>CFRunLoopSource 是 CFRunLoop 中的一个数据类型，用于封装输入源。CFRunLoopSource 包含一个回调函数，当该输入源被触发时，RunLoop 会调用该回调函数来处理事件。</p>
<p>当向 CFRunLoop 中添加输入源时，RunLoop 会将其封装成一个 CFRunLoopSource 对象，并将其加入到相应的 CFRunLoopMode 的 inputSources 集合中。当该输入源被触发时，RunLoop 会调用 CFRunLoopSource 的回调函数来处理事件。</p>
<h2 id="事件循环机制" tabindex="-1"><a class="header-anchor" href="#事件循环机制" aria-hidden="true">#</a> 事件循环机制</h2>
<p>RunLoop 的工作方式可以被看作是一个无限循环的过程，这个过程可以被分为以下几个步骤：</p>
<ul>
<li>获取当前线程的 RunLoop 对象。</li>
<li>进入事件循环。<br>
当调用 CFRunLoopRun 或者 CFRunLoopRunInMode 函数时，RunLoop 会进入事件循环。RunLoop 会从当前运行模式的 inputSources 和 timerSources 集合中获取事件，并调用相应的回调函数来处理事件。如果当前运行模式中没有事件需要处理，则会等待事件到达。</li>
<li>监听事件。</li>
<li>处理事件。<br>
当一个输入源被触发时，RunLoop 会调用其回调函数来处理事件。在处理事件时，RunLoop 会从当前运行模式的 inputSources 集合中获取该输入源，并调用其回调函数来处理事件。<br>
当一个定时器到达时，RunLoop 会调用其回调函数来处理事件。在处理事件时，RunLoop 会从当前运行模式的 timerSources 集合中获取该定时器，并调用其回调函数来处理事件。</li>
<li>等待新的事件。
如果当前运行模式中没有事件需要处理，则 RunLoop 会进入休眠状态，等待事件到达。<br>
当有事件到达时，RunLoop 会被唤醒，并开始处理事件。RunLoop 会不断地循环执行以上步骤，直到调用 CFRunLoopStop 函数或者外部强制终止。<br>
需要注意的是，RunLoop 在等待事件时会进入休眠状态，这意味着该线程会暂停执行。如果该线程被阻塞，例如正在进行网络请求或者文件读写操作，那么该线程就无法响应事件，这会导致界面卡顿或者出现其它异常行为。因此，在进行网络请求或者文件读写操作时，应该将这些操作放在后台线程中执行，避免阻塞主线程。</li>
<li>回到第三步。
RunLoop 可以监听多种类型的事件，包括输入源、计时器和观察者等。输入源是一种异步事件，例如用户交互、网络请求和系统通知等。计时器是一种周期性事件，例如定时器和动画等。观察者可以用于监控 RunLoop 的状态，例如 RunLoop 的进入和退出。</li>
</ul>
<h2 id="runloop和线程" tabindex="-1"><a class="header-anchor" href="#runloop和线程" aria-hidden="true">#</a> RunLoop和线程</h2>
<h3 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h3>
<p>线程是操作系统中独立的执行单元，它是操作系统分配处理器时间的基本单位。在 iOS 开发中通常会将 UI 操作放在主线程中执行，而将耗时的任务放在后台线程中执行，以保证应用的流畅性和响应速度。</p>
<p>RunLoop 的常用接口包括：</p>
<ul>
<li>CFRunLoopGetCurrent：获取当前线程的 RunLoop 对象。</li>
<li>CFRunLoopGetMain：获取主线程的 RunLoop 对象。</li>
<li>CFRunLoopRun：启动 RunLoop，进入事件循环。</li>
<li>CFRunLoopStop：停止 RunLoop。</li>
</ul>
<h3 id="线程和-runloop-的关系" tabindex="-1"><a class="header-anchor" href="#线程和-runloop-的关系" aria-hidden="true">#</a> 线程和 RunLoop 的关系</h3>
<p>线程和 RunLoop 之间是一一对应的关系。每个线程都有一个对应的 RunLoop 对象，而且每个 RunLoop 对象只能在一个线程中执行。线程的 RunLoop 对象在第一次被访问时会自动创建，当线程销毁时会自动释放。<br></p>
<p>RunLoop 对线程的影响表现在以下几个方面：</p>
<ul>
<li>
<ol>
<li>RunLoop 的启动
RunLoop 对线程的第一个影响是启动线程的 RunLoop。在主线程中，RunLoop 会在应用启动时自动启动，而在后台线程中，RunLoop 需要手动启动。</li>
</ol>
</li>
</ul>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>- (void)startThread {
    NSThread *thread = [[NSThread alloc] initWithTarget:self selector:@selector(runThread) object:nil];
    [thread start];
}

- (void)runThread {
    @autoreleasepool {
        // 获取当前线程的 RunLoop 对象
        NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
        
        // 启动 RunLoop，进入事件循环
        [runLoop run];
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<ol start="2">
<li>RunLoop 的退出
RunLoop 对线程的第二个影响是退出线程的 RunLoop。在主线程中，RunLoop 会在应用退出时自动退出，而在后台线程中，RunLoop 需要手动停止。</li>
</ol>
</li>
</ul>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>- (void)stopThread {
    if (self.thread) {
        // 获取当前线程的 RunLoop 对象
    NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
    // 停止 RunLoop
    CFRunLoopStop([runLoop getCFRunLoop]);
  }   
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<ol start="3">
<li>RunLoop 的模式
RunLoop 对线程的第三个影响是模式。RunLoop 通过模式来管理事件源和定时器。模式分为两种：默认模式和自定义模式。默认模式是指 RunLoop 运行时使用的模式，一般情况下为 kCFRunLoopDefaultMode。自定义模式是开发者自己定义的模式，可以根据自己的需要添加或移除事件源和定时器。</li>
</ol>
</li>
</ul>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>- (void)addTimerToRunLoop {
    // 创建定时器
    NSTimer *timer = [NSTimer timerWithTimeInterval:1.0 target:self selector:@selector(handleTimer:) userInfo:nil repeats:YES];
    
    // 获取当前线程的 RunLoop 对象
    NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
    
    // 将定时器添加到默认模式下的 RunLoop 中
    [runLoop addTimer:timer forMode:NSDefaultRunLoopMode];
}

- (void)addTimerToCustomMode {
    // 创建定时器
    NSTimer *timer = [NSTimer timerWithTimeInterval:1.0 target:self selector:@selector(handleTimer:) userInfo:nil repeats:YES];
    
    // 获取当前线程的 RunLoop 对象
    NSRunLoop *runLoop = [NSRunLoop currentRunLoop];
    
    // 将定时器添加到自定义模式下的 RunLoop 中
    [runLoop addTimer:timer forMode:@&quot;CustomMode&quot;];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="runloop-的使用场景" tabindex="-1"><a class="header-anchor" href="#runloop-的使用场景" aria-hidden="true">#</a> RunLoop 的使用场景</h2>
<p>RunLoop 在 iOS 和 macOS 应用程序开发中具有广泛的应用场景。下面是一些常见的使用场景：</p>
<h4 id="界面更新" tabindex="-1"><a class="header-anchor" href="#界面更新" aria-hidden="true">#</a> 界面更新</h4>
<p>在 iOS 和 macOS 应用程序中，界面更新是一个重要的任务。在大多数情况下需要将界面更新任务添加到主线程的 RunLoop 中。这可以通过使用 GCD 或者 NSOperationQueue 来实现。</p>
<h4 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器" aria-hidden="true">#</a> 定时器</h4>
<p>RunLoop 可以用于管理定时器。当一个定时器被创建时，RunLoop 会自动将其添加到消息队列中，并在特定的时间触发定时器事件。</p>
<h4 id="网络通信" tabindex="-1"><a class="header-anchor" href="#网络通信" aria-hidden="true">#</a> 网络通信</h4>
<p>RunLoop 可以用于管理网络通信。当一个网络请求被发起时，RunLoop 会自动将其添加到消息队列中，并在收到网络响应后触发相应的事件。</p>
</div></template>


