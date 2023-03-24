<template><div><h1 id="_07-自定义视图和容器" tabindex="-1"><a class="header-anchor" href="#_07-自定义视图和容器" aria-hidden="true">#</a> 07.自定义视图和容器</h1>
<p>在 SwiftUI 中，自定义视图和容器是非常常见的。有时候需要将一个视图包裹在自定义的容器中，以便在其他地方使用。</p>
<h2 id="自定义视图" tabindex="-1"><a class="header-anchor" href="#自定义视图" aria-hidden="true">#</a> 自定义视图</h2>
<p>可以通过继承 View 来创建自定义视图。下面是一个自定义视图的例子：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">CustomView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, World!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子创建了一个自定义的视图，名为 CustomView。这个视图的内容是一个简单的文本 &quot;Hello, World!&quot;。使用这个自定义视图，可以在你的视图层次结构中引用它。</p>
<h2 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器" aria-hidden="true">#</a> 自定义容器</h2>
<p>除了自定义视图，也可以创建自定义容器来包裹其他视图。这种情况下需要继承 View，并实现一个带有 @ViewBuilder 属性的 body 属性，这样可以让你器接受其他视图作为参数。下面是一个自定义容器的例子：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">CustomContainer</span><span class="token operator">&lt;</span><span class="token class-name">Content</span><span class="token punctuation">:</span> <span class="token class-name">View</span><span class="token operator">></span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> content<span class="token punctuation">:</span> <span class="token class-name">Content</span>
    
    <span class="token keyword">init</span><span class="token punctuation">(</span><span class="token attribute atrule">@ViewBuilder</span> content<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>content <span class="token operator">=</span> <span class="token function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            content
                <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>gray<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>white<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">cornerRadius</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子创建了一个自定义容器，名为 CustomContainer。这个容器的内容是一个或多个视图，这些视图将被包裹在 VStack 中，并添加了一些修饰符，例如内边距、背景颜色和圆角半径。你可以使用这个容器来包裹其他视图。<br></p>
<p>可以这样使用这个自定义容器：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">CustomContainer</span> <span class="token punctuation">{</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, World!"</span></span><span class="token punctuation">)</span>
    <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Click Me"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Button clicked!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将会创建一个 CustomContainer，将 Text 和 Button 包裹在其中。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>SwiftUI 中，自定义视图和容器是非常常见的。可以使用继承 View 的方式创建自定义视图，并使用 @ViewBuilder 属性创建自定义容器。这样可以让视图层次结构中引用自定义的视图和容器。</p>
</div></template>


