<template><div><h1 id="weak-self、unowned-self" tabindex="-1"><a class="header-anchor" href="#weak-self、unowned-self" aria-hidden="true">#</a> weak self、unowned self</h1>
<p>Swift中weak self and unowned self的很难理解。虽然自动引用计数（ARC）已经为解决了很多问题，但当不处理值类型时，我们仍然需要管理引用。
在编写闭包等内容时经常会遇到情况，这些情况要求我们细致考虑。</p>
<h2 id="arc、retain、release" tabindex="-1"><a class="header-anchor" href="#arc、retain、release" aria-hidden="true">#</a> ARC、retain、release</h2>
<p>在ARC之前，我们必须手动管理内存和引用。这引起了许多出错和麻烦，许多开发人员可能会知道。当新实例retain对象时，引用计数会上升，而一旦引用被realease，引用计数就会下降。一旦没有对对象的引用，内存就会被释放，这意味着不再需要该对象。</p>
<p>在Swift中需要使用 weak self 和 unowned self来向ARC提供代码中关系之间的必要信息。在不使用 weak 和 unowned的情况下，基本上是在告诉ARC需要一定的“强引用”，并且正在防止引用计数变为零。如果不正确使用这些关键字，我们可能会保留内存，这可能会导致应用程序内存泄漏。如果weak 和 unowned未正确使用，所谓的循环引用也可能发生。</p>
<blockquote>
<p>引用计数仅适用于类实例。结构体和枚举是值类型，而不是引用类型，并且不通过引用存储和传递。</p>
</blockquote>
<h2 id="何时使用-weak-self" tabindex="-1"><a class="header-anchor" href="#何时使用-weak-self" aria-hidden="true">#</a> 何时使用 weak self</h2>
<p>首先，弱引用总是被声明为可选变量，因为当其引用被解除分配时，ARC可以自动将其设置为nil。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span>
    <span class="token keyword">var</span> owner<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Blog </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is being deinitialized"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Blogger</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> blog<span class="token punctuation">:</span> <span class="token class-name">Blog</span><span class="token operator">?</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Blogger </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is being deinitialized"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一旦这些类中的任何一个被deinit，就会打印出一条消息。在下面的代码示例中将两个实例定义为可选的选项，方法是将它们设置为nil。实际上并没生打印两份声明：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> blog<span class="token punctuation">:</span> <span class="token class-name">Blog</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blog</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google"</span></span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"www.google.com"</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> blogger<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blogger</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google author"</span></span><span class="token punctuation">)</span>

blog<span class="token operator">!</span><span class="token punctuation">.</span>owner <span class="token operator">=</span> blogger
blogger<span class="token operator">!</span><span class="token punctuation">.</span>blog <span class="token operator">=</span> blog

blog <span class="token operator">=</span> <span class="token nil constant">nil</span>
blogger <span class="token operator">=</span> <span class="token nil constant">nil</span>

<span class="token comment">// Nothing is printed</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这产生了循环引用。blog强引用其所有者，不会被释放。与此同时，所有者不愿意释放blog。blog不会释放其所有者，其所有者保留其blog，该所有者保留自己......这是无限循环：循环引用。</p>
<p>因此需要引入一个弱引用。在这个例子中，只需要一个弱引用，因为这已经打破了循环。例如可以从blog向其所有者设置一个弱引用：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span>
    <span class="token keyword">weak</span> <span class="token keyword">var</span> owner<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Blog </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is being deinitialized"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Blogger</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> blog<span class="token punctuation">:</span> <span class="token class-name">Blog</span><span class="token operator">?</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Blogger </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is being deinitialized"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> blog<span class="token punctuation">:</span> <span class="token class-name">Blog</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blog</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google"</span></span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"www.google.com"</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> blogger<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blogger</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google author"</span></span><span class="token punctuation">)</span>

blog<span class="token operator">!</span><span class="token punctuation">.</span>owner <span class="token operator">=</span> blogger
blogger<span class="token operator">!</span><span class="token punctuation">.</span>blog <span class="token operator">=</span> blog

