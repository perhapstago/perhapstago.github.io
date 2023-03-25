export const data = JSON.parse("{\"key\":\"v-eeb7891a\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/4.html\",\"title\":\"iOS系统下的内存布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2021-12-03T00:00:00.000Z\",\"category\":[\"iOS\"],\"tag\":[\"内存管理\"],\"description\":\"iOS系统下的内存布局 内存布局是指操作系统在进程运行时为其分配内存空间的方式。iOS系统是一款非常流行的移动操作系统，它的内存布局方式对于iOS开发者来说是非常重要的，因为它直接关系到应用程序的性能和稳定性。 内存分配 在iOS系统中，进程的内存空间被划分为几个区域，包括代码段、数据段、堆、栈和BSS段。 代码段：存储应用程序的可执行代码。 数据段：存储全局变量和静态变量。 堆：存储动态分配的内存，包括通过malloc()和new等函数动态分配的内存。 栈：存储函数的参数、局部变量和函数调用的上下文信息。 BSS段：存储未初始化的全局变量和静态变量。 这些区域在进程创建时就被分配好了，而且它们的地址也是固定的。这些区域的大小和位置是由链接器和加载器决定的，而不是应用程序决定的。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/4.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"夏日的瓜牛\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"iOS系统下的内存布局\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"iOS系统下的内存布局 内存布局是指操作系统在进程运行时为其分配内存空间的方式。iOS系统是一款非常流行的移动操作系统，它的内存布局方式对于iOS开发者来说是非常重要的，因为它直接关系到应用程序的性能和稳定性。 内存分配 在iOS系统中，进程的内存空间被划分为几个区域，包括代码段、数据段、堆、栈和BSS段。 代码段：存储应用程序的可执行代码。 数据段：存储全局变量和静态变量。 堆：存储动态分配的内存，包括通过malloc()和new等函数动态分配的内存。 栈：存储函数的参数、局部变量和函数调用的上下文信息。 BSS段：存储未初始化的全局变量和静态变量。 这些区域在进程创建时就被分配好了，而且它们的地址也是固定的。这些区域的大小和位置是由链接器和加载器决定的，而不是应用程序决定的。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"内存管理\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-12-03T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"iOS系统下的内存布局\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-12-03T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"内存分配\",\"slug\":\"内存分配\",\"link\":\"#内存分配\",\"children\":[]},{\"level\":3,\"title\":\"虚拟内存\",\"slug\":\"虚拟内存\",\"link\":\"#虚拟内存\",\"children\":[]},{\"level\":3,\"title\":\"内存管理\",\"slug\":\"内存管理\",\"link\":\"#内存管理\",\"children\":[]},{\"level\":3,\"title\":\"内存保护\",\"slug\":\"内存保护\",\"link\":\"#内存保护\",\"children\":[]},{\"level\":3,\"title\":\"内存回收\",\"slug\":\"内存回收\",\"link\":\"#内存回收\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":4.34,\"words\":1301},\"filePathRelative\":\"开发/『iOS』/4.md\",\"localizedDate\":\"2021年12月3日\",\"excerpt\":\"<h1> iOS系统下的内存布局</h1>\\n<p>内存布局是指操作系统在进程运行时为其分配内存空间的方式。iOS系统是一款非常流行的移动操作系统，它的内存布局方式对于iOS开发者来说是非常重要的，因为它直接关系到应用程序的性能和稳定性。</p>\\n<h3> 内存分配</h3>\\n<p>在iOS系统中，进程的内存空间被划分为几个区域，包括代码段、数据段、堆、栈和BSS段。</p>\\n<ul>\\n<li>代码段：存储应用程序的可执行代码。</li>\\n<li>数据段：存储全局变量和静态变量。</li>\\n<li>堆：存储动态分配的内存，包括通过malloc()和new等函数动态分配的内存。</li>\\n<li>栈：存储函数的参数、局部变量和函数调用的上下文信息。</li>\\n<li>BSS段：存储未初始化的全局变量和静态变量。\\n这些区域在进程创建时就被分配好了，而且它们的地址也是固定的。这些区域的大小和位置是由链接器和加载器决定的，而不是应用程序决定的。</li>\\n</ul>\",\"autoDesc\":true}")

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
