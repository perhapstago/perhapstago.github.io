<template><div><h1 id="三个方法区分" tabindex="-1"><a class="header-anchor" href="#三个方法区分" aria-hidden="true">#</a> 三个方法区分</h1>
<p>initWithCode、awakaFromNib、initWithNibName 这三个方法都是用于创建 UIViewController 的初始化方法：</p>
<h2 id="initwithcoder" tabindex="-1"><a class="header-anchor" href="#initwithcoder" aria-hidden="true">#</a> initWithCoder:</h2>
<p>这是一个 NSCoding 协议中定义的方法，用于从归档数据中解码并初始化对象。在使用 Interface Builder 设计 UI 界面时，会将 UIViewController 对象编码为归档数据，并在运行时进行解码初始化。因此，当我们使用 Interface Builder 设计 UI 界面时，通常会使用这个方法来初始化 UIViewController 对象。</p>
<h2 id="awakefromnib" tabindex="-1"><a class="header-anchor" href="#awakefromnib" aria-hidden="true">#</a> awakeFromNib</h2>
<p>这个方法是一个 NSObject 协议中定义的方法，在从 Nib 文件中加载对象时会被自动调用。在使用 Nib 文件设计 UI 界面时，可以将 UIViewController 对象连接到 Nib 文件中，并在运行时进行加载和初始化。因此使用 Nib 文件设计 UI 界面时，通常会在这个方法中进行一些初始化操作，比如设置默认属性值、添加子视图等。</p>
<h2 id="initwithnibname-bundle" tabindex="-1"><a class="header-anchor" href="#initwithnibname-bundle" aria-hidden="true">#</a> initWithNibName:bundle:</h2>
<p>这个方法是手动加载 Nib 文件的方法，它会创建一个 UIViewController 对象，并将其与指定的 Nib 文件相关联。可以通过这个方法来手动创建一个 UIViewController 对象，并在其中加载一个 Nib 文件来实现 UI 界面的设计。通常在需要在代码中动态加载 UI 界面时使用这个方法。</p>
<h2 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h2>
<ul>
<li>initWithCoder: 和 awakeFromNib 都是用于在 Interface Builder 或 Nib 文件中创建 UIViewController 对象时调用的，而 initWithNibName:bundle: 则是用于手动创建 UIViewController 对象时使用的。</li>
<li>initWithCoder: 是 NSCoding 协议中的一个方法，用于从归档数据中解码并初始化对象；而 awakeFromNib 则是 NSObject 协议中的一个方法，用于在从 Nib 文件中加载对象时进行初始化。它们的调用时机和用途不同。</li>
<li>initWithNibName:bundle: 是手动加载 Nib 文件的方法，可以用于手动创建 UIViewController 对象并在其中加载一个 Nib 文件来实现 UI 界面的设计。</li>
</ul>
</div></template>


