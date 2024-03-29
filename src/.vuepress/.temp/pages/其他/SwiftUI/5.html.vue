<template><div><h1 id="_05-基本视图类型" tabindex="-1"><a class="header-anchor" href="#_05-基本视图类型" aria-hidden="true">#</a> 05.基本视图类型</h1>
<p>SwiftUI 提供了许多不同的视图类型和功能，使开发者能够快速创建丰富的用户界面。</p>
<h2 id="text" tabindex="-1"><a class="header-anchor" href="#text" aria-hidden="true">#</a> Text</h2>
<p>Text 视图用于在应用程序中显示文本。可以通过在 Text 视图中传入字符串来设置文本内容，也可以在 Text 视图中使用格式化字符串。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
<span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"The current count is: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> Image</h2>
<p>Image 视图用于在应用程序中显示图像。可以使用 Image 视图来显示应用程序的图标、用户头像等。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"star.fill"</span></span><span class="token punctuation">)</span>
<span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"avatar"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> Button</h2>
<p>Button 视图用于在应用程序中创建可交互的按钮。可以在 Button 视图中设置标题和执行操作的闭包。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Click me"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Button tapped"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textfield" tabindex="-1"><a class="header-anchor" href="#textfield" aria-hidden="true">#</a> TextField</h2>
<p>TextField 视图用于在应用程序中创建文本输入框。可以在 TextField 视图中设置占位符、文本颜色、字体大小等属性。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Enter your name"</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="toggle" tabindex="-1"><a class="header-anchor" href="#toggle" aria-hidden="true">#</a> Toggle</h2>
<p>Toggle 视图用于在应用程序中创建开关按钮。可以在 Toggle 视图中设置标签和绑定开关状态的布尔值。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Enable push notifications"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $isPushEnabled<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="spacer" tabindex="-1"><a class="header-anchor" href="#spacer" aria-hidden="true">#</a> Spacer</h2>
<p>Spacer 视图用于在应用程序中创建可伸缩的空间，可以让其他视图在屏幕上居中或者填充屏幕。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">VStack</span> <span class="token punctuation">{</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello"</span></span><span class="token punctuation">)</span>
    <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"World"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>SwiftUI 提供了许多基本视图类型和功能，使开发者能够快速创建漂亮、高效的用户界面。</p>
</div></template>


