import{_ as s,X as i,Y as l,$ as e,a0 as a,a1 as t,Z as d,E as r}from"./framework-8d4f7cb8.js";const u={},c=e("h1",{id:"fastlane简介",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fastlane简介","aria-hidden":"true"},"#"),a(" Fastlane简介")],-1),p={href:"https://fastlane.tools/",target:"_blank",rel:"noopener noreferrer"},o=d(`<h2 id="安装fastlane" tabindex="-1"><a class="header-anchor" href="#安装fastlane" aria-hidden="true">#</a> 安装Fastlane</h2><h3 id="安装xcode和命令行工具" tabindex="-1"><a class="header-anchor" href="#安装xcode和命令行工具" aria-hidden="true">#</a> 安装Xcode和命令行工具</h3><p>Fastlane需要Xcode和命令行工具来工作。如果你还没有安装Xcode和命令行工具，请先在App Store中安装Xcode，并在终端中运行以下命令安装命令行工具：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xcode-select --install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装ruby和bundler" tabindex="-1"><a class="header-anchor" href="#安装ruby和bundler" aria-hidden="true">#</a> 安装Ruby和Bundler</h3><p>Fastlane是用Ruby编写的，因此你需要安装Ruby和Bundler来运行Fastlane。可以在终端中运行以下命令来安装Ruby和Bundler：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install ruby
gem install bundler
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装fastlane-1" tabindex="-1"><a class="header-anchor" href="#安装fastlane-1" aria-hidden="true">#</a> 安装Fastlane</h3><p>安装了Ruby和Bundler，你以使用Bundler来安装Fastlane。Bundler可以管理你项目中的各种依赖项，并确保它们的版本兼容。<br> 首先，创建一个新的目录，并切换到该目录：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> my_fastlane_project
<span class="token builtin class-name">cd</span> my_fastlane_project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，创建一个Gemfile文件并编辑它，将以下内容复制到文件中：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> <span class="token string">&quot;https://rubygems.org&quot;</span>
gem <span class="token string">&quot;fastlane&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>保存文件后，运行以下命令来安装Fastlane：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bundle install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会安装Fastlane及其依赖项。</p><h3 id="测试fastlane" tabindex="-1"><a class="header-anchor" href="#测试fastlane" aria-hidden="true">#</a> 测试Fastlane</h3><p>一旦Fastlane安装完成，可以在终端中输入以下命令来测试Fastlane是否可以正常工作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastlane --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果一切正常将看到Fastlane的版本号。现已经成功地安装了Fastlane，可以开始使用它来自动化构建和发布iOS应用程序了。</p><h2 id="配置fastfile" tabindex="-1"><a class="header-anchor" href="#配置fastfile" aria-hidden="true">#</a> 配置Fastfile</h2><h3 id="创建fastfile" tabindex="-1"><a class="header-anchor" href="#创建fastfile" aria-hidden="true">#</a> 创建Fastfile</h3><p>首先创建一个Fastfile文件。在终端中，进入你的iOS项目根目录，并输入以下命令来创建一个Fastfile文件：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastlane init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这会启动一个向导，帮助创建Fastfile文件和其他必要的文件和目录。</p><h3 id="配置代码签名证书和描述文件" tabindex="-1"><a class="header-anchor" href="#配置代码签名证书和描述文件" aria-hidden="true">#</a> 配置代码签名证书和描述文件</h3><p>在Fastfile中需要配置代码签名证书和描述文件，以便能够构建和发布你的应用程序。可以使用Fastlane的match插件来生成代码签名证书和描述文件，并自动管理它们的更新。</p><p>打开Fastfile文件，并在文件顶部添加以下代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 定义match任务
lane :match do
  # 使用match插件生成代码签名证书和描述文件
  match(type: &quot;appstore&quot;)
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为match的任务，并使用match插件来生成类型为&quot;appstore&quot;的代码签名证书和描述文件。你可以根据你的需要更改类型，例如&quot;development&quot;、&quot;ad-hoc&quot;等等。</p><h3 id="配置编译和打包任务" tabindex="-1"><a class="header-anchor" href="#配置编译和打包任务" aria-hidden="true">#</a> 配置编译和打包任务</h3><p>一旦配置了代码签名证书和描述文件，就可以配置编译和打包任务。可以使用Fastlane的gym插件来编译代码，并生成IPA文件。<br></p><p>打开Fastfile文件，并在文件顶部添加以下代码：</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># 定义build任务</span>
lane <span class="token symbol">:build</span> <span class="token keyword">do</span>
  <span class="token comment"># 使用gym插件编译代码</span>
  gym<span class="token punctuation">(</span><span class="token symbol">scheme</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">&quot;MyApp&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为build的任务，并使用gym插件来编译名为&quot;MyApp&quot;的应用程序。</p><h3 id="配置发布任务" tabindex="-1"><a class="header-anchor" href="#配置发布任务" aria-hidden="true">#</a> 配置发布任务</h3><p>最后，你可以配置发布任务，以便将应用程序上传到App Store或其他分发渠道。可以使用Fastlane的deliver插件来自动化发布过程。<br></p><p>打开Fastfile文件，并在文件顶部添加以下代码：</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment"># 定义release任务</span>
lane <span class="token symbol">:release</span> <span class="token keyword">do</span>
  <span class="token comment"># 使用deliver插件上传应用程序</span>
  deliver
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了一个名为release的任务，并使用deliver插件来上传应用程序。</p><h3 id="运行任务" tabindex="-1"><a class="header-anchor" href="#运行任务" aria-hidden="true">#</a> 运行任务</h3><p>一旦配置了Fastfile文件，你可以在终端中输入以下命令来运行任务：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastlane &lt;task_name&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，&lt;task_name&gt;是你在Fastfile文件中定义的任务名称。例如，要运行match任务，你可以输入以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastlane match
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="自定义配置" tabindex="-1"><a class="header-anchor" href="#自定义配置" aria-hidden="true">#</a> 自定义配置</h3><p>可以根据你的需要自定义配置，例如定义构建参数、上传到其他分发渠道、发送通知等等。以下是一些示例代码：</p><ul><li>自定义构建参数 可以使用gym插件的参数来自定义编译和打包过程。例如，你可以指定输出的IPA文件名，使用自定义的配置文件等等。以下是一个示例代码：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gym(
  scheme: &quot;MyApp&quot;,
  output_name: &quot;MyApp_v1.0.ipa&quot;,
  configuration: &quot;Release&quot;,
  export_options: {
    method: &quot;app-store&quot;,
    signingStyle: &quot;manual&quot;,
    provisioningProfiles: {
      &quot;com.example.MyApp&quot;: &quot;MyApp_AppStore&quot;,
    }
  }
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用了自定义的参数，例如output_name来指定输出的IPA文件名，configuration来指定编译配置，export_options来指定打包选项。</p><ul><li>上传到其他分发渠道 除了上传到App Store，还可以使用Fastlane的其他插件将应用程序上传到其他分发渠道，例如TestFlight、HockeyApp等等。以下是一个示例代码：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pilot(
  ipa: &quot;MyApp_v1.0.ipa&quot;,
  skip_submission: true,
  skip_waiting_for_build_processing: true,
  distribute_external: true,
  distribute_app_clip: true
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中使用了pilot插件来上传应用程序。我们指定了ipa参数来指定上传的IPA文件，skip_submission参数来跳过提交应用程序审核，skip_waiting_for_build_processing参数来跳过等待构建处理的步骤，distribute_external参数来指定是否分发到外部测试人员，distribute_app_clip参数来指定是否分发应用程序剪辑。</p><ul><li>发送通知 可以使用Fastlane的其他插件来发送通知，例如Slack、HipChat等等。以下是一个示例代码：</li></ul><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token function">slack</span><span class="token punctuation">(</span>
  <span class="token argument-name">message</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;MyApp已经发布到App Store！&quot;</span><span class="token punctuation">,</span>
  <span class="token argument-name">success</span><span class="token punctuation">:</span> <span class="token constant boolean">true</span><span class="token punctuation">,</span>
  <span class="token argument-name">channel</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;#myapp&quot;</span><span class="token punctuation">,</span>
  <span class="token argument-name">username</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;Fastlane&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中使用了slack插件来发送Slack通知。我们指定了message参数来指定通知消息，success参数来指定是否发送成功消息，channel参数来指定发送到的Slack频道，username参数来指定通知的发送者名称。</p><h2 id="fastlane插件" tabindex="-1"><a class="header-anchor" href="#fastlane插件" aria-hidden="true">#</a> Fastlane插件</h2><p>Fastlane还提供了许多插件，用于扩展Fastlane的功能。你可以在Fastlane插件库中找到各种有用的插件，例如：</p><ul><li>match：用于管理和自动化生成iOS和macOS的代码签名证书和描述文件。</li><li>snapshot：用于自动化生成应用程序屏幕截图。</li><li>gym-scan：用于自动化运行XCTest测试并生成测试报告。 可以通过Fastlane的命令行界面来安装和使用这些插件。例如，要安装match插件，请在终端中输入以下命令：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastlane add_plugin match
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，可以在Fastfile中使用match插件来自动管理和生成iOS和macOS的代码签名证书和描述文件。例如，以下是一个使用match插件的Fastfile示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lane :build_app do
  # 使用match插件生成代码签名证书和描述文件
  match(
    type: &quot;appstore&quot;,
    app_identifier: &quot;com.yourcompany.myapp&quot;,
    username: &quot;your_apple_id&quot;
  )

  # 编译代码
  gym(
    scheme: &quot;MyApp&quot;,
    clean: true
  )

  # 打包应用程序
  deliver(
    username: &quot;your_apple_id&quot;,
    app_identifier: &quot;com.yourcompany.myapp&quot;,
    ipa: &quot;./MyApp.ipa&quot;
  )
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中使用match插件来生成代码签名证书和描述文件，然后使用gym工具来编译代码，使用deliver工具来打包应用程序并上传到App Store。</p><h2 id="运行fastlane" tabindex="-1"><a class="header-anchor" href="#运行fastlane" aria-hidden="true">#</a> 运行Fastlane</h2><p>完成Fastfile的配置，你可以使用Fastlane命令来运行自动化任务。例如，要运行上面的示例，请在终端中输入以下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fastlane build_app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Fastlane会自动下载代码、安装依赖项、编译代码、打包应用程序，并将打包好的应用程序上传到App Store。</p>`,66);function v(m,b){const n=r("ExternalLinkIcon");return i(),l("div",null,[c,e("p",null,[e("a",p,[a("Fastlane"),t(n)]),a("是一个流行的用于iOS和Android应用程序自动化构建和发布的自动化打包工具。它可以帮助你自动执行各种任务，例如编译代码、打包应用程序、生成屏幕截图、发布应用程序等等。")]),o])}const g=s(u,[["render",v],["__file","4.html.vue"]]);export{g as default};
