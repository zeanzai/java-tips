import{_ as o,W as t,X as n,a0 as l,a1 as e,Z as c,$ as i,C as r}from"./framework-c8643d23.js";const d="/java-tips/assets/0b5deed5b27d08e5f9769ba9d2eb3917-a6cefec3.webp",s="/java-tips/assets/181d29af04d0893b15c446bbebf1d1c4-4886ddc9.webp",u={},p=i('<p>[TOC]</p><h1 id="什么是垃圾" tabindex="-1"><a class="header-anchor" href="#什么是垃圾" aria-hidden="true">#</a> 什么是垃圾</h1><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>垃圾收集，不是 Java 语言的伴生产物。早在 1960 年，第一门开始使用内存动态分配和垃圾收集技术的 Lisp 语言诞生。</li><li>关于垃圾收集有三个经典问题： <ul><li>哪些内存需要回收？</li><li>什么时候回收？</li><li>如何回收？</li></ul></li><li>垃圾收集机制是 Java 的招牌能力，极大地提高了开发效率。如今，垃圾收集几乎成为现代语言的标配，即使经过如此长时间的发展，Java 的垃圾收集机制仍然在不断的演进中，不同大小的设备、不同特征的应用场景，对垃圾收集提出了新的挑战，这当然也是面试的热点。</li></ul><h2 id="大厂面试题" tabindex="-1"><a class="header-anchor" href="#大厂面试题" aria-hidden="true">#</a> 大厂面试题</h2><blockquote><p>蚂蚁金服</p></blockquote><ul><li>你知道哪几种垃圾回收器，各自的优缺点，重点讲一下 cms 和 G1？</li><li>JVM GC 算法有哪些，目前的 JDK 版本采用什么回收算法？</li><li>G1 回收器讲下回收过程 GC 是什么？为什么要有 GC？</li><li>GC 的两种判定方法？CMS 收集器与 G1 收集器的特点</li></ul><blockquote><p>百度</p></blockquote><ul><li>说一下 GC 算法，分代回收说下</li><li>垃圾收集策略和算法</li></ul><blockquote><p>天猫</p></blockquote><ul><li>JVM GC 原理，JVM 怎么回收内存</li><li>CMS 特点，垃圾回收算法有哪些？各自的优缺点，他们共同的缺点是什么？</li></ul><blockquote><p>滴滴</p></blockquote><ul><li>Java 的垃圾回收器都有哪些，说下 G1 的应用场景，平时你是如何搭配使用垃圾回收器的</li></ul><blockquote><p>京东</p></blockquote><ul><li>你知道哪几种垃圾收集器，各自的优缺点，重点讲下 cms 和 G1，</li><li>包括原理，流程，优缺点。垃圾回收算法的实现原理</li></ul><blockquote><p>阿里</p></blockquote><ul><li>讲一讲垃圾回收算法。</li><li>什么情况下触发垃圾回收？</li><li>如何选择合适的垃圾收集算法？</li><li>JVM 有哪三种垃圾回收器？</li></ul><blockquote><p>字节跳动</p></blockquote><ul><li>常见的垃圾回收器算法有哪些，各有什么优劣？</li><li>System.gc () 和 Runtime.gc () 会做什么事情？</li><li>Java GC 机制？GC Roots 有哪些？</li><li>Java 对象的回收方式，回收算法。</li><li>CMS 和 G1 了解么，CMS 解决什么问题，说一下回收的过程。</li><li>CMS 回收停顿了几次，为什么要停顿两次？</li></ul><h2 id="什么是垃圾-1" tabindex="-1"><a class="header-anchor" href="#什么是垃圾-1" aria-hidden="true">#</a> 什么是垃圾</h2><ul><li>垃圾是指在运行程序中没有任何指针指向的对象，这个对象就是需要被回收的垃圾。</li><li>外文：An object is considered garbage when it can no longer be reached from any pointer in the running program</li><li>如果不及时对内存中的垃圾进行清理，那么，这些垃圾对象所占的内存空间会一直保留到应用程序结束，被保留的空间无法被其它对象使用，甚至可能导致内存溢出。</li></ul><h1 id="为什么需要-gc" tabindex="-1"><a class="header-anchor" href="#为什么需要-gc" aria-hidden="true">#</a> 为什么需要 GC</h1><blockquote><p><strong>想要学习 GC，首先需要理解为什么需要 GC？</strong></p></blockquote><ul><li>对于高级语言来说，一个基本认知是如果不进行垃圾回收，内存迟早都会被消耗完，因为不断地分配内存空间而不进行回收，就好像不停地生产生活垃圾而从来不打扫一样。</li><li>除了释放没用的对象，垃圾回收也可以清除内存里的记录碎片。碎片整理将所占用的堆内存移到堆的一端，以便 JVM 将整理出的内存分配给新的对象。</li><li>随着应用程序所应付的业务越来越庞大、复杂，用户越来越多，没有 GC 就不能保证应用程序的正常进行。而经常造成 STW 的 GC 又跟不上实际的需求，所以才会不断地尝试对 GC 进行优化。</li></ul><h1 id="早期垃圾回收" tabindex="-1"><a class="header-anchor" href="#早期垃圾回收" aria-hidden="true">#</a> 早期垃圾回收</h1><ul><li>在早期的 C/C++ 时代，垃圾回收基本上是手工进行的。开发人员可以使用 new 关键字进行内存申请，并使用 delete 关键字进行内存释放。比如以下代码：</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>MibBridge *pBridge = new cmBaseGroupBridge();
//如果注册失败，使用Delete释放该对象所占内存区域
if (pBridge-&gt;Register(kDestroy) != NO ERROR）
	delete pBridge;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这种方式可以灵活控制内存释放的时间，但是会给开发人员带来频繁申请和释放内存的管理负担。倘若有一处内存区间由于程序员编码的问题忘记被回收，那么就会产生内存泄漏，垃圾对象永远无法被清除，随着系统运行时间的不断增长，垃圾对象所耗内存可能持续上升，直到出现内存溢出并造成应用程序崩溃。</li><li>在有了垃圾回收机制后，上述代码极有可能变成这样：</li></ul><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>MibBridge *pBridge = new cmBaseGroupBridge(); 
pBridge-&gt;Register(kDestroy);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>现在，除了 Java 以外，C#、Python、Ruby 等语言都使用了自动垃圾回收的思想，也是未来发展趋势，可以说这种自动化的内存分配和来及回收方式已经成为了线代开发语言必备的标准。</li></ul><h1 id="java-垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#java-垃圾回收机制" aria-hidden="true">#</a> Java 垃圾回收机制</h1>`,31),h=l("li",null,[e("自动内存管理，无需开发人员手动参与内存的分配与回收，这样降低内存泄漏和内存溢出的风险 "),l("ul",null,[l("li",null,"没有垃圾回收器，java 也会和 cpp 一样，各种悬垂指针，野指针，泄露问题让你头疼不已。")])],-1),b=l("li",null,"自动内存管理机制，将程序员从繁重的内存管理中释放出来，可以更专心地专注于业务开发",-1),g=l("li",null,"oracle 官网关于垃圾回收的介绍",-1),v={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/toc.html",target:"_blank",rel:"noopener noreferrer"},m=i('<blockquote><p>担忧</p></blockquote><ul><li>对于 Java 开发人员而言，自动内存管理就像是一个黑匣子，如果过度依赖于 “自动”，那么这将会是一场灾难，最严重的就会弱化 Java 开发人员在程序出现内存溢出时定位问题和解决问题的能力。</li><li>此时，了解 JVM 的自动内存分配和内存回收原理就显得非常重要，只有在真正了解 JVM 是如何管理内存后，我们才能够在遇见 <code>outofMemoryError</code> 时，快速地根据错误异常日志定位问题和解决问题。</li><li>当需要排查各种内存溢出、内存泄漏问题时，当垃圾收集成为系统达到更高并发量的瓶颈时，我们就必须对这些 “自动化” 的技术实施必要的监控和调节。</li></ul><blockquote><p>GC 主要关注的区域</p></blockquote><p>GC 主要关注于 方法区 和堆中的垃圾收集</p><figure><img src="'+s+'" alt="Untitled" tabindex="0" loading="lazy"><figcaption>Untitled</figcaption></figure><ul><li>垃圾收集器可以对年轻代回收，也可以对老年代回收，甚至是全栈和方法区的回收。 <ul><li>其中，Java 堆是垃圾收集器的工作重点</li></ul></li><li>从次数上讲： <ul><li>频繁收集 Young 区</li><li>较少收集 Old 区</li><li>基本不收集 Perm 区（元空间）</li></ul></li></ul>',6);function _(f,k){const a=r("ExternalLinkIcon");return t(),n("div",null,[p,l("ul",null,[h,b,g,l("li",null,[l("a",v,[e("https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/toc.html"),c(a)])])]),m])}const G=o(u,[["render",_],["__file","14.垃圾回收概述.html.vue"]]);export{G as default};
