<template><div><h1 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h1>
<h2 id="钩子函数执行顺序" tabindex="-1"><a class="header-anchor" href="#钩子函数执行顺序" aria-hidden="true">#</a> 钩子函数执行顺序</h2>
<p>这些函数分为四个阶段：创建阶段、挂载阶段、更新阶段和销毁阶段。</p>
<h3 id="创建阶段" tabindex="-1"><a class="header-anchor" href="#创建阶段" aria-hidden="true">#</a> 创建阶段</h3>
<p>在这个阶段，Vue 实例正在初始化。在这个阶段，Vue 实例将设置数据观察和事件、虚拟节点等。</p>
<ul>
<li>beforeCreate：在实例化之后，初始化之前执行。</li>
<li>created：在实例化之后，初始化之后执行。</li>
</ul>
<h3 id="挂载阶段" tabindex="-1"><a class="header-anchor" href="#挂载阶段" aria-hidden="true">#</a> 挂载阶段</h3>
<p>在这个阶段，Vue 实例正在准备把自己渲染到DOM中。</p>
<ul>
<li>beforeMount：在挂载开始之前执行。</li>
<li>mounted：在挂载结束后执行。</li>
</ul>
<h3 id="更新阶段" tabindex="-1"><a class="header-anchor" href="#更新阶段" aria-hidden="true">#</a> 更新阶段</h3>
<p>在这个阶段，Vue 实例正在更新DOM元素以反映数据变化。</p>
<ul>
<li>beforeUpdate：在数据改变导致DOM重新渲染之前执行。</li>
<li>updated：在DOM重新渲染并应用更改之后执行。</li>
</ul>
<h3 id="销毁阶段" tabindex="-1"><a class="header-anchor" href="#销毁阶段" aria-hidden="true">#</a> 销毁阶段</h3>
<p>在这个阶段，Vue 实例正在被销毁。</p>
<ul>
<li>beforeDestroy：在实例被销毁之前执行。</li>
<li>destroyed：在实例被销毁之后执行。</li>
</ul>
<h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2>
<h3 id="beforecreate" tabindex="-1"><a class="header-anchor" href="#beforecreate" aria-hidden="true">#</a> beforeCreate</h3>
<p>这个钩子函数在实例被创建之后立即调用。这是一个很好的地方来添加全局事件监听器，或初始化全局状态。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeCreate: '</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用了 Vuex 状态管理库。在 beforeCreate 钩子函数中打印当前状态，并调用 increment 方法来增加状态。</p>
<h3 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> created</h3>
<p>created 钩子函数在实例被创建后被调用，但是在模板渲染之前。这是一个很好的地方来添加更多的全局事件监听器，或初始化局部状态。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'created: '</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 created 钩子函数中打印了当前状态。请注意，此时模板还没有被渲染，所以无法在这个钩子函数中访问渲染的DOM元素。</p>
<h3 id="ounted" tabindex="-1"><a class="header-anchor" href="#ounted" aria-hidden="true">#</a> ounted</h3>
<p>在 mounted 钩子函数中，实例已经被挂载到DOM中。这是执行DOM操作和访问渲染DOM元素的好地方。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted: '</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 mounted 钩子函数中打印了 $el 属性，它是实例根元素的DOM节点。可以使用 $refs 来访问子组件的DOM元素。</p>
<h3 id="beforeupdate" tabindex="-1"><a class="header-anchor" href="#beforeupdate" aria-hidden="true">#</a> beforeUpdate</h3>
<p>在数据改变导致DOM重新渲染之前，beforeUpdate 钩子函数被调用。这是一个很好的地方来执行一些计算，但是请注意，此时DOM元素尚未更新。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'beforeUpdate: '</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'Updated message'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 beforeUpdate 钩子函数中打印了 message 属性，并将其更新为“Updated message”。</p>
<h3 id="updated" tabindex="-1"><a class="header-anchor" href="#updated" aria-hidden="true">#</a> updated</h3>
<p>在DOM重新渲染并应用更改之后，updated 钩子函数被调用。这是一个很好的地方来访问更新后的DOM元素。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">updated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'updated: '</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 updated 钩子函数中打印了 $el 属性，它是实例根元素的DOM节点。请注意，此时可以访问更新后的DOM元素。</p>
<h3 id="beforedestroy" tabindex="-1"><a class="header-anchor" href="#beforedestroy" aria-hidden="true">#</a> beforeDestroy</h3>
<p>在实例被销毁之前，beforeDestroy 钩子函数被调用。这是一个很好的地方来清除事件监听器和取消订阅。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">'resize'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleResize<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 beforeDestroy 钩子函数中移除了 resize 事件监听器，并取消了订阅。</p>
<h3 id="destroyed" tabindex="-1"><a class="header-anchor" href="#destroyed" aria-hidden="true">#</a> destroyed</h3>
<p>在实例被销毁之后，destroyed 钩子函数被调用。在这个时候，实例所有的事件监听器和观察者已经被移除。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">destroyed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'destroyed'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 destroyed 钩子函数中打印了一条消息。</p>
</div></template>


