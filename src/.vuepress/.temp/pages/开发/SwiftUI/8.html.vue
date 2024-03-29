<template><div><h1 id="_08-基本动画类型" tabindex="-1"><a class="header-anchor" href="#_08-基本动画类型" aria-hidden="true">#</a> 08.基本动画类型</h1>
<p>在 SwiftUI 中，可以使用内置的动画来使应用程序更加生动和有趣。这些动画可以用于各种效果，例如渐变、缩放和旋转。</p>
<h2 id="动画类型" tabindex="-1"><a class="header-anchor" href="#动画类型" aria-hidden="true">#</a> 动画类型</h2>
<p>在 SwiftUI 中，有四种基本的动画类型：opacity、scale、offset 和 rotation。每种类型都有不同的动画选项，可以自定义动画的速度、时间和效果。</p>
<h3 id="opacity" tabindex="-1"><a class="header-anchor" href="#opacity" aria-hidden="true">#</a> Opacity</h3>
<p>Opacity 动画可以让视图透明度从 0 到 1 或从 1 到 0 的过程中产生渐变效果。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">opacity</span><span class="token punctuation">(</span>isHidden <span class="token operator">?</span> <span class="token number">0</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> Scale</h3>
<p>Scale 动画可以让视图在 X、Y 和 Z 轴上进行缩放。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">scaleEffect</span><span class="token punctuation">(</span>isScaled <span class="token operator">?</span> <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> Offset</h3>
<p>Offset 动画可以让视图在 X 和 Y 轴上移动。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">offset</span><span class="token punctuation">(</span>x<span class="token punctuation">:</span> isOffset <span class="token operator">?</span> <span class="token number">100</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> isOffset <span class="token operator">?</span> <span class="token number">100</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rotation" tabindex="-1"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> Rotation</h3>
<p>Rotation 动画可以让视图在 Z 轴上旋转。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">rotationEffect</span><span class="token punctuation">(</span><span class="token class-name">Angle</span><span class="token punctuation">(</span>degrees<span class="token punctuation">:</span> isRotated <span class="token operator">?</span> <span class="token number">180</span> <span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">.</span>easeInOut<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动画选项" tabindex="-1"><a class="header-anchor" href="#动画选项" aria-hidden="true">#</a> 动画选项</h2>
<p>在 SwiftUI 中可以使用许多动画选项来自定义动画的效果和时间。这些选项包括：</p>
<ul>
<li>.easeInOut：缓慢加速，然后缓慢减速。</li>
<li>.spring()：类似于弹簧效果的动画。</li>
<li>.linear：匀速动画。</li>
<li>.delay()：动画延迟执行。</li>
<li>.repeatForever()：无限重复动画。</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">scaleEffect</span><span class="token punctuation">(</span>isScaled <span class="token operator">?</span> <span class="token number">2</span> <span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token function">spring</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自定义动画" tabindex="-1"><a class="header-anchor" href="#自定义动画" aria-hidden="true">#</a> 自定义动画</h2>
<p>如果想要自定义动画效果可以使用 .animation() 修饰符和自定义动画函数。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">CustomAnimation</span><span class="token punctuation">:</span> <span class="token class-name">ViewModifier</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">body</span><span class="token punctuation">(</span>content<span class="token punctuation">:</span> <span class="token class-name">Content</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        content
            <span class="token punctuation">.</span><span class="token function">rotationEffect</span><span class="token punctuation">(</span><span class="token class-name">Angle</span><span class="token punctuation">(</span>degrees<span class="token punctuation">:</span> <span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">animation</span><span class="token punctuation">(</span><span class="token class-name">Animation</span><span class="token punctuation">.</span><span class="token function">linear</span><span class="token punctuation">(</span>duration<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span>autoreverses<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, world!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">modifier</span><span class="token punctuation">(</span><span class="token class-name">CustomAnimation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码将创建一个自定义的 ViewModifier，将动画旋转 360 度并无限重复。可以在 .animation() 中设置动画选项，如持续时间和重复次数。</p>
</div></template>


