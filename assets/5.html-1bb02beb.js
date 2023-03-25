import{_ as s,X as l,Y as r,$ as n,a0 as e,a1 as t,Z as i,E as d}from"./framework-8d4f7cb8.js";const o={},c=i(`<h1 id="lldb-调试" tabindex="-1"><a class="header-anchor" href="#lldb-调试" aria-hidden="true">#</a> LLDB 调试</h1><h2 id="原生-lldb-命令" tabindex="-1"><a class="header-anchor" href="#原生-lldb-命令" aria-hidden="true">#</a> 原生 LLDB 命令</h2><h3 id="p" tabindex="-1"><a class="header-anchor" href="#p" aria-hidden="true">#</a> p</h3><p>打印基本数据类型的值，查看对象返回对象的指针地址。</p><h4 id="po" tabindex="-1"><a class="header-anchor" href="#po" aria-hidden="true">#</a> po</h4><p>打印对象的描述，常量、变量、表达式返回的对象等。</p><h4 id="pclass" tabindex="-1"><a class="header-anchor" href="#pclass" aria-hidden="true">#</a> pclass</h4><p>打印对象继承关系</p><h4 id="presponder" tabindex="-1"><a class="header-anchor" href="#presponder" aria-hidden="true">#</a> presponder</h4><p>打印响应链</p><h3 id="bt" tabindex="-1"><a class="header-anchor" href="#bt" aria-hidden="true">#</a> bt</h3><p>打印线程的堆栈信息（bt all 打印全部线程堆栈信息）。</p><h3 id="e" tabindex="-1"><a class="header-anchor" href="#e" aria-hidden="true">#</a> e</h3><p>动态变量赋值：<br> if 处断点，控制台输入 e dataArray.count = 0 回车，继续运行即可：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if dataArray.count == 0 {
	 print(&quot;dataArray is empty&quot;)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="call" tabindex="-1"><a class="header-anchor" href="#call" aria-hidden="true">#</a> call</h3><p>动态调用函数<br> 动态将 cell 的某个子视图移除：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) po cell.contentView.subviews
&lt;__NSArrayM 0x60800005f5f0&gt;(
&lt;UILabel: 0x7f91f4f18c90; frame = (5 5; 300 25); text = &#39;2 - Drawing index is top ...&#39;; userInteractionEnabled = NO; tag = 1; layer = &lt;_UILabelLayer: 0x60800009ff40&gt;&gt;,
&lt;UIImageView: 0x7f91f4d20050; frame = (105 20; 85 85); opaque = NO; userInteractionEnabled = NO; tag = 2; layer = &lt;CALayer: 0x60000003ff60&gt;&gt;,
&lt;UIImageView: 0x7f91f4f18f10; frame = (200 20; 85 85); opaque = NO; userInteractionEnabled = NO; tag = 3; layer = &lt;CALayer: 0x608000039860&gt;&gt;
)
(lldb) call [label removeFromSuperview]
(lldb) po cell.contentView.subviews
&lt;__NSArrayM 0x600000246de0&gt;(
&lt;UIImageView: 0x7f91f4d20050; frame = (105 20; 85 85); opaque = NO; userInteractionEnabled = NO; tag = 2; layer = &lt;CALayer: 0x60000003ff60&gt;&gt;,
&lt;UIImageView: 0x7f91f4f18f10; frame = (200 20; 85 85); opaque = NO; userInteractionEnabled = NO; tag = 3; layer = &lt;CALayer: 0x608000039860&gt;&gt;
)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image" tabindex="-1"><a class="header-anchor" href="#image" aria-hidden="true">#</a> image</h3><p>输出 App 中的所有 module，可以查看某一个地址对应的代码位置。</p><h4 id="image-lookup-name" tabindex="-1"><a class="header-anchor" href="#image-lookup-name" aria-hidden="true">#</a> image lookup -name</h4><p>查找方法来源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) image lookup -n transformOtherModelToSuit:
1 match found in /Users/xxx/Library/Developer/Xcode/DerivedData/DiDi-cwpbvvyvqmeijmcjnneothzuthsy/Build/Products/Debug-iphonesimulator/DiDi.app/DiDi:
        Address: DiDi[0x0000000100293d60] (DiDi.__TEXT.__text + 2693664)
        Summary: DiDi\`+[FW_BetFunction transformOtherModelToSuit:] at FW_BetFunction.m:107
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="image-lookup-–type" tabindex="-1"><a class="header-anchor" href="#image-lookup-–type" aria-hidden="true">#</a> image lookup –type</h4><p>查看成员</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) image lookup -t MatchEvent
1 match found in /Users/xxxx/Library/Developer/Xcode/DerivedData/DiDi-cwpbvvyvqmeijmcjnneothzuthsy/Build/Products/Debug-iphonesimulator/DiDi.app/DiDi:
id = {0x00433d32}, name = &quot;MatchEvent&quot;, byte-size = 48, decl = MatchEvent.h:11, compiler_type = &quot;@interface MatchEvent : NSObject{
    BOOL _isHome;
    NSString * _playerName;
    NSString * _timePoint;
    NSString * _eventType;
    NSString * _eventDesc;
}
@property ( getter = isHome,setter = setIsHome:,assign,readwrite,nonatomic ) BOOL isHome;
@property ( getter = playerName,setter = setPlayerName:,readwrite,copy,nonatomic ) NSString * playerName;
@property ( getter = timePoint,setter = setTimePoint:,readwrite,copy,nonatomic ) NSString * timePoint;
@property ( getter = eventType,setter = setEventType:,readwrite,copy,nonatomic ) NSString * eventType;
@property ( getter = eventDesc,setter = setEventDesc:,readwrite,copy,nonatomic ) NSString * eventDesc;
@end&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="image-lookup-address" tabindex="-1"><a class="header-anchor" href="#image-lookup-address" aria-hidden="true">#</a> image lookup -address</h4><p>查找崩溃位置<br> 遇到 crash 查看线程栈，只能看到栈帧的地址，使用 image lookup –address 地址 可以方便的定位到这个地址对应的代码行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0   CoreFoundation                      0x0000000103209b0b __exceptionPreprocess + 171
1   libobjc.A.dylib                     0x00000001079db141 objc_exception_throw + 48
2   CoreFoundation                      0x000000010313effb -[__NSArrayM objectAtIndex:] + 203
3   DiDi                                0x00000001009a9f3a -[FW_MyHomeTableView tableView:cellForRowAtIndexPath:] + 1322
4   UIKit                               0x00000001055a2ab2 -[UITableView _createPreparedCellForGlobalRow:withIndexPath:willDisplay:] + 750
5   UIKit                               0x00000001055a2cf8 -[UITableView _createPreparedCellForGlobalRow:willDisplay:] + 74
6   UIKit                               0x0000000105577639 -[UITableView _updateVisibleCellsNow:isRecursive:] + 2845
7   UIKit                               0x00000001055abccc -[UITableView _performWithCachedTraitCollection:] + 111
8   UIKit                               0x0000000105592e7a -[UITableView layoutSubviews] + 233
9   UIKit                               0x00000001054f955b -[UIView(CALayerDelegate) layoutSublayersOfLayer:] + 1268
10  QuartzCore                          0x0000000105114904 -[CALayer layoutSublayers] + 146

image lookup -a 0x00000001009a9f3a
      Address: DiDi[0x0000000100609f3a] (DiDi.__TEXT.__text + 6323194)
      Summary: DiDi\`-[FW_MyHomeTableView tableView:cellForRowAtIndexPath:] + 1322 at FW_MyHomeTableView.m:243
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="breakpoint" tabindex="-1"><a class="header-anchor" href="#breakpoint" aria-hidden="true">#</a> breakpoint</h3><h4 id="breakpoint-set-n-func-name" tabindex="-1"><a class="header-anchor" href="#breakpoint-set-n-func-name" aria-hidden="true">#</a> breakpoint set -n func name</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) breakpoint set -n viewDidLoad
Breakpoint 4: 414 locations.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="breakpoint-set-f-xxx-l-xxx" tabindex="-1"><a class="header-anchor" href="#breakpoint-set-f-xxx-l-xxx" aria-hidden="true">#</a> breakpoint set -f xxx -l xxx</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) breakpoint set -f FW_ProfilesDetailModel.m -l 95
Breakpoint 3: where = DiDi\`-[FW_ProfilesDetailModel incomeRate] + 27 at FW_ProfilesDetailModel.m:96, address = 0x0000000105b404bb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="breakpoint-set-n-类名-方法名" tabindex="-1"><a class="header-anchor" href="#breakpoint-set-n-类名-方法名" aria-hidden="true">#</a> breakpoint set -n &quot;-[类名 方法名]&quot;</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) breakpoint set -n &quot;-[FW_MyHomeViewController viewDidLoad]&quot;
Breakpoint 8: where = DiDi\`-[FW_MyHomeViewController viewDidLoad] + 20 at FW_MyHomeViewController.m:58, address = 0x0000000105aec944
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="breakpoint-set-c-xxxx" tabindex="-1"><a class="header-anchor" href="#breakpoint-set-c-xxxx" aria-hidden="true">#</a> breakpoint set -c &quot;xxxx&quot;</h4><p>条件断点操作</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>breakpoint set -f FW_HomeCell.m -l 362 -c &quot;width &gt; 68&quot;
Breakpoint 5: where = DiDi\`-[FW_HomeCell_HotBill setDataSource:] + 2006 at FW_HomeCell.m:363, address = 0x000000010d22e0a6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="breakpoint-list" tabindex="-1"><a class="header-anchor" href="#breakpoint-list" aria-hidden="true">#</a> breakpoint list</h4><p>查看断点列表</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) breakpoint list
Current breakpoints:
8: name = &#39;-[FW_MyHomeViewController viewDidLoad]&#39;, locations = 1, resolved = 1, hit count = 2
  8.1: where = DiDi\`-[FW_MyHomeViewController viewDidLoad] + 20 at FW_MyHomeViewController.m:58, address = 0x0000000105aec944, resolved, hit count = 2 
9: file = &#39;/Users/xxxx/didi-ios/DiDi/FollowWinner/Model/FW_HomeModel.m&#39;, line = 24, exact_match = 0, locations = 1, resolved = 1, hit count = 0
  9.1: where = DiDi\`+[FW_HomeModel_Rank parasWithDict:limitNickLength:] + 89 at FW_HomeModel.m:24, address = 0x00000001061bc169, resolved, hit count = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="breakpoint-disable-enable" tabindex="-1"><a class="header-anchor" href="#breakpoint-disable-enable" aria-hidden="true">#</a> breakpoint disable/enable</h4><p>禁用/启用断点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//禁用断点
(lldb) breakpoint disable 9
1 breakpoints disabled.
(lldb) breakpoint list
Current breakpoints:
9: file = &#39;/Users/zmz/didi-ios/DiDi/FollowWinner/Model/FW_HomeModel.m&#39;, line = 24, exact_match = 0, locations = 1 Options: disabled 
  9.1: where = DiDi\`+[FW_HomeModel_Rank parasWithDict:limitNickLength:] + 89 at FW_HomeModel.m:24, address = 0x00000001061bc169, unresolved, hit count = 0
//启用断点
(lldb) breakpoint enable 9
1 breakpoints enabled.
(lldb) breakpoint list
Current breakpoints:
9: file = &#39;/Users/zmz/didi-ios/DiDi/FollowWinner/Model/FW_HomeModel.m&#39;, line = 24, exact_match = 0, locations = 1, resolved = 1, hit count = 0
  9.1: where = DiDi\`+[FW_HomeModel_Rank parasWithDict:limitNickLength:] + 89 at FW_HomeModel.m:24, address = 0x00000001061bc169, resolved, hit count = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="breakpoint-delete" tabindex="-1"><a class="header-anchor" href="#breakpoint-delete" aria-hidden="true">#</a> breakpoint delete</h4><p>删除断点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) breakpoint delete 8
1 breakpoints deleted; 0 breakpoint locations disabled.
(lldb) breakpoint list
Current breakpoints:
9: file = &#39;/Users/xxxx/didi-ios/DiDi/FollowWinner/Model/FW_HomeModel.m&#39;, line = 24, exact_match = 0, locations = 1, resolved = 1, hit count = 0
 9.1: where = DiDi\`+[FW_HomeModel_Rank parasWithDict:limitNickLength:] + 89 at FW_HomeModel.m:24, address = 0x00000001061bc169, resolved, hit count = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command-alias" tabindex="-1"><a class="header-anchor" href="#command-alias" aria-hidden="true">#</a> command alias</h3><p>自定义别名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) command alias see thread backtrace
(lldb) see 5
  thread #5
    frame #0: 0x000000010bd3544e libsystem_kernel.dylib\`__workq_kernreturn + 10
    frame #1: 0x000000010bd69621 libsystem_pthread.dylib\`_pthread_wqthread + 1426
    frame #2: 0x000000010bd6907d libsystem_pthread.dylib\`start_wqthread + 13
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="command-alias-1-2" tabindex="-1"><a class="header-anchor" href="#command-alias-1-2" aria-hidden="true">#</a> command alias %1 %2</h3><p>自定义别名带参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) command alias dlt breakpoint delete %1
(lldb) breakpoint list
Current breakpoints:
3: file = &#39;JSONKit.m&#39;, line = 725, exact_match = 0, locations = 1, resolved = 1, hit count = 0
  3.1: where = TEST\`-[JKArray dealloc] + 20 at JSONKit.m:727, address = 0x00000001073360c4, resolved, hit count = 0
(lldb) dlt 3
1 breakpoints deleted; 0 breakpoint locations disabled.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lldb 初始化时会读取 ~/.lldbinit 文件，可以把简写命令写进此文件中。</p><ul><li>终端输入 vi ~/.lldbinit 编辑</li><li>写入内容，如：command alias 堆栈 thread backtrace。</li><li>ESC、wq 保存退出编辑。</li></ul><h3 id="menthods" tabindex="-1"><a class="header-anchor" href="#menthods" aria-hidden="true">#</a> menthods</h3><p>打印当前对象的属性和方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) methods p1
&lt;Person: 0x60000003eac0&gt; : 
in Person:
		Properties:
				@property (copy, nonatomic) NSString* name; (@synthesize name = _name;) 
				@property (nonatomic) long age; (@synthesize age = _age; )
		Instance Methods:
				- (void) eat; (0x1098bf3e0)
				- (void) .cxx_destruct; (0x1098bf4fo)
				- (id) description; (0x1098bf410)
				- (id) name; (0x1098bf430)
(NSObject . . )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pachtion" tabindex="-1"><a class="header-anchor" href="#pachtion" aria-hidden="true">#</a> pachtion</h3><p>打印对象调用者及方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) pactions 0x7fcdhsja212728
&lt;ViewController: 0x7fcdhsja212728&gt;: login:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search" aria-hidden="true">#</a> search</h3><p>搜索栈内控件及其子控件</p><h3 id="所有-lldb-命令" tabindex="-1"><a class="header-anchor" href="#所有-lldb-命令" aria-hidden="true">#</a> 所有 LLDB 命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) help
Debugger commands:
  apropos           -- List debugger commands related to a word or subject.
  breakpoint        -- Commands for operating on breakpoints (see &#39;help b&#39; for
                       shorthand.)
  bugreport         -- Commands for creating domain-specific bug reports.
  command           -- Commands for managing custom LLDB commands.
  disassemble       -- Disassemble specified instructions in the current
                       target.  Defaults to the current function for the
                       current thread and stack frame.
  expression        -- Evaluate an expression on the current thread.  Displays
                       any returned value with LLDB&#39;s default formatting.
  frame             -- Commands for selecting and examing the current thread&#39;s
                       stack frames.
  gdb-remote        -- Connect to a process via remote GDB server.  If no host
                       is specifed, localhost is assumed.
  gui               -- Switch into the curses based GUI mode.
  help              -- Show a list of all debugger commands, or give details
                       about a specific command.
  kdp-remote        -- Connect to a process via remote KDP server.  If no UDP
                       port is specified, port 41139 is assumed.
  language          -- Commands specific to a source language.
  log               -- Commands controlling LLDB internal logging.
  memory            -- Commands for operating on memory in the current target
                       process.
  platform          -- Commands to manage and create platforms.
  plugin            -- Commands for managing LLDB plugins.
  process           -- Commands for interacting with processes on the current
                       platform.
  quit              -- Quit the LLDB debugger.
  register          -- Commands to access registers for the current thread and
                       stack frame.
  reproducer        -- Commands controlling LLDB reproducers.
  script            -- Invoke the script interpreter with provided code and
                       display any results.  Start the interactive interpreter
                       if no code is supplied.
  settings          -- Commands for managing LLDB settings.
  source            -- Commands for examining source code described by debug
                       information for the current target process.
  statistics        -- Print statistics about a debugging session
  target            -- Commands for operating on debugger targets.
  thread            -- Commands for operating on one or more threads in the
                       current process.
  type              -- Commands for operating on the type system.
  version           -- Show the LLDB debugger version.
  watchpoint        -- Commands for operating on watchpoints.
Current command abbreviations (type &#39;help command alias&#39; for more info):
  add-dsym  -- Add a debug symbol file to one of the target&#39;s current modules
               by specifying a path to a debug symbols file, or using the
               options to specify a module to download symbols for.
  attach    -- Attach to process by ID or name.
  b         -- Set a breakpoint using one of several shorthand formats.
  bt        -- Show the current thread&#39;s call stack.  Any numeric argument
               displays at most that many frames.  The argument &#39;all&#39; displays
               all threads.
  c         -- Continue execution of all threads in the current process.
  call      -- Evaluate an expression on the current thread.  Displays any
               returned value with LLDB&#39;s default formatting.
  continue  -- Continue execution of all threads in the current process.
  detach    -- Detach from the current target process.
  di        -- Disassemble specified instructions in the current target. 
               Defaults to the current function for the current thread and
               stack frame.
  dis       -- Disassemble specified instructions in the current target. 
               Defaults to the current function for the current thread and
               stack frame.
  display   -- Evaluate an expression at every stop (see &#39;help target
               stop-hook&#39;.)
  down      -- Select a newer stack frame.  Defaults to moving one frame, a
               numeric argument can specify an arbitrary number.
  env       -- Shorthand for viewing and setting environment variables.
  exit      -- Quit the LLDB debugger.
  f         -- Select the current stack frame by index from within the current
               thread (see &#39;thread backtrace&#39;.)
  file      -- Create a target using the argument as the main executable.
  finish    -- Finish executing the current stack frame and stop after
               returning.  Defaults to current thread unless specified.
  image     -- Commands for accessing information for one or more target
               modules.
  j         -- Set the program counter to a new address.
  jump      -- Set the program counter to a new address.
  kill      -- Terminate the current target process.
  l         -- List relevant source code using one of several shorthand formats.
  list      -- List relevant source code using one of several shorthand formats.
  n         -- Source level single step, stepping over calls.  Defaults to
               current thread unless specified.
  next      -- Source level single step, stepping over calls.  Defaults to
               current thread unless specified.
  nexti     -- Instruction level single step, stepping over calls.  Defaults to
               current thread unless specified.
  ni        -- Instruction level single step, stepping over calls.  Defaults to
               current thread unless specified.
  p         -- Evaluate an expression on the current thread.  Displays any
               returned value with LLDB&#39;s default formatting.
  parray    -- Evaluate an expression on the current thread.  Displays any
               returned value with LLDB&#39;s default formatting.
  po        -- Evaluate an expression on the current thread.  Displays any
               returned value with formatting controlled by the type&#39;s author.
  poarray   -- Evaluate an expression on the current thread.  Displays any
               returned value with LLDB&#39;s default formatting.
  print     -- Evaluate an expression on the current thread.  Displays any
               returned value with LLDB&#39;s default formatting.
  q         -- Quit the LLDB debugger.
  r         -- Launch the executable in the debugger.
  rbreak    -- Sets a breakpoint or set of breakpoints in the executable.
  re        -- Commands to access registers for the current thread and stack
               frame.
  repl      -- Evaluate an expression on the current thread.  Displays any
               returned value with LLDB&#39;s default formatting.
  run       -- Launch the executable in the debugger.
  s         -- Source level single step, stepping into calls.  Defaults to
               current thread unless specified.
  si        -- Instruction level single step, stepping into calls.  Defaults to
               current thread unless specified.
  sif       -- Step through the current block, stopping if you step directly
               into a function whose name matches the TargetFunctionName.
  step      -- Source level single step, stepping into calls.  Defaults to
               current thread unless specified.
  stepi     -- Instruction level single step, stepping into calls.  Defaults to
               current thread unless specified.
  t         -- Change the currently selected thread.
  tbreak    -- Set a one-shot breakpoint using one of several shorthand formats.
  undisplay -- Stop displaying expression at every stop (specified by stop-hook
               index.)
  up        -- Select an older stack frame.  Defaults to moving one frame, a
               numeric argument can specify an arbitrary number.
  v         -- Show variables for the current stack frame. Defaults to all
               arguments and local variables in scope. Names of argument,
               local, file static and file global variables can be specified.
               Children of aggregate variables can be specified such as
               &#39;var-&gt;child.x&#39;.  The -&gt; and [] operators in &#39;frame variable&#39; do
               not invoke operator overloads if they exist, but directly access
               the specified element.  If you want to trigger operator
               overloads use the expression command to print the variable
               instead.
               It is worth noting that except for overloaded operators, when
               printing local variables &#39;expr local_var&#39; and &#39;frame var
               local_var&#39; produce the same results.  However, &#39;frame variable&#39;
               is more efficient, since it uses debug information and memory
               reads directly, rather than parsing and evaluating an
               expression, which may even involve JITing and running code in
               the target program.
  var       -- Show variables for the current stack frame. Defaults to all
               arguments and local variables in scope. Names of argument,
               local, file static and file global variables can be specified.
               Children of aggregate variables can be specified such as
               &#39;var-&gt;child.x&#39;.  The -&gt; and [] operators in &#39;frame variable&#39; do
               not invoke operator overloads if they exist, but directly access
               the specified element.  If you want to trigger operator
               overloads use the expression command to print the variable
               instead.
               It is worth noting that except for overloaded operators, when
               printing local variables &#39;expr local_var&#39; and &#39;frame var
               local_var&#39; produce the same results.  However, &#39;frame variable&#39;
               is more efficient, since it uses debug information and memory
               reads directly, rather than parsing and evaluating an
               expression, which may even involve JITing and running code in
               the target program.
  vo        -- Show variables for the current stack frame. Defaults to all
               arguments and local variables in scope. Names of argument,
               local, file static and file global variables can be specified.
               Children of aggregate variables can be specified such as
               &#39;var-&gt;child.x&#39;.  The -&gt; and [] operators in &#39;frame variable&#39; do
               not invoke operator overloads if they exist, but directly access
               the specified element.  If you want to trigger operator
               overloads use the expression command to print the variable
               instead.
               It is worth noting that except for overloaded operators, when
               printing local variables &#39;expr local_var&#39; and &#39;frame var
               local_var&#39; produce the same results.  However, &#39;frame variable&#39;
               is more efficient, since it uses debug information and memory
               reads directly, rather than parsing and evaluating an
               expression, which may even involve JITing and running code in
               the target program.
  x         -- Read from the memory of the current target process.
Current user-defined commands:
  alamborder    -- Put a border around views with an ambiguous layout
  alamunborder  -- Removes the border around views with an ambiguous layout
  bdisable      -- Disable a set of breakpoints for a regular expression
  benable       -- Enable a set of breakpoints for a regular expression
  binside       -- Set a breakpoint for a relative address within the
                   framework/library that&#39;s currently running. This does the
                   work of finding the offset for the framework/library and
                   sliding your address accordingly.
  bmessage      -- Set a breakpoint for a selector on a class, even if the
                   class itself doesn&#39;t override that selector. It walks the
                   hierarchy until it finds a class that does implement the
                   selector and sets a conditional breakpoint there.
  border        -- Draws a border around &lt;viewOrLayer&gt;. Color and width can be
                   optionally provided. Additionally depth can be provided in
                   order to recursively border subviews.
  caflush       -- Force Core Animation to flush. This will &#39;repaint&#39; the UI
                   but also may mess with ongoing animations.
  dcomponents   -- Set debugging options for components.
  dismiss       -- Dismiss a presented view controller.
  fa11y         -- Find the views whose accessibility labels match labelRegex
                   and puts the address of the first result on the clipboard.
  findinstances -- Find instances of specified ObjC classes.
  flicker       -- Quickly show and hide a view to quickly help visualize where
                   it is.
  fv            -- Find the views whose class names match classNameRegex and
                   puts the address of first on the clipboard.
  fvc           -- Find the view controllers whose class names match
                   classNameRegex and puts the address of first on the
                   clipboard.
  heapfrom      -- Show all nested heap pointers contained within a given
                   variable.
  hide          -- Hide a view or layer.
  mask          -- Add a transparent rectangle to the window to reveal a
                   possibly obscured or hidden view or layer&#39;s bounds
  mwarning      -- simulate a memory warning 模拟一个内存警告
  pa11y         -- Print accessibility labels of all views in hierarchy of
                   &lt;aView&gt;
  pa11yi        -- Print accessibility identifiers of all views in hierarchy of
                   &lt;aView&gt;
  pactions      -- Print the actions and targets of a control.
  paltrace      -- Print the Auto Layout trace for the given view. Defaults to
                   the key window.
  panim         -- Prints if the code is currently execution with a UIView
                   animation block.
  pbcopy        -- Print object and copy output to clipboard
  pblock        -- Print the block\`s implementation address and signature
  pbundlepath   -- Print application&#39;s bundle directory path. 打印应用bundle目录地址
  pcells        -- Print the visible cells of the highest table view in the
                   hierarchy. 打印最高层的tableview的可见cell
  pclass        -- Print the inheritance starting from an instance of any class.
  pcomponents   -- Print a recursive description of components found starting
                   from &lt;aView&gt;.
  pcurl         -- Print the NSURLRequest (HTTP) as curl command.
  pdata         -- Print the contents of NSData object as string.
  pdocspath     -- Print application&#39;s &#39;Documents&#39; directory path. 打印应用的Documents目录路径
  pinternals    -- Show the internals of an object by dereferencing it as a
                   pointer.
  pinvocation   -- Print the stack frame, receiver, and arguments of the
                   current invocation. It will fail to print all arguments if
                   any arguments are variadic (varargs).
  pivar         -- Print the value of an object&#39;s named instance variable.
  pjson         -- Print JSON representation of NSDictionary or NSArray object 使用json格式打印字典或数组
  pkp           -- Print out the value of the key path expression using
                   -valueForKeyPath:
  pmethods      -- Print the class and instance methods of a class.
  poobjc        -- Print the expression result, with the expression run in an
                   ObjC++ context. (Shortcut for &quot;expression -O -l ObjC++ -- &quot; )
  pproperties   -- Print the properties of an instance or Class
  present       -- Present a view controller.
  presponder    -- Print the responder chain starting from a specific responder.
  psjson        -- Print JSON representation of Swift Dictionary or Swift Array
                   object
  ptv           -- Print the highest table view in the hierarchy.
  pvc           -- Print the recursion description of &lt;aViewController&gt;.
  pviews        -- Print the recursion description of &lt;aView&gt;.
  rcomponents   -- Synchronously reflow and update all components.
  sequence      -- Run commands in sequence, stopping on any error.
  setinput      -- Input text into text field or text view that is first
                   responder.
  settext       -- Set text on text on a view by accessibility id.
  show          -- Show a view or layer.
  slowanim      -- Slows down animations. Works on the iOS Simulator and a
                   device.
  taplog        -- Log tapped view to the console.
  uikit         -- Imports the UIKit module to get access to the types while in
                   lldb.
  unborder      -- Removes border around &lt;viewOrLayer&gt;.
  unmask        -- Remove mask from a view or layer
  unslowanim    -- Turn off slow animations.
  visualize     -- Open a UIImage, CGImageRef, UIView, or CALayer in
                   Preview.app on your Mac.
  vs            -- Interactively search for a view by walking the hierarchy.
  wivar         -- Set a watchpoint for an object&#39;s instance variable.
  xdebug        -- Print debug description the XCUIElement in human readable
                   format.
  xnoid         -- Print XCUIElement objects with label but without identifier.
  xobject       -- Print XCUIElement details.
  xtree         -- Print XCUIElement subtree.
  zzz           -- Executes specified lldb command after delay.
For more information on any command, type &#39;help &lt;command-name&gt;&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><h3 id="chisel" tabindex="-1"><a class="header-anchor" href="#chisel" aria-hidden="true">#</a> Chisel</h3><p>Facebook 帮助调试 iOS 应用程序的 LLDB 命令的开源集合。Chisel 使用 homebrew 来安装。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install chisel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成按照安装日志上的提示，在 ~/.lldbinit 文件中添加一行，没有则新建。 提示类似如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>==&gt; Caveats
Add the following line to ~/.lldbinit to load chisel when Xcode launches:
  command script import /usr/local/opt/chisel/libexec/fblldb.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 Xcode</p><h3 id="lldb" tabindex="-1"><a class="header-anchor" href="#lldb" aria-hidden="true">#</a> LLDB</h3>`,74),v={href:"http://dslldb.py",target:"_blank",rel:"noopener noreferrer"},u=i(`<h4 id="pviews" tabindex="-1"><a class="header-anchor" href="#pviews" aria-hidden="true">#</a> pviews</h4><p>打印当前层级结构。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) pviews view
&lt;TestView: 0x18df8070; baseClass = UIControl; frame = (144 9; 126 167); layer = &lt;CALayer: 0x18df8150&gt;&gt;
   | &lt;UIView: 0x18df81d0; frame = (0 0; 126 126); userInteractionEnabled = NO; layer = &lt;CALayer: 0x18df8240&gt;&gt;
   | &lt;UIImageView: 0x18df8330; frame = (0 0; 126 126); clipsToBounds = YES; opaque = NO; userInteractionEnabled = NO; layer = &lt;CALayer: 0x18df83b0&gt;&gt;
   | &lt;UILabel: 0x18df8460; frame = (0 135; 126 14); text = &#39;haha&#39;; userInteractionEnabled = NO; layer = &lt;_UILabelLayer: 0x18df7fb0&gt;&gt;
   |    | &lt;_UILabelContentLayer: 0x131a3d50&gt; (layer)
   | &lt;UILabel: 0x18df8670; frame = (0 155; 126 12); text = &#39;hahaha&#39;; userInteractionEnabled = NO; layer = &lt;_UILabelLayer: 0x18df8730&gt;&gt;
   |    | &lt;_UILabelContentLayer: 0x131bea10&gt; (layer)
   | &lt;UIImageView: 0x18df88d0; frame = (0 9; 28 27); hidden = YES; opaque = NO; userInteractionEnabled = NO; layer = &lt;CALayer: 0x18df8ba0&gt;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pvc" tabindex="-1"><a class="header-anchor" href="#pvc" aria-hidden="true">#</a> pvc</h4><p>递归打印 viewController 层级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) pvc
&lt;TabBarController: 0x13772fd0; view = &lt;UILayoutContainerView; 0x151b3a30&gt;; frame = (0, 0; 414, 736)&gt;
   | &lt;UINavigationController: 0x1602b800; view = &lt;UILayoutContainerView; 0x1b00aca0&gt;; frame = (0, 0; 414, 736)&gt;
   |   | &lt;FirstViewController: 0x16029c00; view = &lt;UIView; 0x1b01e1c0&gt;; frame = (0, 0; 414, 736)&gt;
   | &lt;UINavigationController: 0x138c5200; view = &lt;UILayoutContainerView; 0x1316a080&gt;; frame = (0, 0; 414, 736)&gt;
   |   | &lt;SecondViewController: 0x16030400; view = &lt;UIView; 0x2094b370&gt;; frame = (0, 0; 414, 736)&gt;
   |   |   | &lt;SecondChildViewController: 0x15af6000; view = &lt;UIView; 0x18d4e650&gt;; frame = (0, 64; 414, 628)&gt;
   | &lt;UINavigationController: 0x1383ca00; view = &lt;UILayoutContainerView; 0x13180070&gt;; frame = (0, 0; 414, 736)&gt;
   |   | &lt;ThirdViewController: 0x138ddc00; view = &lt;UIView; 0x18df6650&gt;; frame = (0, 0; 414, 736)&gt;
   |   |   | &lt;ThirdChild1ViewController: 0x1393fe00; view = &lt;UIView; 0x131ec000&gt;; frame = (0, 0; 414, 672)&gt;
   |   |   | &lt;ThirdChild2ViewController: 0x138dce00; view = &lt;UIView; 0x204075a0&gt;; frame = (414, 0; 414, 672)&gt;
   |   |   | &lt;ThirdChild3ViewController: 0x138a8e00; view = &lt;UIView; 0x20426250&gt;; frame = (828, 0; 414, 672)&gt;
   | &lt;UINavigationController: 0x160eca00; view = &lt;UILayoutContainerView; 0x152f7d90&gt;; frame = (0, 0; 414, 736)&gt;
   |   | &lt;FourViewController: 0x13157cc0; view not loaded&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="visualize" tabindex="-1"><a class="header-anchor" href="#visualize" aria-hidden="true">#</a> visualize</h4><p>使用 MacOS 预览打开一个 UIImage，CGImageRef，UIView 或 CALayer。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) visualize imageView
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="fv-fvc" tabindex="-1"><a class="header-anchor" href="#fv-fvc" aria-hidden="true">#</a> fv &amp; fvc</h4><p>fv 和 fvc 这两个命令是用来通过类名搜索当前内存中存在的 view 和 viewController 实例的命令，支持正则搜索。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(lldb) fv scrollView
0x18d3b8c0 UIScrollView
0x137d0c50 UIScrollView
0x131b1580 UIScrollView
0x131b2070 UIScrollView
(lldb) fvc Home
0x1393fe00 HomeFeedsViewController
0x138a8e00 HomeFeedsViewController
(lldb)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="show-hide" tabindex="-1"><a class="header-anchor" href="#show-hide" aria-hidden="true">#</a> show &amp; hide</h4><p>显示和隐藏一个指定的 UIView</p><h2 id="自定义插件" tabindex="-1"><a class="header-anchor" href="#自定义插件" aria-hidden="true">#</a> 自定义插件</h2><p>下面设计一个打印 keyWindow 的 windowLevel 的命令：</p><ul><li>创建 python 脚本文件 /magical/commands/example.py :</li></ul><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code><span class="token comment">#!/usr/bin/python</span>
<span class="token comment"># Example file with custom commands, located at /magical/commands/example.py</span>

import lldb
import fblldbbase as fb

<span class="token keyword">def</span> <span class="token method-definition"><span class="token function">lldbcommands</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span> PrintKeyWindowLevel<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">]</span>

<span class="token keyword">class</span> <span class="token class-name">PrintKeyWindowLevel</span><span class="token punctuation">(</span>fb<span class="token punctuation">.</span>FBCommand<span class="token punctuation">)</span><span class="token operator">:</span>
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">name</span></span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&#39;pkeywinlevel&#39;</span></span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">description</span></span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">&#39;An incredibly contrived command that prints the window level of the key window.&#39;</span></span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">run</span></span><span class="token punctuation">(</span><span class="token keyword">self</span><span class="token punctuation">,</span> arguments<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token operator">:</span>
    <span class="token comment"># It&#39;s a good habit to explicitly cast the type of all return</span>
    <span class="token comment"># values and arguments. LLDB can&#39;t always find them on its own.</span>
    lldb<span class="token punctuation">.</span>debugger<span class="token punctuation">.</span>HandleCommand<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;p (CGFloat)[(id)[(id)[UIApplication sharedApplication] keyWindow] windowLevel]&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义了 PrintKeyWindowLevel 的类，需要实现 name description run 方法来分别告诉名称、描述、和执行实体。 创建好脚本后，然后在前面安装时创建的 ~/.lldbinit 文件中添加一行：</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>script fblldb<span class="token punctuation">.</span>loadCommandsInDirectory<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;/magical/commands/&#39;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 Xcode 就可以使用了</p>`,21);function m(b,p){const a=d("ExternalLinkIcon");return l(),r("div",null,[c,n("p",null,[e("与 chisel 都是用 Python 写的，其安装需要手动下载仓库，然后将仓库中 "),n("a",v,[e("dslldb.py"),t(a)]),e(" 文件的路径用与上述同样的方式添加到 .lldbinit 中。")]),u])}const g=s(o,[["render",m],["__file","5.html.vue"]]);export{g as default};
