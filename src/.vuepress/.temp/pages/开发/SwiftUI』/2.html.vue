<template><div><h1 id="_02-项目初始化" tabindex="-1"><a class="header-anchor" href="#_02-项目初始化" aria-hidden="true">#</a> 02.项目初始化</h1>
<h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2>
<ul>
<li>
<p>创建新项目
在 Xcode 中，选择 &quot;Create a new Xcode project&quot;。然后，在弹出窗口中，选择 &quot;iOS&quot; 平台，并选择 &quot;App&quot; 模板。</p>
</li>
<li>
<p>配置项目信息
下个窗口中为项目配置一些基本信息，如项目名称、组织标识符、语言和用户界面。在这里，选择 SwiftUI 作为用户界面，并将语言设置为 Swift。</p>
</li>
<li>
<p>创建项目
在配置完项目信息后，单击 &quot;Next&quot; 按钮，并选择保存项目的位置。最后，单击 &quot;Create&quot; 按钮即可创建新的 SwiftUI 项目。</p>
</li>
<li>
<p>运行项目
创建新的 SwiftUI 项目后可以在 Xcode 中运行该项目以查看默认的用户界面。单击 &quot;Run&quot; 按钮，Xcode 将自动编译并运行。</p>
</li>
</ul>
<h2 id="应用程序的基本结构" tabindex="-1"><a class="header-anchor" href="#应用程序的基本结构" aria-hidden="true">#</a> 应用程序的基本结构</h2>
<p>SwiftUI 是一个声明式的应用程序框架，可以用来构建跨平台的 iOS、iPadOS、macOS、watchOS 和 tvOS 应用程序。在使用 SwiftUI 开发应用程序时，了解应用程序的基本结构是非常重要的。</p>
<h3 id="应用程序的入口点" tabindex="-1"><a class="header-anchor" href="#应用程序的入口点" aria-hidden="true">#</a> 应用程序的入口点</h3>
<p>SwiftUI 应用程序的入口点是 @main 属性，它是一个特殊的属性，用于标识应用程序的入口点。这个属性必须被标记为 @main，并且必须附加在一个遵循 App 协议的类型上。App 协议定义了应用程序的生命周期和行为。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token attribute atrule">@main</span>
<span class="token keyword">struct</span> <span class="token class-name">MySwiftUIApp</span><span class="token punctuation">:</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span>
        <span class="token class-name">WindowGroup</span> <span class="token punctuation">{</span>
            <span class="token class-name">ContentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码，MySwiftUIApp 遵循 App 协议，并且附加了 @main 属性。还包含一个返回 some Scene 的计算属性，用于指定应用程序的场景。</p>
<h3 id="应用程序场景" tabindex="-1"><a class="header-anchor" href="#应用程序场景" aria-hidden="true">#</a> 应用程序场景</h3>
<p>一个应用程序场景是一个容器，它描述了一个应用程序的界面和行为。在 SwiftUI 中，应用程序可以包含一个或多个场景，每个场景可以包含一个或多个窗口。</p>
<p>在应用程序的场景中，可以通过修改场景中的窗口来控制应用程序的外观和行为。窗口可以包含不同类型的视图，例如列表、表单、图像等。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span>
    <span class="token class-name">WindowGroup</span> <span class="token punctuation">{</span>
        <span class="token class-name">ContentView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码，我们定义了一个包含一个窗口的场景。这个窗口包含 ContentView() 视图，它是应用程序的主视图。</p>
<h3 id="应用程序视图" tabindex="-1"><a class="header-anchor" href="#应用程序视图" aria-hidden="true">#</a> 应用程序视图</h3>
<p>应用程序的视图是在窗口中显示的用户界面。在 SwiftUI 中，应用程序的视图是通过将其他视图组合在一起来创建的。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, SwiftUI!"</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码，定义了一个名为 ContentView 的视图，它包含一个 Text 视图，用于显示 “Hello, SwiftUI!” 的文本。还在 Text 视图周围添加了一些填充（padding）。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<blockquote>
<p>在 SwiftUI 应用程序中，@main 属性是应用程序的入口点，App 协议定义了应用程序的生命周期和行为，应用程序场景是一个容器，用于描述应用程序的界面和行为，应用程序视图是通过将其他视图组合在一起来创建的。</p>
</blockquote>
</div></template>


