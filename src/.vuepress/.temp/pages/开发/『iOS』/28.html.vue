<template><div><h1 id="sel和method和im" tabindex="-1"><a class="header-anchor" href="#sel和method和im" aria-hidden="true">#</a> SEL和Method和IM</h1>
<p>SEL是方法名称，Method包含方法名称、参数类型和返回类型等信息，IMP是实际执行方法代码的函数指针。</p>
<h2 id="sel-选择器" tabindex="-1"><a class="header-anchor" href="#sel-选择器" aria-hidden="true">#</a> SEL（选择器）</h2>
<p>用于表示一个方法的名称。每个方法都有一个唯一的SEL，它是在运行时动态创建的。当使用对象发送消息时，实际上是通过SEL来调用方法。<br></p>
<p>例如，如果有一个方法叫做doSomething，那么它对应的SEL就是@selector(doSomething)。在发送消息时，可以使用这个SEL来调用doSomething方法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>SEL funcSelector = @selector(func);
[obj performSelector:funcSelector];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="method-方法" tabindex="-1"><a class="header-anchor" href="#method-方法" aria-hidden="true">#</a> Method（方法）</h2>
<p>表示一个方法的数据结构，包含方法名称（SEL）、返回类型、参数类型和方法实现的指针。在Objective-C中，方法调用是通过消息传递机制实现的，即发送消息给对象时会查找对应的方法，然后执行该方法的实现。<br></p>
<p>在Objective-C中，可以通过运行时库（Runtime Library）的方法获取一个类中的所有方法：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>unsigned int count;
Method *methods = class_copyMethodList([MyClass class], &amp;count);
for (int i = 0; i &lt; count; i++) {
    Method method = methods[i];
    SEL selector = method_getName(method);
    NSLog(@"method name: %@", NSStringFromSelector(selector));
}
free(methods);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="imp-实现指针" tabindex="-1"><a class="header-anchor" href="#imp-实现指针" aria-hidden="true">#</a> IMP（实现指针）</h2>
<p>IMP是Objective-C中的一个概念，它代表着一个指向方法实现的函数指针。在Objective-C中，每个方法都有一个对应的IMP，用于实际执行方法的代码。当使用对象发送消息时，实际上是通过SEL查找对应的Method，然后获取该Method对应的IMP，最终执行该IMP中的代码。<br></p>
<p>在Objective-C中，可以通过method_getImplementation函数获取一个Method对应的IMP，例如：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>IMP imp = method_getImplementation(someMethod);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里somemethod是一个Method对象。通过method_getImplementation函数可以获取该Method对应的IMP，然后可以通过函数指针调用该IMP实现的方法。<br></p>
<p>需要注意的是，IMP只是一个指向函数实现的指针，它并不包含方法的名称、返回类型和参数类型等信息。方法的完整描述信息包含在Method对象中。因此，在使用IMP调用方法时，需要保证方法的参数和返回值类型与函数指针所指向的函数实现一致。</p>
</div></template>


