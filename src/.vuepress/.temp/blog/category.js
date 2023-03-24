export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Xcode":{"path":"/category/xcode/","keys":["v-30c83029","v-2d5e7eeb","v-29f4cdad","v-2f13578a","v-283ff50e","v-2ba9a64c"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


