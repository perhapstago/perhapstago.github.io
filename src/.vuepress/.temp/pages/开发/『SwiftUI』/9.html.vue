<template><div><h1 id="_09-过渡动画" tabindex="-1"><a class="header-anchor" href="#_09-过渡动画" aria-hidden="true">#</a> 09.过渡动画</h1>
<p>在 iOS 应用程序中，过渡动画可以为用户提供更好的界面交互体验，使界面切换更加平滑和自然。SwiftUI 中提供了多种内置的过渡动画类型，同时也支持自定义动画。</p>
<h2 id="系统过渡动画" tabindex="-1"><a class="header-anchor" href="#系统过渡动画" aria-hidden="true">#</a> 系统过渡动画</h2>
<p>SwiftUI 中提供了多种内置的过渡动画类型，可以在视图间进行切换时使用。这些动画类型都是基于系统提供的 Core Animation 框架实现的，因此性能非常高效。下面是一些常用的内置过渡动画类型：</p>
<ul>
<li>.default：默认过渡动画，包括淡入淡出和滑动两种效果。</li>
<li>.scale：缩放过渡动画，视图从小到大或从大到小缩放。</li>
<li>.slide：滑动过渡动画，视图在屏幕中从左往右或从右往左滑动。</li>
<li>.opacity：透明度过渡动画，视图从完全透明到不透明或反之。</li>
<li>.move：移动过渡动画，视图在屏幕中移动。</li>
<li>.offset：偏移过渡动画，视图在屏幕中沿着 x 轴或 y 轴移动。
下面是一个简单的示例代码，展示如何使用内置过渡动画：</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> isShowingSecondView <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> isShowingSecondView <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Second View"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"First View"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Toggle"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                withAnimation <span class="token punctuation">{</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span>isShowingSecondView<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ContentView 中创建了一个 isShowingSecondView 状态变量，用于控制显示哪个视图。当用户点击 Toggle 按钮时，使用 withAnimation 代码块包裹状态变量的切换，以便在切换时使用动画。<br></p>
<p>在第一个 Text 视图和第二个 Text 视图中都添加了 .transition(.scale) 修饰符，这表示希望使用内置的缩放过渡动画。当用户点击 Toggle 按钮时，视图将根据状态变量的值进行切换，并使用所选过渡动画过渡。 <br></p>
<h2 id="自定义过渡动画" tabindex="-1"><a class="header-anchor" href="#自定义过渡动画" aria-hidden="true">#</a> 自定义过渡动画</h2>
<h3 id="创建过渡动画" tabindex="-1"><a class="header-anchor" href="#创建过渡动画" aria-hidden="true">#</a> 创建过渡动画</h3>
<p>要创建自定义过渡动画，需要使用 SwiftUI 的 ViewModifier 协议和 View.transition() 方法。下面是一个简单的自定义过渡动画示例：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">CustomTransition</span><span class="token punctuation">:</span> <span class="token class-name">ViewModifier</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> animation<span class="token punctuation">:</span> <span class="token class-name">Animation</span>
    
    <span class="token keyword">func</span> <span class="token function-definition function">body</span><span class="token punctuation">(</span>content<span class="token punctuation">:</span> <span class="token class-name">Content</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        content
            <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">.</span>scale<span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span>animation<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">extension</span> <span class="token class-name">AnyTransition</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">var</span> customTransition<span class="token punctuation">:</span> <span class="token class-name">AnyTransition</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> insertion <span class="token operator">=</span> <span class="token class-name">AnyTransition</span><span class="token punctuation">.</span><span class="token function">modifier</span><span class="token punctuation">(</span>
            active<span class="token punctuation">:</span> <span class="token class-name">CustomTransition</span><span class="token punctuation">(</span>animation<span class="token punctuation">:</span> <span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span><span class="token punctuation">,</span>
            identity<span class="token punctuation">:</span> <span class="token class-name">CustomTransition</span><span class="token punctuation">(</span>animation<span class="token punctuation">:</span> <span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        
        <span class="token keyword">let</span> removal <span class="token operator">=</span> <span class="token class-name">AnyTransition</span><span class="token punctuation">.</span><span class="token function">modifier</span><span class="token punctuation">(</span>
            active<span class="token punctuation">:</span> <span class="token class-name">CustomTransition</span><span class="token punctuation">(</span>animation<span class="token punctuation">:</span> <span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span><span class="token punctuation">,</span>
            identity<span class="token punctuation">:</span> <span class="token class-name">CustomTransition</span><span class="token punctuation">(</span>animation<span class="token punctuation">:</span> <span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        
        <span class="token keyword">return</span> <span class="token punctuation">.</span><span class="token function">asymmetric</span><span class="token punctuation">(</span>insertion<span class="token punctuation">:</span> insertion<span class="token punctuation">,</span> removal<span class="token punctuation">:</span> removal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码定义了一个名为 CustomTransition 的自定义 ViewModifier，它使用 View.transition() 方法并指定了一个 .scale 的过渡动画。同时，我们还为该自定义过渡动画提供了一个 animation 参数，用于指定动画的类型。<br></p>
<p>此外还通过扩展 AnyTransition 协议来定义了一个名为 customTransition 的过渡动画，它使用了上述定义的 CustomTransition 来作为其自定义的过渡动画。使用 .asymmetric 方法来同时定义插入和移除时的过渡动画效果。<br></p>
<h3 id="使用自定义过渡动画" tabindex="-1"><a class="header-anchor" href="#使用自定义过渡动画" aria-hidden="true">#</a> 使用自定义过渡动画</h3>
<p>在使用自定义过渡动画时，可以像使用内置过渡动画一样，通过将其传递给 View.transition() 方法来应用它。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> show <span class="token operator">=</span> <span class="token boolean">false</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> show <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">transition</span><span class="token punctuation">(</span><span class="token punctuation">.</span>customTransition<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Toggle"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                withAnimation <span class="token punctuation">{</span>
                    show<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码使用 Button 来切换一个名为 show 的布尔值，从而控制是否显示一个 Text 视图。当 show 的值为 true 时使用 .customTransition 自定义过渡动画来为 Text 视图添加动画效果。在点击 Toggle 按钮时，使用 withAnimation 来对状态变化进行动画处理。</p>
</div></template>


