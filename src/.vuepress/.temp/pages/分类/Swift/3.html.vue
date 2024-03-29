<template><div><h1 id="协议和扩展" tabindex="-1"><a class="header-anchor" href="#协议和扩展" aria-hidden="true">#</a> 协议和扩展</h1>
<h2 id="协议-protocol" tabindex="-1"><a class="header-anchor" href="#协议-protocol" aria-hidden="true">#</a> 协议 (Protocol)</h2>
<p>协议是一种描述某物必须具有的属性和方法的方式。告诉Swift哪些类型使用该协议——这个过程被称为采用协议。
编写一个函数来接受具有id属性的东西，但我们并不关心使用哪种类型的数据。
首先创建一个Identifiable协议，该协议将要求所有符合要求的类型都有一个可以读取（“get”）或写入（“set”）的id字符串：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">protocol</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个采用该协议的结构：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写一个接受任何Identifiable对象的displayID()函数：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">displayID</span><span class="token punctuation">(</span>thing<span class="token punctuation">:</span> <span class="token class-name">Identifiable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My ID is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">thing<span class="token punctuation">.</span>id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协议继承" tabindex="-1"><a class="header-anchor" href="#协议继承" aria-hidden="true">#</a> 协议继承</h2>
<p>一个协议可以从另一个协议继承。与类不同，可以同时继承多个协议。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">protocol</span> <span class="token class-name">Payable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">calculateWages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span>

<span class="token keyword">protocol</span> <span class="token class-name">NeedsTraining</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">study</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">protocol</span> <span class="token class-name">HasVacation</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">takeVacation</span><span class="token punctuation">(</span>days<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以创建一个单一Employee协议，将他们聚集在一个协议中。可以使新类型符合单一协议，而不是三个单独的协议。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">protocol</span> <span class="token class-name">Employee</span><span class="token punctuation">:</span> <span class="token class-name">Payable</span><span class="token punctuation">,</span> <span class="token class-name">NeedsTraining</span><span class="token punctuation">,</span> <span class="token class-name">HasVacation</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="扩展-extension" tabindex="-1"><a class="header-anchor" href="#扩展-extension" aria-hidden="true">#</a> 扩展 (Extension)</h2>
<p>扩展允许向现有类型添加方法，做最初不打算做的事情。
例如，为Int类型添加一个扩展，以便它有一个squared()方法，返回当前数字平方：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">squared</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token operator">*</span> <span class="token keyword">self</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个整数，调用squared()方法：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> number <span class="token operator">=</span> <span class="token number">8</span>
number<span class="token punctuation">.</span><span class="token function">squared</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Swift不允许在扩展中添加存储的属性，因此必须使用计算属性。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isEven<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">self</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="协议扩展" tabindex="-1"><a class="header-anchor" href="#协议扩展" aria-hidden="true">#</a> 协议扩展</h2>
<p>协议允许描述某物应该拥有哪些方法，但不提供里面的代码。
扩展允许在方法中提供代码，但不能同时将方法添加到许多类型中。
协议扩展解决了这两个问题：它们就像常规扩展，除了扩展像Int这样的特定类型，而是扩展整个协议，以便所有符合的类型都得到更改。
例如，这里有一个包含一些名称的数组和一个集合：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> pythons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Eric"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Graham"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Michael"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Terry"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Terry"</span></span><span class="token punctuation">]</span>
<span class="token keyword">let</span> beatles <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"George"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ringo"</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Swift的数组和集合都符合一个名为Collection的协议，因此可以为该协议编写一个扩展，以添加一个summarize()方法来整齐地打印集合</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Collection</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">summarize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"There are </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> of us:"</span></span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> name <span class="token keyword">in</span> <span class="token keyword">self</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Array和Set现在都有这个方法：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>pythons<span class="token punctuation">.</span><span class="token function">summarize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
beatles<span class="token punctuation">.</span><span class="token function">summarize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="面向协议编程" tabindex="-1"><a class="header-anchor" href="#面向协议编程" aria-hidden="true">#</a> 面向协议编程</h2>
<p>协议扩展可以为自己的协议方法提供默认实现。这使得类型很容易符合协议，并允许一种称为“面向协议的编程”的技术——围绕协议和协议扩展制作代码。</p>
<p>首先，这是一个名为Identifiable的协议，它要求任何符合要求的类型具有id属性和identify()方法：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">protocol</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token punctuation">{</span> <span class="token keyword">get</span> <span class="token keyword">set</span> <span class="token punctuation">}</span>
    <span class="token keyword">func</span> <span class="token function-definition function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以让每个符合要求的类型编写identify()方法，但协议扩展允许提供默认值：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">extension</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My ID is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">id</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，当创建一个符合Identifiable的类型时，会自动获得identify()：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">User</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> twostraws <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"twostraws"</span></span><span class="token punctuation">)</span>
twostraws<span class="token punctuation">.</span><span class="token function">identify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


