<template><div><h1 id="swift基础" tabindex="-1"><a class="header-anchor" href="#swift基础" aria-hidden="true">#</a> Swift基础</h1>
<h2 id="基础数据类型" tabindex="-1"><a class="header-anchor" href="#基础数据类型" aria-hidden="true">#</a> 基础数据类型</h2>
<h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3>
<p>初始化和修改变量：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello, playground"</span></span>
str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Goodbye"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>变量可以存储和管理程序中的数据</p>
</blockquote>
<hr>
<h3 id="字符串和整型" tabindex="-1"><a class="header-anchor" href="#字符串和整型" aria-hidden="true">#</a> 字符串和整型</h3>
<blockquote>
<p>上边&quot;Hello, playground&quot;是一个字符串，Swift 分配为 String 类型</p>
</blockquote>
<p>定义一个整数变量存储某人的年龄：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大数字可以用下划线作为千位分隔符，不会改变数字本身</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> population <span class="token operator">=</span> <span class="token number">2_000_000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>Swift 是一种类型安全的语言。</p>
<p>编译时会强制执行类型检查，确保使用的所有值都与其所期望的类型相匹配。这有助于减少由于类型错误导致的运行时错误和程序崩溃的风险。</p>
</blockquote>
<blockquote>
<p>Swift 的类型安全性其他好处:</p>
<p>更轻松地理解代码，清楚地知道每个值的类型。</p>
<p>使代码更容易维护，我们可以确定每个值的预期类型，不需要额外的类型转换或检查。</p>
</blockquote>
<hr>
<h3 id="多行字符串" tabindex="-1"><a class="header-anchor" href="#多行字符串" aria-hidden="true">#</a> 多行字符串</h3>
<p>多行字符串，以三个双引号开始和结束：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> str1 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"""
This goes
over multiple
lines
"""</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多行字符串格式化代码，每行结尾加上一个\，不会换行：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> str2 <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"""
This goes </span><span class="token punctuation">\</span><span class="token string">
over multiple </span><span class="token punctuation">\</span><span class="token string">
lines
"""</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>多行字符串以一种更易读和更自然的方式定义和操作包含多行文本的字符串。如果不使用多行字符串，处理包含多行文本的字符串可能会变得困难和不直观，需要在每一行的结尾处添加换行符，这样就会导致代码变得冗长和难以维护。</p>
<p>多行字符串还提供了许多额外的功能，例如在字符串中包含引号和换行符等特殊字符，而无需对它们进行转义处理，使得处理包含多行文本的字符串变得更加简单和直观。</p>
</blockquote>
<hr>
<h3 id="双精度和布尔值" tabindex="-1"><a class="header-anchor" href="#双精度和布尔值" aria-hidden="true">#</a> 双精度和布尔值</h3>
<p>创建带有小数的变量时，Swift 会自动为该变量赋予类型Double</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> pi <span class="token operator">=</span> <span class="token number">3.141</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>布尔值只有 true 或 false</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>var believe = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>双精度和整数是为了能够处理各种不同类型的数值数据，并且能够在程序中执行各种数学运算。</p>
<p>Swift 提供了多种整数和双精度浮点数类型来满足这些不同的需求。</p>
</blockquote>
<hr>
<h3 id="字符串插值" tabindex="-1"><a class="header-anchor" href="#字符串插值" aria-hidden="true">#</a> 字符串插值</h3>
<p>字符串中放置任何类型的变量，反斜杠(变量名)：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> score <span class="token operator">=</span> <span class="token number">85</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Your score was </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">score</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>字符串插值方便在字符串中插入变量、常量和表达式等内容，使得字符串构建更加简单和方便。</p>
</blockquote>
<hr>
<h3 id="常量" tabindex="-1"><a class="header-anchor" href="#常量" aria-hidden="true">#</a> 常量</h3>
<p>关键字 let 创建常量，这些值只可以设置一次不可修改</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> taylor <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"swift"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>既有常量又有变量是为了提供更加灵活和安全的编程环境。使用常量和变量，开发人员可以更好地控制和管理程序中的数据，避免出现错误，并且可以使程序更加灵活和适应性强。</p>
</blockquote>
<hr>
<h3 id="类型推断" tabindex="-1"><a class="header-anchor" href="#类型推断" aria-hidden="true">#</a> 类型推断</h3>
<p>Swift 根据创建时赋予的值为每个变量和常量分配一个类型，这将生成一个字符串，之后不能为其分配一个整数或布尔值：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Hello, playground"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以明确数据类型，不依赖 Swift 的类型推断：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> album<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Reputation"</span></span>
<span class="token keyword">let</span> year<span class="token punctuation">:</span> <span class="token class-name">Int</span> <span class="token operator">=</span> <span class="token number">1989</span>
<span class="token keyword">let</span> height<span class="token punctuation">:</span> <span class="token class-name">Double</span> <span class="token operator">=</span> <span class="token number">1.78</span>
<span class="token keyword">let</span> taylorRocks<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>类型注解是可以提高代码的可读性、可维护性、安全性和精确性，以及使编程更加方便和高效。</p>
</blockquote>
<hr>
<h2 id="复杂数据类型" tabindex="-1"><a class="header-anchor" href="#复杂数据类型" aria-hidden="true">#</a> 复杂数据类型</h2>
<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<pre><code>数组是作为单个值存储的值的集合：
``` swift
let one = &quot;panda&quot;
let two = &quot;monkey&quot;
let three = &quot;tiger&quot;
let four = &quot;hippo&quot;

let all = [one, two, three, four]
```
括号内写入数字来从数组中读取值：
``` swift
all[1]
```
&gt;数组是一种方便、高效和灵活的方式来存储和操作多个数据，并且可以通过数组操作函数和方法来更加方便地对数组进行操作和处理。
---
</code></pre>
<h3 id="集合" tabindex="-1"><a class="header-anchor" href="#集合" aria-hidden="true">#</a> 集合</h3>
<pre><code>直接从数组创建集合：
``` swift
let colors = Set([&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;])
```
将重复项插入集合，重复项将被忽略，集合只包括红色、绿色和蓝色一次：
``` swift
</code></pre>
<p>let colors2 = Set([&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;, &quot;red&quot;, &quot;blue&quot;])
```
&gt;数组是一种有序集合，可以存储相同数据类型的多个值，并且可以通过下标或其他方法来访问和操作数组中的元素。数组可以使用固定的长度来存储数据，并且支持快速的随机访问，因此在需要频繁访问和修改数组中的元素时，数组是一种非常有效的数据结构。
&gt;
&gt;集合是一种无序的数据集合，可以存储不同类型的多个值，并且支持快速的查找、添加和删除操作。集合内的元素没有特定的顺序，因此不能通过下标来访问集合中的元素。
&gt;集合通常用于存储唯一的元素，并且支持高效的元素查找和去重。当需要使用高效的查找算法时，集合通常比数组更加适合。同时，集合还可以用于处理键值对数据。
&gt;Swift 提供了多种集合类型，包括集合(Set)、字典(Dictionary)、哈希表等，每种类型都有不同的特点和用途。
---</p>
<h3 id="元祖" tabindex="-1"><a class="header-anchor" href="#元祖" aria-hidden="true">#</a> 元祖</h3>
<pre><code>元组是通过将多个项目放入括号中创建的：
``` swift
var name = (first: &quot;Taylor&quot;, last: &quot;Swift&quot;)
```
使用从 0 开始的数字位置访问元祖：
``` swift
name.0
```
或者使用名称访问项目：
``` swift
name.first
```

