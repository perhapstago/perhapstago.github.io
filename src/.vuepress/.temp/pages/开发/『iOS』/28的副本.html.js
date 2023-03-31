export const data = JSON.parse("{\"key\":\"v-49aab3ad\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/28%E7%9A%84%E5%89%AF%E6%9C%AC.html\",\"title\":\"SEL和Method和IM\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-10-11T00:00:00.000Z\",\"category\":[\"iOS\"],\"tag\":[\"区分\",\"底层原理\"],\"description\":\"SEL和Method和IM SEL是方法名称，Method包含方法名称、参数类型和返回类型等信息，IMP是实际执行方法代码的函数指针。 SEL（选择器） 用于表示一个方法的名称。每个方法都有一个唯一的SEL，它是在运行时动态创建的。当使用对象发送消息时，实际上是通过SEL来调用方法。 例如，如果有一个方法叫做doSomething，那么它对应的SEL就是@selector(doSomething)。在发送消息时，可以使用这个SEL来调用doSomething方法： SEL funcSelector = @selector(func); [obj performSelector:funcSelector];\"},\"headers\":[{\"level\":2,\"title\":\"SEL（选择器）\",\"slug\":\"sel-选择器\",\"link\":\"#sel-选择器\",\"children\":[]},{\"level\":2,\"title\":\"Method（方法）\",\"slug\":\"method-方法\",\"link\":\"#method-方法\",\"children\":[]},{\"level\":2,\"title\":\"IMP（实现指针）\",\"slug\":\"imp-实现指针\",\"link\":\"#imp-实现指针\",\"children\":[]}],\"readingTime\":{\"minutes\":1.95,\"words\":586},\"filePathRelative\":\"开发/『iOS』/28的副本.md\",\"localizedDate\":\"2022年10月11日\",\"excerpt\":\"<h1> SEL和Method和IM</h1>\\n<p>SEL是方法名称，Method包含方法名称、参数类型和返回类型等信息，IMP是实际执行方法代码的函数指针。</p>\\n<h2> SEL（选择器）</h2>\\n<p>用于表示一个方法的名称。每个方法都有一个唯一的SEL，它是在运行时动态创建的。当使用对象发送消息时，实际上是通过SEL来调用方法。<br></p>\\n<p>例如，如果有一个方法叫做doSomething，那么它对应的SEL就是@selector(doSomething)。在发送消息时，可以使用这个SEL来调用doSomething方法：</p>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>SEL funcSelector = @selector(func);\\n[obj performSelector:funcSelector];\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
