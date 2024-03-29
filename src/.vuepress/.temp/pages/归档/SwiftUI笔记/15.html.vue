<template><div><h1 id="_15-数据模型和数据管理" tabindex="-1"><a class="header-anchor" href="#_15-数据模型和数据管理" aria-hidden="true">#</a> 15.数据模型和数据管理</h1>
<p>SwiftUI中可以使用数据模型来表示应用程序的数据，并使用数据管理来更新和传递这些数据。</p>
<h2 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型" aria-hidden="true">#</a> 数据模型</h2>
<p>数据模型是应用程序中的数据结构。它定义了应用程序使用的数据类型，并确定数据之间的关系。可以使用Swift语言中的结构体来定义数据模型。<br></p>
<p>下面是一个简单的示例：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Person</span><span class="token punctuation">:</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id <span class="token operator">=</span> <span class="token function">UUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为Person的结构体。它具有三个属性：id，name和age。id属性是一个UUID类型的唯一标识符，用于区分不同的Person实例。name和age属性分别是字符串和整数类型。<br></p>
<p>注意在结构体前加了Identifiable协议，这意味着结构体有一个可以用来识别它的属性。使用UUID作为id属性，因为它是一个全局唯一的标识符。</p>
<h2 id="数据管理" tabindex="-1"><a class="header-anchor" href="#数据管理" aria-hidden="true">#</a> 数据管理</h2>
<p>数据管理是应用程序如何管理和更新数据的过程。在SwiftUI中可以使用@State、@ObservedObject和@EnvironmentObject属性包装器来管理和更新数据。</p>
<h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> @State</h3>
<p>@State属性包装器是用于管理单个视图内部数据的属性包装器。它通常用于管理与单个视图相关的简单数据。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Count: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Increment"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用@State属性包装器来管理count变量的状态。每次用户点击按钮时，count变量都会递增，从而更新视图。</p>
<h3 id="observedobject" tabindex="-1"><a class="header-anchor" href="#observedobject" aria-hidden="true">#</a> @ObservedObject</h3>
<p>@ObservedObject属性包装器是用于管理从外部传递给视图的对象数据的属性包装器。它通常用于管理与单个视图相关的复杂数据。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">PersonViewModel</span><span class="token punctuation">:</span> <span class="token class-name">ObservableObject</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@Published</span> <span class="token keyword">var</span> person<span class="token punctuation">:</span> <span class="token class-name">Person</span>

    <span class="token keyword">init</span><span class="token punctuation">(</span>person<span class="token punctuation">:</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">self</span><span class="token punctuation">.</span>person <span class="token operator">=</span> person
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">updateName</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        person<span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">updateAge</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        person<span class="token punctuation">.</span>age <span class="token operator">=</span> age
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">PersonDetailView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@ObservedObject</span> <span class="token keyword">var</span> viewModel<span class="token punctuation">:</span> <span class="token class-name">PersonViewModel</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Name"</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $viewModel<span class="token punctuation">.</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
            <span class="token class-name">Stepper</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Age: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">viewModel<span class="token punctuation">.</span>person<span class="token punctuation">.</span>age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">,</span> value<span class="token punctuation">:</span> $viewModel<span class="token punctuation">.</span>person<span class="token punctuation">.</span>age<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token operator">...</span><span class="token number">100</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用@ObservedObject属性包装器来管理PersonViewModel对象的状态。PersonViewModel包含了一个Person对象，以及更新Person对象的方法。使用TextField和Stepper元素展示了Person对象的属性，并使用@ObservedObject属性包装器来管理这些属性。每当用户更新TextField或Stepper中的值时，Person对象的属性都会自动更新，从而更新视图。</p>
<h3 id="environmentobject" tabindex="-1"><a class="header-anchor" href="#environmentobject" aria-hidden="true">#</a> @EnvironmentObject</h3>
<p>@EnvironmentObject属性包装器是用于管理全局数据的属性包装器。它通常用于管理多个视图之间共享的数据。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">AppState</span><span class="token punctuation">:</span> <span class="token class-name">ObservableObject</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@Published</span> <span class="token keyword">var</span> count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@EnvironmentObject</span> <span class="token keyword">var</span> appState<span class="token punctuation">:</span> <span class="token class-name">AppState</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Count: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">appState<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Increment"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                appState<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">DetailView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Go to detail view"</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">DetailView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@EnvironmentObject</span> <span class="token keyword">var</span> appState<span class="token punctuation">:</span> <span class="token class-name">AppState</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Count: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">appState<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Increment"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                appState<span class="token punctuation">.</span>count <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个名为AppState的全局数据模型。将其标记为ObservableObject，这意味着可以使用@EnvironmentObject属性包装器在多个视图之间共享这个对象。使用@EnvironmentObject属性包装器来管理appState对象的状态。在ContentView和DetailView视图中都可以访问和更新appState对象的count属性。</p>
<h2 id="结论" tabindex="-1"><a class="header-anchor" href="#结论" aria-hidden="true">#</a> 结论</h2>
<p>SwiftUI里数据模型和数据管理是构建强大应用程序的基础。使用数据模型来表示应用程序的数据结构，并使用数据管理来更新和传递这些数据。通过使用@State、@ObservedObject和@EnvironmentObject属性包装器可以轻松地管理和更新数据。</p>
</div></template>


