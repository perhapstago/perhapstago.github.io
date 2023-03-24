<template><div><h1 id="可选类型" tabindex="-1"><a class="header-anchor" href="#可选类型" aria-hidden="true">#</a> 可选类型</h1>
<h2 id="处理丢失数据" tabindex="-1"><a class="header-anchor" href="#处理丢失数据" aria-hidden="true">#</a> 处理丢失数据</h2>
<p>使用Int等类型来保整数。但是，如果想为用户存储age属性，如果你不知道某人的年龄，你会怎么做？
或许可以使用1000或-1等特殊数字来表示“未知”，这两个数字都是不可能的年龄，但真的会记得它使用的所有地方的这个数字吗？
Swift的解决方案是可选类型，可以制作任何类型的可选类型。可选整数可能有一个像0或40这样的数字，但可能根本没有值——nil。
要使类型可选，请在它后面添加一个问号：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="可选类型解包" tabindex="-1"><a class="header-anchor" href="#可选类型解包" aria-hidden="true">#</a> 可选类型解包</h2>
<p>可选字符串可能包含像“你好”这样的字符串，或者它们可能是nil</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">var</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果使用name.count会发生什么？真实字符串有一个count属性，但nil是空的内存，没有count。
因此，尝试读取name.count是不安全的，Swift不允许这样做。所以必须查看可选的内部。
解包可选类型的常见方法是使用if let语法，如果可选类型内有值，那么可以使用，但如果没有，条件就会失败。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">if</span> <span class="token keyword">let</span> unwrapped <span class="token operator">=</span> name <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">unwrapped<span class="token punctuation">.</span>count</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> letters"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Missing name."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="guard-let" tabindex="-1"><a class="header-anchor" href="#guard-let" aria-hidden="true">#</a> guard let</h2>
<p>guard let 解包可选类型，如果里面发现nil，它期望退出使用的函数、循环或条件。
使用guard let允许在功能开始时处理问题，然后立即return。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">greet</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> name<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> unwrapped <span class="token operator">=</span> name <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"You didn't provide a name!"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Hello, </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">unwrapped</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="强制解包" tabindex="-1"><a class="header-anchor" href="#强制解包" aria-hidden="true">#</a> 强制解包</h2>
<p>可选类型表示可能存在或不存在的数据，但有时可以确保值不是nil。
在这些情况下，Swift允许您强制解包可选：将其从可选类型转换为非可选类型。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"5"</span></span>
<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这使得num成为可选的Int，可以通过强制解包结果!：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token class-name">Int</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>只有当确定是安全的时才应该强制解包——这是它通常被称为崩溃操作员的原因。</p>
<h2 id="隐式拆包可选类型" tabindex="-1"><a class="header-anchor" href="#隐式拆包可选类型" aria-hidden="true">#</a> 隐式拆包可选类型</h2>
<p>与常规可选件一样，隐式未包装的可选件可能包含一个值，或者它们可能为nil。无需拆开包装即可使用，当做不是可选类型来使用。如果是nil代码就会崩溃。
通过在类型名称后添加感叹号来创建隐式拆包可选类型：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> age<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token operator">!</span> <span class="token operator">=</span> <span class="token nil constant">nil</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nil-合并解包" tabindex="-1"><a class="header-anchor" href="#nil-合并解包" aria-hidden="true">#</a> nil 合并解包</h2>
<p>这是一个接受整数作为其唯一参数并返回可选字符串的函数：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">func</span> <span class="token function-definition function">username</span><span class="token punctuation">(</span><span class="token keyword">for</span> id<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">String</span><span class="token operator">?</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> id <span class="token operator">==</span> <span class="token number">1</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用id15调用将返回nil，因为不被识别，但通过nil合并可以提供“匿名”的默认值：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token function">username</span><span class="token punctuation">(</span><span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="可选类型链" tabindex="-1"><a class="header-anchor" href="#可选类型链" aria-hidden="true">#</a> 可选类型链</h2>
<p>当使用可选时，Swift提供了一个快捷方式：如果访问像a.b.c和b是可选的，可以在它后面写一个问号以启用可选链接：a.b?.c。
代码运行时Swift将检查b是否有值，如果为nil则忽略行的其余部分——Swift将立即返回nil。但如果有值，将被解包并继续执行。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"John"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Paul"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"George"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Ringo"</span></span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用数组first属性，如果数组有first项则返回第一个名称，如果数组为空则返回nil。然后可以在结果上调用uppercased()以使其成为大写字符串：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> beatle <span class="token operator">=</span> names<span class="token punctuation">.</span>first<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">uppercased</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="抛出函数的try" tabindex="-1"><a class="header-anchor" href="#抛出函数的try" aria-hidden="true">#</a> 抛出函数的try</h2>
<p>运行一个抛出函数，使用do、try和catch优雅地处理错误：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">enum</span> <span class="token class-name">PasswordError</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> obvious
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function-definition function">checkPassword</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> password<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token operator">-></span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> password <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"password"</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token class-name">PasswordError</span><span class="token punctuation">.</span>obvious
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">do</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"password"</span></span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"That password is good!"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"You can't use that password."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有两种选择可以try，既然你理解了可选的选项并强制解包，这两种选择都会更有意义。</p>
<ul>
<li>try?
抛出函数更改为返回可选函数的函数。如果函数抛出错误，将收到nil作为结果，否则将获得作为可选包装的返回值：</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">if</span> <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"password"</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Result was </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">result</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"D'oh."</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>try!
当您确定该功能不会失败时可以使用它。如果函数确实抛出错误代码将崩溃。</li>
</ul>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">try</span><span class="token operator">!</span> <span class="token function">checkPassword</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"sekrit"</span></span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"OK!"</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可失败的初始化" tabindex="-1"><a class="header-anchor" href="#可失败的初始化" aria-hidden="true">#</a> 可失败的初始化</h2>
<p>一个可能成功或可能失败的初始化器。可以使用init?()在结构和类中编写这些而不是init()。如果出现问题，则返回nil。然后，返回值将是类型的可选值，可以随心所欲地解包。</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> id<span class="token punctuation">:</span> <span class="token class-name">String</span>

    <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>id<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> id<span class="token punctuation">.</span>count <span class="token operator">==</span> <span class="token number">9</span> <span class="token punctuation">{</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token nil constant">nil</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类型选择-typecasting" tabindex="-1"><a class="header-anchor" href="#类型选择-typecasting" aria-hidden="true">#</a> 类型选择 (Typecasting)</h2>
<p>这里有三类：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Fish</span><span class="token punctuation">:</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
    <span class="token keyword">func</span> <span class="token function-definition function">makeNoise</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Woof!"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建几条鱼和几条狗，并将它们放入一个数组：
这里有三类：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">let</span> pets <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Fish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在pets数组上循环并执行makeNoise函数，需要执行类型转换：Swift将检查每个对象是否是Dog对象，如果是可以调用makeNoise()
这使用了一个名为as?的新关键字，该关键字返回一个可选类型：如果类型转换失败，则为nil：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">for</span> pet <span class="token keyword">in</span> pets <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token keyword">let</span> dog <span class="token operator">=</span> pet <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
        dog<span class="token punctuation">.</span><span class="token function">makeNoise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


