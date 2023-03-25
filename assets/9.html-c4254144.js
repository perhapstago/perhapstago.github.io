import{_ as e,X as i,Y as a,Z as n}from"./framework-8d4f7cb8.js";const d={},r=n(`<h1 id="用-gcd-实现多读单写" tabindex="-1"><a class="header-anchor" href="#用-gcd-实现多读单写" aria-hidden="true">#</a> 用 GCD 实现多读单写</h1><p>在并发编程中，多读单写（Multiple Readers, Single Writer，缩写为MRSW）是一个常见的场景，也是一个经典的问题。在这种情况下，允许多个线程同时读取某个共享资源，但是只允许一个线程进行写入。多读单写是一种常见的优化技术，可以显著提高并发程序的性能和吞吐量。</p><h2 id="多读单写问题" tabindex="-1"><a class="header-anchor" href="#多读单写问题" aria-hidden="true">#</a> 多读单写问题</h2><p>多读单写问题是一种典型的共享资源问题。在多线程环境下，多个线程同时访问共享资源可能会导致不一致的结果。在MRSW问题中，多个线程可以同时读取共享资源，但是只允许一个线程进行写入。在这种情况下，需要确保在写入期间没有线程正在读取或写入该资源。 <br></p><p>常见的MRSW问题解决方案包括使用互斥锁和读写锁。然而，使用互斥锁和读写锁需要手动管理锁的获取和释放，容易导致死锁和性能问题。而使用GCD可以更方便地实现MRSW问题的解决方案，避免了手动管理锁的繁琐过程。</p><h3 id="gcd-实现多读单写" tabindex="-1"><a class="header-anchor" href="#gcd-实现多读单写" aria-hidden="true">#</a> GCD 实现多读单写</h3><p>在GCD中，可以使用dispatch_barrier_async函数实现多读单写。这个函数会在所有已有任务执行完毕后才会执行，而且在执行时会阻止其他并发执行的任务。这意味着在执行写入操作时，其他所有任务都将暂停执行，直到写入操作完成为止。这样就可以确保在写入期间没有线程正在读取或写入共享资源。<br></p><p>使用GCD实现多读单写的示例代码：</p><div class="language-objective line-numbers-mode" data-ext="objective"><pre class="language-objective"><code>// 创建并发队列
dispatch_queue_t queue = dispatch_queue_create(&quot;com.example.queue&quot;, DISPATCH_QUEUE_CONCURRENT);

// 共享资源
NSMutableArray *array = [NSMutableArray array];

// 读取共享资源
dispatch_async(queue, ^{
    NSArray *snapshot = nil;
    @synchronized(array) {
        snapshot = [array copy];
    }
    // 对共享资源进行读取操作
});

// 写入共享资源
dispatch_barrier_async(queue,
^{
@synchronized(array) {
// 对共享资源进行写入操作
}
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>dispatch_queue_create</code>函数创建了一个并发队列，这个队列可以同时执行多个任务。共享资源是一个NSMutableArray类型的数组。读取操作使用<code>dispatch_async</code>函数将读取任务添加到队列中，而写入操作使用<code>dispatch_barrier_async</code>函数将写入任务添加到队列中。<code>dispatch_barrier_async</code>函数的作用是创建一个屏障，确保在执行写入操作时没有其他任务正在执行。这样就可以避免读取和写入操作之间的冲突，确保共享资源的一致性。<br></p><p>读取操作使用<code>synchronized</code>关键字对共享资源进行同步，确保读取操作的原子性和线程安全性。在读取操作中，先创建一个快照（即一个不可变的NSArray类型的副本），然后对快照进行读取操作。这样可以避免在读取操作期间其他线程修改共享资源而导致数据不一致。<br></p><p>写入操作也使用<code>synchronized</code>关键字对共享资源进行同步，确保写入操作的原子性和线程安全性。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>在多线程编程中，多读单写是一个常见的优化技术，可以显著提高并发程序的性能和吞吐量。GCD提供了一种简单易用的方式来管理线程和队列，通过把任务分配给多个线程并在需要时创建新线程来实现高效的并发执行。使用GCD可以更方便地实现MRSW问题的解决方案，避免了手动管理锁的繁琐过程。</p>`,14),s=[r];function c(l,u){return i(),a("div",null,s)}const v=e(d,[["render",c],["__file","9.html.vue"]]);export{v as default};
