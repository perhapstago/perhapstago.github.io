import{_ as l,X as e,Y as c,a2 as i}from"./framework-8575b556.js";const n={},o=i(`<h1 id="block种类" tabindex="-1"><a class="header-anchor" href="#block种类" aria-hidden="true">#</a> Block种类</h1><p>在 Objective-C 中，Block 是一种带有自动捕获变量的匿名函数。Block 可以在定义时捕获其外部作用域中的变量，并将这些变量保存在 Block 结构体中。当调用 Block 时，它会从结构体中获取这些变量，并执行函数体中的代码。Block 的定义形式如下：</p><div class="language-objective line-numbers-mode" data-ext="objective"><pre class="language-objective"><code>^return_type (arguments) {
    // code
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Block 的定义中，^ 符号表示它是一个 Block，return_type 表示 Block 的返回类型，arguments 表示 Block 的参数列表，code 表示 Block 的函数体。</p><h2 id="nsstackblock" tabindex="-1"><a class="header-anchor" href="#nsstackblock" aria-hidden="true">#</a> NSStackBlock</h2><p>NSStackBlock 是一种将 Block 对象分配在栈上的 Block。特点是在定义的作用域内有效，一旦作用域结束，Block 对象就会被销毁。<br></p><p>下面是一个使用 NSStackBlock 的示例：</p><div class="language-objective line-numbers-mode" data-ext="objective"><pre class="language-objective"><code>void test() {
    int num = 100;
    void(^myBlock)(void) = ^{
        NSLog(@&quot;num=%d&quot;, num);
    };
    myBlock();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为 myBlock 的 NSStackBlock，并在其中捕获了变量 num。当我们调用 myBlock 时，它会输出变量 num 的值，即 100。<br></p><p>需要注意的是，由于 NSStackBlock 是在栈上分配的，所以它的生命周期与作用域密切相关。一旦作用域结束，NSStackBlock 对象就会被销毁，而且如果我们在作用域结束后继续调用这个 Block，就会导致程序崩溃。</p><h2 id="nsmallocblock" tabindex="-1"><a class="header-anchor" href="#nsmallocblock" aria-hidden="true">#</a> NSMallocBlock</h2><p>NSMallocBlock 是一种将 Block 对象分配在堆上的 Block。特点是在定义的作用域外仍然有效，可以在其他作用域中使用，并且不会被随意销毁。<br></p><p>下面是一个使用 NSMallocBlock 的示例：</p><div class="language-objective line-numbers-mode" data-ext="objective"><pre class="language-objective"><code>typedef void(^MyBlock)(void);

MyBlock getBlock() {
    int num = 100;
    MyBlock block = ^{
        NSLog(@&quot;num=%d&quot;, num);
    };
    return block;
}

void test() {
    MyBlock myBlock = getBlock();
    myBlock();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为 myBlock 的 NSMallocBlock，并将它作为函数的返回值返回。在 test 函数中获取了这个 Block，并调用了它需要注意的是，由于 NSMallocBlock 是在堆上分配的，所以它的生命周期不会受限于作用域。也就是说，如果在其他作用域中调用这个 Block，它依然有效。<br></p><p>此外，由于 NSMallocBlock 是在堆上分配的，所以需要手动管理内存。当不再需要使用这个 Block 时，需要调用 Block_release 函数来释放它所占用的内存。</p><h2 id="nsglobalblock" tabindex="-1"><a class="header-anchor" href="#nsglobalblock" aria-hidden="true">#</a> NSGlobalBlock</h2><p>NSGlobalBlock 是一种不需要捕获外部变量的 Block，特点是在程序运行期间一直存在，不会被销毁。NSGlobalBlock 可以被多个线程同时调用，并且不需要考虑线程安全的问题。<br></p><p>下面是一个使用 NSGlobalBlock 的示例：</p><div class="language-objective line-numbers-mode" data-ext="objective"><pre class="language-objective"><code>void test() {
    void(^myBlock)(void) = ^{
        NSLog(@&quot;Hello, world!&quot;);
    };
    myBlock = [myBlock copy];
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        myBlock();
    });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为 myBlock 的 NSGlobalBlock，并在异步线程中调用它。需要注意的是，由于 NSGlobalBlock 是全局的，所以不需要考虑它的生命周期，也不需要手动释放内存。</p><p>##总结 NSStackBlock、NSMallocBlock 和 NSGlobalBlock 是 Block 的三种不同类型，它们分别在栈上、堆上和全局区分配 Block 对象。NSStackBlock 的生命周期受限于作用域，NSMallocBlock 可以在作用域外继续使用，需要手动释放内存，而 NSGlobalBlock 是全局的，不需要考虑生命周期和内存管理的问题。</p>`,22),a=[o];function d(s,v){return e(),c("div",null,a)}const t=l(n,[["render",d],["__file","17.html.vue"]]);export{t as default};
