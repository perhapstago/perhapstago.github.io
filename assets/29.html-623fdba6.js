import{_ as i,X as e,Y as t,Z as l}from"./framework-8d4f7cb8.js";const a={},r=l('<h1 id="swift-与-oc" tabindex="-1"><a class="header-anchor" href="#swift-与-oc" aria-hidden="true">#</a> Swift 与 OC</h1><h2 id="共同点" tabindex="-1"><a class="header-anchor" href="#共同点" aria-hidden="true">#</a> 共同点</h2><ul><li>都是C语言的超集。OC在C语言基础上添加了一些面向对象编程的特性，Swift也是建立在C语言基础之上。</li><li>OC的引用计数、ARC、属性、协议、接口、初始化、扩展类、命名参数、匿名函数等，在Swift中继续有效。</li><li>Swift和OC共用一套运行时环境，Swift的类型可以桥接到OC，反之亦然</li></ul><h2 id="swift-优点" tabindex="-1"><a class="header-anchor" href="#swift-优点" aria-hidden="true">#</a> swift 优点</h2><h3 id="更安全" tabindex="-1"><a class="header-anchor" href="#更安全" aria-hidden="true">#</a> 更安全</h3><p>swift更安全，OC更灵活 <br></p><p>swift 安全性，包括：</p><ul><li>类型安全：Swift 是一种静态类型语言，编译时会检查变量类型，可以避免一些常见的类型错误，如类型转换错误、访问不存在的方法或属性等。<br></li><li>内存安全：Swift 使用自动引用计数 (ARC) 来管理内存，可以避免常见的内存泄漏和野指针问题。<br></li><li>安全的字符串和集合操作：Swift 提供了强类型的字符串和集合类型，可以避免常见的字符串和集合操作中的缓冲区溢出和数组越界等安全问题。<br></li></ul><p>Objective-C 更注重灵活性，包括：</p><ul><li>面向对象特性：Objective-C 是一种面向对象编程语言，支持多态、继承、封装等特性，这使得代码组织和重用更加灵活和方便。</li><li>运行时特性：Objective-C 提供了一系列运行时 API，可以在运行时动态获取类和对象的信息、调用方法等，这也增加了 Objective-C 的灵活性。</li></ul><h3 id="静态类型语言" tabindex="-1"><a class="header-anchor" href="#静态类型语言" aria-hidden="true">#</a> 静态类型语言</h3><p>swift是静态类型语言，OC是动态类型语言<br></p><ul><li><p>Swift 是一种静态类型语言。<br> 编译时就确定了每个变量的类型。开发者在编写代码时必须显式地声明变量的类型，并且编译器会在编译时检查变量的类型是否与其所赋的值相匹配。在运行时，Swift 程序的变量类型是确定的，无法更改。<br></p></li><li><p>Objective-C 是一种动态类型语言。<br> 编译时不会检查每个变量的类型。相反，变量的类型只有在运行时才能确定。在 Objective-C 中，可以在运行时更改变量的类型，这使得代码更加灵活。<br></p></li></ul><blockquote><p>由于 Swift 是一种静态类型语言，它可以在编译时检测类型错误，并提供更好的代码可读性和可维护性。而 Objective-C 的动态类型特性提供了更大的灵活性，但也可能会导致一些运行时错误和不确定性。<br></p></blockquote><h3 id="面向xx编程" tabindex="-1"><a class="header-anchor" href="#面向xx编程" aria-hidden="true">#</a> 面向XX编程</h3><p>swift注重面向协议编程、函数式编程、面向对象编程，OC注重面向对象编程</p><ul><li><p>Swift 在面向对象编程的同时，注重面向协议编程和函数式编程。其中，面向协议编程是 Swift 的一大特色，它允许将功能定义为协议，并通过协议实现多态。这样可以将不同的实现通过同一接口暴露出来，使得代码更加灵活和可扩展。同时，Swift 还提供了一系列函数式编程特性，如高阶函数、闭包等，这些特性可以使代码更加简洁、易读和易维护。<br></p></li><li><p>Objective-C 则更加注重传统的面向对象编程。它支持类的继承、多态和封装等特性，并通过消息传递机制实现方法的调用。Objective-C 的类和对象模型比较灵活，可以通过运行时机制动态创建类和对象，这使得 Objective-C 更加适合一些动态的、需要运行时特性的应用场景。<br></p></li></ul><blockquote><p>Swift 和 Objective-C 在面向对象编程的基础上，各自注重的方面不同，Swift 更注重面向协议编程和函数式编程，而 Objective-C 更注重传统的面向对象编程。</p></blockquote><h3 id="注重值类型" tabindex="-1"><a class="header-anchor" href="#注重值类型" aria-hidden="true">#</a> 注重值类型</h3><p>Swift注重值类型，OC注重指针和引用 Swift 和 Objective-C 在内存管理上的设计有很大不同，其中 Swift 更加注重值类型，而 Objective-C 更加注重指针和引用。<br></p><ul><li>Swift 强调值类型。<br> 这意味着它支持值类型的定义和使用，如结构体、枚举等。在 Swift 中，值类型的实例在传递时是被复制的，而不是像引用类型那样传递指针。这种方式可以降低内存管理的复杂度，并避免一些常见的内存问题，如野指针、空指针等。<br> 💰</li><li>Objective-C 则更加注重指针和引用。<br> 所有的对象都是通过指针来引用的，而对象之间的关系也是通过指针来建立的。指针在 Objective-C 中被广泛使用，如方法调用、对象创建等，它可以灵活地控制内存的生命周期，但同时也增加了内存管理的难度，需要开发者手动管理内存。<br></li></ul><blockquote><p>Swift 更加注重值类型，这可以降低内存管理的复杂度，避免一些常见的内存问题；而 Objective-C 更加注重指针和引用，这可以提供更加灵活的内存管理方式，但需要开发者手动管理内存。</p></blockquote><h3 id="语法文件特点" tabindex="-1"><a class="header-anchor" href="#语法文件特点" aria-hidden="true">#</a> 语法文件特点</h3><p>swift文件结构和大部分语法简易化，只有.swift文件，每句代码结尾不需要分号。<br></p><ul><li><p>Swift 的文件结构相对简单。<br> Swift 中只有一个文件扩展名为 .swift 的文件，包含了整个应用程序的代码。相比之下，Objective-C 中需要使用 .h 和 .m 两个文件来分别定义类的接口和实现。</p></li><li><p>Swift 的语法相对简易化。<br> Swift 的语法借鉴了多种编程语言的优点，并做了一些创新。例如，Swift 中大量采用了结构体和枚举类型，使得代码更加清晰简洁；使用可选类型来处理空值问题，避免了空指针的问题；采用函数式编程范式，使得代码更加模块化和可测试。同时，Swift 也强制要求在语句结尾不使用分号，使得代码更加干净清晰。</p></li><li><p>Swift 的语法也更加容易阅读。Swift 中采用了一些通俗易懂的关键字和语法，例如 guard、if let、while let 等，使得代码更加易于理解。</p></li></ul><blockquote><p>Swift 的语法简洁易读，文件结构简单，不需要分号等特点，使得开发者可以更加高效地编写代码，并且能够减少代码出错的可能性。</p></blockquote><h3 id="可选类型" tabindex="-1"><a class="header-anchor" href="#可选类型" aria-hidden="true">#</a> 可选类型</h3><p>Swift 中的可选类型是用于所有数据类型，而不仅仅局限于类。它是 Swift 语言中一项非常重要的安全特性，能够在编译时防止程序员犯错，同时保证了程序的稳定性。<br></p><ul><li><p>Objective-C 中的 nil 只适用于对象类型，对于基本数据类型，需要使用特殊值来表示空值。<br> 在 Objective-C 中，如果一个方法返回 nil，则需要使用一些特殊的技巧来避免出错，例如通过检查返回值是否为 nil 来判断方法是否成功执行。这种方式可能会增加代码的复杂性，并且容易出错。</p></li><li><p>Swift 中的可选类型，使用了一种更加简洁明了的方式来处理可空值。<br> 可选类型是一个容器，它可以包含一个值或者 nil，用来表示变量或常量可能为空的情况。在 Swift 中，编译器强制要求在使用可选类型时进行解包操作，以确保程序员已经正确地处理了可空值的情况。这样，就可以避免许多由于空值引起的运行时错误。</p></li></ul><blockquote><p>Swift 中的可选类型是一项非常重要的安全特性，能够保证程序的稳定性，并且避免许多由于空值引起的运行时错误。相比之下，Objective-C 中的 nil 只适用于对象类型，对于基本数据类型，则需要使用一些特殊的技巧来避免出错，容易增加代码的复杂性。</p></blockquote><h3 id="协议" tabindex="-1"><a class="header-anchor" href="#协议" aria-hidden="true">#</a> 协议</h3><p>相对于Objective-C中的protocol，Swift中的protocol有以下不同点：</p><ul><li>语法不同：OC使用@protocol关键字来定义，而在Swift中使用protocol关键字。</li><li>实现方式不同：OC实现protocol需要遵循它并实现其中的方法，同时也可以使用可选方法和属性。而在Swift中，protocol可以有默认实现和可选实现，并使用extension和where语句来扩展协议。</li><li>范围不同：OC可以用在类、类别、协议、方法参数和方法返回类型上。而在Swift中，protocol可以用于类、结构体和枚举。</li><li>属性不同：OC可以定义属性，但只能使用@property关键字定义，且不能指定属性的具体实现方式。而在Swift中，protocol可以定义属性并且可以指定属性的存储方式和计算方式。</li></ul><blockquote><p>总体而言，Swift中的protocol更加强大和灵活，并且在多继承和默认实现方面更加优秀。而Objective-C中的protocol则更加简单和直接，更适合于一些简单的协议定义。</p></blockquote><h3 id="泛型类型" tabindex="-1"><a class="header-anchor" href="#泛型类型" aria-hidden="true">#</a> 泛型类型</h3><p>Swift中的泛型类型可以适用于所有数据类型，包括类、结构体、枚举和函数等，而OC中的泛型类型只能应用于集合类型。<br> 这使得Swift的泛型更加方便和通用，可以在不同的数据类型之间共享代码和逻辑，减少了代码的冗余和重复，同时还可以提高代码的可读性和可维护性。<br></p><ul><li>使用泛型类型还可以在编译时发现类型错误，而非在运行时，从而减少了运行时错误的可能性。</li><li>Swift的泛型类型还可以使用where子句，进一步约束泛型类型的类型参数，从而使得代码更加安全和可靠。</li></ul><blockquote><p>OC中的泛型类型只能为集合类型添加泛型参数，无法应用于其他类型。这使得OC的泛型类型功能相对较弱，无法在不同的数据类型之间共享代码和逻辑，同时还需要使用较多的类型转换和类型检查，增加了代码的复杂度和运行时错误的风险。</p></blockquote><h3 id="高阶函数" tabindex="-1"><a class="header-anchor" href="#高阶函数" aria-hidden="true">#</a> 高阶函数</h3><p>Swift中的函数式编程功能非常强大，其标准库中内置了许多方便快捷的高阶函数，包括map、filter、reduce等，以及map的扩展flatMap等。这些高阶函数可以大大简化代码的编写，提高开发效率和代码的可读性。<br></p><p>例如，使用map函数可以将一个数组中的元素映射到一个新的数组中，并对每个元素进行相同的操作。而使用filter函数则可以过滤出符合条件的元素，减少了代码的复杂度和冗余。而使用reduce函数则可以将一个数组中的元素进行累加、累乘等操作，从而得到一个最终的结果。<br></p><p>除了以上三个高阶函数，Swift还内置了许多其他的高阶函数，例如sorted、forEach等，可以在不同的场景中大大简化代码的编写，提高代码的可读性和可维护性。这些高阶函数的使用也符合函数式编程的思想，可以使得代码更加简洁、易读和易于测试。</p><h3 id="访问权限" tabindex="-1"><a class="header-anchor" href="#访问权限" aria-hidden="true">#</a> 访问权限</h3><p>Swift相较于Objective-C新增了两种权限，即open和fileprivate。相比之下，Swift中的权限更加细化和明确，而Objective-C中只有public和private两种权限。<br></p><ul><li>open：最高权限，可以在模块内外被访问、继承、重写、实例化。</li><li>public：可以在模块内外被访问，但不能被继承和重写。</li><li>internal：默认权限，只能在同一模块内被访问。</li><li>fileprivate：只能在当前源文件中被访问。</li><li>private：只能在同一作用域中被访问，即在同一个类或同一个文件中可以被访问。</li></ul><blockquote><p>使用这些权限可以更好地控制代码的可见性和访问范围，使代码更加清晰、可维护。</p></blockquote><h3 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h3><p>Swift中独有的元组类型(tuples)是一种特殊的数据类型，它允许我们把多个值组合成一个复合值。<br></p><ul><li>与数组或字典不同，元组内的值可以是任何类型，并且不要求是相同类型的。这种特性使得元组在临时存储和传递数据时非常有用。</li><li>与结构体(struct)类似，元组是一个值类型(value type)，它可以被创建、传递和赋值，而且在创建时可以给元素命名，使得元组更加易读和易于理解。</li></ul><blockquote><p>相对于其他编程语言，Swift的元组类型更加灵活和易用。例如，我们可以在函数返回时使用元组类型，从而返回多个值。这种方式非常方便，可以让我们避免定义一个结构体或类来封装多个返回值。此外，元组类型还可以与高阶函数(如map、reduce、filter等)结合使用，从而简化代码，提高效率。</p></blockquote><h3 id="速度快" tabindex="-1"><a class="header-anchor" href="#速度快" aria-hidden="true">#</a> 速度快</h3><p>Swift 相对于 Objective-C 确实有更快的运行速度和更高的运算性能，主要有以下几个原因：</p><ul><li>Swift 使用了 LLVM 编译器和优化器，可以产生高效的本地代码，提高了运行效率；</li><li>Swift 的类型推断和安全检查，减少了运行时的错误，提高了代码的稳定性和性能；</li><li>Swift 引入了结构体（Structures）和枚举（Enums）的概念，使得它们可以被直接传值而无需传递引用，提高了程序的性能；</li><li>Swift 支持更好的函数式编程范式，可以使用高阶函数等功能，减少代码量，提高代码执行效率。</li></ul><blockquote><p>编译速度也取决于具体的情况。在一些复杂的情况下，Swift 的编译速度可能会比 Objective-C 慢，但总体上来说，Swift 是更快的。此外，对于一些需要大量计算和处理的任务，如图形和游戏开发，C++ 可能是更好的选择。</p></blockquote><h2 id="swift-不足点" tabindex="-1"><a class="header-anchor" href="#swift-不足点" aria-hidden="true">#</a> swift 不足点</h2><ul><li>相对较新：Swift 作为一种相对较新的编程语言，其发展和生态系统相对不够成熟。因此，Swift 开发者可能需要更多的时间去掌握最新的技术和工具，以保持与快速发展的技术潮流同步。</li><li>不稳定：Swift 的 API（应用程序二进制接口）在不同版本之间可能会发生变化，这可能会导致应用程序不兼容，需要重新编译。</li><li>与 Objective-C 代码的兼容性：由于 Swift 和 Objective-C 是两种不同的编程语言，它们的语法和工作方式也有很大的不同。因此，使用 Swift 开发的应用程序可能需要与使用 Objective-C 开发的库和组件进行交互，这可能会导致一些兼容性问题。</li><li>缺乏成熟的第三方库：相对于 Objective-C，Swift 的第三方库和组件的数量相对较少。</li></ul><h2 id="swift-一些细节" tabindex="-1"><a class="header-anchor" href="#swift-一些细节" aria-hidden="true">#</a> swift 一些细节</h2><ul><li>不分.h和.m文件 ，一个类只有.swift一个文件。</li><li>句尾不需要分号 ，除非是一行中写三行代码就加分号隔开。</li><li>一个类就是用一对 { } 括起的，没有 @implementation 和 @end</li><li>数据类型都会自动判断，只区分变量和常量</li><li>BOOL类型更加严格 ，Swift不再是OC的非0就是真，而是true才是真false才是假</li><li>循环语句必须加{}就算只有一行代码也必须要加</li><li>switch语句后面可以判断各种数据类型，如Int、字符串等，并且里面不用写break</li><li>if后的括号可以省略，而OC里 if后面必须写括号。</li><li>main.m文件没有了，@UIApplicationMain 是程序入口</li><li>用print(&quot;&quot;) 打印变量时可以 print(&quot;(value)&quot;)，不用像OC那样记很多%@，d%等。</li><li>监听方法，直接使用字符串引起</li><li>枚举类型的前缀可以省略，如：.ContactAdd</li><li>绝大多数可以省略 self</li></ul>',58),c=[r];function f(o,h){return e(),t("div",null,c)}const d=i(a,[["render",f],["__file","29.html.vue"]]);export{d as default};
