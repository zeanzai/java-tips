const t=JSON.parse('{"key":"v-18fc11a8","path":"/Java/eightpart/network.html","title":"计算机网络","lang":"zh-CN","frontmatter":{"order":11,"author":"zeanzai","title":"计算机网络","category":["计算机基础","八股文"],"description":"🌐计算机网络（热门八股文） 👁️前置知识 OSI 七层模型 OSI 七层模型 是国际标准化组织提出一个网络分层模型，其大体结构以及每一层提供的功能如下图所示： image-20220617141718194 每一层都专注做一件事情，并且每一层都需要使用下一层提供的功能比如传输层需要使用网络层提供的路由和寻址功能，这样传输层才知道把数据传输到哪里去。...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/eightpart/network.html"}],["meta",{"property":"og:site_name","content":"java-tips"}],["meta",{"property":"og:title","content":"计算机网络"}],["meta",{"property":"og:description","content":"🌐计算机网络（热门八股文） 👁️前置知识 OSI 七层模型 OSI 七层模型 是国际标准化组织提出一个网络分层模型，其大体结构以及每一层提供的功能如下图所示： image-20220617141718194 每一层都专注做一件事情，并且每一层都需要使用下一层提供的功能比如传输层需要使用网络层提供的路由和寻址功能，这样传输层才知道把数据传输到哪里去。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:42:12.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"计算机网络"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:42:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机网络\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:42:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"🌐计算机网络（热门八股文）","slug":"🌐计算机网络-热门八股文","link":"#🌐计算机网络-热门八股文","children":[{"level":3,"title":"👁️前置知识","slug":"👁️前置知识","link":"#👁️前置知识","children":[]},{"level":3,"title":"⭐️键入网址到网页显示，期间发生了什么？","slug":"⭐️键入网址到网页显示-期间发生了什么","link":"#⭐️键入网址到网页显示-期间发生了什么","children":[]},{"level":3,"title":"网卡从收到数据到进程拿到数据的过程","slug":"网卡从收到数据到进程拿到数据的过程","link":"#网卡从收到数据到进程拿到数据的过程","children":[]},{"level":3,"title":"TCP如何保证可靠传输？","slug":"tcp如何保证可靠传输","link":"#tcp如何保证可靠传输","children":[]},{"level":3,"title":"⭐️TCP 三次握手和四次挥手（+++极限拓展）","slug":"⭐️tcp-三次握手和四次挥手-极限拓展","link":"#⭐️tcp-三次握手和四次挥手-极限拓展","children":[]},{"level":3,"title":"CLOSE_WAIT的作用","slug":"close-wait的作用","link":"#close-wait的作用","children":[]},{"level":3,"title":"服务器出现大量 CLOSE_WAIT 状态的原因有哪些？","slug":"服务器出现大量-close-wait-状态的原因有哪些","link":"#服务器出现大量-close-wait-状态的原因有哪些","children":[]},{"level":3,"title":"TIME_WAIT的作用","slug":"time-wait的作用","link":"#time-wait的作用","children":[]},{"level":3,"title":"大量TIME_WAIT出现是可能是什么原因导致的？如何解决？","slug":"大量time-wait出现是可能是什么原因导致的-如何解决","link":"#大量time-wait出现是可能是什么原因导致的-如何解决","children":[]},{"level":3,"title":"HTTP2 相对于 HTTP1 有什么不同？","slug":"http2-相对于-http1-有什么不同","link":"#http2-相对于-http1-有什么不同","children":[]},{"level":3,"title":"HTTP3 前瞻：释放QUIC的力量","slug":"http3-前瞻-释放quic的力量","link":"#http3-前瞻-释放quic的力量","children":[]},{"level":3,"title":"HTTP 与 HTTPS 有哪些区别？","slug":"http-与-https-有哪些区别","link":"#http-与-https-有哪些区别","children":[]},{"level":3,"title":"HTTPS 是如何建立连接的？其间交互了什么？","slug":"https-是如何建立连接的-其间交互了什么","link":"#https-是如何建立连接的-其间交互了什么","children":[]},{"level":3,"title":"TCP, UDP 协议的区别","slug":"tcp-udp-协议的区别","link":"#tcp-udp-协议的区别","children":[]},{"level":3,"title":"TCP 和 UDP 可以同时绑定相同的端口吗？","slug":"tcp-和-udp-可以同时绑定相同的端口吗","link":"#tcp-和-udp-可以同时绑定相同的端口吗","children":[]},{"level":3,"title":"HTTP 哪些常用的状态码","slug":"http-哪些常用的状态码","link":"#http-哪些常用的状态码","children":[]},{"level":3,"title":"HTTP如何实现长连接","slug":"http如何实现长连接","link":"#http如何实现长连接","children":[]},{"level":3,"title":"交换机和路由器的区别","slug":"交换机和路由器的区别","link":"#交换机和路由器的区别","children":[]},{"level":3,"title":"OSI 7层模型每一层都用到什么协议","slug":"osi-7层模型每一层都用到什么协议","link":"#osi-7层模型每一层都用到什么协议","children":[]},{"level":3,"title":"什么是粘包？","slug":"什么是粘包","link":"#什么是粘包","children":[]},{"level":3,"title":"如何解决粘包？","slug":"如何解决粘包","link":"#如何解决粘包","children":[]}]}],"git":{"createdTime":1725236822000,"updatedTime":1725237732000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":2}]},"readingTime":{"minutes":130.6,"words":39181},"filePathRelative":"Java/eightpart/network.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{t as data};
