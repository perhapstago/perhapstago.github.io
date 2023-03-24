<template><div><h1 id="required" tabindex="-1"><a class="header-anchor" href="#required" aria-hidden="true">#</a> required</h1>
<blockquote>
<p>required关键字可以在Swift中的初始化器前面使用。</p>
<p>子类有不同于父类的初始化方法时（参数类型和数量异于父类），子类必须要实现父类的required初始化方法，并且也要使用required修饰符而不是override。</p>
<p>当子类没有初始化方法时，可以不用实现父类的required初始化方法。</p>
</blockquote>
<p>例一：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"running"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token comment">//    required func eat() {//required无法修饰方法，required修饰符只能用于修饰类初始化方法。</span>
<span class="token comment">//        print("eating")</span>
<span class="token comment">//    }</span>
<span class="token punctuation">}</span>

<span class="token comment">//继承</span>
<span class="token keyword">class</span> <span class="token class-name">Teacher</span><span class="token punctuation">:</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"eating sth."</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例二：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">DadClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">init</span> <span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
    <span class="token punctuation">}</span>
    <span class="token keyword">required</span> <span class="token keyword">init</span> <span class="token punctuation">(</span>b<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">SonClass</span><span class="token punctuation">:</span> <span class="token class-name">DadClass</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">init</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>a<span class="token punctuation">:</span> no3<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">required</span> <span class="token keyword">init</span><span class="token punctuation">(</span>b<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>b<span class="token punctuation">:</span> no4<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


