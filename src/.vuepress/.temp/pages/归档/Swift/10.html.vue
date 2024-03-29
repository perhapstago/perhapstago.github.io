<template><div><h1 id="swiftlint-基本用法" tabindex="-1"><a class="header-anchor" href="#swiftlint-基本用法" aria-hidden="true">#</a> SwiftLint 基本用法</h1>
<p>SwiftLint是Realm强制执行Swift风格和惯例的工具。在Github上拥有超过1万颗星的开发人员所采用。默认情况下，其启用了很多规则。这里讨论一些默认情况下未启用的有价值的规则。</p>
<h2 id="convenience" tabindex="-1"><a class="header-anchor" href="#convenience" aria-hidden="true">#</a> convenience</h2>
<p>通过使用无大小写枚举仅托管静态成员来避免实例化：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">enum</span> <span class="token class-name">Math</span> <span class="token punctuation">{</span> <span class="token comment">// enum</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">let</span> pi <span class="token operator">=</span> <span class="token number">3.14</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空数量" tabindex="-1"><a class="header-anchor" href="#空数量" aria-hidden="true">#</a> 空数量</h2>
<p>这条规则可能会提高性能，特别是对大型集合进行迭代。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token punctuation">[</span><span class="token class-name">Int</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isEmpty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="空字符串" tabindex="-1"><a class="header-anchor" href="#空字符串" aria-hidden="true">#</a> 空字符串</h2>
<p>使用isEmpty避免实例化空字符串：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>myString<span class="token punctuation">.</span>isEmpty
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="fatalerror" tabindex="-1"><a class="header-anchor" href="#fatalerror" aria-hidden="true">#</a> fatalError</h2>
<p>fatalError通常用于防止无效状态并帮助调试代码。通过在正文中强制执行消息，fatalError最有可能更容易理解。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"This method is unsupported, use init() instead"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="first-where" tabindex="-1"><a class="header-anchor" href="#first-where" aria-hidden="true">#</a> first(where:)</h2>
<p>通过在集合中使用.first(where:)而不是.filter { }.first来提高性能，以防止在整个集合上迭代。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>myNumbers<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token keyword">where</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token short-argument">$0</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文件名称" tabindex="-1"><a class="header-anchor" href="#文件名称" aria-hidden="true">#</a> 文件名称</h2>
<p>项目内部的可读性对导航很重要，并且更容易将项目移交给同事。当文件系统与类不同步时，效率会低得多。此规则强制拥有与文件中定义的类相同的文件名。</p>
<h2 id="修改器顺序" tabindex="-1"><a class="header-anchor" href="#修改器顺序" aria-hidden="true">#</a> 修改器顺序</h2>
<p>整个项目的一致性提高了整体的可读性。该规则通过要求在public之前override、在final之前public等来强制执行修饰符的顺序。</p>
<h2 id="禁止xib" tabindex="-1"><a class="header-anchor" href="#禁止xib" aria-hidden="true">#</a> 禁止Xib</h2>
<p>如果决定不使用界面构建器，不允许使用@IBOutlet和@IBAction。</p>
<h2 id="未使用的私人声明" tabindex="-1"><a class="header-anchor" href="#未使用的私人声明" aria-hidden="true">#</a> 未使用的私人声明</h2>
<p>保持代码库干净很重要。此规则防止未使用的私人声明，并允许删除未使用的代码。</p>
<h2 id="其他规则" tabindex="-1"><a class="header-anchor" href="#其他规则" aria-hidden="true">#</a> 其他规则</h2>
<p>所有规则的列表都可以在<a href="https://github.com/realm/SwiftLint/blob/main/Rules.md#unused-private-declaration" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a>中找到</p>
</div></template>


