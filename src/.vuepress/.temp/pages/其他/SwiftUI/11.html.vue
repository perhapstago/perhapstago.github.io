<template><div><h1 id="_11-容器视图" tabindex="-1"><a class="header-anchor" href="#_11-容器视图" aria-hidden="true">#</a> 11.容器视图</h1>
<p>容器视图是 SwiftUI 中的一个重要组成部分，它们用于组合和管理其他视图，从而创建出复杂的用户界面。</p>
<h2 id="常见的容器视图" tabindex="-1"><a class="header-anchor" href="#常见的容器视图" aria-hidden="true">#</a> 常见的容器视图</h2>
<p>SwiftUI 中有很多种容器视图，每种容器视图都有不同的用途和特点。下面是一些常见的容器视图：</p>
<h3 id="vstack-和-hstack" tabindex="-1"><a class="header-anchor" href="#vstack-和-hstack" aria-hidden="true">#</a> VStack 和 HStack</h3>
<p>VStack 和 HStack 都用于将多个视图按垂直或水平方向排列。VStack 将视图从上到下排列，而 HStack 将视图从左到右排列。这两种容器视图都支持对子视图的对齐方式、间距、填充等样式的设置。</p>
<h3 id="zstack" tabindex="-1"><a class="header-anchor" href="#zstack" aria-hidden="true">#</a> ZStack</h3>
<p>ZStack 用于将多个视图按照层叠顺序进行排列，前面的视图会被后面的视图覆盖。ZStack 中的视图可以在三维空间中进行变换和旋转，从而实现更加复杂的效果。</p>
<h3 id="scrollview" tabindex="-1"><a class="header-anchor" href="#scrollview" aria-hidden="true">#</a> ScrollView</h3>
<p>ScrollView 用于显示可以滚动的内容，例如列表、文本和图像等。ScrollView 可以嵌套在其他容器视图中，从而实现复杂的滚动效果。</p>
<h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h3>
<p>List 用于显示大量的列表内容，例如联系人列表、电影列表等。List 支持多种不同的样式和选项，例如可编辑、可删减、可移动等。</p>
<h3 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form</h3>
<p>Form 用于显示表单内容，例如注册表单、设置表单等。Form 支持多种不同的样式和选项，例如分组、可编辑、可移动等。</p>
<h2 id="如何使用容器视图" tabindex="-1"><a class="header-anchor" href="#如何使用容器视图" aria-hidden="true">#</a> 如何使用容器视图</h2>
<p>使用容器视图的方法非常简单，只需要按照以下步骤进行操作即可：</p>
<ol>
<li>创建需要显示的子视图，例如 Text、Image 等；</li>
<li>使用容器视图将子视图进行组合，例如 VStack、HStack、ZStack 等；</li>
<li>设置容器视图的样式和选项，例如对齐方式、间距、填充等。
下面是一个简单的例子，演示了如何使用 VStack 和 Text 创建一个简单的垂直文本布局：</li>
</ol>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">,</span> spacing<span class="token punctuation">:</span> <span class="token number">16</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, SwiftUI!"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>largeTitle<span class="token punctuation">)</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Welcome to my blog."</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>title<span class="token punctuation">)</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"This is a demo of VStack and Text."</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


