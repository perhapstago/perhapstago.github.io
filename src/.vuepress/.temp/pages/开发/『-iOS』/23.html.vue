<template><div><h1 id="ismemberofclass-、-iskindofclass和-issubclassofclass" tabindex="-1"><a class="header-anchor" href="#ismemberofclass-、-iskindofclass和-issubclassofclass" aria-hidden="true">#</a> isMemberOfClass 、 isKindOfClass和 isSubclassOfClass</h1>
<p>isMemberOfClass, isKindOfClass, 和 isSubclassOfClass 是 Objective-C 和 Swift 中用于检查对象类型的方法。<br></p>
<p>这三个方法都是用来判断一个对象的类型，即判断一个对象是否是某个类或其子类的实例。</p>
<ul>
<li>isMemberOfClass 用于检查对象是否是指定类的实例，不包括子类。如果该对象是指定类的实例，则返回 YES，否则返回 NO。</li>
<li>isKindOfClass 用于检查对象是否是指定类或其子类的实例。如果该对象是指定类或其子类的实例，则返回 YES，否则返回 NO。</li>
<li>isSubclassOfClass 用于检查一个类是否是另一个类的子类。如果该类是另一个类的子类，则返回 YES，否则返回 NO。</li>
</ul>
<p>三者的主要区别在于检查的对象类型不同，isMemberOfClass 和 isKindOfClass 都是用来检查对象的实例类型，而 isSubclassOfClass 是用来检查类的类型。</p>
</div></template>


