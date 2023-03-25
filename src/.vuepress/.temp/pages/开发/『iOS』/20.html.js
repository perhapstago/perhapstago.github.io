export const data = JSON.parse("{\"key\":\"v-2249c0cd\",\"path\":\"/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/20.html\",\"title\":\"Mach-O文件简要分析\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-5-19\",\"category\":[\"iOS\"],\"tag\":[\"底层原理\",\"代码之外\"],\"description\":\"Mach-O文件简要分析 Mach-O文件是一种可执行文件格式，是macOS和iOS系统的重要文件格式之一。 结构 Mach-O文件包含三个主要部分：头部、数据部分和加载命令。 Mach-O 头（Mach Header）：这里描述了 Mach-O 的 CPU 架构、文件类型以及加载命令等信息； 数据区（Data）：Data 中每一个段（Segment）的数据都保存在此，段的概念和 ELF 文件中段的概念类似，都拥有一个或多个 Section ，用来存放数据和代码。 加载命令（Load Command）：描述了文件中数据的具体组织结构，不同的数据类型使用不同的加载命令表示；\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8EiOS%E3%80%8F/20.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"夏日的瓜牛\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Mach-O文件简要分析\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Mach-O文件简要分析 Mach-O文件是一种可执行文件格式，是macOS和iOS系统的重要文件格式之一。 结构 Mach-O文件包含三个主要部分：头部、数据部分和加载命令。 Mach-O 头（Mach Header）：这里描述了 Mach-O 的 CPU 架构、文件类型以及加载命令等信息； 数据区（Data）：Data 中每一个段（Segment）的数据都保存在此，段的概念和 ELF 文件中段的概念类似，都拥有一个或多个 Section ，用来存放数据和代码。 加载命令（Load Command）：描述了文件中数据的具体组织结构，不同的数据类型使用不同的加载命令表示；\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"底层原理\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"代码之外\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-05-18T16:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Mach-O文件简要分析\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-05-18T16:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"结构\",\"slug\":\"结构\",\"link\":\"#结构\",\"children\":[{\"level\":3,\"title\":\"头部\",\"slug\":\"头部\",\"link\":\"#头部\",\"children\":[]},{\"level\":3,\"title\":\"数据部分\",\"slug\":\"数据部分\",\"link\":\"#数据部分\",\"children\":[]},{\"level\":3,\"title\":\"加载命令\",\"slug\":\"加载命令\",\"link\":\"#加载命令\",\"children\":[]}]},{\"level\":2,\"title\":\"格式\",\"slug\":\"格式\",\"link\":\"#格式\",\"children\":[{\"level\":3,\"title\":\"内部结构\",\"slug\":\"内部结构\",\"link\":\"#内部结构\",\"children\":[]},{\"level\":3,\"title\":\"外部结构\",\"slug\":\"外部结构\",\"link\":\"#外部结构\",\"children\":[]}]},{\"level\":2,\"title\":\"用途\",\"slug\":\"用途\",\"link\":\"#用途\",\"children\":[{\"level\":3,\"title\":\"可执行文件\",\"slug\":\"可执行文件\",\"link\":\"#可执行文件\",\"children\":[]},{\"level\":3,\"title\":\"动态库\",\"slug\":\"动态库\",\"link\":\"#动态库\",\"children\":[]},{\"level\":3,\"title\":\"对象文件\",\"slug\":\"对象文件\",\"link\":\"#对象文件\",\"children\":[]},{\"level\":3,\"title\":\"调试信息\",\"slug\":\"调试信息\",\"link\":\"#调试信息\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.76,\"words\":1128},\"filePathRelative\":\"开发/『iOS』/20.md\",\"localizedDate\":\"2022年5月19日\",\"excerpt\":\"<h1> Mach-O文件简要分析</h1>\\n<p>Mach-O文件是一种可执行文件格式，是macOS和iOS系统的重要文件格式之一。</p>\\n<h2> 结构</h2>\\n<p>Mach-O文件包含三个主要部分：头部、数据部分和加载命令。</p>\\n<ul>\\n<li>Mach-O 头（Mach Header）：这里描述了 Mach-O 的 CPU 架构、文件类型以及加载命令等信息；</li>\\n<li>数据区（Data）：Data 中每一个段（Segment）的数据都保存在此，段的概念和 ELF 文件中段的概念类似，都拥有一个或多个 Section ，用来存放数据和代码。</li>\\n<li>加载命令（Load Command）：描述了文件中数据的具体组织结构，不同的数据类型使用不同的加载命令表示；</li>\\n</ul>\",\"autoDesc\":true}")

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
