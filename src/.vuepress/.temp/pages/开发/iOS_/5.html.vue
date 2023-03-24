<template><div><h1 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理" aria-hidden="true">#</a> 内存管理</h1>
<p>在iOS操作系统中，针对不同场景下的内存管理，苹果采用了不同的内存管理方案。对于小对象，如NSNumber等，苹果采用了TaggedPoint这种内存管理方案。对于64位架构下的iOS系统，苹果采用了非指针型的ISA来提高内存利用率。而对于复杂对象，苹果采用了散列表来管理内存。这些内存管理方案都是针对不同的场景做出的优化，旨在提高内存的利用率和性能。</p>
<h2 id="taggedpointer" tabindex="-1"><a class="header-anchor" href="#taggedpointer" aria-hidden="true">#</a> TaggedPointer</h2>
<p>TaggedPointer 是一种内存管理方案，适用于一些小对象，如NSNumber等。在 iOS 系统中，每个对象都有一个指向其类信息的指针，通常称为ISA指针。在 64 位架构下，ISA 指针占用了 64 个比特位，但是在实际应用中，只需要使用其中的 32 位或 40 位，剩余的比特位实际上是浪费的。TaggedPointer 就是利用这些浪费的比特位来存储对象的数据，从而提高内存利用率。<br></p>
<p>具体来说，TaggedPointer 方案将浮点数、整数、指针等数据直接存储在对象的 ISA 指针中，从而节省了内存空间。这种方案的优点是可以在不使用堆内存的情况下存储小对象，因此可以避免一些内存分配和释放的开销，提高程序的性能。</p>
<h2 id="nonpointer-isa" tabindex="-1"><a class="header-anchor" href="#nonpointer-isa" aria-hidden="true">#</a> NONPOINTER_ISA</h2>
<p>在64位架构下，每个指针占用的内存空间变成了8个字节（64位），然而一个对象的ISA指针中只需要40个比特位（5个字节）就能存储完整的指针地址，这就造成了3个字节的内存浪费。苹果为了提高内存利用率，将这3个字节用于存储一些与内存管理相关的信息，从而产生了非指针型的ISA。<br></p>
<p>这些额外存储的信息包括：</p>
<ul>
<li>引用计数的相关信息，包括retain计数、weak计数、标记等</li>
<li>是否使用了弱引用</li>
<li>是否使用了ARC等内存管理方式</li>
<li>对象的类别信息等
这些信息都存储在了ISA指针中，因此就不需要再额外分配空间来存储这些信息，节省了内存空间。</li>
</ul>
<h2 id="散列表" tabindex="-1"><a class="header-anchor" href="#散列表" aria-hidden="true">#</a> 散列表</h2>
<p>散列表是一种复杂的数据结构，包括了引用计数表和若引用表。引用计数表记录了当前对象的引用计数值，若引用表记录了当前对象被谁所持有。散列表中的每个表项都指向一个对象，表项的位置是根据对象的地址计算得到的。<br></p>
<p>散列表的实现方式是将每个对象的ISA指针指向散列表中的对应表项。这样，每次对对象进行引用计数或者引用关系的修改时，只需要修改散列表中对应表项的引用计数或者若引用表项，而不需要修改每个指向该对象的指针。<br></p>
<h3 id="散列表数据结构" tabindex="-1"><a class="header-anchor" href="#散列表数据结构" aria-hidden="true">#</a> 散列表数据结构</h3>
<p>散列表是iOS内存管理中的一个重要数据结构，用于记录对象的引用计数以及引用关系。在散列表中，每个表项对应着一个对象，表项的位置是根据对象的地址计算得到的。散列表的实现采用了两张表，一张是引用计数表，另一张是若引用表。这两张表都是通过指针实现的，其中引用计数表中的每个表项都指向一个引用计数结构体，若引用表中的每个表项则指向一个数组，该数组用于记录当前对象被哪些对象所持有。</p>
<h4 id="散列表数据结构定义" tabindex="-1"><a class="header-anchor" href="#散列表数据结构定义" aria-hidden="true">#</a> 散列表数据结构定义</h4>
<p>在 <a href="http://objc-runtime-new.mm" target="_blank" rel="noopener noreferrer">objc-runtime-new.mm<ExternalLinkIcon/></a> 文件中，我们可以找到散列表的数据结构定义：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">SideTable</span> <span class="token punctuation">{</span>
    RefcountMap refcnts<span class="token punctuation">;</span>    <span class="token comment">// 引用计数表</span>
    <span class="token class-name">weak_table_t</span> weak_table<span class="token punctuation">;</span>  <span class="token comment">// 弱引用表</span>
    <span class="token class-name">strong_table_t</span> strong_table<span class="token punctuation">;</span>  <span class="token comment">// 强引用表</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，RefcountMap 是引用计数表的类型定义，weak_table_t 和 strong_table_t 是若引用表和引用计数表的类型定义。</p>
