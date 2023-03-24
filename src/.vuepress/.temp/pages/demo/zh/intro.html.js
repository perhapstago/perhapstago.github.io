export const data = JSON.parse("{\"key\":\"v-1b9516fb\",\"path\":\"/demo/zh/intro.html\",\"title\":\"介绍页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"info\",\"description\":\"介绍页 将你的个人介绍和档案放置在此处。\"},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"demo/zh/intro.md\",\"excerpt\":\"<h1> 介绍页</h1>\\n<p>将你的个人介绍和档案放置在此处。</p>\\n\",\"autoDesc\":true}")

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
