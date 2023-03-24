<template><div><h1 id="xcode-清理" tabindex="-1"><a class="header-anchor" href="#xcode-清理" aria-hidden="true">#</a> Xcode 清理</h1>
<p>整理需要或可以清理的相关模块</p>
<h2 id="运行程序产生的缓存文件" tabindex="-1"><a class="header-anchor" href="#运行程序产生的缓存文件" aria-hidden="true">#</a> 运行程序产生的缓存文件</h2>
<p>重新运行Xcode就会重新生成，随着运行程序的增多占用空间会越来越大。</p>
<ul>
<li>Cmd + Shift + K 或 shift + cmd + alt + k 进行清理，然后退出Xcode。</li>
<li>删除缓存：rm -rf ~/Library/Developer/Xcode/DerivedData 在终端中运行</li>
</ul>
<h2 id="历史版本ipa" tabindex="-1"><a class="header-anchor" href="#历史版本ipa" aria-hidden="true">#</a> 历史版本ipa</h2>
<p>路径：~/Library/Developer/Xcode/Archives</p>
<h2 id="模拟器缓存数据" tabindex="-1"><a class="header-anchor" href="#模拟器缓存数据" aria-hidden="true">#</a> 模拟器缓存数据</h2>
<p>每个版本的模拟器占用的内存空间大约为10M左右。<br>
device.plist可以查看文件夹和设备对应关系，每个文件夹里包含的就是一个特定系统版本的设备的数据。<br>
如果删除之后立即运行程序会报错，先关闭Xcode，再重新打开程序运行即可。运行该路径下会立马生成模拟器对应版本的文件。<br>
~/Library/Developer/CoreSimulator/Devices/</p>
<h2 id="旧设备支持" tabindex="-1"><a class="header-anchor" href="#旧设备支持" aria-hidden="true">#</a> 旧设备支持</h2>
<p>一般是占用内存空间最大的文件夹，即使全部删，再连接设备调试时也会重新自动生成。<br>
一般iOS只向下兼容两个版本就可以了<br>
~/Library/Developer/Xcode/iOS DeviceSupport</p>
<h2 id="无效的插件" tabindex="-1"><a class="header-anchor" href="#无效的插件" aria-hidden="true">#</a> 无效的插件</h2>
<p>因为之前可能安装了一些 Xcode 的插件，比如HighlightSelectedString、VVDocumenter-Xcode等非常方便好用的第三方插件，在Xcode升级后已经失效，或者Xcode在内部已经集成了类似的方法，但是还在原来的位置占用着内存空间，建议删除。
~/Library/Application Support/Developer/Shared/Xcode/Plug-ins</p>
<h2 id="旧版本的模拟器支持" tabindex="-1"><a class="header-anchor" href="#旧版本的模拟器支持" aria-hidden="true">#</a> 旧版本的模拟器支持</h2>
<p>如果不注意安装了很多个版本的模拟器，那么可以按需删除一些旧版本的。<br>
~/Library/Developer/CoreSimulator/Profiles/Runtimes/</p>
<h2 id="playground-项目缓存" tabindex="-1"><a class="header-anchor" href="#playground-项目缓存" aria-hidden="true">#</a> playground 项目缓存</h2>
<p>删除后可重新生成，可以全部删除。再次运行程序会缓存。
~/Library/Developer/XCPGDevices/</p>
<h2 id="旧的文档" tabindex="-1"><a class="header-anchor" href="#旧的文档" aria-hidden="true">#</a> 旧的文档</h2>
<p>该目录下存储的为开发文档，一般有三个文件：</p>
<ul>
<li>com.apple.adc.documentation.iOS.docset(1.68GB)、</li>
<li>com.apple.adc.documentation.OSX.docset(2.62GB)</li>
<li>com.apple.adc.documentation.Xcode.docset(256.4M)</li>
</ul>
<p>如果只做iOS开发可以把OSX.docset删除掉。<br>
删除后不可恢复<br>
~/Library/Developer/Shared/Documentation/DocSets</p>
<h2 id="模拟器的-sdk-版本" tabindex="-1"><a class="header-anchor" href="#模拟器的-sdk-版本" aria-hidden="true">#</a> 模拟器的 SDK 版本</h2>
<p>有多个版本的sdk按需删除。不可恢复<br>
~/application/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/</p>
</div></template>


