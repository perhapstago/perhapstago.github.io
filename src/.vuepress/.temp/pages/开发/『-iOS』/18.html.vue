<template><div><h1 id="uiview的layout方法" tabindex="-1"><a class="header-anchor" href="#uiview的layout方法" aria-hidden="true">#</a> UIView的layout方法</h1>
<h2 id="layoutsubviews" tabindex="-1"><a class="header-anchor" href="#layoutsubviews" aria-hidden="true">#</a> layoutSubviews</h2>
<p>layoutSubviews 方法是 UIView 的一个布局方法，主要用于对 UIView 的子视图进行布局。当 UIView 的 frame 或 bounds 属性发生变化时就会自动调用 layoutSubviews 方法。layoutSubviews 方法默认为空实现，因此我们可以在子类中覆盖这个方法，实现自己的布局逻辑。</p>
<h3 id="调用时机" tabindex="-1"><a class="header-anchor" href="#调用时机" aria-hidden="true">#</a> 调用时机</h3>
<p>在 iOS 中，UIView 的布局是自下而上的，也就是说，当一个视图的 frame 或 bounds 属性发生变化时，它的所有子视图都会相应地调整布局。在这个过程中，iOS 会先调用父视图的 layoutSubviews 方法，然后再调用子视图的 layoutSubviews 方法。这意味着，如果我们需要修改某个子视图的布局，就可以在父视图的 layoutSubviews 方法中对它进行修改。<br></p>
<ul>
<li>init初始化不会触发layoutSubviews，如果设置了不为CGRectZero的frame的时候会被调用</li>
<li>addSubview会触发layoutSubviews</li>
<li>设置view的frame的时候会被调用，当然前提是frame的值设置前后发生了变化</li>
<li>滚动一个UIScrollView会触发layoutSubviews事件</li>
<li>旋转Screen会触发父UIView上layoutSubviews</li>
<li>改变一个UIView大小的时候也会触发父UIView上的layoutSubviews事件</li>
<li>直接调用setLayoutSubviews</li>
</ul>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<p>在实现 layoutSubviews 方法时，需要注意以下几点：</p>
<ul>
<li>不要在 layoutSubviews 方法中进行耗时操作，否则会影响 UI 的响应性能。</li>
<li>不要直接修改 frame 属性，而是应该通过调用 subview.frame = ... 来修改子视图的位置和大小。</li>
<li>尽量避免在 layoutSubviews 方法中进行复杂的布局计算，以免出现布局计算错误的情况。</li>
<li>如果子视图的布局比较复杂，可以考虑在子视图中实现自己的布局逻辑。</li>
</ul>
<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h3>
<p>layoutSubviews 方法适用于对视图的子视图进行布局的场景。例如，我们可以在 layoutSubviews 方法中实现以下布局逻辑：</p>
<ul>
<li>水平或垂直排列子视图</li>
<li>根据父视图的大小自动调整子视图的大小和位置</li>
<li>根据某些条件调整子视图的位置和大小</li>
</ul>
<h2 id="setneedslayout" tabindex="-1"><a class="header-anchor" href="#setneedslayout" aria-hidden="true">#</a> setNeedsLayout</h2>
<p>setNeedsLayout 方法是 UIView 的一个方法，用于标记当前视图需要重新布局。当修改一个视图的属性，例如 frame 或 bounds，或者向它添加或删除子视图时，我们需要调用 setNeedsLayout 方法来标记它需要重新布局。iOS 会在下一个 UI 循环中自动调用 layoutSubviews 方法，来更新视图的布局。</p>
<h3 id="调用时机-1" tabindex="-1"><a class="header-anchor" href="#调用时机-1" aria-hidden="true">#</a> 调用时机</h3>
<p>当修改一个视图的属性时，如果这个属性会影响视图的布局，那么就需要调用 setNeedsLayout 方法，以通知 iOS 这个视图需要重新布局。例如：</p>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>self.view.frame = CGRectMake(0, 0, 320, 480);
[self.view setNeedsLayout];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当修改 self.view 的 frame 属性时，会调用 setNeedsLayout 方法，以通知 iOS 这个视图需要重新布局。</p>
<h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1" aria-hidden="true">#</a> 注意事项</h3>
<p>在使用 setNeedsLayout 方法时，需要注意以下几点：</p>
<ul>
<li>在修改视图的属性时，一定要调用 setNeedsLayout 方法，以确保视图得以重新布局。</li>
<li>不要直接调用 layoutSubviews 方法，而是应该通过调用 setNeedsLayout 方法来标记视图需要重新布局，以保证布局计算的正确性和性能。</li>
<li>如果视图的属性需要在下一个 UI 循环中生效，可以考虑在 setNeedsLayout 方法后使用 CATransaction 来延迟执行布局。</li>
</ul>
<h2 id="layoutifneeded" tabindex="-1"><a class="header-anchor" href="#layoutifneeded" aria-hidden="true">#</a> layoutIfNeeded</h2>
<p>layoutIfNeeded 方法是 UIView 的一个方法，用于立即更新视图的布局。如果调用 layoutIfNeeded 方法，它会强制立即执行视图的布局计算，以确保视图的布局是最新的。与 setNeedsLayout 方法不同的是，layoutIfNeeded 方法是立即执行布局计算，而不是在下一个 UI 循环中执行布局计算。<br></p>
<p>如果有layoutIfNeeded标记的刷新，立即调用layoutSubviews进行重新布局。对于一组动画而言，不管有多少约束改变，只需在动画里执行一次layoutIfNeeded，所有的都会以动画的方式。如果一些变化不想动画，在动画之前执行layoutIfNeeded。</p>
<h3 id="调用时机-2" tabindex="-1"><a class="header-anchor" href="#调用时机-2" aria-hidden="true">#</a> 调用时机</h3>
<p>当需要在修改视图属性后立即执行布局计算时，可以调用 layoutIfNeeded 方法。例如，需要在某些场景下立即执行布局计算，以便更好地响应用户的操作。示例如下：</p>
<div class="language-objective line-numbers-mode" data-ext="objective"><pre v-pre class="language-objective"><code>self.view.frame = CGRectMake(0, 0, 320, 480);
[self.view layoutIfNeeded];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，当修改 self.view 的 frame 属性后，立即调用 layoutIfNeeded 方法，以确保视图立即更新布局。</p>
<h3 id="注意事项-2" tabindex="-1"><a class="header-anchor" href="#注意事项-2" aria-hidden="true">#</a> 注意事项</h3>
<p>在使用 layoutIfNeeded 方法时，需要注意以下几点：</p>
<ul>
<li>layoutIfNeeded 方法是立即执行布局计算的，所以在使用时需要谨慎考虑性能和效果的平衡。</li>
<li>如果视图的属性需要在下一个 UI 循环中生效，应该使用 setNeedsLayout 方法来标记视图需要重新布局。</li>
<li>在某些场景下，可以考虑将 layoutIfNeeded 方法嵌套在 UIView 的动画方法中，以实现更加平滑的动画效果。</li>
</ul>
<h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h3>
<p>layoutIfNeeded 方法适用于需要立即执行布局计算的场景。例如，在某些场景下需要在用户操作后立即更新视图的布局，以便更好地响应用户的操作。另外，在某些动画效果中，也可以使用 layoutIfNeeded 方法，以实现更加平滑的动画效果。</p>
<h2 id="drawrect" tabindex="-1"><a class="header-anchor" href="#drawrect" aria-hidden="true">#</a> drawRect</h2>
<p>drawRect 是 UIView 的一个方法，用于绘制视图的内容。当需要绘制自定义的视图内容时，可以重写 drawRect 方法，并在其中编写自定义的绘制代码。drawRect 方法是一个很重要的方法，因为它提供了一种在视图上绘制自定义内容的方法。</p>
<h2 id="调用时机-3" tabindex="-1"><a class="header-anchor" href="#调用时机-3" aria-hidden="true">#</a> 调用时机</h2>
<p>当视图需要重新绘制时，系统会自动调用 drawRect 方法。例如，在以下情况下，视图需要重新绘制：</p>
<ul>
<li>视图第一次被创建时。</li>
<li>视图的 setNeedsDisplay 方法被调用时。</li>
<li>视图的 setNeedsDisplayInRect: 方法被调用时。
在 drawRect 方法被调用时可以使用 Core Graphics 框架来绘制自定义的内容。<br></li>
</ul>
<p>注意点：</p>
<ul>
<li>若使用UIView绘图，只能在drawRect方法中获取相应的contextRef并绘图。如果在其他方法中获取将获取到一个invalidate的ref并且不能够用于绘图。drawRect不能手动显示调用，必须通过调用setNeedsDisplay或者setNeedsDisplayInRect让系统自动调用该方法。</li>
<li>若使用calayer绘图，只能在drawInContext中（类似于drawRect）绘制，或者在delegate中的相应方法绘制，同样也是调用setNeedDisplay等间接调用以上方法。</li>
<li>若要实时画图，不能使用gestureRecognizer，只能使用touchbegan等方法来调用setNeedsDisplay实时刷新屏幕。</li>
</ul>
</div></template>


