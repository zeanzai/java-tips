import{_ as a,W as i,X as t,$ as e}from"./framework-c8643d23.js";const r="/java-tips/assets/kLjgyaJyy7217v5j4wajMFulbmlTWnjtoAtLez5edA8-f2fe984d.webp",l="/java-tips/assets/AhgMD6Pw4L_8u-iUiHhgyrzpXlCg-1XZ8Ttd9QkfUAI-0a56d5b7.webp",o="/java-tips/assets/94nGgF-f1e8V8j_Y6gV1esIm6b_rxGba1lDi8trEcbc-0f65ec39.webp",n="/java-tips/assets/hkv8gtQ2RCdb_mIoerEArZGNxwVcIaS422uFaYUt9jE-54b04555.webp",s={},d=e('<p>[toc]</p><p>【重点内容】虚拟机栈、堆、方法区</p><h1 id="运行时数据区概述及线程" tabindex="-1"><a class="header-anchor" href="#运行时数据区概述及线程" aria-hidden="true">#</a> 运行时数据区概述及线程</h1><h2 id="内存" tabindex="-1"><a class="header-anchor" href="#内存" aria-hidden="true">#</a> 内存</h2><p>内存是非常重要的系统资源，是硬盘和CPU的中间仓库及桥梁，承载着操作系统和应用程序的实时运行。JVM内存布局规定了Java在运行过程中内存申请、分配、管理的策略，保证了JVM的高效稳定运行。<strong>不同的JVM对于内存的划分方式和管理机制存在着部分差异</strong>。结合JVM虚拟机规范，来探讨一下经典的JVM内存布局</p><figure><img src="'+r+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="内存空间" tabindex="-1"><a class="header-anchor" href="#内存空间" aria-hidden="true">#</a> 内存空间</h2><p>前言：</p><figure><img src="'+l+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><p>红色区域：一个进程对应有一份</p><p>灰色区域：一个线程对应有一份</p><p>例如：程序有1个进程和5个线程---相当于有5组PCR、NMS、JVMS，而只有一个方法区和堆，5个线程共用这个方法区和堆</p><ol><li>Java虚拟机定义了若干种程序运行期间会使用到的运行时数据区：其中有一些会随着虚拟机启动而创建，随着虚拟机退出而销毁。另外一些则是与线程一一对应的，这些与线程对应的数据区域会随着线程开始和结束而创建和销毁。</li><li>灰色的为单独线程私有的，红色的为多个线程共享的。即：</li></ol><ul><li>线程独有：独立包括程序计数器、栈、本地方法栈</li><li>线程间共享：堆、堆外内存（永久代或元空间、代码缓存）</li></ul><figure><img src="'+o+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="runtime类" tabindex="-1"><a class="header-anchor" href="#runtime类" aria-hidden="true">#</a> Runtime类</h2><p><strong>每个JVM只有一个Runtime实例</strong>。即为运行时环境，相当于内存结构的中间的那个框框：运行时环境。</p><figure><img src="'+n+'" alt="image" tabindex="0" loading="lazy"><figcaption>image</figcaption></figure><h2 id="线程" tabindex="-1"><a class="header-anchor" href="#线程" aria-hidden="true">#</a> 线程</h2><h3 id="jvm线程" tabindex="-1"><a class="header-anchor" href="#jvm线程" aria-hidden="true">#</a> JVM线程</h3><ol><li>线程是一个程序里的运行单元。JVM允许一个应用有多个线程并行的执行</li><li><strong>在Hotspot JVM里，每个线程都与操作系统的本地线程直接映射</strong></li></ol><ul><li>当一个Java线程准备好执行以后，此时一个操作系统的本地线程也同时创建。Java线程执行终止后，本地线程也会回收</li></ul><ol start="3"><li>操作系统负责将线程安排调度到任何一个可用的CPU上。一旦本地线程初始化成功，它就会调用Java线程中的run()方法</li></ol><blockquote><p>关于线程，并发可以看笔者的Java并发系列</p></blockquote><h3 id="【了解】jvm系统线程" tabindex="-1"><a class="header-anchor" href="#【了解】jvm系统线程" aria-hidden="true">#</a> 【了解】JVM系统线程</h3><ul><li><p>如果你使用jconsole或者是任何一个调试工具，都能看到在后台有许多线程在运行。这些后台线程不包括调用public static void main(String[])的main线程以及所有这个main线程自己创建的线程。</p></li><li><p>这些主要的后台系统线程在Hotspot JVM里主要是以下几个：</p></li></ul><ol><li><strong>虚拟机线程</strong>：这种线程的操作是需要JVM达到安全点才会出现。这些操作必须在不同的线程中发生的原因是他们都需要JVM达到安全点，这样堆才不会变化。这种线程的执行类型括&quot;stop-the-world&quot;的垃圾收集，线程栈收集，线程挂起以及偏向锁撤销</li><li><strong>周期任务线程</strong>：这种线程是时间周期事件的体现（比如中断），他们一般用于周期性操作的调度执行</li><li><strong>GC线程</strong>：这种线程对在JVM里不同种类的垃圾收集行为提供了支持</li><li><strong>编译线程</strong>：这种线程在运行时会将字节码编译成到本地代码</li><li><strong>信号调度线程</strong>：这种线程接收信号并发送给JVM，在它内部通过调用适当的方法进行处理</li></ol><ul><li></li></ul>',28),c=[d];function g(h,p){return i(),t("div",null,c)}const m=a(s,[["render",g],["__file","3.运行时数据区.html.vue"]]);export{m as default};
