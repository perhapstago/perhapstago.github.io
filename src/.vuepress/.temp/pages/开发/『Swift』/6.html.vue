<template><div><h1 id="equatable" tabindex="-1"><a class="header-anchor" href="#equatable" aria-hidden="true">#</a> Equatable</h1>
<p>检查两个对象或值是否被视为相等，这绝对是所有编程中最常见的操作之一。
Swift实现相等的一个最有趣的方面是它都是以一种面向协议的方式完成的——任何类型都可以通过遵守Equatable协议而变得等效，协议可以这样做：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Article</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">==</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token keyword">Self</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token keyword">Self</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        lhs<span class="token punctuation">.</span>title <span class="token operator">==</span> rhs<span class="token punctuation">.</span>title <span class="token operator">&amp;&amp;</span> lhs<span class="token punctuation">.</span>body <span class="token operator">==</span> rhs<span class="token punctuation">.</span>body
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>符合Equatable的方式是实现==运算符的过载，该运算符接受两个值进行比较（lhs，左侧值和rhs，右侧值），然后返回一个布尔结果，说明这两个值是否应被视为相等。</p>
<p>通常不必自己编写这些==运算符重载，因为每当类型的存储属性本身都是Equatable，编译器就能够自动合成此类实现。因此，在上述Article类型的情况下，实际上可以删除手动相等检查代码，并简单地使该类型看起来像这样：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Article</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Swift的等式检查面向协议，在处理通用类型时也一样。例如，Equatable符合值的集合（如Array或Set）也自动被视为等价的——不需要任何额外的代码：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> latestArticles <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">Article</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Writing testable code when using SwiftUI"</span></span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Combining protocols in Swift"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token keyword">let</span> basicsArticles <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Loops"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Availability checks"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">]</span>

