export const data = JSON.parse("{\"key\":\"v-2c86d487\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/26.html\",\"title\":\"alloc 与 init\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2020-7-12\",\"description\":\"alloc 与 init Objective-C 中，alloc 和 init 方法经常一起使用来创建对象 alloc 方法会分配内存空间来存储对象，返回指向该内存空间的指针。这个空间中的值是未定义的，需要使用 init 方法来初始化对象的状态。 init 方法则是用来初始化对象的状态。它会在对象的内存空间被分配之后立即被调用。通过设置实例变量的初始值、分配和设置默认的资源以及执行其他必要的初始化操作，它可以确保新对象的状态是一致的并且可用的。 需要注意的是，alloc 方法只是用来分配内存空间，它并不会初始化对象的状态，因此在使用 alloc 方法创建对象时，必须使用 init 方法来初始化该对象。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/26.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"夏日的瓜牛\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"alloc 与 init\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"alloc 与 init Objective-C 中，alloc 和 init 方法经常一起使用来创建对象 alloc 方法会分配内存空间来存储对象，返回指向该内存空间的指针。这个空间中的值是未定义的，需要使用 init 方法来初始化对象的状态。 init 方法则是用来初始化对象的状态。它会在对象的内存空间被分配之后立即被调用。通过设置实例变量的初始值、分配和设置默认的资源以及执行其他必要的初始化操作，它可以确保新对象的状态是一致的并且可用的。 需要注意的是，alloc 方法只是用来分配内存空间，它并不会初始化对象的状态，因此在使用 alloc 方法创建对象时，必须使用 init 方法来初始化该对象。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-07-11T16:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"alloc 与 init\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-07-11T16:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.22,\"words\":365},\"filePathRelative\":\"开发/『iOS』/26.md\",\"localizedDate\":\"2020年7月12日\",\"excerpt\":\"<h1> alloc 与 init</h1>\\n<p>Objective-C 中，alloc 和 init 方法经常一起使用来创建对象<br></p>\\n<ul>\\n<li>alloc 方法会分配内存空间来存储对象，返回指向该内存空间的指针。这个空间中的值是未定义的，需要使用 init 方法来初始化对象的状态。</li>\\n<li>init 方法则是用来初始化对象的状态。它会在对象的内存空间被分配之后立即被调用。通过设置实例变量的初始值、分配和设置默认的资源以及执行其他必要的初始化操作，它可以确保新对象的状态是一致的并且可用的。</li>\\n</ul>\\n<p>需要注意的是，alloc 方法只是用来分配内存空间，它并不会初始化对象的状态，因此在使用 alloc 方法创建对象时，必须使用 init 方法来初始化该对象。</p>\",\"autoDesc\":true}")

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
