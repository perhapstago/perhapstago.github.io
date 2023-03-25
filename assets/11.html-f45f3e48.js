import{_ as n,X as s,Y as a,a2 as e}from"./framework-8575b556.js";const o={},p=e(`<h1 id="block循环引用" tabindex="-1"><a class="header-anchor" href="#block循环引用" aria-hidden="true">#</a> Block循环引用</h1><p>在Objective-C中，Block是一种类似于匿名函数的语法结构，它可以用来封装一段代码，并在需要时执行该代码。尽管Block提供了便利的语法结构，但是在实际使用中，我们经常会遇到一个问题，即Block循环引用。</p><p>Block循环引用是指在Block内部捕获了一个对象，并且该对象又持有了该Block，从而导致两者互相持有，无法释放内存。这个问题不仅会导致内存泄漏，还会影响程序的性能和稳定性。</p><h2 id="block的本质" tabindex="-1"><a class="header-anchor" href="#block的本质" aria-hidden="true">#</a> Block的本质</h2><p>在深入探讨Block循环引用之前需要了解一下Block的本质。在Objective-C中，Block实际上是一种OC对象，它是由以下三个部分组成的：</p><ul><li><p>函数指针：指向实际要执行的代码。</p></li><li><p>Block descriptor：描述Block的内存布局和引用的对象。</p></li><li><p>Block invoke function：执行Block的函数。 其中，Block descriptor是关键部分，它包含了Block的内存布局和Block捕获的对象信息。具体来说，Block descriptor包含了以下信息：</p></li><li><p>Block的引用计数。</p></li><li><p>Block的标志位，用于标识Block的一些特性，例如是否为全局Block、是否为栈上Block等。</p></li><li><p>Block捕获的对象信息，包括捕获的对象数量、对象类型和对象的值。 在实际使用中，Block会自动捕获其所在函数的局部变量，这些局部变量会作为Block的捕获对象，存储在Block descriptor中。</p></li></ul><h2 id="block循环引用的原因" tabindex="-1"><a class="header-anchor" href="#block循环引用的原因" aria-hidden="true">#</a> Block循环引用的原因</h2><p>由于Block descriptor中包含了Block捕获的对象信息，因此如果Block内部捕获了一个对象，并且该对象又持有了该Block，就会导致两者互相持有，从而产生循环引用。这个问题可以通过以下示例代码来说明：</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>block<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>dealloc <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;Person dealloc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> ViewController

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>viewDidLoad <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token keyword">super</span> viewDidLoad<span class="token punctuation">]</span><span class="token punctuation">;</span>
    Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Person alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span>block <span class="token operator">=</span> <span class="token operator">^</span><span class="token punctuation">{</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个Person对象，并将一个Block赋值给其属性block。这个Block内部捕获了person对象，而person对象又持有了这个Block，从而产生了循环引用。在这种情况下，即使我们将person对象设置为nil，它也无法被释放，因为Block仍然持有了person对象。</p><h2 id="解决循环引用的方法" tabindex="-1"><a class="header-anchor" href="#解决循环引用的方法" aria-hidden="true">#</a> 解决循环引用的方法</h2><p>为了解决Block循环引用问题，我们需要避免在Block内部捕获持有Block的对象。下面介绍两种常用的解决方法。</p><h3 id="weak" tabindex="-1"><a class="header-anchor" href="#weak" aria-hidden="true">#</a> __weak</h3><p>在Block内部使用__weak指针可以解决循环引用问题。__weak指针是一种弱引用，它可以指向一个对象，但不会增加该对象的引用计数。当被指向的对象被释放时，__weak指针会自动置为nil。</p><p>以下是使用__weak指针解决循环引用的示例代码：</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>block<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>dealloc <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;Person dealloc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> ViewController

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>viewDidLoad <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token keyword">super</span> viewDidLoad<span class="token punctuation">]</span><span class="token punctuation">;</span>
    Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Person alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
    __weak <span class="token keyword">typeof</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> weakPerson <span class="token operator">=</span> person<span class="token punctuation">;</span>
    person<span class="token punctuation">.</span>block <span class="token operator">=</span> <span class="token operator">^</span><span class="token punctuation">{</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> weakPerson<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@end 在上述代码中，我们使用__weak指针weakPerson来引用person对象，并在Block内部使用weakPerson来打印person对象。由于weakPerson是弱引用，它不会持有person对象，因此不会产生循环引用。</p><h3 id="block" tabindex="-1"><a class="header-anchor" href="#block" aria-hidden="true">#</a> __block</h3><p>另一种解决循环引用的方法是在Block内部使用__block修饰符来捕获持有Block的对象。__block修饰符是一种特殊的指针类型，它可以让变量在Block内部被修改，并且不会被复制到Block中。</p><p>以下是使用__block修饰符解决循环引用的示例代码：</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="language-objc"><code><span class="token keyword">@interface</span> Person <span class="token punctuation">:</span> NSObject

<span class="token keyword">@property</span> <span class="token punctuation">(</span>nonatomic<span class="token punctuation">,</span> copy<span class="token punctuation">)</span> <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">^</span>block<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> Person

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>dealloc <span class="token punctuation">{</span>
    <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;Person dealloc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>

<span class="token keyword">@implementation</span> ViewController

<span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>viewDidLoad <span class="token punctuation">{</span>
    <span class="token punctuation">[</span><span class="token keyword">super</span> viewDidLoad<span class="token punctuation">]</span><span class="token punctuation">;</span>
    __block Person <span class="token operator">*</span>person <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>Person alloc<span class="token punctuation">]</span> init<span class="token punctuation">]</span><span class="token punctuation">;</span>
    person<span class="token punctuation">.</span>block <span class="token operator">=</span> <span class="token operator">^</span><span class="token punctuation">{</span>
        <span class="token function">NSLog</span><span class="token punctuation">(</span><span class="token string">@&quot;%@&quot;</span><span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
        person <span class="token operator">=</span> nil<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用__block修饰符来捕获person对象，并在Block内部打印person对象。由于使用了__block修饰符，person对象可以在Block内部被修改，从而可以在Block内部将其置为nil，避免了循环引用。</p><h2 id="底层分析block循环引用的原因" tabindex="-1"><a class="header-anchor" href="#底层分析block循环引用的原因" aria-hidden="true">#</a> 底层分析Block循环引用的原因</h2><p>Block 结构体的定义：</p><div class="language-objectivec line-numbers-mode" data-ext="objectivec"><pre class="language-objectivec"><code><span class="token keyword">struct</span> __block_impl <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token operator">*</span>isa<span class="token punctuation">;</span>
  <span class="token keyword">int</span> Flags<span class="token punctuation">;</span>
  <span class="token keyword">int</span> Reserved<span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token operator">*</span>FuncPtr<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> __block_literal <span class="token punctuation">{</span>
  <span class="token keyword">void</span> <span class="token operator">*</span>isa<span class="token punctuation">;</span>
  <span class="token keyword">int</span> Flags<span class="token punctuation">;</span>
  <span class="token keyword">int</span> Reserved<span class="token punctuation">;</span>
  <span class="token keyword">void</span> <span class="token operator">*</span>FuncPtr<span class="token punctuation">;</span>
  <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">int</span> reserved<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">long</span> <span class="token keyword">int</span> Size<span class="token punctuation">;</span>
    <span class="token comment">// 这里是存储捕获变量的结构体</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>copy<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> __block_literal<span class="token operator">*</span><span class="token punctuation">,</span> <span class="token keyword">struct</span> __block_literal<span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token punctuation">(</span><span class="token operator">*</span>dispose<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> __block_literal<span class="token operator">*</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 这里是存储捕获变量的具体值</span>
    <span class="token comment">// 注意：这里的数组长度是通过 Size 计算得到的</span>
    <span class="token keyword">char</span> data<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token operator">*</span>descriptor<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，探讨一下底层是如何实现Block循环引用的。在Objective-C中，对象之间的循环引用通常是通过强引用产生的。在Block循环引用中，强引用主要是由Block捕获对象产生的。<br></p><p>在Block捕获对象时，Block会通过copy函数将捕获的对象复制到堆上，并且将复制后的对象存储在Block descriptor中。由于Block descriptor是一个结构体，它不包含任何引用计数的信息，因此当Block中捕获了一个对象时，该对象的引用计数不会被增加。这意味着如果Block持有一个对象，该对象就可能被Block循环引用。<br></p><p>例如，在上面的示例代码中，当Block持有person对象时，由于Block没有增加person对象的引用计数，person对象就可能被Block循环引用。<br></p><p>为了解决这个问题，Objective-C提供了__weak指针和__block修饰符。使用__weak指针可以避免在Block内部持有对象，从而避免循环引用。使用__block修饰符可以让Block内部修改对象，从而在Block内部将对象置为nil，避免循环引用。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>在Objective-C中，Block是一种强大的语言特性，可以用于实现回调、事件处理等功能。但是，由于Block循环引用的问题，如果不注意使用方式，就容易造成内存泄漏等问题。</p>`,31),t=[p];function c(l,i){return s(),a("div",null,t)}const k=n(o,[["render",c],["__file","11.html.vue"]]);export{k as default};
