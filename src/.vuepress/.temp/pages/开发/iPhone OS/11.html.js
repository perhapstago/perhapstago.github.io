export const data = JSON.parse("{\"key\":\"v-830c972e\",\"path\":\"/%E5%BC%80%E5%8F%91/iPhone%20OS/11.html\",\"title\":\"Block循环引用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-03T00:00:00.000Z\",\"category\":[\"苹果\",\"水果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"Block循环引用 在Objective-C中，Block是一种类似于匿名函数的语法结构，它可以用来封装一段代码，并在需要时执行该代码。尽管Block提供了便利的语法结构，但是在实际使用中，我们经常会遇到一个问题，即Block循环引用。 Block循环引用是指在Block内部捕获了一个对象，并且该对象又持有了该Block，从而导致两者互相持有，无法释放内存。这个问题不仅会导致内存泄漏，还会影响程序的性能和稳定性。 Block的本质 在深入探讨Block循环引用之前需要了解一下Block的本质。在Objective-C中，Block实际上是一种OC对象，它是由以下三个部分组成的：\"},\"headers\":[{\"level\":2,\"title\":\"Block的本质\",\"slug\":\"block的本质\",\"link\":\"#block的本质\",\"children\":[]},{\"level\":2,\"title\":\"Block循环引用的原因\",\"slug\":\"block循环引用的原因\",\"link\":\"#block循环引用的原因\",\"children\":[]},{\"level\":2,\"title\":\"解决循环引用的方法\",\"slug\":\"解决循环引用的方法\",\"link\":\"#解决循环引用的方法\",\"children\":[{\"level\":3,\"title\":\"__weak\",\"slug\":\"weak\",\"link\":\"#weak\",\"children\":[]},{\"level\":3,\"title\":\"__block\",\"slug\":\"block\",\"link\":\"#block\",\"children\":[]}]},{\"level\":2,\"title\":\"底层分析Block循环引用的原因\",\"slug\":\"底层分析block循环引用的原因\",\"link\":\"#底层分析block循环引用的原因\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":5.07,\"words\":1522},\"filePathRelative\":\"开发/iPhone OS/11.md\",\"localizedDate\":\"2022年1月3日\",\"excerpt\":\"<h1> Block循环引用</h1>\\n<p>在Objective-C中，Block是一种类似于匿名函数的语法结构，它可以用来封装一段代码，并在需要时执行该代码。尽管Block提供了便利的语法结构，但是在实际使用中，我们经常会遇到一个问题，即Block循环引用。</p>\\n<p>Block循环引用是指在Block内部捕获了一个对象，并且该对象又持有了该Block，从而导致两者互相持有，无法释放内存。这个问题不仅会导致内存泄漏，还会影响程序的性能和稳定性。</p>\\n<h2> Block的本质</h2>\\n<p>在深入探讨Block循环引用之前需要了解一下Block的本质。在Objective-C中，Block实际上是一种OC对象，它是由以下三个部分组成的：</p>\",\"autoDesc\":true}")

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
