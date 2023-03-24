export const data = JSON.parse("{\"key\":\"v-9e0ef376\",\"path\":\"/%E5%BC%80%E5%8F%91/-OS/5.html\",\"title\":\"内存管理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"苹果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"description\":\"内存管理 在iOS操作系统中，针对不同场景下的内存管理，苹果采用了不同的内存管理方案。对于小对象，如NSNumber等，苹果采用了TaggedPoint这种内存管理方案。对于64位架构下的iOS系统，苹果采用了非指针型的ISA来提高内存利用率。而对于复杂对象，苹果采用了散列表来管理内存。这些内存管理方案都是针对不同的场景做出的优化，旨在提高内存的利用率和性能。 TaggedPointer TaggedPointer 是一种内存管理方案，适用于一些小对象，如NSNumber等。在 iOS 系统中，每个对象都有一个指向其类信息的指针，通常称为ISA指针。在 64 位架构下，ISA 指针占用了 64 个比特位，但是在实际应用中，只需要使用其中的 32 位或 40 位，剩余的比特位实际上是浪费的。TaggedPointer 就是利用这些浪费的比特位来存储对象的数据，从而提高内存利用率。\"},\"headers\":[{\"level\":2,\"title\":\"TaggedPointer\",\"slug\":\"taggedpointer\",\"link\":\"#taggedpointer\",\"children\":[]},{\"level\":2,\"title\":\"NONPOINTER_ISA\",\"slug\":\"nonpointer-isa\",\"link\":\"#nonpointer-isa\",\"children\":[]},{\"level\":2,\"title\":\"散列表\",\"slug\":\"散列表\",\"link\":\"#散列表\",\"children\":[{\"level\":3,\"title\":\"散列表数据结构\",\"slug\":\"散列表数据结构\",\"link\":\"#散列表数据结构\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.98,\"words\":2094},\"filePathRelative\":\"开发/-OS/5.md\",\"localizedDate\":\"2022年1月1日\",\"excerpt\":\"<h1> 内存管理</h1>\\n<p>在iOS操作系统中，针对不同场景下的内存管理，苹果采用了不同的内存管理方案。对于小对象，如NSNumber等，苹果采用了TaggedPoint这种内存管理方案。对于64位架构下的iOS系统，苹果采用了非指针型的ISA来提高内存利用率。而对于复杂对象，苹果采用了散列表来管理内存。这些内存管理方案都是针对不同的场景做出的优化，旨在提高内存的利用率和性能。</p>\\n<h2> TaggedPointer</h2>\\n<p>TaggedPointer 是一种内存管理方案，适用于一些小对象，如NSNumber等。在 iOS 系统中，每个对象都有一个指向其类信息的指针，通常称为ISA指针。在 64 位架构下，ISA 指针占用了 64 个比特位，但是在实际应用中，只需要使用其中的 32 位或 40 位，剩余的比特位实际上是浪费的。TaggedPointer 就是利用这些浪费的比特位来存储对象的数据，从而提高内存利用率。<br></p>\",\"autoDesc\":true}")

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
