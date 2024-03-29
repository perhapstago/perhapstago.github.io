<template><div><h1 id="_06-布局" tabindex="-1"><a class="header-anchor" href="#_06-布局" aria-hidden="true">#</a> 06.布局</h1>
<p>在 SwiftUI 中，布局是通过在视图层次结构中嵌套视图来完成的。您可以使用各种视图类型和布局修饰符来控制视图的位置和大小。</p>
<h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局" aria-hidden="true">#</a> 布局</h2>
<p>SwiftUI 提供了许多布局视图类型，例如 HStack、VStack、ZStack 和 Spacer。这些视图类型用于创建水平、垂直和层叠布局。</p>
<h3 id="hstack" tabindex="-1"><a class="header-anchor" href="#hstack" aria-hidden="true">#</a> HStack</h3>
<p>HStack 用于创建水平布局。在 HStack 中添加的视图将按水平方向排列。可以使用 spacing 参数设置每个子视图之间的距离。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">HStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>center<span class="token punctuation">,</span> spacing<span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello"</span></span><span class="token punctuation">)</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"World"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个水平布局，其中包含两个文本视图，它们之间的距离为 20。</p>
<h3 id="vstack" tabindex="-1"><a class="header-anchor" href="#vstack" aria-hidden="true">#</a> VStack</h3>
<p>VStack 用于创建垂直布局。在 VStack 中添加的视图将按垂直方向排列。可以使用 spacing 参数设置每个子视图之间的距离。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">,</span> spacing<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Line 1"</span></span><span class="token punctuation">)</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Line 2"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个垂直布局，其中包含两个文本视图，它们之间的距离为 10。</p>
<h3 id="zstack" tabindex="-1"><a class="header-anchor" href="#zstack" aria-hidden="true">#</a> ZStack</h3>
<p>ZStack 用于创建层叠布局。在 ZStack 中添加的视图将按添加的顺序显示。最后添加的视图将出现在最上面。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">ZStack</span> <span class="token punctuation">{</span>
    <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">)</span>

    <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>green<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">80</span><span class="token punctuation">)</span>

    <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>blue<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个层叠布局，其中包含三个矩形视图。最后添加的矩形视图将位于最上面。</p>
<h2 id="布局修饰符" tabindex="-1"><a class="header-anchor" href="#布局修饰符" aria-hidden="true">#</a> 布局修饰符</h2>
<p>SwiftUI 还提供了许多布局修饰符，可以用于更改视图的大小、位置和外观。</p>
<h3 id="frame" tabindex="-1"><a class="header-anchor" href="#frame" aria-hidden="true">#</a> frame</h3>
<p>frame 修饰符用于设置视图的大小和位置。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个大小为 200x50 的文本视图。</p>
<h3 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h3>
<p>padding 修饰符用于添加填充到视图周围。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个文本视图，其周围有默认填充。</p>
<h3 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> background</h3>
<p>background 修饰符用于添加背景到视图中。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">background</span><span class="token punctuation">(</span><span class="token class-name">Color</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码创建了一个红色背景的文本视图。</p>
</div></template>


