export const data = JSON.parse("{\"key\":\"v-2b9654bc\",\"path\":\"/%E5%BD%92%E6%A1%A3/SwiftUI%E7%AC%94%E8%AE%B0/7.html\",\"title\":\"07.自定义视图和容器\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-04T00:00:00.000Z\",\"category\":[\"苹果\",\"水果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"07.自定义视图和容器 在 SwiftUI 中，自定义视图和容器是非常常见的。有时候需要将一个视图包裹在自定义的容器中，以便在其他地方使用。 自定义视图 可以通过继承 View 来创建自定义视图。下面是一个自定义视图的例子： struct CustomView: View { var body: some View { Text(\\\"Hello, World!\\\") } }\"},\"headers\":[{\"level\":2,\"title\":\"自定义视图\",\"slug\":\"自定义视图\",\"link\":\"#自定义视图\",\"children\":[]},{\"level\":2,\"title\":\"自定义容器\",\"slug\":\"自定义容器\",\"link\":\"#自定义容器\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":1.59,\"words\":478},\"filePathRelative\":\"归档/SwiftUI笔记/7.md\",\"localizedDate\":\"2022年1月4日\",\"excerpt\":\"<h1> 07.自定义视图和容器</h1>\\n<p>在 SwiftUI 中，自定义视图和容器是非常常见的。有时候需要将一个视图包裹在自定义的容器中，以便在其他地方使用。</p>\\n<h2> 自定义视图</h2>\\n<p>可以通过继承 View 来创建自定义视图。下面是一个自定义视图的例子：</p>\\n<div class=\\\"language-swift line-numbers-mode\\\" data-ext=\\\"swift\\\"><pre class=\\\"language-swift\\\"><code><span class=\\\"token keyword\\\">struct</span> <span class=\\\"token class-name\\\">CustomView</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token class-name\\\">View</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">var</span> body<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token keyword\\\">some</span> <span class=\\\"token class-name\\\">View</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token class-name\\\">Text</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"Hello, World!\\\"</span></span><span class=\\\"token punctuation\\\">)</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