blog <span class="token operator">=</span> <span class="token nil constant">nil</span>
blogger <span class="token operator">=</span> <span class="token nil constant">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这不是weak self的例子。然而，它确实解释了这种情况！</p>
<p>对许多人来说，最好的做法是始终使用weak与self内部闭合相结合以避免循环引用。然而，只有当self也持有closure时，才需要这样做。通过默认添加weak，可能最终在许多情况下使用可选类型，而实际上不需要。</p>
<p>在本例中通过手动添加延迟来“伪造”网络请求：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Post</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> isPublished<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span>
    <span class="token keyword">weak</span> <span class="token keyword">var</span> owner<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span>

    <span class="token keyword">var</span> publishedPosts<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span> <span class="token keyword">self</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Blog </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is being deinitialized"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">publish</span><span class="token punctuation">(</span>post<span class="token punctuation">:</span> <span class="token class-name">Post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/// Faking a network request with this delay:</span>
        <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">asyncAfter</span><span class="token punctuation">(</span>deadline<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Published post count is now: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token keyword">self</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> blog<span class="token punctuation">:</span> <span class="token class-name">Blog</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blog</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google"</span></span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"www.google.com"</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> blogger<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blogger</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google author"</span></span><span class="token punctuation">)</span>

blog<span class="token operator">!</span><span class="token punctuation">.</span>owner <span class="token operator">=</span> blogger
blogger<span class="token operator">!</span><span class="token punctuation">.</span>blog <span class="token operator">=</span> blog

blog<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span>post<span class="token punctuation">:</span> <span class="token class-name">Post</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Explaining weak and unowned self"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
blog <span class="token operator">=</span> <span class="token nil constant">nil</span>
blogger <span class="token operator">=</span> <span class="token nil constant">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将打印出以下内容：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token comment">// google author is being deinitialized</span>
<span class="token comment">// Published post count is now: 1</span>
<span class="token comment">// Blog google is being deinitialized</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到请求在blog publish之前就完成了。强引用使能够完成发布，并将帖子保存到发布的帖子中。</p>
<p>如果要将发布方法更改为包含弱引用：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">publish</span><span class="token punctuation">(</span>post<span class="token punctuation">:</span> <span class="token class-name">Post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/// Faking a network request with this delay:</span>
    <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">asyncAfter</span><span class="token punctuation">(</span>deadline<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">weak</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
        <span class="token keyword">self</span><span class="token operator">?</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Published post count is now: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token keyword">self</span><span class="token operator">?</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将得到以下输出：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token comment">// google author is being deinitialized</span>
