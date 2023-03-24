<template><div><h1 id="ui显示、绘制和卡顿分析" tabindex="-1"><a class="header-anchor" href="#ui显示、绘制和卡顿分析" aria-hidden="true">#</a> UI显示、绘制和卡顿分析</h1>
<h2 id="ui显示原理" tabindex="-1"><a class="header-anchor" href="#ui显示原理" aria-hidden="true">#</a> UI显示原理</h2>
<p>现代计算机系统中，CPU和GPU是两个最重要的硬件组件。CPU（中央处理器）主要负责处理计算机的控制和数据操作，而GPU（图形处理器）则专门负责处理图像和图形相关的计算。<br></p>
<p>CPU 和 GPU 扮演着不同的角色，各自负责不同的任务。CPU 负责图像数据的加载、解码和处理、以及用户交互事件的处理；GPU 负责图像纹理的渲染、图形渲染流程的执行、以及动画效果的处理。它们之间协同工作，共同完成图像的渲染和显示。<br></p>
<p>在移动设备中，CPU和GPU的协作是实现UI显示的关键。在CPU中操作UI时，例如创建一个控件、设置一个文本颜色等，这些操作都会最终被转换为一个位图的形式，再通过总线传递给GPU进行渲染和显示。<br></p>
<h3 id="显示过程" tabindex="-1"><a class="header-anchor" href="#显示过程" aria-hidden="true">#</a> 显示过程：</h3>
<ul>
<li>CPU输出位图。当在CPU中进行UI操作时，最终结果通常是一个位图，即一个由像素点组成的二维图像。这个位图包含了所有的UI元素，例如文本、图片、形状等，以及它们的位置、大小和颜色等信息。</li>
<li>传递给GPU。CPU和GPU是通过总线连接起来的，当CPU输出位图之后，它会通过总线传递给GPU。这个过程通常是通过内存映射（memory mapping）实现的，即将CPU输出的位图映射到GPU内存中的某个区域。</li>
<li>GPU图层渲染。一旦GPU收到位图，它会开始进行图层渲染。这个过程包括纹理合成、图像变换、混合等操作。在渲染过程中，GPU会按照一定的顺序将不同的图层组合起来，最终生成一个带有深度信息的帧缓冲区。</li>
<li>显示到屏幕上。最后，GPU将渲染好的帧缓冲区发送给视频控制器。视频控制器会根据vsync信号，在指定时间之前，将帧缓冲区的内容提取出来，并将其显示到屏幕上。这个过程是在刷新率（即每秒刷新屏幕的次数）内完成的。</li>
</ul>
<p>UI显示的过程是一个复杂的过程，需要CPU和GPU等多个硬件协同工作。CPU将UI操作转化为位图，GPU进行图层渲染和帧缓冲区的生成，视频控制器最终将显示内容显示到屏幕上。在这个过程中，CPU和GPU之间通过总线进行通信，确保UI显示的流畅和高效。</p>
<h3 id="cpu" tabindex="-1"><a class="header-anchor" href="#cpu" aria-hidden="true">#</a> CPU</h3>
<p>CPU（Central Processing Unit，中央处理器）是计算机中的主要处理器，也是 iOS 设备中的核心处理器。<br>
CPU 主要负责如下任务：</p>
<ul>
<li>加载和解码图像数据。在图像显示前，CPU 首先要加载并解码图像数据，将其转化为计算机能够识别的像素信息。</li>
<li>处理图像相关的算法和逻辑。在图像显示中，CPU 需要根据程序的逻辑和算法对图像进行一系列处理，如图像压缩、调整大小、裁剪等等。</li>
<li>处理用户输入和界面事件。CPU 还负责处理用户的输入事件和界面交互事件，如点击、滑动等等。</li>
</ul>
<h3 id="gpu" tabindex="-1"><a class="header-anchor" href="#gpu" aria-hidden="true">#</a> GPU</h3>
<p>GPU（Graphics Processing Unit，图形处理器）是计算机中用于处理图像和图形相关的任务的处理器。在 iOS 设备中，GPU 也是非常重要的硬件设备。<br>
GPU 主要负责如下任务：</p>
<ul>
<li>渲染图像纹理。GPU 负责将加载并解码后的图像数据转化为可以在屏幕上显示的图像纹理，同时将图像纹理与界面元素进行组合和混合，生成最终的显示图像。</li>
<li>执行图形渲染流程。GPU 还负责执行图形渲染流程，包括顶点着色器、片元着色器、光栅化、深度测试等等。这些渲染流程会在渲染管道中依次执行，最终生成最终的显示图像。</li>
<li>处理动画效果。在 iOS 应用程序中，很多界面元素都具有动画效果，如旋转、平移、缩放等等。GPU 负责处理这些动画效果，根据动画效果的需求，对界面元素进行变换和组合，生成流畅、自然的动画效果。</li>
</ul>
<h2 id="绘制流程" tabindex="-1"><a class="header-anchor" href="#绘制流程" aria-hidden="true">#</a> 绘制流程</h2>
<p>当调用 [UIView setNeedsDisplay] 方法时，实际上并没有立即进行视图的绘制工作，而是在之后的某个时机才会进行当前UI视图的真正绘制工作。那么为什么会这样呢？</p>
<h2 id="uiview-绘制" tabindex="-1"><a class="header-anchor" href="#uiview-绘制" aria-hidden="true">#</a> UIView 绘制</h2>
<p>在调用 [UIView setNeedsDisplay] 方法时，系统会立即调用 layer 的同名方法 setNeedsDisplay，从而在当前 layer 上打上一个脏标记，表示该视图需要重绘。然后系统会在当前 runloop 将要结束的时候调用 [CALayer display] 方法，进入当前视图的真正绘制流程过程。<br></p>
<p>[CALayer display] 方法的内部实现会首先判断该 layer 的代理是否会响应 displayLayer 方法。如果代理不响应该方法，系统会进入到默认的绘制流程当中。但如果代理响应了该方法，实际上就为我们提供了异步绘制的入口，或者说给我们进行异步绘制留有余地，这就构成了 UIView 绘制原理的过程。</p>
<h3 id="系统绘制流程" tabindex="-1"><a class="header-anchor" href="#系统绘制流程" aria-hidden="true">#</a> 系统绘制流程</h3>
<p>在 iOS 中，UI 组件的绘制是在主线程中进行的。如果 UI 组件需要频繁地进行绘制，就可能会导致主线程阻塞，从而影响应用的性能。为了解决这个问题，iOS 提供了一种高性能的异步绘制机制。<br></p>
<p>实现异步绘制的核心是使用 CALayer 的 delegate。当 CALayer 的 contents 属性需要更新时，CALayer 会调用 delegate 的 displayLayer: 方法，然后将这个方法的执行放在一个子线程中进行。在子线程中，我们可以使用 Core Graphics 或者其他绘图库来生成位图，然后将位图设置给 CALayer 的 contents 属性。这样，UI 组件的绘制就被移到了子线程中，不会阻塞主线程，从而提高了应用的性能。<br></p>
<p>在 drawRect 方法中，可以通过上下文堆栈当中取出栈顶的 context，拿到的就是当前控件或者视图的上下文或者是 backingstore。然后 layer 会判断它是否有代理，如果没有的话，会调用 drawInContext，如果有的话，会调用 layer 代理的方法 drawLayer:inContext，然后做当前视图的绘制工作，这一部分是发生在系统的内部当中的。然后在一个合适的时机给一个回调方法，也就是 [UIView drawRect:] 方法，调用 drawRect。它的默认实现是什么都不做，而给开这个口子，是允许在系统绘制的基础之上再做一些其他的相关的绘制工作。<br></p>
<p>然后不论是哪种分支，最终都是由 CALayer 上传到对应的 backingstore 到 GPU，这里的 backingstore 可以理解为最终的位图，然后就结束了系统默认的绘制流程。<br></p>
<p>需要注意的是，这里所说的系统默认的绘制流程仅仅是 UIView 的绘制流程，对于其他类似于 UILabel、UIButton 等控件的绘制流程原理都是类似的，都是通过 layer 的 setNeedsDisplay 方法来触发绘制流程的开始。<br></p>
<p>当然，既然 [UIView setNeedsDisplay] 方法并不会立即触发绘制工作，那么能否通过一些方式来强制立即进行绘制呢？<br>
答案是肯定的，可以通过 [UIView displayIfNeeded] 方法来立即进行绘制。这个方法的原理也很简单，它会立即调用 layer 的 displayIfNeeded 方法，然后进入到当前视图的绘制流程当中。<br></p>
<h3 id="异步绘制的实现" tabindex="-1"><a class="header-anchor" href="#异步绘制的实现" aria-hidden="true">#</a> 异步绘制的实现</h3>
<p>在实现异步绘制时，需要在UIView的layer上设置delegate，使其遵循CALayerDelegate协议并实现其中的display(_ layer: CALayer)方法。在调用setNeedsDisplay()方法时，会调用UIView的displayIfNeeded()方法，该方法最终会调用display(_ layer: CALayer)方法。</p>
<p>在display(_ layer: CALayer)方法中，需要在子线程中进行位图的绘制，然后将生成的位图设置为layer的contents属性。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Copy</span> code
<span class="token keyword">class</span> <span class="token class-name">CustomView</span><span class="token punctuation">:</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">class</span> <span class="token keyword">var</span> layerClass<span class="token punctuation">:</span> <span class="token class-name">AnyClass</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">CAShapeLayer</span><span class="token punctuation">.</span><span class="token keyword">self</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">display</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> layer<span class="token punctuation">:</span> <span class="token class-name">CALayer</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> shapeLayer <span class="token operator">=</span> layer <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">CAShapeLayer</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// 在子线程中生成位图</span>
        <span class="token keyword">let</span> image <span class="token operator">=</span> <span class="token function">generateImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        <span class="token comment">// 将位图设置给 contents 属性</span>
        shapeLayer<span class="token punctuation">.</span>contents <span class="token operator">=</span> image<span class="token operator">?</span><span class="token punctuation">.</span>cgImage
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>们将 CustomView 的 layerClass 属性设置为 CAShapeLayer，这样 CustomView 的 `CALayer</p>
<ul>
<li>
<p>整理可以将异步绘制分为以下几个步骤：
1.调用setNeedsDisplay()方法，将视图标记为需要重新绘制。
2.主线程runloop即将结束时，系统会调用视图所对应layer的display(_ layer: CALayer)方法。
3.如果layer的delegate实现了display(_ layer: CALayer)方法，则会在一个子线程中执行该方法。
4.在子线程中，使用Core Graphics绘制对应的bitmap。
5.生成对应的CGImage对象。
6.回到主线程，将生成的CGImage对象设置为layer的contents属性。
通过以上流程，可以在子线程中完成位图的绘制，从而避免了在主线程中进行耗时的绘制操作，提高了UI的响应速度和流畅性。</p>
</li>
<li>
<p>注意事项
在进行异步绘制时，需要注意以下几个事项：
异步绘制会占用一定的系统资源，因此在绘制较多的视图时需要进行合理的优化，避免出现性能问题。
在生成位图时，需要根据实际情况选择合适的绘制质量和位图大小，避免出现因位图过大导致的内存问题。
在绘制完成后，需要在主线程中设置layer的contents属性，避免多线程操作引发的竞争问题。</p>
</li>
</ul>
<h2 id="ui卡顿和掉帧" tabindex="-1"><a class="header-anchor" href="#ui卡顿和掉帧" aria-hidden="true">#</a> UI卡顿和掉帧</h2>
<p>UI卡顿是一个广泛存在于移动设备上的问题，尤其是在复杂的应用程序中，如社交媒体、游戏和浏览器中。这些应用程序往往需要处理大量的图像、动画和用户交互，因此，即使是高端设备也可能会出现卡顿问题。在 iOS 应用中，UI 卡顿和掉帧通常指应用程序在执行用户交互操作时出现的延迟或不流畅的现象。当应用程序处理用户的输入事件时，如果执行的操作过于复杂，或者系统资源不足，就会导致 UI 卡顿或掉帧。<br></p>
<p>UI 卡顿通常指应用程序在响应用户的操作时出现明显的延迟，例如，滑动列表时出现明显的卡顿现象。UI 掉帧通常指应用程序在执行动画效果时出现明显的卡顿现象，例如，滑动页面时出现明显的卡顿现象。<br></p>
<h3 id="卡顿原因" tabindex="-1"><a class="header-anchor" href="#卡顿原因" aria-hidden="true">#</a> 卡顿原因</h3>
<p>首先需要了解UI卡顿的根本原因。在移动设备中，UI的渲染是由CPU和GPU共同完成的。 CPU处理应用程序中的逻辑和数据，然后将图像数据传递给GPU，GPU根据这些数据进行渲染，最后将渲染好的图像发送到屏幕上显示。这个过程需要在固定的时间内完成，通常是16.7毫秒。这是由VSync信号控制的，它每隔16.7毫秒发送一次信号，告诉设备屏幕需要更新。如果在16.7毫秒内无法完成UI渲染，就会出现卡顿现象，也就是所谓的掉帧。<br></p>
<p>那么，什么会导致UI渲染超时呢？最常见的原因是CPU处理时间过长。当CPU在执行复杂的计算任务时，例如布局UI、文本计算和图片解码等操作，会导致GPU没有足够的时间进行图像渲染。这就会导致GPU无法在规定时间内完成渲染，从而引起卡顿现象。这通常发生在应用程序的UI元素过多或者过于复杂的情况下。<br></p>
<p>另一个可能导致UI卡顿的原因是内存管理问题。如果应用程序使用大量的内存，那么就会导致CPU处理时间变长。这是因为内存管理需要耗费大量的CPU资源。如果应用程序没有正确地管理内存，可能会导致内存泄漏或者内存碎片，从而导致CPU无法及时释放内存，使得CPU在下一帧VSync到来之前无法完成渲染。<br></p>
<p>除此之外，还有一些其他因素可能导致UI卡顿，例如图像过大、不合理的线程使用、频繁的IO操作等等。这些因素都会影响CPU的处理时间，从而影响UI渲染的性能。<br></p>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2>
<p>为了解决 UI 卡顿和掉帧问题，我们可以采取以下一些措施：</p>
<h3 id="减少界面渲染时间-我们可以通过以下方式减少界面渲染时间" tabindex="-1"><a class="header-anchor" href="#减少界面渲染时间-我们可以通过以下方式减少界面渲染时间" aria-hidden="true">#</a> 减少界面渲染时间：我们可以通过以下方式减少界面渲染时间：</h3>
<ul>
<li>减少视图层级：如果应用程序的视图层级太多，就会导致界面渲染时间过长，我们可以通过减少视图层级的方式来优化界面渲染时间。</li>
<li>减少视图数量：如果应用程序的视图数量太多，就会导致界面渲染时间过长，我们可以通过减少视图数量的方式来优化界面渲染时间。</li>
<li>使用局部刷新：当应用程序只需要更新部分 UI 时，我们可以使用局部刷新的方式来减少界面渲染时间。</li>
<li>使用异步绘制：当应用程序需要进行复杂的绘制时，我们可以使用异步绘制的方式来减少界面渲染时间。</li>
</ul>
<h3 id="减少-ui-更新频率-我们可以通过以下方式减少-ui-更新频率" tabindex="-1"><a class="header-anchor" href="#减少-ui-更新频率-我们可以通过以下方式减少-ui-更新频率" aria-hidden="true">#</a> 减少 UI 更新频率：我们可以通过以下方式减少 UI 更新频率：</h3>
<ul>
<li>使用批量更新：当应用程序需要频繁地更新 UI 时，我们可以使用批量更新的方式来减少 UI 更新频率。</li>
<li>使用滑动优化技术：当应用程序需要滑动列表或者页面时，我们可以使用滑动优化技术来减少 UI 更新频率。</li>
<li>使用缓存技术：当应用程序需要重复使用同样的 UI 元素时，我们可以使用缓存技术来减少 UI 更新频率。</li>
</ul>
<h3 id="优化布局-我们可以通过以下方式优化布局" tabindex="-1"><a class="header-anchor" href="#优化布局-我们可以通过以下方式优化布局" aria-hidden="true">#</a> 优化布局：我们可以通过以下方式优化布局：</h3>
<ul>
<li>减少布局复杂度：当应用程序的布局过于复杂时，我们可以通过减少布局复杂度的方式来优化布局。</li>
<li>使用自动布局技术：当应用程序需要自适应布局时，我们可以使用自动布局技术来优化布局。</li>
<li>使用手动布局技术：当应用程序需要精细布局时，我们可以使用手动布局技术来优化布局。</li>
</ul>
<h3 id="减少-i-o-操作-我们可以通过以下方式减少-i-o-操作" tabindex="-1"><a class="header-anchor" href="#减少-i-o-操作-我们可以通过以下方式减少-i-o-操作" aria-hidden="true">#</a> 减少 I/O 操作：我们可以通过以下方式减少 I/O 操作：</h3>
<ul>
<li>缓存数据：当应用程序需要频繁地进行 I/O 操作时，我们可以使用缓存技术来减少 I/O 操作。</li>
<li>使用异步加载：当应用程序需要加载大量数据时，我们可以使用异步加载的方式来减少 I/O 操作。</li>
<li>使用数据预加载技术：当应用程序需要频繁地访问同一组数据时，我们可以使用数据预加载技术来减少 I/O 操作。</li>
</ul>
<h3 id="优化内存使用-我们可以通过以下方式优化内存使用" tabindex="-1"><a class="header-anchor" href="#优化内存使用-我们可以通过以下方式优化内存使用" aria-hidden="true">#</a> 优化内存使用：我们可以通过以下方式优化内存使用：</h3>
<ul>
<li>减少不必要的内存占用：当应用程序存在内存泄漏或者过度使用内存时，我们可以通过减少不必要的内存占用来优化内存使用。</li>
<li>使用内存管理技术：当应用程序需要频繁地进行内存管理时，我们可以使用内存管理技术来优化内存使用。</li>
<li>使用内存缓存技术：当应用程序需要重复使用同样的数据时，我们可以使用内存缓存技术来优化内存使用。</li>
</ul>
</div></template>


