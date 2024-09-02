const t=JSON.parse('{"key":"v-0c323b6c","path":"/Java/jvm/part1/15.%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9B%B8%E5%85%B3%E7%AE%97%E6%B3%95.html","title":"垃圾回收相关算法","lang":"zh-CN","frontmatter":{"order":15,"title":"垃圾回收相关算法","category":["JVM"],"tag":["JVM上篇"],"description":"[TOC] 垃圾标记阶段：对象存活判断 在堆里存放着几乎所有的 Java 对象实例，在 GC 执行垃圾回收之前，首先需要区分出内存中哪些是存活对象，哪些是已经死亡的对象。只有被标记为己经死亡的对象，GC 才会在执行垃圾回收时，释放掉其所占用的内存空间，因此这个过程我们可以称为垃圾标记阶段。; 那么在 JVM 中究竟是如何标记一个死亡对象呢？简单来说，当...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/jvm/part1/15.%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%9B%B8%E5%85%B3%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"java-tips"}],["meta",{"property":"og:title","content":"垃圾回收相关算法"}],["meta",{"property":"og:description","content":"[TOC] 垃圾标记阶段：对象存活判断 在堆里存放着几乎所有的 Java 对象实例，在 GC 执行垃圾回收之前，首先需要区分出内存中哪些是存活对象，哪些是已经死亡的对象。只有被标记为己经死亡的对象，GC 才会在执行垃圾回收时，释放掉其所占用的内存空间，因此这个过程我们可以称为垃圾标记阶段。; 那么在 JVM 中究竟是如何标记一个死亡对象呢？简单来说，当..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:27:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"垃圾回收相关算法"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:tag","content":"JVM上篇"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:27:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾回收相关算法\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:27:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"垃圾标记阶段：对象存活判断","slug":"垃圾标记阶段-对象存活判断","link":"#垃圾标记阶段-对象存活判断","children":[]},{"level":2,"title":"引用计数算法","slug":"引用计数算法","link":"#引用计数算法","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"可达性分析算法（根搜索算法、追踪性垃圾收集）","slug":"可达性分析算法-根搜索算法、追踪性垃圾收集","link":"#可达性分析算法-根搜索算法、追踪性垃圾收集","children":[]},{"level":2,"title":"GC Roots【面试高频】","slug":"gc-roots【面试高频】","link":"#gc-roots【面试高频】","children":[]},{"level":2,"title":"三种可能的状态","slug":"三种可能的状态","link":"#三种可能的状态","children":[]},{"level":2,"title":"具体过程","slug":"具体过程","link":"#具体过程","children":[]},{"level":2,"title":"JProfiler 的 GC Roots 溯源","slug":"jprofiler-的-gc-roots-溯源","link":"#jprofiler-的-gc-roots-溯源","children":[]},{"level":2,"title":"JProfiler 查看OOM","slug":"jprofiler-查看oom","link":"#jprofiler-查看oom","children":[]}],"git":{"createdTime":1725236822000,"updatedTime":1725236822000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":1}]},"readingTime":{"minutes":25.98,"words":7794},"filePathRelative":"Java/jvm/part1/15.垃圾回收相关算法.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{t as data};