<span class="token comment">// Blog google is being deinitialized</span>
<span class="token comment">// Published post count is now: nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于博客在发布请求完成之前就已经发布，我们将永远无法更新我们本地发布帖子的状态。
因此，如果在关闭执行后立即对引用实例进行工作，请确保不要使用weak self。</p>
<h2 id="弱引用、循环引用" tabindex="-1"><a class="header-anchor" href="#弱引用、循环引用" aria-hidden="true">#</a> 弱引用、循环引用</h2>
<p>一旦closure持有self，self持有closure，就会发生循环引用。
如果有一个包含onPublish闭包的变量，这种情况可能会发生：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Blog</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span>
    <span class="token keyword">weak</span> <span class="token keyword">var</span> owner<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span>

    <span class="token keyword">var</span> publishedPosts<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">var</span> onPublish<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> post<span class="token punctuation">:</span> <span class="token class-name">Post</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Void</span><span class="token punctuation">)</span><span class="token operator">?</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token constant">URL</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
        <span class="token keyword">self</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url

        <span class="token comment">// Adding a closure instead to handle published posts</span>
        onPublish <span class="token operator">=</span> <span class="token punctuation">{</span> post <span class="token keyword">in</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Published post count is now: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token keyword">self</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">deinit</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Blog </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> is being deinitialized"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">publish</span><span class="token punctuation">(</span>post<span class="token punctuation">:</span> <span class="token class-name">Post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/// Faking a network request with this delay:</span>
        <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">asyncAfter</span><span class="token punctuation">(</span>deadline<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>onPublish<span class="token operator">?</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> blog<span class="token punctuation">:</span> <span class="token class-name">Blog</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blog</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google"</span></span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"www.google.com"</span></span><span class="token punctuation">)</span><span class="token operator">!</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> blogger<span class="token punctuation">:</span> <span class="token class-name">Blogger</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token class-name">Blogger</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"google author"</span></span><span class="token punctuation">)</span>

blog<span class="token operator">!</span><span class="token punctuation">.</span>owner <span class="token operator">=</span> blogger
blogger<span class="token operator">!</span><span class="token punctuation">.</span>blog <span class="token operator">=</span> blog

blog<span class="token operator">!</span><span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span>post<span class="token punctuation">:</span> <span class="token class-name">Post</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Explaining weak and unowned self"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
blog <span class="token operator">=</span> <span class="token nil constant">nil</span>
blogger <span class="token operator">=</span> <span class="token nil constant">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>closure持有博客，而博客持有closure。这会导致以下内容被打印出来：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token comment">// google author is being deinitialized</span>
<span class="token comment">// Published post count is now: 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>没有看到blog和publisher被去初始化。这是因为循环引用导致内存无法释放。</p>
<p>在onPublish方法中为博客实例添加一个弱引用解决了我们的保留周期：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>onPublish <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">weak</span> <span class="token keyword">self</span><span class="token punctuation">]</span> post <span class="token keyword">in</span>
    <span class="token keyword">self</span><span class="token operator">?</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>post<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Published post count is now: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation"><span class="token keyword">self</span><span class="token operator">?</span><span class="token punctuation">.</span>publishedPosts<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并产生以下输出：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token comment">// google author is being deinitialized</span>
<span class="token comment">// Published post count is now: Optional(1)</span>
<span class="token comment">// google is being deinitialized</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不再循环引用；当ARC将弱引用设置为nil，不会调用属性观察者。</p>
<h2 id="何时使用-unowned-self" tabindex="-1"><a class="header-anchor" href="#何时使用-unowned-self" aria-hidden="true">#</a> 何时使用 unowned self</h2>
<p>与弱引用不同，在使用unowned引用时，引用不会变成可选的。尽管如此，unowned 和 weak都不会产生强引用。
<br>
引自苹果文档：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>每当弱引用在其生命周期的某个时间点变为零时，就使用弱引用。相反，当您知道在初始化期间设置引用后，该引用将永远不会为零时，请使用<span class="token keyword">unowned</span>的引用。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般来说，使用unowned时要非常小心。可能是正在访问一个不存在的实例导致崩溃。使用unowned而不是weak的唯一好处是，不必处理可选的。因此，在这些情况下，使用unowned总是更安全。</p>
<h2 id="为什么不需要结构体这样的值类型" tabindex="-1"><a class="header-anchor" href="#为什么不需要结构体这样的值类型" aria-hidden="true">#</a> 为什么不需要结构体这样的值类型？</h2>
<p>在Swift中有值类型和引用类型。因为对于引用类型实际上有个引用需要处理。这意味着需要将这种关系管理为强、弱或unowned。相反，值类型保留了其数据的唯一副本，唯一的实例。这意味着没有必要在多线程环境中使用弱引用，因为没有引用，而是正在处理的唯一副本。</p>
<h2 id="weak和unowned只与inside-closures一起使用吗" tabindex="-1"><a class="header-anchor" href="#weak和unowned只与inside-closures一起使用吗" aria-hidden="true">#</a> weak和unowned只与inside closures一起使用吗？</h2>
<p>不，只要是引用类型就可以指示任何属性或变量声明weak或unowned。因此这也可以起作用：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token function">download</span><span class="token punctuation">(</span>imageURL<span class="token punctuation">,</span> completion<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">weak</span> imageViewController<span class="token punctuation">]</span> result <span class="token keyword">in</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>甚至可以引用多个实例，因为是一个数组：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token function">download</span><span class="token punctuation">(</span>imageURL<span class="token punctuation">,</span> completion<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">weak</span> imageViewController<span class="token punctuation">,</span> <span class="token keyword">weak</span> imageFinalizer<span class="token punctuation">]</span> result <span class="token keyword">in</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


