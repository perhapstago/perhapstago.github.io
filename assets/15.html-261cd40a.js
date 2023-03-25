const e=JSON.parse('{"key":"v-364e24a6","path":"/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/15.html","title":"15.数据模型和数据管理","lang":"zh-CN","frontmatter":{"date":"2022-10-05T00:00:00.000Z","category":["iOS","Swift","SwiftUI"],"tag":["语法"],"description":"15.数据模型和数据管理 SwiftUI中可以使用数据模型来表示应用程序的数据，并使用数据管理来更新和传递这些数据。 数据模型 数据模型是应用程序中的数据结构。它定义了应用程序使用的数据类型，并确定数据之间的关系。可以使用Swift语言中的结构体来定义数据模型。 下面是一个简单的示例： struct Person: Identifiable { var id = UUID() var name: String var age: Int }","head":[["meta",{"property":"og:url","content":"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/15.html"}],["meta",{"property":"og:site_name","content":"夏日的瓜牛"}],["meta",{"property":"og:title","content":"15.数据模型和数据管理"}],["meta",{"property":"og:description","content":"15.数据模型和数据管理 SwiftUI中可以使用数据模型来表示应用程序的数据，并使用数据管理来更新和传递这些数据。 数据模型 数据模型是应用程序中的数据结构。它定义了应用程序使用的数据类型，并确定数据之间的关系。可以使用Swift语言中的结构体来定义数据模型。 下面是一个简单的示例： struct Person: Identifiable { var id = UUID() var name: String var age: Int }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-25T05:11:23.000Z"}],["meta",{"property":"article:tag","content":"语法"}],["meta",{"property":"article:published_time","content":"2022-10-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-25T05:11:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"15.数据模型和数据管理\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-25T05:11:23.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据模型","slug":"数据模型","link":"#数据模型","children":[]},{"level":2,"title":"数据管理","slug":"数据管理","link":"#数据管理","children":[{"level":3,"title":"@State","slug":"state","link":"#state","children":[]},{"level":3,"title":"@ObservedObject","slug":"observedobject","link":"#observedobject","children":[]},{"level":3,"title":"@EnvironmentObject","slug":"environmentobject","link":"#environmentobject","children":[]}]},{"level":2,"title":"结论","slug":"结论","link":"#结论","children":[]}],"git":{"createdTime":1679640723000,"updatedTime":1679721083000,"contributors":[{"name":"perhapsdone","email":"","commits":2}]},"readingTime":{"minutes":2.95,"words":884},"filePathRelative":"开发/『SwiftUI』/15.md","localizedDate":"2022年10月5日","excerpt":"<h1> 15.数据模型和数据管理</h1>\\n<p>SwiftUI中可以使用数据模型来表示应用程序的数据，并使用数据管理来更新和传递这些数据。</p>\\n<h2> 数据模型</h2>\\n<p>数据模型是应用程序中的数据结构。它定义了应用程序使用的数据类型，并确定数据之间的关系。可以使用Swift语言中的结构体来定义数据模型。<br></p>\\n<p>下面是一个简单的示例：</p>\\n<div class=\\"language-swift line-numbers-mode\\" data-ext=\\"swift\\"><pre class=\\"language-swift\\"><code><span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">Person</span><span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">Identifiable</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">var</span> id <span class=\\"token operator\\">=</span> <span class=\\"token function\\">UUID</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">var</span> name<span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">String</span>\\n    <span class=\\"token keyword\\">var</span> age<span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">Int</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
