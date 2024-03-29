<template><div><h1 id="_13-列表视图" tabindex="-1"><a class="header-anchor" href="#_13-列表视图" aria-hidden="true">#</a> 13.列表视图</h1>
<p>在 SwiftUI 中，列表视图是一个非常重要的组件，可以用于显示数据列表、菜单、选项卡等。<br></p>
<p>SwiftUI 中的列表视图，包括 List 和 ForEach 两个组件的基本用法和高级用法。我们将通过一个示例来演示如何使用列表视图显示数据列表，并在列表项中添加图像、文本和交互控件。</p>
<h2 id="list-组件" tabindex="-1"><a class="header-anchor" href="#list-组件" aria-hidden="true">#</a> List 组件</h2>
<p>List 组件是 SwiftUI 中的列表视图，可以用于显示数据列表。List 组件需要一个数据源和一个内容视图，其中数据源用于提供列表数据，内容视图用于定义列表项的布局和样式。例如，我们可以使用 List 组件来显示一个简单的字符串数组：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Item 1"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Item 2"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Item 3"</span></span><span class="token punctuation">]</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个名为 items 的字符串数组，并将其传递给 List 组件作为数据源。<br>
还使用 id 参数指定了一个唯一标识符，用于帮助 SwiftUI 管理列表项的状态。最后在 List 组件中使用 Text 组件来显示列表项的内容。</p>
<h2 id="foreach-组件" tabindex="-1"><a class="header-anchor" href="#foreach-组件" aria-hidden="true">#</a> ForEach 组件</h2>
<p>在上面的示例中，我们使用了 List 组件来显示一个简单的字符串数组。但是，如果想在列表项中添加图像、文本和交互控件需要使用更复杂的布局和样式。为了实现这个目的，可以使用 ForEach 组件来创建自定义的列表项视图。<br></p>
<p>ForEach 组件是 SwiftUI 中的循环视图，可以用于迭代一个数据源，并为每个元素创建一个视图。<br>
例如可以使用 ForEach 组件来显示一个包含图像、文本和交互控件的列表：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token class-name">Item</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Item 1"</span></span><span class="token punctuation">,</span> image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"photo1"</span></span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token punctuation">.</span>red<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Item</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Item 2"</span></span><span class="token punctuation">,</span> image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"photo2"</span></span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token punctuation">.</span>green<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token class-name">Item</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Item 3"</span></span><span class="token punctuation">,</span> image<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"photo3"</span></span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token punctuation">.</span>blue<span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    
    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span> <span class="token punctuation">{</span>
            <span class="token class-name">ForEach</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
                <span class="token class-name">HStack</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Image</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>image<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">resizable</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">scaledToFit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">frame</span><span class="token punctuation">(</span>width<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>color<span class="token punctuation">)</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
                    <span class="token class-name">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token class-name">Button</span><span class="token punctuation">(</span>action<span class="token punctuation">:</span> <span class="token punctuation">{</span>
                        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Button Tapped"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Image</span><span class="token punctuation">(</span>systemName<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"plus"</span></span><span class="token punctuation">)</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> image<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> color<span class="token punctuation">:</span> <span class="token class-name">Color</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个名为 items 的 Item 数组，并将其传递给 For Each 组件作为数据源，还使用了 id 参数来指定每个列表项的唯一标识符。<br>
使用了 Item 的 name 属性作为标识符。在 ForEach 中使用了 HStack 组件来水平排列图像、文本和按钮。还使用了 Image、Text 和 Button 组件来显示列表项的内容，并在按钮上添加了一个简单的点击事件。</p>
<h2 id="列表视图的高级用法" tabindex="-1"><a class="header-anchor" href="#列表视图的高级用法" aria-hidden="true">#</a> 列表视图的高级用法</h2>
<p>除了基本用法之外，SwiftUI 中的列表视图还支持许多高级用法，例如滚动到指定位置、滑动删除、拖放排序等。</p>
<h3 id="滚动到指定位置" tabindex="-1"><a class="header-anchor" href="#滚动到指定位置" aria-hidden="true">#</a> 滚动到指定位置</h3>
<p>如果想在列表中滚动到指定位置可以使用 scrollTo() 方法来实现。这个方法需要一个标识符参数，用于指定要滚动到的列表项的标识符。<br>
例如，如果想滚动到第二个列表项，可以使用以下代码：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">List</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
    <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">.</span>onAppear <span class="token punctuation">{</span>
    <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">asyncAfter</span><span class="token punctuation">(</span>deadline<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        scrollView<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span>items<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> anchor<span class="token punctuation">:</span> <span class="token punctuation">.</span>top<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 List 上使用 onAppear 修饰符来在列表显示时执行 scrollTo() 方法。还使用了 DispatchQueueto 延迟 0.5 秒，以确保列表已经显示。最后使用 scrollView 来引用列表的滚动视图，并使用 scrollTo() 方法来滚动到第二个列表项。</p>
<h3 id="滑动删除" tabindex="-1"><a class="header-anchor" href="#滑动删除" aria-hidden="true">#</a> 滑动删除</h3>
<p>如果想让用户能够滑动删除列表项，可以使用 onDelete() 修饰符来实现。这个修饰符需要一个闭包参数，用于在用户滑动删除列表项时执行。在闭包中可以从数据源中删除相应的元素，并使用 remove() 方法从列表中删除相应的列表项。<br>
例如，如果想让用户能够滑动删除列表项，并从 items 数组中删除相应的元素，可以使用以下代码：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">List</span> <span class="token punctuation">{</span>
    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">onDelete</span><span class="token punctuation">(</span>perform<span class="token punctuation">:</span> <span class="token punctuation">{</span> indexSet <span class="token keyword">in</span>
        items<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>atOffsets<span class="token punctuation">:</span> indexSet<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ForEach 上使用 onDelete() 修饰符来启用滑动删除功能。在闭包中从 items 数组中删除相应的元素，并使用 remove() 方法从列表中删除相应的列表项。</p>
<h3 id="拖放排序" tabindex="-1"><a class="header-anchor" href="#拖放排序" aria-hidden="true">#</a> 拖放排序</h3>
<p>如果想让用户能够拖放排序列表项，可以使用 onMove() 修饰符来实现。这个修饰符需要两个闭包参数，一个用于获取要移动的元素的索引，另一个用于在目标位置插入元素。在闭包中可以使用 move() 方法来移动元素的位置，并更新列表视图的显示顺序。<br>
如果想让用户能够拖放排序列表项，并根据拖放的顺序重新排列 items 数组，可以使用以下代码：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token class-name">List</span> <span class="token punctuation">{</span>
    <span class="token class-name">ForEach</span><span class="token punctuation">(</span>items<span class="token punctuation">,</span> id<span class="token punctuation">:</span> <span class="token punctuation">\</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> item <span class="token keyword">in</span>
        <span class="token class-name">Text</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token function">onMove</span><span class="token punctuation">(</span>perform<span class="token punctuation">:</span> <span class="token punctuation">{</span> indices<span class="token punctuation">,</span> newOffset <span class="token keyword">in</span>
        items<span class="token punctuation">.</span><span class="token function">move</span><span class="token punctuation">(</span>fromOffsets<span class="token punctuation">:</span> indices<span class="token punctuation">,</span> toOffset<span class="token punctuation">:</span> newOffset<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们在 ForEach 上使用 onMove() 修饰符来启用拖放排序功能。在闭包中，我们使用 move() 方法来移动元素的位置，并根据拖放的顺序重新排列 items 数组。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>列表视图是开发 iOS 和 macOS 应用程序中最常用的组件之一，而 SwiftUI 中的列表视图使得构建列表变得更加容易和直观。在本文中，我们介绍了 SwiftUI 中列表视图的基本用法和高级用法，并提供了示例代码来说明这些概念。</p>
</div></template>


