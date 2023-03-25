export const data = JSON.parse("{\"key\":\"v-dda712e4\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/9.html\",\"title\":\"用 GCD 实现多读单写\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2020-10-17T00:00:00.000Z\",\"category\":[\"iOS\"],\"tag\":[\"多线程\"],\"description\":\"用 GCD 实现多读单写 在并发编程中，多读单写（Multiple Readers, Single Writer，缩写为MRSW）是一个常见的场景，也是一个经典的问题。在这种情况下，允许多个线程同时读取某个共享资源，但是只允许一个线程进行写入。多读单写是一种常见的优化技术，可以显著提高并发程序的性能和吞吐量。 多读单写问题 多读单写问题是一种典型的共享资源问题。在多线程环境下，多个线程同时访问共享资源可能会导致不一致的结果。在MRSW问题中，多个线程可以同时读取共享资源，但是只允许一个线程进行写入。在这种情况下，需要确保在写入期间没有线程正在读取或写入该资源。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/9.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"夏日的瓜牛\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"用 GCD 实现多读单写\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"用 GCD 实现多读单写 在并发编程中，多读单写（Multiple Readers, Single Writer，缩写为MRSW）是一个常见的场景，也是一个经典的问题。在这种情况下，允许多个线程同时读取某个共享资源，但是只允许一个线程进行写入。多读单写是一种常见的优化技术，可以显著提高并发程序的性能和吞吐量。 多读单写问题 多读单写问题是一种典型的共享资源问题。在多线程环境下，多个线程同时访问共享资源可能会导致不一致的结果。在MRSW问题中，多个线程可以同时读取共享资源，但是只允许一个线程进行写入。在这种情况下，需要确保在写入期间没有线程正在读取或写入该资源。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"多线程\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-10-17T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"用 GCD 实现多读单写\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-10-17T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"多读单写问题\",\"slug\":\"多读单写问题\",\"link\":\"#多读单写问题\",\"children\":[{\"level\":3,\"title\":\"GCD 实现多读单写\",\"slug\":\"gcd-实现多读单写\",\"link\":\"#gcd-实现多读单写\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":3.13,\"words\":939},\"filePathRelative\":\"开发/『iOS』/9.md\",\"localizedDate\":\"2020年10月17日\",\"excerpt\":\"<h1> 用 GCD 实现多读单写</h1>\\n<p>在并发编程中，多读单写（Multiple Readers, Single Writer，缩写为MRSW）是一个常见的场景，也是一个经典的问题。在这种情况下，允许多个线程同时读取某个共享资源，但是只允许一个线程进行写入。多读单写是一种常见的优化技术，可以显著提高并发程序的性能和吞吐量。</p>\\n<h2> 多读单写问题</h2>\\n<p>多读单写问题是一种典型的共享资源问题。在多线程环境下，多个线程同时访问共享资源可能会导致不一致的结果。在MRSW问题中，多个线程可以同时读取共享资源，但是只允许一个线程进行写入。在这种情况下，需要确保在写入期间没有线程正在读取或写入该资源。 <br></p>\",\"autoDesc\":true}")

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
