<template><div><h1 id="isequal-isequaltostring" tabindex="-1"><a class="header-anchor" href="#isequal-isequaltostring" aria-hidden="true">#</a> isEqual,isEqualToString,==</h1>
<ul>
<li>
<p>isEqual
默认情况下是比较两个对象的内存地址；isEqual：就是提供了一个可以自定义相等标准的方法。
系统自带的类(比如 Foundation 中 的 NSString, NSArray 等)重写了这个方法，改变了这个方法的判断规则，一般改为比较两个对象的内容，不是内存地址.</p>
</li>
<li>
<p>isEqualToString
字符串比较，只比较字符串本身的内容是否一致，不比较内存地址.</p>
</li>
<li>
<p>==
两个对象的内存地址是一样，返回true，如果内存地址不一样，返回false.</p>
</li>
</ul>
</div></template>


