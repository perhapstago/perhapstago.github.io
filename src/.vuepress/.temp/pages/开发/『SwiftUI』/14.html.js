export const data = JSON.parse("{\"key\":\"v-39b7d5e4\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/14.html\",\"title\":\"14.表单视图\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-10-05T00:00:00.000Z\",\"category\":[\"iOS\",\"Swift\",\"SwiftUI\"],\"tag\":[\"UI\"],\"description\":\"14.表单视图 表单视图在 iOS 应用程序中是一种常见的用户界面组件，可以用于收集用户的输入或设置应用程序的选项。在 SwiftUI 中，表单视图是通过一个名为 Form 的容器视图来实现的，它提供了许多内置的表单元素，如文本字段、开关、选择器等。 创建表单视图 要创建一个表单视图，我们只需将所有表单元素放入 Form 容器中即可。以下是一个简单的示例： struct ContentView: View { var body: some View { Form { Text(\\\"Hello, World!\\\") TextField(\\\"Enter your name\\\", text: .constant(\\\"\\\")) Toggle(\\\"Show advanced options\\\", isOn: .constant(false)) Button(\\\"Submit\\\") { // Submit the form } } } }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/14.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"夏日的瓜牛\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"14.表单视图\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"14.表单视图 表单视图在 iOS 应用程序中是一种常见的用户界面组件，可以用于收集用户的输入或设置应用程序的选项。在 SwiftUI 中，表单视图是通过一个名为 Form 的容器视图来实现的，它提供了许多内置的表单元素，如文本字段、开关、选择器等。 创建表单视图 要创建一个表单视图，我们只需将所有表单元素放入 Form 容器中即可。以下是一个简单的示例： struct ContentView: View { var body: some View { Form { Text(\\\"Hello, World!\\\") TextField(\\\"Enter your name\\\", text: .constant(\\\"\\\")) Toggle(\\\"Show advanced options\\\", isOn: .constant(false)) Button(\\\"Submit\\\") { // Submit the form } } } }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"UI\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-10-05T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"14.表单视图\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-10-05T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"创建表单视图\",\"slug\":\"创建表单视图\",\"link\":\"#创建表单视图\",\"children\":[]},{\"level\":2,\"title\":\"表单元素\",\"slug\":\"表单元素\",\"link\":\"#表单元素\",\"children\":[{\"level\":3,\"title\":\"文本字段\",\"slug\":\"文本字段\",\"link\":\"#文本字段\",\"children\":[]},{\"level\":3,\"title\":\"开关\",\"slug\":\"开关\",\"link\":\"#开关\",\"children\":[]},{\"level\":3,\"title\":\"选择器\",\"slug\":\"选择器\",\"link\":\"#选择器\",\"children\":[]},{\"level\":3,\"title\":\"按钮\",\"slug\":\"按钮\",\"link\":\"#按钮\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.71,\"words\":814},\"filePathRelative\":\"开发/『SwiftUI』/14.md\",\"localizedDate\":\"2022年10月5日\",\"excerpt\":\"<h1> 14.表单视图</h1>\\n<p>表单视图在 iOS 应用程序中是一种常见的用户界面组件，可以用于收集用户的输入或设置应用程序的选项。在 SwiftUI 中，表单视图是通过一个名为 Form 的容器视图来实现的，它提供了许多内置的表单元素，如文本字段、开关、选择器等。<br></p>\\n<h2> 创建表单视图</h2>\\n<p>要创建一个表单视图，我们只需将所有表单元素放入 Form 容器中即可。以下是一个简单的示例：</p>\\n<div class=\\\"language-swift line-numbers-mode\\\" data-ext=\\\"swift\\\"><pre class=\\\"language-swift\\\"><code><span class=\\\"token keyword\\\">struct</span> <span class=\\\"token class-name\\\">ContentView</span><span class=\\\"token punctuation\\\">:</span> <span class=\\\"token class-name\\\">View</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">var</span> body<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token keyword\\\">some</span> <span class=\\\"token class-name\\\">View</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token class-name\\\">Form</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token class-name\\\">Text</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"Hello, World!\\\"</span></span><span class=\\\"token punctuation\\\">)</span>\\n            <span class=\\\"token class-name\\\">TextField</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"Enter your name\\\"</span></span><span class=\\\"token punctuation\\\">,</span> text<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">constant</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"\\\"</span></span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n            <span class=\\\"token class-name\\\">Toggle</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"Show advanced options\\\"</span></span><span class=\\\"token punctuation\\\">,</span> isOn<span class=\\\"token punctuation\\\">:</span> <span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">constant</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token boolean\\\">false</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span>\\n            <span class=\\\"token class-name\\\">Button</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"Submit\\\"</span></span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token comment\\\">// Submit the form</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")

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
