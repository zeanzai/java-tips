const e=JSON.parse('{"key":"v-b217e86e","path":"/Java/jvm/part1/9.%E6%96%B9%E6%B3%95%E5%8C%BA.html","title":"方法区","lang":"zh-CN","frontmatter":{"order":9,"title":"方法区","category":["JVM"],"tag":["JVM上篇"],"description":"[TOC] 从内存结构看 c6599b01481e783393491f5349f02c4e 从线程共享与否的角度看 image-20200708094507624 栈、堆、方法区的交互关系 Person 类的 .class 信息存放在方法区中; person 变量存放在 Java 栈的局部变量表中; 真正的 person 对象存放在 Java 堆中; ...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/jvm/part1/9.%E6%96%B9%E6%B3%95%E5%8C%BA.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"方法区"}],["meta",{"property":"og:description","content":"[TOC] 从内存结构看 c6599b01481e783393491f5349f02c4e 从线程共享与否的角度看 image-20200708094507624 栈、堆、方法区的交互关系 Person 类的 .class 信息存放在方法区中; person 变量存放在 Java 栈的局部变量表中; 真正的 person 对象存放在 Java 堆中; ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:27:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"方法区"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:tag","content":"JVM上篇"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:27:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"方法区\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:27:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"方法区的位置","slug":"方法区的位置","link":"#方法区的位置","children":[]},{"level":2,"title":"方法区的理解","slug":"方法区的理解-1","link":"#方法区的理解-1","children":[]},{"level":2,"title":"Hotspot中方法区的演进过程","slug":"hotspot中方法区的演进过程","link":"#hotspot中方法区的演进过程","children":[]},{"level":2,"title":"JDK7 永久代","slug":"jdk7-永久代","link":"#jdk7-永久代","children":[]},{"level":2,"title":"JDK8 元空间","slug":"jdk8-元空间","link":"#jdk8-元空间","children":[]},{"level":2,"title":"方法区OOM","slug":"方法区oom","link":"#方法区oom","children":[]},{"level":2,"title":"如何解决OOM","slug":"如何解决oom","link":"#如何解决oom","children":[]},{"level":2,"title":"内部结构","slug":"内部结构","link":"#内部结构","children":[{"level":3,"title":"类型信息","slug":"类型信息","link":"#类型信息","children":[]},{"level":3,"title":"域（Field）信息","slug":"域-field-信息","link":"#域-field-信息","children":[]},{"level":3,"title":"方法（Method）信息","slug":"方法-method-信息","link":"#方法-method-信息","children":[]},{"level":3,"title":"代码举例","slug":"代码举例","link":"#代码举例","children":[]}]},{"level":2,"title":"域信息特殊情况","slug":"域信息特殊情况","link":"#域信息特殊情况","children":[{"level":3,"title":"non-final 类型的类变量","slug":"non-final-类型的类变量","link":"#non-final-类型的类变量","children":[]},{"level":3,"title":"全局常量：static final","slug":"全局常量-static-final","link":"#全局常量-static-final","children":[]}]},{"level":2,"title":"运行时常量池","slug":"运行时常量池","link":"#运行时常量池","children":[]},{"level":2,"title":"常量池","slug":"常量池","link":"#常量池","children":[]},{"level":2,"title":"运行时常量池理解","slug":"运行时常量池理解","link":"#运行时常量池理解","children":[]},{"level":2,"title":"图解字节码指令执行流程","slug":"图解字节码指令执行流程","link":"#图解字节码指令执行流程","children":[]},{"level":2,"title":"永久代演进过程","slug":"永久代演进过程","link":"#永久代演进过程","children":[]},{"level":2,"title":"永久代为什么要被元空间替代？","slug":"永久代为什么要被元空间替代","link":"#永久代为什么要被元空间替代","children":[]},{"level":2,"title":"字符串常量池","slug":"字符串常量池","link":"#字符串常量池","children":[]},{"level":2,"title":"静态变量位置","slug":"静态变量位置","link":"#静态变量位置","children":[]},{"level":2,"title":"方法区常量的回收","slug":"方法区常量的回收","link":"#方法区常量的回收","children":[]},{"level":2,"title":"方法区类的回收","slug":"方法区类的回收","link":"#方法区类的回收","children":[]}],"git":{"createdTime":1725236822000,"updatedTime":1725236822000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":1}]},"readingTime":{"minutes":28.6,"words":8580},"filePathRelative":"Java/jvm/part1/9.方法区.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{e as data};
