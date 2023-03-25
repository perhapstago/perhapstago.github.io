const t=JSON.parse('{"key":"v-1b4db829","path":"/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/8.html","title":"08.基本动画类型","lang":"zh-CN","frontmatter":{"date":"2022-6-05","description":"08.基本动画类型 在 SwiftUI 中，可以使用内置的动画来使应用程序更加生动和有趣。这些动画可以用于各种效果，例如渐变、缩放和旋转。 动画类型 在 SwiftUI 中，有四种基本的动画类型：opacity、scale、offset 和 rotation。每种类型都有不同的动画选项，可以自定义动画的速度、时间和效果。 Opacity Opacity 动画可以让视图透明度从 0 到 1 或从 1 到 0 的过程中产生渐变效果。 Text(\\"Hello, world!\\") .opacity(isHidden ? 0 : 1) .animation(.easeInOut)","head":[["meta",{"property":"og:url","content":"http://yunpu.tech/%E5%BC%80%E5%8F%91/%E3%80%8ESwiftUI%E3%80%8F/8.html"}],["meta",{"property":"og:site_name","content":"夏日的瓜牛"}],["meta",{"property":"og:title","content":"08.基本动画类型"}],["meta",{"property":"og:description","content":"08.基本动画类型 在 SwiftUI 中，可以使用内置的动画来使应用程序更加生动和有趣。这些动画可以用于各种效果，例如渐变、缩放和旋转。 动画类型 在 SwiftUI 中，有四种基本的动画类型：opacity、scale、offset 和 rotation。每种类型都有不同的动画选项，可以自定义动画的速度、时间和效果。 Opacity Opacity 动画可以让视图透明度从 0 到 1 或从 1 到 0 的过程中产生渐变效果。 Text(\\"Hello, world!\\") .opacity(isHidden ? 0 : 1) .animation(.easeInOut)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-24T06:52:03.000Z"}],["meta",{"property":"article:published_time","content":"2022-06-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-24T06:52:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"08.基本动画类型\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-06-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-24T06:52:03.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"动画类型","slug":"动画类型","link":"#动画类型","children":[{"level":3,"title":"Opacity","slug":"opacity","link":"#opacity","children":[]},{"level":3,"title":"Scale","slug":"scale","link":"#scale","children":[]},{"level":3,"title":"Offset","slug":"offset","link":"#offset","children":[]},{"level":3,"title":"Rotation","slug":"rotation","link":"#rotation","children":[]}]},{"level":2,"title":"动画选项","slug":"动画选项","link":"#动画选项","children":[]},{"level":2,"title":"自定义动画","slug":"自定义动画","link":"#自定义动画","children":[]}],"git":{"createdTime":1679640723000,"updatedTime":1679640723000,"contributors":[{"name":"perhapsdone","email":"","commits":1}]},"readingTime":{"minutes":1.43,"words":429},"filePathRelative":"开发/『SwiftUI』/8.md","localizedDate":"2022年6月5日","excerpt":"<h1> 08.基本动画类型</h1>\\n<p>在 SwiftUI 中，可以使用内置的动画来使应用程序更加生动和有趣。这些动画可以用于各种效果，例如渐变、缩放和旋转。</p>\\n<h2> 动画类型</h2>\\n<p>在 SwiftUI 中，有四种基本的动画类型：opacity、scale、offset 和 rotation。每种类型都有不同的动画选项，可以自定义动画的速度、时间和效果。</p>\\n<h3> Opacity</h3>\\n<p>Opacity 动画可以让视图透明度从 0 到 1 或从 1 到 0 的过程中产生渐变效果。</p>\\n<div class=\\"language-swift line-numbers-mode\\" data-ext=\\"swift\\"><pre class=\\"language-swift\\"><code><span class=\\"token class-name\\">Text</span><span class=\\"token punctuation\\">(</span><span class=\\"token string-literal\\"><span class=\\"token string\\">\\"Hello, world!\\"</span></span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">opacity</span><span class=\\"token punctuation\\">(</span>isHidden <span class=\\"token operator\\">?</span> <span class=\\"token number\\">0</span> <span class=\\"token punctuation\\">:</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">.</span><span class=\\"token function\\">animation</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">.</span>easeInOut<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
