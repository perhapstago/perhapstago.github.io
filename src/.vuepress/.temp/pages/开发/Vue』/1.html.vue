<template><div><h1 id="简介和基本结构" tabindex="-1"><a class="header-anchor" href="#简介和基本结构" aria-hidden="true">#</a> 简介和基本结构</h1>
<p>Vue 是一款流行的前端框架，它的出现让前端开发变得更加高效和灵活。<br>
Vue 提供了响应式的数据绑定和组件化的开发方式，使得开发者能够更加专注于业务逻辑的实现，而无需过多关注 DOM 操作和状态管理。</p>
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<h3 id="数据驱动视图" tabindex="-1"><a class="header-anchor" href="#数据驱动视图" aria-hidden="true">#</a> 数据驱动视图</h3>
<ul>
<li>高效灵活：Vue 的组件化开发方式让代码更加模块化，提高了代码的复用性和可维护性。</li>
<li>响应式数据绑定：Vue 的数据绑定采用双向绑定机制，可以让数据的变化自动反映到视图上，极大地简化了代码的书写。</li>
<li>生态丰富：Vue 的生态系统非常丰富，包括 Vue Router、Vuex 等插件和工具，可以满足不同场景下的需求。</li>
</ul>
<h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3>
<ul>
<li>模板语法：Vue 的模板语法类似于 HTML，支持插值、指令和表达式等语法。</li>
<li>组件化开发：Vue 将页面抽象为一个个组件，每个组件有独立的逻辑和状态，便于复用和维护。</li>
<li>生命周期：Vue 组件有多个生命周期钩子函数，可以在不同的阶段执行相应的逻辑。</li>
<li>数据绑定：Vue 提供了多种数据绑定方式，包括单向绑定、双向绑定和计算属性等。</li>
<li>指令：Vue 的指令用于操作 DOM，如 v-if、v-for 等。</li>
<li>事件处理：Vue 支持多种事件处理方式，如监听 DOM 事件、自定义事件和 EventBus 等。</li>
<li>插件和工具：Vue 的插件和工具可以扩展和增强 Vue 的功能，如 Vue Router、Vuex、axios 等。</li>
</ul>
<h2 id="基本结构" tabindex="-1"><a class="header-anchor" href="#基本结构" aria-hidden="true">#</a> 基本结构</h2>
<p>Vue是一个渐进式框架，可以轻松地集成到现有的Web项目中，同时也可以用于开发单页面应用程序。</p>
<h3 id="vue实例" tabindex="-1"><a class="header-anchor" href="#vue实例" aria-hidden="true">#</a> Vue实例</h3>
<p>每个Vue应用程序都是通过创建Vue实例来启动的。Vue实例是一个根级别的Vue对象，它包含了应用程序的数据和行为。在创建Vue实例时，需要传入一个选项对象，这个对象包含了Vue实例的配置信息。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 选项</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h3>
<p>Vue应用程序的界面是通过Vue的模板语法来实现的。模板是一个HTML文件，其中可以包含Vue的特殊语法，用于渲染数据和绑定事件。Vue的模板语法非常简洁，易于学习和使用。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  {{ message }}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3>
<p>Vue的组件是应用程序的基本构建块。组件是一种可复用的Vue实例，用于组合应用程序的界面。每个组件都可以有自己的数据和行为，并且可以接收父组件的数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 定义一个名为 button-counter 的新组件</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'button-counter'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">'&lt;button v-on:click="count++">You clicked me {{ count }} times.&lt;/button>'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<p>Vue实例有一些生命周期，可以在不同阶段执行自定义逻辑。常用的生命周期有created、mounted、updated和destroyed。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello Vue.js!'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在实例创建完成后立即执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'message is: '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">mounted</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在挂载到DOM元素后执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'mounted'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">updated</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在数据更新后执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'updated'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">destroyed</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在实例销毁之前执行</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'destroyed'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


