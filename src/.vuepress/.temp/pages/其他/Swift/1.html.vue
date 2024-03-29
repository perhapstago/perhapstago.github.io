<template><div><h1 id="数组、集合、元祖、字典" tabindex="-1"><a class="header-anchor" href="#数组、集合、元祖、字典" aria-hidden="true">#</a> 数组、集合、元祖、字典</h1>
<h2 id="array-数组" tabindex="-1"><a class="header-anchor" href="#array-数组" aria-hidden="true">#</a> Array (数组)</h2>
<p>数组是作为单个值存储的值的集合：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> one <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"panda"</span></span>
<span class="token keyword">let</span> two <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"monkey"</span></span>
<span class="token keyword">let</span> three <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"tiger"</span></span>
<span class="token keyword">let</span> four <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"hippo"</span></span>
<span class="token keyword">let</span> all <span class="token operator">=</span> <span class="token punctuation">[</span>one<span class="token punctuation">,</span> two<span class="token punctuation">,</span> three<span class="token punctuation">,</span> four<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>括号内写入数字来从数组中读取值：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>all<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>数组是有序集合，存储相同数据类型的多个值，可以通过下标或其他方法来访问和操作数组中的元素。</p>
<p>数组可以使用固定的长度来存储数据，并且支持快速的随机访问，因此在需要频繁访问和修改数组中的元素时，数组是一种非常有效的数据结构。</p>
</blockquote>
<h2 id="set-集合" tabindex="-1"><a class="header-anchor" href="#set-集合" aria-hidden="true">#</a> Set (集合)</h2>
<p>直接从数组创建集合：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> colors <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"red"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"green"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"blue"</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将重复项插入集合，重复项将被忽略，集合只包括红色、绿色和蓝色一次：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> colors2 <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"red"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"green"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"blue"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"red"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"blue"</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>集合是无序的数据集合，可以存储不同类型的多个值，并且支持快速的查找、添加和删除操作。集合内的元素没有特定的顺序，因此不能通过下标来访问集合中的元素。</p>
<p>集合通常用于存储唯一的元素，并且支持高效的元素查找和去重。当需要使用高效的查找算法时，集合通常比数组更加适合。同时，集合还可以用于处理键值对数据。</p>
<p>Swift 提供了多种集合类型，包括集合(Set)、字典(Dictionary)、哈希表等，每种类型都有不同的特点和用途。</p>
</blockquote>
<h2 id="元祖-tuple" tabindex="-1"><a class="header-anchor" href="#元祖-tuple" aria-hidden="true">#</a> 元祖 (Tuple)</h2>
<p>元组是通过将多个项目放入括号中创建的：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token punctuation">(</span>first<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor"</span></span><span class="token punctuation">,</span> last<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Swift"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用从 0 开始的数字位置访问元祖：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>name<span class="token punctuation">.</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者使用名称访问项目：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>name<span class="token punctuation">.</span>first
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>元组允许将多个值一起存储在一个值中。但元组和数组是不同的：</p>
<p>不能在元组中添加或删除项目；它们的大小是固定的。</p>
<p>不能更改元组中项目的类型；它们始终具有与创建时相同的类型。</p>
<p>可以使用数字位置或通过命名来访问元组中的项目，但 Swift 不会让读取不存在的数字或名称。</p>
</blockquote>
<h2 id="字典-字典" tabindex="-1"><a class="header-anchor" href="#字典-字典" aria-hidden="true">#</a> 字典 (字典)</h2>
<p>存储字典数据最常见的方法是使用字符串，创建一个字典，用他们的名字存储歌手的身高：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> heights <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">:</span> <span class="token number">1.78</span><span class="token punctuation">,</span>
<span class="token string-literal"><span class="token string">"Ed Sheeran"</span></span><span class="token punctuation">:</span> <span class="token number">1.73</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>标识符被称为key，从字典中读取数据：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>heights<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>尝试未定义的key获取值会得到nil：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>heights<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"LeBron James"</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>给字典一个&quot;unknown&quot;的默认值，未定义的key获取值会得到&quot;unknown&quot;：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>heights <span class="token operator">=</span> <span class="token punctuation">[</span>
heights<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"LeBron James"</span></span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Unknown"</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h2>
<p>创建一个带有以下键和值字符串的空字典：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> teams <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
teams<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Red"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个空数组来存储整数：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> words <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> numbers <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建一个空集</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code>heights<span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Taylor Swift"</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数组和字典也可以用这种方式初始化：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> scores <span class="token operator">=</span> <span class="token class-name">Dictionary</span><span class="token operator">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Int</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> results <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token operator">&lt;</span><span class="token class-name">Int</span><span class="token operator">></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数组-vs-集合-vs-元组-vs-字典" tabindex="-1"><a class="header-anchor" href="#数组-vs-集合-vs-元组-vs-字典" aria-hidden="true">#</a> 数组 vs 集合 vs 元组 vs 字典</h2>
<ul>
<li>Array</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> pythons <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Eric"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Graham"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Michael"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Terry"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Terry"</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>当需要按照顺序存储一组相同类型的数据时，可以使用数组。</p>
<p>当需要快速访问数组中的元素时，数组是一种高效的数据结构。</p>
<p>当需要对数组中的元素进行排序、过滤、映射等操作时，数组是一种常用的数据结构。</p>
<p>当元素的数量不会发生变化时，可以使用数组来存储数据。</p>
</blockquote>
<ul>
<li>Set</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> <span class="token keyword">set</span> <span class="token operator">=</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"aardvark"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"astronaut"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"azalea"</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>当需要存储一组唯一的值时，可以使用集合。</p>
<p>当需要进行高效的成员检查、添加、删除等操作时，集合是一种高效的数据结构。</p>
<p>当元素之间的顺序不重要时，可以使用集合来存储数据。</p>
</blockquote>
<ul>
<li>Tuple</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> address <span class="token operator">=</span> <span class="token punctuation">(</span>house<span class="token punctuation">:</span> <span class="token number">555</span><span class="token punctuation">,</span> street<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Taylor Swift Avenue"</span></span><span class="token punctuation">,</span> city<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Nashville"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>当需要临时存储和传递多个值时，可以使用元组。</p>
<p>当需要将多个值作为一个整体进行操作时，元组是一种方便的数据结构。</p>
<p>当元素的数量和类型是固定的时，可以使用元组来存储数据。</p>
</blockquote>
<ul>
<li>Dictionary</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> heights <span class="token operator">=</span> <span class="token punctuation">[</span>
<span class="token string-literal"><span class="token string">"Eric"</span></span><span class="token punctuation">:</span> <span class="token number">1.78</span><span class="token punctuation">,</span>
<span class="token string-literal"><span class="token string">"Graham"</span></span><span class="token punctuation">:</span> <span class="token number">1.73</span><span class="token punctuation">,</span>
<span class="token string-literal"><span class="token string">"Michael"</span></span><span class="token punctuation">:</span> <span class="token number">2.03</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>当需要使用键值对来存储和查找数据时，可以使用字典。</p>
<p>当需要高效地根据键查找值时，字典是一种高效的数据结构。</p>
<p>当需要对字典中的键值对进行添加、删除、修改等操作时，字典是一种常用的数据结构。</p>
</blockquote>
</div></template>


