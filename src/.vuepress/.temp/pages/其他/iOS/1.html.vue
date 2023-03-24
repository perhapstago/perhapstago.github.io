<template><div><h1 id="事件传递" tabindex="-1"><a class="header-anchor" href="#事件传递" aria-hidden="true">#</a> 事件传递</h1>
<p>iOS中用户的操作会被转换为UI事件，并由系统传递给应用程序。这个过程涉及到多个对象的交互，其中包括UIApplication、UIWindow、UIView和UIResponder。在本篇文章中，我们将探讨iOS中的UI事件传递机制，以及在应用程序中如何处理UI事件。</p>
<h2 id="事件的传递过程" tabindex="-1"><a class="header-anchor" href="#事件的传递过程" aria-hidden="true">#</a> 事件的传递过程</h2>
<p>当用户在屏幕上进行操作时，如点击按钮或滑动屏幕，这些操作将被转换为UI事件。这些事件将从UIApplication对象开始传递，经过UIWindow和UIView，最终到达事件的目标响应对象。
<br>
事件传递机制是一个基于响应链的过程。当用户执行某个操作时（例如点击屏幕），系统会将该操作转换为一个或多个 UI 事件，并将其传递给应用程序。这些事件的传递过程包括以下步骤：</p>
<h3 id="uiapplication-对象接收到事件" tabindex="-1"><a class="header-anchor" href="#uiapplication-对象接收到事件" aria-hidden="true">#</a> UIApplication 对象接收到事件</h3>
<p>UIApplication 对象是所有 iOS 应用程序的入口点，它负责处理与应用程序相关的事件。当一个事件发生时，首先会被 UIApplication 对象接收到。</p>
<h3 id="uiwindow-对象将事件分派给视图" tabindex="-1"><a class="header-anchor" href="#uiwindow-对象将事件分派给视图" aria-hidden="true">#</a> UIWindow 对象将事件分派给视图</h3>
<p>UIWindow 对象是应用程序中的顶级视图容器。它负责将事件分派给应用程序中的视图对象。</p>
<h3 id="视图对象将事件传递给其子视图" tabindex="-1"><a class="header-anchor" href="#视图对象将事件传递给其子视图" aria-hidden="true">#</a> 视图对象将事件传递给其子视图</h3>
<p>当视图对象接收到事件时，它首先会尝试处理该事件。如果该视图无法处理该事件，则它会将该事件传递给它的子视图。这个过程将一直持续下去，直到找到一个能够处理该事件的视图为止。</p>
<h3 id="视图对象将事件传递给其父视图" tabindex="-1"><a class="header-anchor" href="#视图对象将事件传递给其父视图" aria-hidden="true">#</a> 视图对象将事件传递给其父视图</h3>
<p>如果子视图无法处理该事件，则它会将该事件传递给它的父视图。这个过程将一直持续下去，直到事件被处理或者到达了视图层次结构的顶部（即 UIWindow 对象）为止。</p>
<h3 id="事件被处理或者被忽略" tabindex="-1"><a class="header-anchor" href="#事件被处理或者被忽略" aria-hidden="true">#</a> 事件被处理或者被忽略</h3>
<p>如果事件被处理，则响应链停止传递该事件，并将其传递回 UIApplication 对象。如果事件被忽略，则它将被丢弃，并且不会产生任何响应。</p>
<p>可以通过重写 UIView 或者 UIViewController 的相关方法来处理 UI 事件，这些方法包括：
touchesBegan:withEvent:
touchesMoved:withEvent:
touchesEnded:withEvent:
touchesCancelled:withEvent:
在这些方法中，可以获取到事件对象和触摸点的位置信息，并根据这些信息来处理事件。</p>
</div></template>


