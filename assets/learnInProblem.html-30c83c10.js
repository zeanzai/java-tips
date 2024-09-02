const e=JSON.parse(`{"key":"v-246e2bc3","path":"/golang/learnInProblem.html","title":"从问题中学习到Go的精髓","lang":"zh-CN","frontmatter":{"order":1,"title":"从问题中学习到Go的精髓","category":["golang"],"description":"前言 参考书目及视频： 《The Way to Go》中文译本 (https://github.com/unknwon/the-way-to-goZHCN) Go 语言简明教程 (https://geektutu.com/post/quick-golang.html) Go: The Complete Developer's Guide (https:...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/golang/learnInProblem.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"从问题中学习到Go的精髓"}],["meta",{"property":"og:description","content":"前言 参考书目及视频： 《The Way to Go》中文译本 (https://github.com/unknwon/the-way-to-goZHCN) Go 语言简明教程 (https://geektutu.com/post/quick-golang.html) Go: The Complete Developer's Guide (https:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:27:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"从问题中学习到Go的精髓"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:27:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从问题中学习到Go的精髓\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:27:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Start!","slug":"start","link":"#start","children":[{"level":3,"title":"Golang为什么要有一个main的包？","slug":"golang为什么要有一个main的包","link":"#golang为什么要有一个main的包","children":[]},{"level":3,"title":"Go中的import是个什么原理？","slug":"go中的import是个什么原理","link":"#go中的import是个什么原理","children":[]},{"level":3,"title":"【比较学习，举一反三】Go在声明上和Java有什么区别？","slug":"【比较学习-举一反三】go在声明上和java有什么区别","link":"#【比较学习-举一反三】go在声明上和java有什么区别","children":[]},{"level":3,"title":"Go中的返回类型和Java中有什么区别？","slug":"go中的返回类型和java中有什么区别","link":"#go中的返回类型和java中有什么区别","children":[]},{"level":3,"title":"Go是如何读写文件的？","slug":"go是如何读写文件的","link":"#go是如何读写文件的","children":[]},{"level":3,"title":"Go什么时候接收器，什么时候又把这个参数放到括号内？","slug":"go什么时候接收器-什么时候又把这个参数放到括号内","link":"#go什么时候接收器-什么时候又把这个参数放到括号内","children":[]},{"level":3,"title":"Go的测试功能要怎么写呢？","slug":"go的测试功能要怎么写呢","link":"#go的测试功能要怎么写呢","children":[]},{"level":3,"title":"Go中的结构体","slug":"go中的结构体","link":"#go中的结构体","children":[]},{"level":3,"title":"Go结构体中调用接收体会在内存中复制的问题","slug":"go结构体中调用接收体会在内存中复制的问题","link":"#go结构体中调用接收体会在内存中复制的问题","children":[]},{"level":3,"title":"Map的形容介绍","slug":"map的形容介绍","link":"#map的形容介绍","children":[]},{"level":3,"title":"Go在创建Map的时候有什么不同？","slug":"go在创建map的时候有什么不同","link":"#go在创建map的时候有什么不同","children":[]},{"level":3,"title":"= 和 := 的区别？","slug":"和-的区别","link":"#和-的区别","children":[]},{"level":3,"title":"指针的作用","slug":"指针的作用","link":"#指针的作用","children":[]},{"level":3,"title":"Go 允许多个返回值吗？","slug":"go-允许多个返回值吗","link":"#go-允许多个返回值吗","children":[]},{"level":3,"title":"Go 有异常类型吗？","slug":"go-有异常类型吗","link":"#go-有异常类型吗","children":[]},{"level":3,"title":"什么是协程（Goroutine）","slug":"什么是协程-goroutine","link":"#什么是协程-goroutine","children":[]},{"level":3,"title":"如何高效地拼接字符串","slug":"如何高效地拼接字符串","link":"#如何高效地拼接字符串","children":[]},{"level":3,"title":"什么是 rune 类型","slug":"什么是-rune-类型","link":"#什么是-rune-类型","children":[]},{"level":3,"title":"如何判断 map 中是否包含某个 key ？","slug":"如何判断-map-中是否包含某个-key","link":"#如何判断-map-中是否包含某个-key","children":[]},{"level":3,"title":"Go 支持默认参数或可选参数吗？","slug":"go-支持默认参数或可选参数吗","link":"#go-支持默认参数或可选参数吗","children":[]},{"level":3,"title":"defer 的执行顺序","slug":"defer-的执行顺序","link":"#defer-的执行顺序","children":[]},{"level":3,"title":"如何交换 2 个变量的值？","slug":"如何交换-2-个变量的值","link":"#如何交换-2-个变量的值","children":[]},{"level":3,"title":"Go 语言 tag 的用处？","slug":"go-语言-tag-的用处","link":"#go-语言-tag-的用处","children":[]},{"level":3,"title":"如何判断 2 个字符串切片（slice) 是相等的？","slug":"如何判断-2-个字符串切片-slice-是相等的","link":"#如何判断-2-个字符串切片-slice-是相等的","children":[]},{"level":3,"title":"字符串打印时，%v 和 %+v 的区别","slug":"字符串打印时-v-和-v-的区别","link":"#字符串打印时-v-和-v-的区别","children":[]},{"level":3,"title":"Go 语言中如何表示枚举值(enums)？","slug":"go-语言中如何表示枚举值-enums","link":"#go-语言中如何表示枚举值-enums","children":[]},{"level":3,"title":"空 struct{} 的用途","slug":"空-struct-的用途","link":"#空-struct-的用途","children":[]},{"level":3,"title":"go里面的int和int32是同一个概念吗？","slug":"go里面的int和int32是同一个概念吗","link":"#go里面的int和int32是同一个概念吗","children":[]}]},{"level":2,"title":"Java过渡Go的第一个项目：TodoList","slug":"java过渡go的第一个项目-todolist","link":"#java过渡go的第一个项目-todolist","children":[{"level":3,"title":"前言","slug":"前言-1","link":"#前言-1","children":[]},{"level":3,"title":"搭建外设","slug":"搭建外设","link":"#搭建外设","children":[]},{"level":3,"title":"建立数据库","slug":"建立数据库","link":"#建立数据库","children":[]},{"level":3,"title":"搭建VO对象","slug":"搭建vo对象","link":"#搭建vo对象","children":[]},{"level":3,"title":"搭建Service层","slug":"搭建service层","link":"#搭建service层","children":[]},{"level":3,"title":"Controller层","slug":"controller层","link":"#controller层","children":[]},{"level":3,"title":"搭建路由","slug":"搭建路由","link":"#搭建路由","children":[]},{"level":3,"title":"临时测试","slug":"临时测试","link":"#临时测试","children":[]},{"level":3,"title":"搭建swagger进行测试","slug":"搭建swagger进行测试","link":"#搭建swagger进行测试","children":[]},{"level":3,"title":"后记","slug":"后记","link":"#后记","children":[]}]},{"level":2,"title":"外传：项目实践：单例爬虫、协程并发爬虫","slug":"外传-项目实践-单例爬虫、协程并发爬虫","link":"#外传-项目实践-单例爬虫、协程并发爬虫","children":[{"level":3,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[]},{"level":3,"title":"新浪微博","slug":"新浪微博","link":"#新浪微博","children":[]},{"level":3,"title":"美之图","slug":"美之图","link":"#美之图","children":[]}]},{"level":2,"title":"问题汇总","slug":"问题汇总","link":"#问题汇总","children":[]}],"git":{"createdTime":1725236822000,"updatedTime":1725236822000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":1}]},"readingTime":{"minutes":23.36,"words":7008},"filePathRelative":"golang/learnInProblem.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}`);export{e as data};
