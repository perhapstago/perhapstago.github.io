<template><div><h1 id="常见循环引用" tabindex="-1"><a class="header-anchor" href="#常见循环引用" aria-hidden="true">#</a> 常见循环引用</h1>
<h2 id="block" tabindex="-1"><a class="header-anchor" href="#block" aria-hidden="true">#</a> block</h2>
<p>self将block作为自己的属性变量，而在block的方法体里面又引用了 self 本身，此时就很简单的形成了一个循环引用。</p>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>__weak typeof(self) weakSelf = self;
__strong typeof (weakSelf) strongSelf = weakSelf;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delegate" tabindex="-1"><a class="header-anchor" href="#delegate" aria-hidden="true">#</a> Delegate</h2>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>@property (nonatomic, weak) id &lt;TestDelegate&gt; delegate;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果将 weak 改为 strong，则会造成循环引用</p>
<h2 id="nstimer" tabindex="-1"><a class="header-anchor" href="#nstimer" aria-hidden="true">#</a> NSTimer</h2>
<p>NSTimer 的 target 对传入的参数都是强引用（即使是 weak 对象）
解决：strong 改为 weak</p>
<ul>
<li>封装成block timer</li>
<li>使用iOS10后系统的block timer</li>
<li>使用GCD封装计时器</li>
</ul>
<h2 id="父类与子类" tabindex="-1"><a class="header-anchor" href="#父类与子类" aria-hidden="true">#</a> 父类与子类</h2>
<p>例如在使用UITableView 的时候，将 UITableView 给 Cell 使用，cell 中的 strong 引用会造成循环引用。</p>
</div></template>


