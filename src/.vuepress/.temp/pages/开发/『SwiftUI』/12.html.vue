<template><div><h1 id="_12-导航视图" tabindex="-1"><a class="header-anchor" href="#_12-导航视图" aria-hidden="true">#</a> 12.导航视图</h1>
<p>导航视图是 SwiftUI 中非常重要的一个组件，它可以用于管理应用程序中的多个视图。</p>
<h2 id="导航视图的基础" tabindex="-1"><a class="header-anchor" href="#导航视图的基础" aria-hidden="true">#</a> 导航视图的基础</h2>
<p>在 SwiftUI 中，导航视图可以通过 NavigationView 和 NavigationLink 两个组件来实现。其中，NavigationView 用于包含和管理多个视图，而 NavigationLink 用于在不同的视图之间进行切换。</p>
<h3 id="navigationview" tabindex="-1"><a class="header-anchor" href="#navigationview" aria-hidden="true">#</a> NavigationView</h3>
<p>NavigationView 是一个容器视图，它可以包含多个视图，并将这些视图按照导航栏和工具栏的形式进行显示。当用户选择导航栏中的某个项目时，NavigationView 会自动将对应的视图进行显示。<br></p>
<p>下面是一个简单的例子，演示了如何使用 NavigationView 和 List 创建一个简单的列表视图：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">NavigationView</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span> <span class="token punctuation">{</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 1"</span></span><span class="token punctuation">)</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 2"</span></span><span class="token punctuation">)</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 3"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">navigationBarTitle</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My List"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 List 创建了一个简单的列表视图，并使用 NavigationView 包含了这个列表视图。还使用 navigationBarTitle 方法来设置导航栏的标题。</p>
<h3 id="navigationlink" tabindex="-1"><a class="header-anchor" href="#navigationlink" aria-hidden="true">#</a> NavigationLink</h3>
<p>NavigationLink 是一个视图，它可以用于在不同的视图之间进行切换。当用户点击 NavigationLink 时，导航视图会自动显示目标视图。<br></p>
<p>下面是一个简单的例子，演示了如何使用 NavigationLink 在两个视图之间进行切换：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">NavigationView</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span> <span class="token punctuation">{</span>
        <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Detail View"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 1"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Detail View"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 2"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Detail View"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 3"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">navigationBarTitle</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My List"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 NavigationLink 在列表视图中添加了三个链接。当用户点击其中任意一个链接时，导航视图会自动显示名为 &quot;Detail View&quot; 的目标视图。</p>
<h2 id="导航视图的高级用法" tabindex="-1"><a class="header-anchor" href="#导航视图的高级用法" aria-hidden="true">#</a> 导航视图的高级用法</h2>
<p>除了基本用法之外，SwiftUI 的导航视图还支持许多高级用法。例如，我们可以使用 navigationBarItems 方法来在导航栏中添加自定义项目，使用 presentationMode 属性来控制视图的显示方式，使用 isActive 属性来控制 NavigationLink 的显示方式等等。<br></p>
<p>下面是一个简单的例子，演示了如何使用 navigationBarItems 方法在导航栏中添加自定义项目：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">NavigationView</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span> <span class="token punctuation">{</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 1"</span></span><span class="token punctuation">)</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 2"</span></span><span class="token punctuation">)</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 3"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">navigationBarTitle</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My List"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">navigationBarItems</span><span class="token punctuation">(</span>trailing<span class="token punctuation">:</span>
        <span class="token class-name">Button</span><span class="token punctuation">(</span>action<span class="token punctuation">:</span>  <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Button Tapped"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"plus"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中使用 navigationBarItems 方法在导航栏的右侧添加了一个加号按钮。当用户点击该按钮时，会触发 print 语句并打印一条消息。<br></p>
<p>另外还可以使用 presentationMode 属性来控制视图的显示方式。这个属性是一个环境变量，可以用于获取和设置当前视图的呈现模式。例如可以使用 presentationMode 属性来在视图中添加一个 &quot;Dismiss&quot; 按钮，并在用户点击该按钮时关闭当前视图：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">DetailView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@Environment</span><span class="token punctuation">(</span><span class="token punctuation">\</span><span class="token punctuation">.</span>presentationMode<span class="token punctuation">)</span> <span class="token keyword">var</span> presentationMode
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Detail View"</span></span><span class="token punctuation">)</span>
            
            <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Dismiss"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span>presentationMode<span class="token punctuation">.</span>wrappedValue<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token class-name">NavigationView</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span> <span class="token punctuation">{</span>
        <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">DetailView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 1"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">DetailView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 2"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">DetailView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Item 3"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">navigationBarTitle</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My List"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中使用 presentationMode 属性获取了当前视图的呈现模式，并在 DetailView 视图中添加了一个 &quot;Dismiss&quot; 按钮。当用户点击该按钮时，会调用 presentationMode.wrappedValue.dismiss() 方法来关闭当前视图。<br></p>
<p>除了 presentationMode 属性之外，还可以使用 isActive 属性来控制 NavigationLink 的显示方式。例如可以使用 isActive 属性来在视图中添加一个 &quot;Toggle&quot; 按钮，并在用户点击该按钮时切换 NavigationLink 的状态：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> isActive <span class="token operator">=</span> <span class="token boolean">false</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">NavigationView</span> <span class="token punctuation">{</span>
            <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
                <span class="token class-name">NavigationLink</span><span class="token punctuation">(</span>destination<span class="token punctuation">:</span> <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Detail View"</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> isActive<span class="token punctuation">:</span> $isActive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">EmptyView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
                
                <span class="token class-name">Button</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Toggle"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span>isActive<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token punctuation">.</span><span class="token function">navigationBarTitle</span><span class="token punctuation">(</span><span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"My View"</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中使用 isActive 属性来控制 NavigationLink 的显示方式，并在 ContentView 视图中添加了一个 &quot;Toggle&quot; 按钮。当用户点击该按钮时，会调用 self.isActive.toggle() 方法来切换 NavigationLink 的状态。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>本文介绍了 SwiftUI 中的导航视图，包括 NavigationView 和 NavigationLink 两个组件的基本用法和高级用法。还演示了如何在导航栏中添加自定义项目，如何使用 presentationMode 属性来控制视图的显示方式，以及如何使用 isActive 属性来控制 NavigationLink 的显示方式。</p>
</div></template>


