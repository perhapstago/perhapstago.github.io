<template><div><h1 id="alloc-与-init" tabindex="-1"><a class="header-anchor" href="#alloc-与-init" aria-hidden="true">#</a> alloc 与 init</h1>
<p>Objective-C 中，alloc 和 init 方法经常一起使用来创建对象<br></p>
<ul>
<li>alloc 方法会分配内存空间来存储对象，返回指向该内存空间的指针。这个空间中的值是未定义的，需要使用 init 方法来初始化对象的状态。</li>
<li>init 方法则是用来初始化对象的状态。它会在对象的内存空间被分配之后立即被调用。通过设置实例变量的初始值、分配和设置默认的资源以及执行其他必要的初始化操作，它可以确保新对象的状态是一致的并且可用的。</li>
</ul>
<p>需要注意的是，alloc 方法只是用来分配内存空间，它并不会初始化对象的状态，因此在使用 alloc 方法创建对象时，必须使用 init 方法来初始化该对象。</p>
<p>通常情况下会使用类工厂方法来同时调用 alloc 和 init 方法来创建对象，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>MyObject *object = [[MyObject alloc] init];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一个类没有提供 init 方法，则可以使用 alloc 方法来分配内存空间，但是必须在创建对象之后手动进行初始化。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>MyObject *object = [[MyObject alloc] initMyObjectWithParam:param];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，在使用 init 方法时，必须保证对象已经被成功地分配了内存空间。否则在调用 init 方法时会出现内存错误。</p>
</div></template>


