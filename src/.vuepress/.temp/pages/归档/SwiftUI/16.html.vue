<template><div><h1 id="_16-网络请求和数据解析" tabindex="-1"><a class="header-anchor" href="#_16-网络请求和数据解析" aria-hidden="true">#</a> 16.网络请求和数据解析</h1>
<p>SwiftUI提供了一些强大的工具来执行网络请求和解析响应数据。</p>
<h2 id="发送网络请求" tabindex="-1"><a class="header-anchor" href="#发送网络请求" aria-hidden="true">#</a> 发送网络请求</h2>
<p>SwiftUI中提供了URLSession API来发送网络请求。<br>
下面是一个示例，展示如何使用URLSession API发送GET请求：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> posts<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span> <span class="token punctuation">{</span> post <span class="token keyword">in</span>
            <span class="token class-name">Text</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span>onAppear <span class="token punctuation">{</span>
            <span class="token keyword">guard</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://url.com/posts"</span></span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

            <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">dataTask</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> response<span class="token punctuation">,</span> error <span class="token keyword">in</span>
                <span class="token keyword">guard</span> <span class="token keyword">let</span> data <span class="token operator">=</span> data<span class="token punctuation">,</span> error <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token operator">?</span><span class="token punctuation">.</span>localizedDescription <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Unknown error"</span></span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token keyword">let</span> decodedData <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
                        <span class="token keyword">self</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> decodedData
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为Post的结构体，并在ContentView视图中定义了一个名为posts的状态变量来保存响应数据。<br>
在视图的onAppear回调中，使用URLSession API发送一个GET请求，该请求获取位于<a href="https://url.com/posts" target="_blank" rel="noopener noreferrer">https://url.com/posts<ExternalLinkIcon/></a> 的JSON数据。<br>
使用JSONDecoder类将响应数据解码为一个名为[Post]的数组，并使用self.posts变量保存解码的数据。<br>
使用DispatchQueue.main.async将数据保存到主线程。</p>
<h2 id="解析json数据" tabindex="-1"><a class="header-anchor" href="#解析json数据" aria-hidden="true">#</a> 解析JSON数据</h2>
<p>SwiftUI可以使用JSONDecoder类将JSON数据解码为Swift结构。JSONDecoder是一个强大的类，它可以将JSON数据转换为Swift结构。可以使用JSONDecoder来解码从网络获取的数据，并将其转换为Swift结构体或类。<br>
如何使用JSONDecoder来解码JSON数据：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">struct</span> <span class="token class-name">Post</span><span class="token punctuation">:</span> <span class="token class-name">Codable</span><span class="token punctuation">,</span> <span class="token class-name">Identifiable</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> id<span class="token punctuation">:</span> <span class="token class-name">Int</span>
    <span class="token keyword">let</span> title<span class="token punctuation">:</span> <span class="token class-name">String</span>
    <span class="token keyword">let</span> body<span class="token punctuation">:</span> <span class="token class-name">String</span>
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> posts<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span> <span class="token punctuation">{</span> post <span class="token keyword">in</span>
            <span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>subheadline<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span>onAppear <span class="token punctuation">{</span>
            <span class="token keyword">guard</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://url.com/posts"</span></span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">}</span>

            <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">dataTask</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> response<span class="token punctuation">,</span> error <span class="token keyword">in</span>
                <span class="token keyword">guard</span> <span class="token keyword">let</span> data <span class="token operator">=</span> data<span class="token punctuation">,</span> error <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token function">print</span><span class="token punctuation">(</span>error<span class="token operator">?</span><span class="token punctuation">.</span>localizedDescription <span class="token operator">??</span> <span class="token string-literal"><span class="token string">"Unknown error"</span></span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token keyword">let</span> decodedData <span class="token operator">=</span> <span class="token keyword">try</span><span class="token operator">?</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
                        <span class="token keyword">self</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> decodedData
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为Post的结构体，该结构体遵循Codable和Identifiable协议。<br>
在ContentView视图中定义了一个名为posts的状态变量来保存响应数据。在视图的onAppear回调中使用URLSession API发送一个GET请求，该请求获取位于<a href="https://url.com/posts" target="_blank" rel="noopener noreferrer">https://url.com/posts<ExternalLinkIcon/></a> 的JSON数据。使用JSONDecoder类将响应数据解码为一个名为[Post]的数组，并使用self.posts变量保存解码的数据。<br>
使用DispatchQueue.main.async将数据保存到主线程。</p>
<h2 id="处理错误" tabindex="-1"><a class="header-anchor" href="#处理错误" aria-hidden="true">#</a> 处理错误</h2>
<p>在网络请求和数据解析过程中，可能会发生错误。可以使用Swift的错误处理机制来处理这些错误。<br>
如何在SwiftUI中处理错误：</p>
<div class="language-swift line-numbers-mode" data-ext="swift"><pre v-pre class="language-swift"><code><span class="token keyword">enum</span> <span class="token class-name">APIError</span><span class="token punctuation">:</span> <span class="token class-name">Error</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> invalidURL
    <span class="token keyword">case</span> requestFailed
    <span class="token keyword">case</span> invalidResponse
    <span class="token keyword">case</span> invalidData
<span class="token punctuation">}</span>

<span class="token keyword">struct</span> <span class="token class-name">ContentView</span><span class="token punctuation">:</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> posts<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token attribute atrule">@State</span> <span class="token keyword">private</span> <span class="token keyword">var</span> errorMessage<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">""</span></span>

    <span class="token keyword">var</span> body<span class="token punctuation">:</span> <span class="token keyword">some</span> <span class="token class-name">View</span> <span class="token punctuation">{</span>
        <span class="token class-name">VStack</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token operator">!</span>errorMessage<span class="token punctuation">.</span>isEmpty <span class="token punctuation">{</span>
                <span class="token class-name">Text</span><span class="token punctuation">(</span>errorMessage<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">foregroundColor</span><span class="token punctuation">(</span><span class="token punctuation">.</span>red<span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">padding</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">List</span><span class="token punctuation">(</span>posts<span class="token punctuation">)</span> <span class="token punctuation">{</span> post <span class="token keyword">in</span>
                <span class="token class-name">VStack</span><span class="token punctuation">(</span>alignment<span class="token punctuation">:</span> <span class="token punctuation">.</span>leading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>title<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>headline<span class="token punctuation">)</span>
                    <span class="token class-name">Text</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>body<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">font</span><span class="token punctuation">(</span><span class="token punctuation">.</span>subheadline<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">.</span>onAppear <span class="token punctuation">{</span>
            <span class="token keyword">guard</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">URL</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"https://url.com/posts"</span></span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">self</span><span class="token punctuation">.</span>errorMessage <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Invalid URL"</span></span>
                <span class="token keyword">return</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">URLSession</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span><span class="token function">dataTask</span><span class="token punctuation">(</span>with<span class="token punctuation">:</span> url<span class="token punctuation">)</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> response<span class="token punctuation">,</span> error <span class="token keyword">in</span>
                <span class="token keyword">guard</span> error <span class="token operator">==</span> <span class="token nil constant">nil</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span>errorMessage <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Request failed: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token operator">!</span><span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">guard</span> <span class="token keyword">let</span> data <span class="token operator">=</span> data <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span>errorMessage <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Invalid data"</span></span>
                    <span class="token keyword">return</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">let</span> decoder <span class="token operator">=</span> <span class="token class-name">JSONDecoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token keyword">do</span> <span class="token punctuation">{</span>
                    <span class="token keyword">let</span> decodedData <span class="token operator">=</span> <span class="token keyword">try</span> decoder<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">Post</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">self</span><span class="token punctuation">,</span> from<span class="token punctuation">:</span> data<span class="token punctuation">)</span>
                    <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span>
                        <span class="token keyword">self</span><span class="token punctuation">.</span>posts <span class="token operator">=</span> decodedData
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">{</span>
                    <span class="token keyword">self</span><span class="token punctuation">.</span>errorMessage <span class="token operator">=</span> error<span class="token punctuation">.</span>localizedDescription
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在定义了一个名为APIError的枚举类型，该类型表示可能发生的错误类型。在ContentView视图中定义了一个名为errorMessage的状态变量，用于保存错误消息。如果发生错误会更新errorMessage变量，并将错误消息显示在视图中。使用Swift的do-catch语句来捕获和处理错误。如果解码过程中发生错误将错误消息保存到errorMessage变量中，并将其显示在视图中。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>在SwiftUI中，我们可以使用URLSession API发送网络请求，并使用JSONDecoder类将响应数据解码为Swift结构。在处理网络请求和数据解析过程中，我们需要考虑错误处理和数据管理。SwiftUI提供了许多机制来帮助我们处理这些问题，例如状态变量、错误处理机制和数据绑定。通过使用这些机制，我们可以更轻松地构建具有良好用户体验的应用程序。</p>
</div></template>


