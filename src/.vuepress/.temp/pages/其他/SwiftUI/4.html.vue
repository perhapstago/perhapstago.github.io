<template><div><h1 id="_04-状态管理和数据绑定" tabindex="-1"><a class="header-anchor" href="#_04-状态管理和数据绑定" aria-hidden="true">#</a> 04.状态管理和数据绑定</h1>
<p>在 Swift 和 Objective-C 中，我们使用代理和观察者模式来管理状态，但是在 SwiftUI 中，它引入了一种新的方法来管理状态 - 声明式数据流。</p>
<h2 id="状态管理" tabindex="-1"><a class="header-anchor" href="#状态管理" aria-hidden="true">#</a> 状态管理</h2>
<p>在 SwiftUI 中，状态是希望应用程序在运行时更改的值。例如，可以为颜色、大小、位置等设置状态。在 SwiftUI 中，状态管理非常简单，因为每当状态更改时，视图自动重新渲染。</p>
<p>使用 @State 属性包装器声明状态，例如：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> isOn <span class="token operator">=</span> <span class="token boolean">false</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Toggle</span><span class="token punctuation">(</span>isOn<span class="token punctuation">:</span> $isOn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Switch"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码，声明了一个名为 isOn 的状态，并将其初始值设置为 false。然后，我们使用 Toggle 视图来在 UI 中显示该状态，并使用 $isOn 绑定到状态变量。这样，每当开关的值更改时，状态值也会更改。</p>
<h2 id="数据绑定" tabindex="-1"><a class="header-anchor" href="#数据绑定" aria-hidden="true">#</a> 数据绑定</h2>
<p>在 SwiftUI 中，数据绑定指的是将数据与视图绑定在一起的能力。使用数据绑定，每当数据更改时，视图将自动更新以反映新的值。<br></p>
<p>您可以使用 @State 和 @Binding 属性包装器来进行数据绑定。在上面的示例中，我们已经使用了 @State 属性包装器，现在让我们看看如何使用 @Binding。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> isOn <span class="token operator">=</span> <span class="token boolean">false</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">ChildView</span><span class="token punctuation">(</span>isOn<span class="token punctuation">:</span> $isOn<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">ChildView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@Binding</span> <span class="token keyword">var</span> isOn<span class="token punctuation">:</span> <span class="token class-name">Bool</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Toggle</span><span class="token punctuation">(</span>isOn<span class="token punctuation">:</span> $isOn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Switch"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码，创建了一个名为 ChildView 的子视图，它具有一个名为 isOn 的绑定变量。然后，我们在父视图 ContentView 中创建了 ChildView 实例，并使用 $isOn 绑定到状态变量。现在，每当 ChildView 中的 Toggle 更改时，状态变量 isOn 也会更改。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<blockquote>
<p>在 SwiftUI 中，状态管理和数据绑定非常简单。使用 @State 属性包装器声明状态，并使用 $ 操作符将其绑定到视图中。使用 @Binding 属性包装器将状态从一个视图传递到另一个视图。当状态更改时，视图会自动更新以反映新的值，使您的应用程序更加动态和流畅。</p>
</blockquote>
</div></template>


