<template><div><h1 id="defer" tabindex="-1"><a class="header-anchor" href="#defer" aria-hidden="true">#</a> defer</h1>
<p>defer关键字在Swift 2.0中引入，但在项目中仍然很少使用。</p>
<h2 id="defer语句" tabindex="-1"><a class="header-anchor" href="#defer语句" aria-hidden="true">#</a> defer语句</h2>
<p>defer语句用于在将程序控制转移到语句出现的范围之外之前执行代码。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">updateImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Did update image"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Will update image"</span></span><span class="token punctuation">)</span>
    imageView<span class="token punctuation">.</span>image <span class="token operator">=</span> updatedImage
<span class="token punctuation">}</span>

<span class="token comment">// Will update Image</span>
<span class="token comment">// Did update image</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="多个defer语句的执行顺序" tabindex="-1"><a class="header-anchor" href="#多个defer语句的执行顺序" aria-hidden="true">#</a> 多个defer语句的执行顺序</h2>
<p>如果多个语句出现在同一范围内，出现的顺序与执行顺序相反。最后定义的语句是第一个要执行的语句：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">printStringNumbers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"1"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"2"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    <span class="token keyword">defer</span> <span class="token punctuation">{</span> <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"3"</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"4"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/// Prints 4, 3, 2, 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见的用例" tabindex="-1"><a class="header-anchor" href="#常见的用例" aria-hidden="true">#</a> 常见的用例</h2>
<p>最常见的用例是打开和关闭上下文，例如在处理文件访问时。访问完成后，需要关闭FileHandle。可以从推迟声明中受益，以确保不会忘记这样做：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">writeFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> file<span class="token punctuation">:</span> <span class="token class-name">FileHandle</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">FileHandle</span><span class="token punctuation">(</span>forReadingAtPath<span class="token punctuation">:</span> filepath<span class="token punctuation">)</span>
    <span class="token keyword">defer</span> <span class="token punctuation">{</span> file<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">closeFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>

    <span class="token comment">// Write changes to the file</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="确保回调" tabindex="-1"><a class="header-anchor" href="#确保回调" aria-hidden="true">#</a> 确保回调</h2>
<p>该语句的更高级用法是确保在完成回调中返回结果值。这非常方便，因为很容易忘记触发此回调。
确保始终执行完成处理程序，并验证结果值。每当结果值为nil，就会抛出致命错误，应用程序就会失败。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">getData</span><span class="token punctuation">(</span>completion<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token omit keyword">_</span> result<span class="token punctuation">:</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> result<span class="token punctuation">:</span> <span class="token class-name">Result</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">>?</span>

    <span class="token keyword">defer</span> <span class="token punctuation">{</span>
        <span class="token keyword">guard</span> <span class="token keyword">let</span> result <span class="token operator">=</span> result <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"We should always end with a result"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">completion</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Generate the result..</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