<span class="token keyword">if</span> latestArticles <span class="token operator">==</span> basicsArticles <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些类型的集合等式检查是通过Swift的条件一致性功能，该功能仅在满足特定条件时才允许类型符合特定协议。
例如，只有当存储在给定数组中的元素反过来也符合EquatableSwift的Array类型才符合Equatable——这使能够检查两个Article数组是否被认为是相等的：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token keyword">where</span> <span class="token class-name">Element</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于上述逻辑都没有硬编码到编译器本身中，如果也想使自己的通用类型有条件等价，我们也可以使用完全相同的基于条件一致性的技术。例如，我们的代码库可能包括某种形式的Group类型，可用于标记一组相关值：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Group</span><span class="token operator">&lt;</span><span class="token class-name">Value</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> label<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> values<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Value</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了使该组类型在用于存储Equatable值时符合Equatable，只需编写以下空扩展，它看起来与我们上面查看的Array扩展几乎相同：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Group</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token keyword">where</span> <span class="token class-name">Value</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有了上述内容，我们现在可以检查两个基于Article的Group值是否相等，就像我们使用数组时一样：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> latestArticles <span class="token operator">=</span> <span class="token class-name">Group</span><span class="token punctuation">(</span>
    label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Latest"</span></span><span class="token punctuation">,</span>
    values<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">Article</span><span class="token punctuation">(</span>
            title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Writing testable code when using SwiftUI"</span></span><span class="token punctuation">,</span>
            body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span>
        <span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Combining protocols in Swift"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token keyword">let</span> basicsArticles <span class="token operator">=</span> <span class="token class-name">Group</span><span class="token punctuation">(</span>
    label<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Basics"</span></span><span class="token punctuation">,</span>
    values<span class="token punctuation">:</span> <span class="token punctuation">[</span>
        <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Loops"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Availability checks"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token keyword">if</span> latestArticles <span class="token operator">==</span> basicsArticles <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>就像集合一样，每当Swift元组的存储值遵守Equatable时，也可以检查其相等：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> latestArticles <span class="token operator">=</span> <span class="token punctuation">(</span>
    first<span class="token punctuation">:</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>
        title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Writing testable code when using SwiftUI"</span></span><span class="token punctuation">,</span>
        body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    second<span class="token punctuation">:</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Combining protocols in Swift"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">let</span> basicsArticles <span class="token operator">=</span> <span class="token punctuation">(</span>
    first<span class="token punctuation">:</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Loops"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    second<span class="token punctuation">:</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Availability checks"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"..."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">if</span> latestArticles <span class="token operator">==</span> basicsArticles <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，包含上述等价元组的集合不会自动遵守Equatable。因此，如果把上述两个元组放入两个相同的数组中，那么它们将不会被认为是等价的：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> firstArray <span class="token operator">=</span> <span class="token punctuation">[</span>latestArticles<span class="token punctuation">,</span> basicsArticles<span class="token punctuation">]</span>
<span class="token keyword">let</span> secondArray <span class="token operator">=</span> <span class="token punctuation">[</span>latestArticles<span class="token punctuation">,</span> basicsArticles<span class="token punctuation">]</span>

<span class="token comment">// Compiler error: Type '(first: Article, second: Article)'</span>
<span class="token comment">// cannot conform to 'Equatable':</span>
<span class="token keyword">if</span> firstArray <span class="token operator">==</span> secondArray <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述内容之所以不起作用，是因为—元组不能符合协议，这意味着之前查看扩展不会生效。
因此，如果我们要添加另一个自定义==重载，特别是对于包含等价双元素元组的数组，那么上述代码示例实际上将成功编译：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Array</span> <span class="token punctuation">{</span>
    <span class="token comment">// This '==' overload will be used specifically when two</span>
    <span class="token comment">// arrays containing two-element tuples are being compared:</span>
    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">==&lt;</span><span class="token class-name">A</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span><span class="token operator">></span><span class="token punctuation">(</span>
        lhs<span class="token punctuation">:</span> <span class="token keyword">Self</span><span class="token punctuation">,</span>
        rhs<span class="token punctuation">:</span> <span class="token keyword">Self</span>
    <span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Bool</span> <span class="token keyword">where</span> <span class="token class-name">Element</span> <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// First, we verify that the two arrays that are being</span>
        <span class="token comment">// compared contain the same amount of elements:</span>
        <span class="token keyword">guard</span> lhs<span class="token punctuation">.</span>count <span class="token operator">==</span> rhs<span class="token punctuation">.</span>count <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// We then "zip" the two arrays, which will give us</span>
        <span class="token comment">// a collection where each element contains one element</span>
        <span class="token comment">// from each array, and we then check that each of those</span>
        <span class="token comment">// elements pass a standard equality check:</span>
        <span class="token keyword">return</span> <span class="token function">zip</span><span class="token punctuation">(</span>lhs<span class="token punctuation">,</span> rhs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">allSatisfy</span><span class="token punctuation">(</span><span class="token operator">==</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前为止，我们一直在关注值类型（如结构）的检查相等，但引用类型呢？例如，假设现在决定将之前Article结构变成一个类，这将如何影响其Equatable实现？</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Article</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span>
    
    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title
        <span class="token keyword">self</span><span class="token punctuation">.</span>body <span class="token operator">=</span> body
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行上述更改时，注意到的是编译器不再能够自动合成类型的Equatable一致性——因为该功能仅限于值类型。
因此，如果希望Article类型保持一个类，那么必须手动实现Equatable所需的==重载：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Article</span><span class="token punctuation">:</span> <span class="token class-name">Equatable</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">func</span> <span class="token operator">==</span><span class="token punctuation">(</span>lhs<span class="token punctuation">:</span> <span class="token class-name">Article</span><span class="token punctuation">,</span> rhs<span class="token punctuation">:</span> <span class="token class-name">Article</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    lhs<span class="token punctuation">.</span>title <span class="token operator">==</span> rhs<span class="token punctuation">.</span>title <span class="token operator">&amp;&amp;</span> lhs<span class="token punctuation">.</span>body <span class="token operator">==</span> rhs<span class="token punctuation">.</span>body
<span class="token punctuation">}</span>

    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title
        <span class="token keyword">self</span><span class="token punctuation">.</span>body <span class="token operator">=</span> body
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然而，任何类型的基于Objective-C的类的子类确实从NSObject继承了默认的Equatable实现。因此，如果要使Article类成为NSObject子类，那么实际上将成为Equatable，而不会严格要求实现自定义==重载：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Article</span><span class="token punctuation">:</span> <span class="token class-name">NSObject</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>title <span class="token operator">=</span> title
        <span class="token keyword">self</span><span class="token punctuation">.</span>body <span class="token operator">=</span> body
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>虽然使用上述子类技术来避免编写自定义等式检查代码可能很诱人，但重要的是要指出，默认的Objective-C-providedEquatable实现唯一能做的就是检查两个类是否是相同的实例，而不是它们是否包含相同的数据。因此，即使以下两个Article实例具有相同的title和body，但使用上述基于NSObject的方法时，它们不会被视为相等：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> articleA <span class="token operator">=</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Title"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Body"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> articleB <span class="token operator">=</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Title"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Body"</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span>articleA <span class="token operator">==</span> articleB<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，执行此类实例检查可能非常有用——因为有时可能希望能够检查两个基于类的引用是否指向相同的底层实例。然而，不需要从NSObject继承我们的类来做到这一点，因为可以使用Swift内置的三重等价运算符===，在任何两个引用之间执行这样的检查：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> articleA <span class="token operator">=</span> <span class="token class-name">Article</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Title"</span></span><span class="token punctuation">,</span> body<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Body"</span></span><span class="token punctuation">)</span>
<span class="token keyword">let</span> articleB <span class="token operator">=</span> articleA
<span class="token function">print</span><span class="token punctuation">(</span>articleA <span class="token operator">===</span> articleB<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


