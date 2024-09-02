const e=JSON.parse('{"key":"v-00011c18","path":"/Java/jvm/part1/5.%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%A0%88.html","title":"虚拟机栈","lang":"zh-CN","frontmatter":{"order":5,"title":"虚拟机栈","category":["JVM"],"tag":["JVM上篇"],"description":"[TOC] 概述 Java 虚拟机栈是描述 Java 方法运行过程的内存模型。 Java 虚拟机栈会为每一个即将运行的 Java 方法创建一块叫做“栈帧”的区域，用于存放该方法运行过程中的一些信息，如： 局部变量表; 操作数栈; 动态链接; 方法出口信息; ......; image 内存中的栈和堆 1. 首先栈是运行时的单位，而堆是存储的单位。 2....","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/jvm/part1/5.%E8%99%9A%E6%8B%9F%E6%9C%BA%E6%A0%88.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"虚拟机栈"}],["meta",{"property":"og:description","content":"[TOC] 概述 Java 虚拟机栈是描述 Java 方法运行过程的内存模型。 Java 虚拟机栈会为每一个即将运行的 Java 方法创建一块叫做“栈帧”的区域，用于存放该方法运行过程中的一些信息，如： 局部变量表; 操作数栈; 动态链接; 方法出口信息; ......; image 内存中的栈和堆 1. 首先栈是运行时的单位，而堆是存储的单位。 2...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:27:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"虚拟机栈"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:tag","content":"JVM上篇"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:27:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"虚拟机栈\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:27:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"内存中的栈和堆","slug":"内存中的栈和堆","link":"#内存中的栈和堆","children":[]},{"level":2,"title":"基本内容","slug":"基本内容","link":"#基本内容","children":[]},{"level":2,"title":"特点","slug":"特点","link":"#特点","children":[]},{"level":2,"title":"面试题：栈中可能出现的异常？","slug":"面试题-栈中可能出现的异常","link":"#面试题-栈中可能出现的异常","children":[]},{"level":2,"title":"设置栈内存大小","slug":"设置栈内存大小","link":"#设置栈内存大小","children":[{"level":3,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"栈的存储结构","slug":"栈的存储结构","link":"#栈的存储结构","children":[{"level":3,"title":"存储什么？","slug":"存储什么","link":"#存储什么","children":[]},{"level":3,"title":"运行原理","slug":"运行原理","link":"#运行原理","children":[]},{"level":3,"title":"理解栈帧","slug":"理解栈帧","link":"#理解栈帧","children":[]},{"level":3,"title":"栈帧的内部结构","slug":"栈帧的内部结构","link":"#栈帧的内部结构","children":[]}]},{"level":2,"title":"面试题","slug":"面试题","link":"#面试题","children":[]}],"git":{"createdTime":1725236822000,"updatedTime":1725236822000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":1}]},"readingTime":{"minutes":31.79,"words":9536},"filePathRelative":"Java/jvm/part1/5.虚拟机栈.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{e as data};