&gt;元组允许将多个值一起存储在一个值中。但元组和数组是不同的：
&gt;
&gt;不能在元组中添加或删除项目；它们的大小是固定的。
&gt;
&gt;不能更改元组中项目的类型；它们始终具有与创建时相同的类型。
&gt;
&gt;可以使用数字位置或通过命名来访问元组中的项目，但 Swift 不会让读取不存在的数字或名称。
---
</code></pre>
<h3 id="数组-vs-集合-vs-元组" tabindex="-1"><a class="header-anchor" href="#数组-vs-集合-vs-元组" aria-hidden="true">#</a> 数组 vs 集合 vs 元组</h3>
<pre><code>一个特定的、固定的相关值集合，其中每个项都有一个精确的位置或名称，应该使用一个元组：
``` swift
let address = (house: 555, street: &quot;Taylor Swift Avenue&quot;, city: &quot;Nashville&quot;)
```
一组必须唯一的值，或者需要能够非常快速地检查特定项是否存在，应该使用集合：
``` swift
let set = Set([&quot;aardvark&quot;, &quot;astronaut&quot;, &quot;azalea&quot;])
```
一个可以包含重复值的集合，或者项的顺序很重要，您应该使用数组：
``` swift
let pythons = [&quot;Eric&quot;, &quot;Graham&quot;, &quot;John&quot;, &quot;Michael&quot;, &quot;Terry&quot;, &quot;Terry&quot;]
```
</code></pre>
<h3 id="字典" tabindex="-1"><a class="header-anchor" href="#字典" aria-hidden="true">#</a> 字典</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建空集合" tabindex="-1"><a class="header-anchor" href="#创建空集合" aria-hidden="true">#</a> 创建空集合</h3>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>枚举</p>
</li>
<li>
<p>枚举关联值</p>
</li>
<li>
<p>枚举原始值</p>
</li>
</ul>
<p>##运算符、条件语句</p>
<p>##循环</p>
<p>##函数</p>
<p>##闭包1</p>
<p>##闭包2</p>
<p>##结构体、属性、方法</p>
<p>##访问控制、静态属性和懒加载</p>
<p>##类和继承</p>
<p>##协议、扩展</p>
<p>##可选值、解包和类型转换</p>
</div></template>


