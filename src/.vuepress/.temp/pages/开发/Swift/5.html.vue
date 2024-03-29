<template><div><h1 id="as-as-as" tabindex="-1"><a class="header-anchor" href="#as-as-as" aria-hidden="true">#</a> as，as?，as!</h1>
<p>下面第二行代码具有运行时错误：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token number">8</span> <span class="token keyword">as</span> <span class="token class-name">Double</span> <span class="token comment">// fine</span>
<span class="token number">8</span> <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">Double</span> <span class="token comment">// crashes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as-和as-是运行时操作" tabindex="-1"><a class="header-anchor" href="#as-和as-是运行时操作" aria-hidden="true">#</a> as?和as!是运行时操作</h2>
<p>as?和as!在运行时转型。程序运行时，示例中的表达式8已被分配为Int类型。因此，转换为Double失败，因为Double和Int是无关的类，Swift通常避免数字类型之间的隐式转换。
如果使用as?而不是as！，编译器将正确地检测到无用的强制转换：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token number">8</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Double</span> <span class="token comment">// warning: Conditional downcast from literal to 'Double'</span>
             <span class="token comment">// always fails; consider using 'as' coercion</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>as?和as!是相同的操作，唯一的区别是as!强制解包其结果。这两行是等价的：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>x <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">Y</span>
<span class="token punctuation">(</span>x <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Y</span><span class="token punctuation">)</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="as编译时执行类型强制" tabindex="-1"><a class="header-anchor" href="#as编译时执行类型强制" aria-hidden="true">#</a> as编译时执行类型强制</h2>
<p>文字没有固有的类型：表达式4可以成为实现ExpressibleByIntegerLiteral协议的任何类型。
… as Double指示编译器使用Double符合性，就像任何其他隐式或显式类型注释一样。这两行是等价的：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">4</span> <span class="token keyword">as</span> <span class="token class-name">Double</span>
<span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token class-name">Double</span> <span class="token operator">=</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="在模式匹配中-as运行时操作一样" tabindex="-1"><a class="header-anchor" href="#在模式匹配中-as运行时操作一样" aria-hidden="true">#</a> 在模式匹配中，as运行时操作一样</h2>
<p>在模式匹配上下文中使用时，检查在运行时执行。示例：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> value<span class="token punctuation">:</span> <span class="token keyword">Any</span> <span class="token operator">=</span> …
<span class="token keyword">switch</span> value <span class="token punctuation">{</span>
<span class="token keyword">case</span> <span class="token keyword">let</span> i <span class="token keyword">as</span> <span class="token class-name">Int</span><span class="token punctuation">:</span> …
<span class="token keyword">case</span> <span class="token keyword">let</span> s <span class="token keyword">as</span> <span class="token class-name">String</span><span class="token punctuation">:</span> …
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对比举例" tabindex="-1"><a class="header-anchor" href="#对比举例" aria-hidden="true">#</a> 对比举例</h2>
<p>as、as?、as!和is都是Swift中用于类型转换和检查的关键词。</p>
<ul>
<li>as</li>
</ul>
<p>as用于在编译时将一个类型强制转换为另一个类型，如果强制转换失败，则会在编译时报错。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> x<span class="token punctuation">:</span> <span class="token class-name">Double</span> <span class="token operator">=</span> <span class="token number">4</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> x <span class="token keyword">as</span> <span class="token class-name">Int</span> <span class="token comment">// 编译时报错，因为Double不能直接强制转换为Int</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>as?</li>
</ul>
<p>as?和as!都是运行时类型转换。它们用于将一个类型转换为另一个类型，并且如果转换失败，将返回nil或触发运行时错误。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello, World!"</span></span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Double</span> <span class="token comment">// nil，因为无法将String类型转换为Double类型</span>

<span class="token keyword">let</span> anyValue<span class="token punctuation">:</span> <span class="token keyword">Any</span> <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">let</span> intVal <span class="token operator">=</span> anyValue <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">Int</span> <span class="token comment">// 正确，因为Any值可以强制转换为任何类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>as!</li>
</ul>
<p>as?和as!在执行类型转换时的作用相同，唯一的区别是as!会强制解包结果</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> optionalNum<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token number">42</span>
<span class="token keyword">let</span> unwrappedNum <span class="token operator">=</span> optionalNum <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">Int</span> <span class="token comment">// 强制解包，返回42</span>

<span class="token keyword">let</span> optionalStr<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
<span class="token keyword">let</span> unwrappedStr <span class="token operator">=</span> optionalStr <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">String</span> <span class="token comment">// 触发运行时错误，因为无法将nil转换为String类型</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>is</li>
</ul>
<p>is关键字用于检查一个对象是否符合某个特定的类型，返回一个布尔值。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> value<span class="token punctuation">:</span> <span class="token keyword">Any</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello, World!"</span></span>
<span class="token keyword">if</span> value <span class="token keyword">is</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"value is a String"</span></span><span class="token punctuation">)</span> <span class="token comment">// 打印"value is a String"</span>
<span class="token punctuation">}</span>
<span class="token keyword">if</span> value <span class="token keyword">is</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"value is an Int"</span></span><span class="token punctuation">)</span> <span class="token comment">// 不会执行，因为value不是Int类型</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


