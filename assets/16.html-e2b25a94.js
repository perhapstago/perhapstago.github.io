const n=JSON.parse('{"key":"v-32e47368","path":"/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/16.html","title":"16.网络请求和数据解析","lang":"zh-CN","frontmatter":{"date":"2022-8-17","description":"16.网络请求和数据解析 SwiftUI提供了一些强大的工具来执行网络请求和解析响应数据。 发送网络请求 SwiftUI中提供了URLSession API来发送网络请求。 下面是一个示例，展示如何使用URLSession API发送GET请求： struct ContentView: View { @State private var posts: [Post] = [] var body: some View { List(posts) { post in Text(post.title) } .onAppear { guard let url = URL(string: \\"https://url.com/posts\\") else { return } URLSession.shared.dataTask(with: url) { data, response, error in guard let data = data, error == nil else { print(error?.localizedDescription ?? \\"Unknown error\\") return } let decoder = JSONDecoder() if let decodedData = try? decoder.decode([Post].self, from: data) { DispatchQueue.main.async { self.posts = decodedData } } }.resume() } } }","head":[["meta",{"property":"og:url","content":"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/16.html"}],["meta",{"property":"og:site_name","content":"夏日的瓜牛"}],["meta",{"property":"og:title","content":"16.网络请求和数据解析"}],["meta",{"property":"og:description","content":"16.网络请求和数据解析 SwiftUI提供了一些强大的工具来执行网络请求和解析响应数据。 发送网络请求 SwiftUI中提供了URLSession API来发送网络请求。 下面是一个示例，展示如何使用URLSession API发送GET请求： struct ContentView: View { @State private var posts: [Post] = [] var body: some View { List(posts) { post in Text(post.title) } .onAppear { guard let url = URL(string: \\"https://url.com/posts\\") else { return } URLSession.shared.dataTask(with: url) { data, response, error in guard let data = data, error == nil else { print(error?.localizedDescription ?? \\"Unknown error\\") return } let decoder = JSONDecoder() if let decodedData = try? decoder.decode([Post].self, from: data) { DispatchQueue.main.async { self.posts = decodedData } } }.resume() } } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-24T06:52:03.000Z"}],["meta",{"property":"article:published_time","content":"2022-08-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-24T06:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"16.网络请求和数据解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-24T06:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"发送网络请求","slug":"发送网络请求","link":"#发送网络请求","children":[]},{"level":2,"title":"解析JSON数据","slug":"解析json数据","link":"#解析json数据","children":[]},{"level":2,"title":"处理错误","slug":"处理错误","link":"#处理错误","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1679640723000,"updatedTime":1679640723000,"contributors":[{"name":"perhapsdone","email":"","commits":1}]},"readingTime":{"minutes":3.29,"words":986},"filePathRelative":"开发/『SwiftUI』/16.md","localizedDate":"2022年8月17日","excerpt":"<h1> 16.网络请求和数据解析</h1>\\n<p>SwiftUI提供了一些强大的工具来执行网络请求和解析响应数据。</p>\\n<h2> 发送网络请求</h2>\\n<p>SwiftUI中提供了URLSession API来发送网络请求。<br>\\n下面是一个示例，展示如何使用URLSession API发送GET请求：</p>\\n<div class=\\"language-swift line-numbers-mode\\" data-ext=\\"swift\\"><pre class=\\"language-swift\\"><code><span class=\\"token keyword\\">struct</span> <span class=\\"token class-name\\">ContentView</span><span class=\\"token punctuation\\">:</span> <span class=\\"token class-name\\">View</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token attribute atrule\\">@State</span> <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">var</span> posts<span class=\\"token punctuation\\">:</span> <span class=\\"token punctuation\\">[</span><span class=\\"token class-name\\">Post</span><span class=\\"token punctuation\\">]</span> <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n\\n    <span class=\\"token keyword\\">var</span> body<span class=\\"token punctuation\\">:</span> <span class=\\"token keyword\\">some</span> <span class=\\"token class-name\\">View</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">List</span><span class=\\"token punctuation\\">(</span>posts<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> post <span class=\\"token keyword\\">in</span>\\n            <span class=\\"token class-name\\">Text</span><span class=\\"token punctuation\\">(</span>post<span class=\\"token punctuation\\">.</span>title<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token punctuation\\">.</span>onAppear <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token keyword\\">guard</span> <span class=\\"token keyword\\">let</span> url <span class=\\"token operator\\">=</span> <span class=\\"token function\\">URL</span><span class=\\"token punctuation\\">(</span>string<span class=\\"token punctuation\\">:</span> <span class=\\"token string-literal\\"><span class=\\"token string\\">\\"https://url.com/posts\\"</span></span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span> <span class=\\"token keyword\\">return</span> <span class=\\"token punctuation\\">}</span>\\n\\n            <span class=\\"token class-name\\">URLSession</span><span class=\\"token punctuation\\">.</span>shared<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">dataTask</span><span class=\\"token punctuation\\">(</span>with<span class=\\"token punctuation\\">:</span> url<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span> data<span class=\\"token punctuation\\">,</span> response<span class=\\"token punctuation\\">,</span> error <span class=\\"token keyword\\">in</span>\\n                <span class=\\"token keyword\\">guard</span> <span class=\\"token keyword\\">let</span> data <span class=\\"token operator\\">=</span> data<span class=\\"token punctuation\\">,</span> error <span class=\\"token operator\\">==</span> <span class=\\"token nil constant\\">nil</span> <span class=\\"token keyword\\">else</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span>error<span class=\\"token operator\\">?</span><span class=\\"token punctuation\\">.</span>localizedDescription <span class=\\"token operator\\">??</span> <span class=\\"token string-literal\\"><span class=\\"token string\\">\\"Unknown error\\"</span></span><span class=\\"token punctuation\\">)</span>\\n                    <span class=\\"token keyword\\">return</span>\\n                <span class=\\"token punctuation\\">}</span>\\n\\n                <span class=\\"token keyword\\">let</span> decoder <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">JSONDecoder</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">let</span> decodedData <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">try</span><span class=\\"token operator\\">?</span> decoder<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">decode</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token class-name\\">Post</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">self</span><span class=\\"token punctuation\\">,</span> from<span class=\\"token punctuation\\">:</span> data<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                    <span class=\\"token class-name\\">DispatchQueue</span><span class=\\"token punctuation\\">.</span>main<span class=\\"token punctuation\\">.</span><span class=\\"token keyword\\">async</span> <span class=\\"token punctuation\\">{</span>\\n                        <span class=\\"token keyword\\">self</span><span class=\\"token punctuation\\">.</span>posts <span class=\\"token operator\\">=</span> decodedData\\n                    <span class=\\"token punctuation\\">}</span>\\n                <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">resume</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