<h4 id="引用计数表" tabindex="-1"><a class="header-anchor" href="#引用计数表" aria-hidden="true">#</a> 引用计数表</h4>
<p>引用计数表中记录了每个对象的引用计数，以及该对象是否处于“待释放”状态。待释放状态的对象引用计数为 0，但是还未被真正释放。若对象引用计数再次增加，该状态将被清除。<br></p>
<p>RefcountMap 类型定义如下：</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">refcnt_entry_t</span> <span class="token punctuation">{</span>
    <span class="token keyword">union</span> <span class="token punctuation">{</span>
        uintptr_t refcnt<span class="token punctuation">;</span>
        uintptr_t layoutAndRefCount<span class="token punctuation">;</span> <span class="token comment">// Used by layout bitmap.</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    uintptr_t weakly_referenced <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    uintptr_t deallocating <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
    uintptr_t spare <span class="token operator">:</span> BITS_PER_WORD<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> refcnt_entry_t<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">RefcountMap</span> <span class="token punctuation">{</span>
    <span class="token function">RefcountMap</span><span class="token punctuation">(</span><span class="token keyword">const</span> RefcountMap<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    RefcountMap<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> RefcountMap<span class="token operator">&amp;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，refcnt_entry_t 结构体记录了对象的引用计数、是否被弱引用，以及是否处于“待释放”状态。RefcountMap 类中，还包含了散列表的头指针、散列表元素数量、散列表容量等信息。<br></p>
<p>引用计数表的工作原理如下：</p>
<ul>
<li>初始化：在程序启动时，Objective-C 会创建若干个 SideTable，每个 SideTable 可以存储多个对象的引用计数。</li>
<li>对象创建：当一个对象被创建时，Objective-C 会为它分配内存，并将它的引用计数初始化为 1。同时，Objective-C 会计算出这个对象的内存地址，并通过哈希函数将它映射到某个 SideTable 的某个 Entry 中。</li>
<li>对象引用：当一个指针指向一个对象时，Objective-C 会根据这个对象的内存地址计算出它所在的 SideTable 和 Entry，然后将这个 Entry 中的引用计数加 1。</li>
<li>对象释放：当一个对象的引用计数减少到 0 时，Objective-C 会自动释放这个对象。系统会将这个对象从它所在的 Entry 中删除，并递归遍历所有指向这个对象的指针，将它们设置为 nil，以避免野指针的出现。</li>
</ul>
<h4 id="弱引用表" tabindex="-1"><a class="header-anchor" href="#弱引用表" aria-hidden="true">#</a> 弱引用表</h4>
<p>在使用 __weak 修饰符定义的弱引用中，一个对象被释放后，其弱引用会被自动置为 nil。弱引用表就是记录这些弱引用的表格。<br></p>
<p>弱引用表是用来管理对象的弱引用的数据结构，主要用于解决循环引用的问题。在 Swift 中，弱引用表的数据结构为 WeakSet，是一种哈希表，可以快速地查找对象的弱引用。弱引用表中存储的是对象的弱引用，当对象被释放后，弱引用表中的弱引用也会被自动移除。<br></p>
<p>弱引用表的工作原理与引用计数表类似，只是存储的是对象的弱引用。当一个对象被添加到弱引用表中时，会创建一个弱引用对象，将弱引用对象添加到弱引用表中，并将对象的弱引用指向这个弱引用对象。当对象被释放时，它的弱引用对象会被销毁，同时也会从弱引用表中移除这个弱引用对象。<br></p>
<p>当需要访问对象的弱引用时，可以通过对象的内存地址计算出它在弱引用表中的索引，然后直接访问相应的弱引用对象。如果弱引用对象不存在，说明对象已经被释放，那么就需要执行相应的回调操作，以处理对象被释放的情况。<br></p>
<p>需要注意的是，弱引用表中存储的是弱引用，因此不能直接使用弱引用表中存储的对象，需要通过弱引用对象获取到原始对象。此外，由于弱引用表中存储的是弱引用对象，而不是原始对象，因此弱引用表的内存管理也需要特别注意，避免出现内存泄漏或野指针等问题。<br></p>
<p>总之，弱引用表是一种用于管理对象的弱引用的数据结构，通过将对象的弱引用存储到哈希表中，可以快速地查找对象的弱引用，并在对象被释放后自动移除相应的弱引用。在 Swift 中，弱引用表的数据结构为 WeakSet，通过计算对象的内存地址来获取相应的索引，实现了快速的查找和访问。<br></p>
</div></template>


