<template><div><h1 id="实现常驻线程" tabindex="-1"><a class="header-anchor" href="#实现常驻线程" aria-hidden="true">#</a> 实现常驻线程</h1>
<p>在 iOS 开发中，我们经常需要实现一个常驻线程来执行一些特定的任务，比如音视频播放、网络请求等，这些任务需要在一个单独的线程中执行，避免阻塞主线程和其他子线程的运行。<br>
常驻线程指的是一个长期存在的线程，与普通线程不同的是，它不会随着任务的结束而被销毁，而是一直存在于内存中，等待新的任务到来。<br></p>
<h2 id="常驻线程实现" tabindex="-1"><a class="header-anchor" href="#常驻线程实现" aria-hidden="true">#</a> 常驻线程实现</h2>
<p>实现一个常驻线程的关键在于创建一个与线程关联的 runloop，并在其中添加需要执行的任务。具体实现可以分为以下三个步骤：</p>
<p>1.创建一个线程对应的 RunLoop
2.向这个 RunLoop 中添加 Source/Timer/Observer 以及 Port 等内容
3.调用 CFRunLoop 的 run 方法</p>
<h2 id="创建一个线程对应的-runloop" tabindex="-1"><a class="header-anchor" href="#创建一个线程对应的-runloop" aria-hidden="true">#</a> 创建一个线程对应的 RunLoop</h2>
<p>RunLoop 是一个与线程相关联的对象，因此我们需要先创建一个新的线程，并为其创建一个对应的 RunLoop。<br>
创建线程的方式有很多种，这里我们使用 NSThread 的类方法创建线程：</p>
<div class="language-objc line-numbers-mode" data-ext="objc"><pre v-pre class="language-objc"><code>NSThread <span class="token operator">*</span>thread <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>NSThread alloc<span class="token punctuation">]</span> initWithTarget<span class="token punctuation">:</span><span class="token keyword">self</span> selector<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>threadEntryPoint<span class="token punctuation">:</span><span class="token punctuation">)</span> object<span class="token punctuation">:</span>nil<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span>thread start<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个名为 thread 的线程，并指定了一个名为 threadEntryPoint: 的入口方法。接下来我们实现这个入口方法：</p>
<div class="language-objc line-numbers-mode" data-ext="objc"><pre v-pre class="language-objc"><code><span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>threadEntryPoint<span class="token punctuation">:</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>object <span class="token punctuation">{</span>
    <span class="token operator">@</span>autoreleasepool <span class="token punctuation">{</span>
        <span class="token comment">// 1. 获取当前线程的 RunLoop</span>
        NSRunLoop <span class="token operator">*</span>runLoop <span class="token operator">=</span> <span class="token punctuation">[</span>NSRunLoop currentRunLoop<span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 2. 添加一个 input source，保证 RunLoop 不会退出</span>
        <span class="token punctuation">[</span>runLoop addPort<span class="token punctuation">:</span><span class="token punctuation">[</span>NSMachPort port<span class="token punctuation">]</span> forMode<span class="token punctuation">:</span>NSDefaultRunLoopMode<span class="token punctuation">]</span><span class="token punctuation">;</span>
        
        <span class="token comment">// 3. 运行 RunLoop</span>
        <span class="token punctuation">[</span>runLoop run<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先通过 [NSRunLoop currentRunLoop] 方法获取当前线程的 RunLoop。接下来向 RunLoop 中添加了一个 input source，它的作用是保证 RunLoop 不会退出。最后调用 [runLoop run] 方法运行 RunLoop。</p>
<h2 id="向-runloop-中添加内容" tabindex="-1"><a class="header-anchor" href="#向-runloop-中添加内容" aria-hidden="true">#</a> 向 RunLoop 中添加内容</h2>
<p>RunLoop 是一个事件循环机制，它通过监视输入源（input source）来处理事件。这里的输入源可以是定时器、端口、自定义输入源等。
例如，我们可以向 RunLoop 中添加一个 Timer，让它每隔一段时间执行一次特定的代码：</p>
<div class="language-objc line-numbers-mode" data-ext="objc"><pre v-pre class="language-objc"><code>NSTimer <span class="token operator">*</span>timer <span class="token operator">=</span> <span class="token punctuation">[</span>NSTimer timerWithTimeInterval<span class="token punctuation">:</span><span class="token number">1.0</span> target<span class="token punctuation">:</span><span class="token keyword">self</span> selector<span class="token punctuation">:</span><span class="token keyword">@selector</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">:</span><span class="token punctuation">)</span> userInfo<span class="token punctuation">:</span>nil repeats<span class="token punctuation">:</span>YES<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span>NSRunLoop currentRunLoop<span class="token punctuation">]</span> addTimer<span class="token punctuation">:</span>timer forMode<span class="token punctuation">:</span>NSDefaultRunLoopMode<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个 Timer，并将它添加到当前线程的 RunLoop 中。注意，我们需要指定一个 mode（运行模式）来添加 Timer，这个 mode 必须和调用 run 方法时的 mode 相同。</p>
<p>另外，还可以向 RunLoop 中添加 Observer，来监听 RunLoop 的状态。例如，我们可以创建一个 Observer 来监听 RunLoop 运行状态的改变：</p>
<div class="language-objc line-numbers-mode" data-ext="objc"><pre v-pre class="language-objc"><code>CFRunLoopObserverRef observer <span class="token operator">=</span> <span class="token function">CFRunLoopObserverCreateWithHandler</span><span class="token punctuation">(</span><span class="token constant">NULL</span><span class="token punctuation">,</span> kCFRunLoopAllActivities<span class="token punctuation">,</span> YES<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">^</span><span class="token punctuation">(</span>CFRunLoopObserverRef observer<span class="token punctuation">,</span> CFRunLoopActivity activity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@"RunLoop activity: %lu"</span><span class="token punctuation">,</span> activity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>调用 CFRunLoop 的 run 方法</li>
</ul>
<p>最后一步，我们需要调用 CFRunLoop 的 run 方法，才能启动这个常驻线程的 RunLoop 循环。<br></p>
<p>CFRunLoopRun() 是 RunLoop 的实现，作用是启动一个无限循环，该循环会在接收到任务时执行任务，否则就会一直等待任务的到来。<br></p>
<p>CFRunLoopRun() 启动后，除非手动停止，否则会一直运行，直到进程退出。一般情况下，我们需要在特定条件下停止该循环，否则就会造成 CPU 持续占用，影响程序性能。<br></p>
<p>那么如何停止 RunLoop 循环呢？我们可以通过调用 CFRunLoopStop() 方法来停止 RunLoop 循环。在常驻线程不再需要的时候，我们可以调用该方法停止 RunLoop 循环，然后退出线程，这样就能安全地结束常驻线程的生命周期。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>通过以上三个步骤就能够实现一个常驻线程了。在具体使用过程中需要注意，运行的模式和资源添加的模式必须是同一个，否则的话可能由于你外部使用了一个 while循环，就导致了一个死循环。这是我们在具体实现过程中需要注意的一个问题。<br>
在实际开发中，常驻线程可以用来处理一些长时间运行的任务，例如网络请求、数据处理等，可以有效地提高应用的性能和响应速度。同时，需要注意管理好常驻线程的生命周期，避免出现一些潜在的问题。</p>
</div></template>


