<template><div><h1 id="_14-表单视图" tabindex="-1"><a class="header-anchor" href="#_14-表单视图" aria-hidden="true">#</a> 14.表单视图</h1>
<p>表单视图在 iOS 应用程序中是一种常见的用户界面组件，可以用于收集用户的输入或设置应用程序的选项。在 SwiftUI 中，表单视图是通过一个名为 Form 的容器视图来实现的，它提供了许多内置的表单元素，如文本字段、开关、选择器等。<br></p>
<h2 id="创建表单视图" tabindex="-1"><a class="header-anchor" href="#创建表单视图" aria-hidden="true">#</a> 创建表单视图</h2>
<p>要创建一个表单视图，我们只需将所有表单元素放入 Form 容器中即可。以下是一个简单的示例：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Form</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, World!"</span></span><span class="token punctuation">)</span>
            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Enter your name"</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">""</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Show advanced options"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">constant</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Submit"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Submit the form</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们使用了一些常见的表单元素，如文本、文本字段、开关和按钮。在这里，我们没有为表单元素提供任何处理程序或绑定，因此它们只是静态的元素。在实际应用程序中，你可能需要为表单元素提供更多的自定义处理程序和绑定，以响应用户的输入。</p>
<h2 id="表单元素" tabindex="-1"><a class="header-anchor" href="#表单元素" aria-hidden="true">#</a> 表单元素</h2>
<h3 id="文本字段" tabindex="-1"><a class="header-anchor" href="#文本字段" aria-hidden="true">#</a> 文本字段</h3>
<p>文本字段是表单视图中最常用的元素之一，它允许用户输入文本并将其提交给应用程序。SwiftUI可以使用 TextField 元素来创建文本字段，如下所示：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">""</span></span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Form</span> <span class="token punctuation">{</span>
            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Enter your name"</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 TextField 元素创建了一个文本字段，并将其绑定到一个名为 name 的状态变量。每当用户在文本字段中输入文本时，该变量的值将被更新。</p>
<h3 id="开关" tabindex="-1"><a class="header-anchor" href="#开关" aria-hidden="true">#</a> 开关</h3>
<p>开关是表单视图中另一个常见的元素，它允许用户在两个选项之间进行选择。SwiftUI可以使用 Toggle 元素来创建开关，如下所示：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> showAdvancedOptions<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token operator">=</span> <span class="token boolean">false</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Form</span> <span class="token punctuation">{</span>
            <span class="token class-name">Toggle</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Show advanced options"</span></span><span class="token punctuation">,</span> isOn<span class="token punctuation">:</span> $showAdvancedOptions<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Toggle 元素创建了一个开关，并将其绑定到一个名为 showAdvancedOptions 的状态变量。每当用户切换开关时，该变量的值将被更新</p>
<h3 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h3>
<p>选择器允许用户从多个选项中进行选择。在 SwiftUI 中，我们可以使用 Picker 元素来创建选择器，如下所示：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Option 1"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Option 2"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Option 3"</span></span><span class="token punctuation">]</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> selectedOption <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Form</span> <span class="token punctuation">{</span>
            <span class="token class-name">Picker</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Select an option"</span></span><span class="token punctuation">,</span> selection<span class="token punctuation">:</span> $selectedOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">ForEach</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">..&lt;</span> options<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token short-argument">$0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Picker 元素创建了一个选择器，并将其绑定到一个名为 selectedOption 的状态变量。还使用 ForEach 构造函数来动态生成 Picker 中的选项，每个选项都由一个 Text 元素表示。</p>
<h3 id="按钮" tabindex="-1"><a class="header-anchor" href="#按钮" aria-hidden="true">#</a> 按钮</h3>
<p>按钮是表单视图中的另一个常见元素，它允许用户执行操作或提交表单。在 SwiftUI 中，我们可以使用 Button 元素来创建按钮，如下所示：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">""</span></span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Form</span> <span class="token punctuation">{</span>
            <span class="token class-name">TextField</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Enter your name"</span></span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> $name<span class="token punctuation">)</span>
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Submit"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// Submit the form</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Button 元素创建了一个按钮，并为其提供了一个名称和一个处理程序。当用户点击该按钮时，处理程序将被调用。</p>
</div></template>


