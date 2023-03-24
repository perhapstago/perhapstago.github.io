export const data = JSON.parse("{\"key\":\"v-291d2349\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/24.html\",\"title\":\"常见循环引用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2019-2-06\",\"description\":\"常见循环引用 block self将block作为自己的属性变量，而在block的方法体里面又引用了 self 本身，此时就很简单的形成了一个循环引用。 __weak typeof(self) weakSelf = self; __strong typeof (weakSelf) strongSelf = weakSelf; Delegate @property (nonatomic, weak) id NSTimer NSTimer 的 target 对传入的参数都是强引用（即使是 weak 对象） 解决：strong 改为 weak\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/24.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"夏日的瓜牛\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"常见循环引用\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"常见循环引用 block self将block作为自己的属性变量，而在block的方法体里面又引用了 self 本身，此时就很简单的形成了一个循环引用。 __weak typeof(self) weakSelf = self; __strong typeof (weakSelf) strongSelf = weakSelf; Delegate @property (nonatomic, weak) id NSTimer NSTimer 的 target 对传入的参数都是强引用（即使是 weak 对象） 解决：strong 改为 weak\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-02-05T16:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"常见循环引用\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-02-05T16:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"block\",\"slug\":\"block\",\"link\":\"#block\",\"children\":[]},{\"level\":2,\"title\":\"Delegate\",\"slug\":\"delegate\",\"link\":\"#delegate\",\"children\":[]},{\"level\":2,\"title\":\"NSTimer\",\"slug\":\"nstimer\",\"link\":\"#nstimer\",\"children\":[]},{\"level\":2,\"title\":\"父类与子类\",\"slug\":\"父类与子类\",\"link\":\"#父类与子类\",\"children\":[]}],\"readingTime\":{\"minutes\":0.56,\"words\":169},\"filePathRelative\":\"开发/『iOS』/24.md\",\"localizedDate\":\"2019年2月6日\",\"excerpt\":\"<h1> 常见循环引用</h1>\\n<h2> block</h2>\\n<p>self将block作为自己的属性变量，而在block的方法体里面又引用了 self 本身，此时就很简单的形成了一个循环引用。\\n__weak typeof(self) weakSelf = self;\\n__strong typeof (weakSelf) strongSelf = weakSelf;</p>\\n<h2> Delegate</h2>\\n<p>@property (nonatomic, weak) id </p>\\n<h2> NSTimer</h2>\\n<p>NSTimer 的 target 对传入的参数都是强引用（即使是 weak 对象）\\n解决：strong 改为 weak</p>\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
