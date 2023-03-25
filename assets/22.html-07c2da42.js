const e=JSON.parse('{"key":"v-25b3720b","path":"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/22.html","title":"UIViewController 生命周期","lang":"zh-CN","frontmatter":{"date":"2018-11-17T00:00:00.000Z","description":"UIViewController 生命周期 init UIViewController 对象被创建，并进行一些基本的初始化操作。开发者可以在这个阶段对 UIViewController 进行一些基本的设置和初始化，但是应该避免访问界面相关的属性和方法，因为这些属性和方法尚未被加载。 loadView UIViewController 的 view 被创建。开发者可以通过重写 loadView 方法来自定义 view 的创建过程。如果没有重写 loadView 方法，则默认会创建一个空的 UIView 对象，并将其作为 view 属性赋值给 UIViewController。 viewDidLoad UIViewController 的 view 已经被创建，但还没有被添加到视图层次结构中。开发者可以在这个阶段进行一些初始化工作，如设置界面元素的属性等。在这个阶段，view 的大小已经被确定，但是子视图还没有被创建。 viewWillAppear UIViewController 的 view 即将被添加到视图层次结构中。在这个阶段，开发者可以对将要显示的界面进行最后的准备工作，如设置界面元素的位置和动画等。 viewDidAppear UIViewController 的 view 已经完全显示在屏幕上。在这个阶段，开发者可以执行一些界面相关的操作，如加载网络数据或者启动定时器等。 viewWillDisappear 和 viewDidDisappear UIViewController 的 view 即将被移除或已经被移除。在这个阶段，开发者可以执行一些资源释放的操作，如取消网络请求或停止定时器等。","head":[["meta",{"property":"og:url","content":"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/22.html"}],["meta",{"property":"og:site_name","content":"夏日的瓜牛"}],["meta",{"property":"og:title","content":"UIViewController 生命周期"}],["meta",{"property":"og:description","content":"UIViewController 生命周期 init UIViewController 对象被创建，并进行一些基本的初始化操作。开发者可以在这个阶段对 UIViewController 进行一些基本的设置和初始化，但是应该避免访问界面相关的属性和方法，因为这些属性和方法尚未被加载。 loadView UIViewController 的 view 被创建。开发者可以通过重写 loadView 方法来自定义 view 的创建过程。如果没有重写 loadView 方法，则默认会创建一个空的 UIView 对象，并将其作为 view 属性赋值给 UIViewController。 viewDidLoad UIViewController 的 view 已经被创建，但还没有被添加到视图层次结构中。开发者可以在这个阶段进行一些初始化工作，如设置界面元素的属性等。在这个阶段，view 的大小已经被确定，但是子视图还没有被创建。 viewWillAppear UIViewController 的 view 即将被添加到视图层次结构中。在这个阶段，开发者可以对将要显示的界面进行最后的准备工作，如设置界面元素的位置和动画等。 viewDidAppear UIViewController 的 view 已经完全显示在屏幕上。在这个阶段，开发者可以执行一些界面相关的操作，如加载网络数据或者启动定时器等。 viewWillDisappear 和 viewDidDisappear UIViewController 的 view 即将被移除或已经被移除。在这个阶段，开发者可以执行一些资源释放的操作，如取消网络请求或停止定时器等。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-24T06:52:03.000Z"}],["meta",{"property":"article:published_time","content":"2018-11-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-24T06:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UIViewController 生命周期\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-11-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-24T06:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1679640723000,"updatedTime":1679640723000,"contributors":[{"name":"perhapsdone","email":"","commits":1}]},"readingTime":{"minutes":2.46,"words":737},"filePathRelative":"开发/『iOS』/22.md","localizedDate":"2018年11月17日","excerpt":"<h1> UIViewController 生命周期</h1>\\n<ul>\\n<li>\\n<p>init\\nUIViewController 对象被创建，并进行一些基本的初始化操作。开发者可以在这个阶段对 UIViewController 进行一些基本的设置和初始化，但是应该避免访问界面相关的属性和方法，因为这些属性和方法尚未被加载。</p>\\n</li>\\n<li>\\n<p>loadView\\nUIViewController 的 view 被创建。开发者可以通过重写 loadView 方法来自定义 view 的创建过程。如果没有重写 loadView 方法，则默认会创建一个空的 UIView 对象，并将其作为 view 属性赋值给 UIViewController。</p>\\n</li>\\n<li>\\n<p>viewDidLoad\\nUIViewController 的 view 已经被创建，但还没有被添加到视图层次结构中。开发者可以在这个阶段进行一些初始化工作，如设置界面元素的属性等。在这个阶段，view 的大小已经被确定，但是子视图还没有被创建。</p>\\n</li>\\n<li>\\n<p>viewWillAppear\\nUIViewController 的 view 即将被添加到视图层次结构中。在这个阶段，开发者可以对将要显示的界面进行最后的准备工作，如设置界面元素的位置和动画等。</p>\\n</li>\\n<li>\\n<p>viewDidAppear\\nUIViewController 的 view 已经完全显示在屏幕上。在这个阶段，开发者可以执行一些界面相关的操作，如加载网络数据或者启动定时器等。</p>\\n</li>\\n<li>\\n<p>viewWillDisappear 和 viewDidDisappear\\nUIViewController 的 view 即将被移除或已经被移除。在这个阶段，开发者可以执行一些资源释放的操作，如取消网络请求或停止定时器等。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
