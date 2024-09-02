const l=JSON.parse('{"key":"v-485cf4f4","path":"/Java/eightpart/gaint2023.html","title":"2023大厂八股文","lang":"zh-CN","frontmatter":{"order":20,"author":"zeanzai","title":"2023大厂八股文","category":["八股文","大厂"],"description":"前言 2022有的大厂面试题不会在2023再次出现（也有可能会因为粗心加上，欢迎issue或者PR指正和修改），如果想要了解可以先看2022大厂面试 (/Java/eightpart/giant.md)版本。 🐦Java 基础 ArrayList线程安全吗？把ArrayList变成线程安全有哪些方法？（2023 美团） 将ArrayList变成线程安...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/eightpart/gaint2023.html"}],["meta",{"property":"og:site_name","content":"java-tips"}],["meta",{"property":"og:title","content":"2023大厂八股文"}],["meta",{"property":"og:description","content":"前言 2022有的大厂面试题不会在2023再次出现（也有可能会因为粗心加上，欢迎issue或者PR指正和修改），如果想要了解可以先看2022大厂面试 (/Java/eightpart/giant.md)版本。 🐦Java 基础 ArrayList线程安全吗？把ArrayList变成线程安全有哪些方法？（2023 美团） 将ArrayList变成线程安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:42:12.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"2023大厂八股文"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:42:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2023大厂八股文\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:42:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"🐦Java 基础","slug":"🐦java-基础","link":"#🐦java-基础","children":[{"level":3,"title":"ArrayList线程安全吗？把ArrayList变成线程安全有哪些方法？（2023 美团）","slug":"arraylist线程安全吗-把arraylist变成线程安全有哪些方法-2023-美团","link":"#arraylist线程安全吗-把arraylist变成线程安全有哪些方法-2023-美团","children":[]},{"level":3,"title":"Java中有哪些常用的容器呢？（2023 阿里）","slug":"java中有哪些常用的容器呢-2023-阿里","link":"#java中有哪些常用的容器呢-2023-阿里","children":[]},{"level":3,"title":"HashMap是线程不安全的，那有什么线程安全的办法吗？（2023 阿里）","slug":"hashmap是线程不安全的-那有什么线程安全的办法吗-2023-阿里","link":"#hashmap是线程不安全的-那有什么线程安全的办法吗-2023-阿里","children":[]},{"level":3,"title":"ArrayList的并发修改异常了解吗？单线程情况下会发生吗？（2023 小红书）","slug":"arraylist的并发修改异常了解吗-单线程情况下会发生吗-2023-小红书","link":"#arraylist的并发修改异常了解吗-单线程情况下会发生吗-2023-小红书","children":[]},{"level":3,"title":"什么情况下会导致并发修改异常？（2023 快手）","slug":"什么情况下会导致并发修改异常-2023-快手","link":"#什么情况下会导致并发修改异常-2023-快手","children":[]},{"level":3,"title":"面向过程的方法存在哪些问题？（2023 美团）","slug":"面向过程的方法存在哪些问题-2023-美团","link":"#面向过程的方法存在哪些问题-2023-美团","children":[]},{"level":3,"title":"面向过程好处是什么？（2023 美团）","slug":"面向过程好处是什么-2023-美团","link":"#面向过程好处是什么-2023-美团","children":[]},{"level":3,"title":"object 有哪些方法（2023百度）","slug":"object-有哪些方法-2023百度","link":"#object-有哪些方法-2023百度","children":[]},{"level":3,"title":"如果让你自己实现一个 map 你会怎么做（2023百度）","slug":"如果让你自己实现一个-map-你会怎么做-2023百度","link":"#如果让你自己实现一个-map-你会怎么做-2023百度","children":[]},{"level":3,"title":"作为 map 的 key 需要重写哪些方法？（2023 完美世界）","slug":"作为-map-的-key-需要重写哪些方法-2023-完美世界","link":"#作为-map-的-key-需要重写哪些方法-2023-完美世界","children":[]},{"level":3,"title":"List的实现类（2023 阿里）","slug":"list的实现类-2023-阿里","link":"#list的实现类-2023-阿里","children":[]},{"level":3,"title":"List和Set的区别（2023 阿里）","slug":"list和set的区别-2023-阿里","link":"#list和set的区别-2023-阿里","children":[]},{"level":3,"title":"针对你说的List和Set的性质，那你会用这两种结构解决哪些问题（2023 阿里）","slug":"针对你说的list和set的性质-那你会用这两种结构解决哪些问题-2023-阿里","link":"#针对你说的list和set的性质-那你会用这两种结构解决哪些问题-2023-阿里","children":[]},{"level":3,"title":"Java创建对象的几种方式，除了new和反射还有其他吗？（2023 阿里实习）","slug":"java创建对象的几种方式-除了new和反射还有其他吗-2023-阿里实习","link":"#java创建对象的几种方式-除了new和反射还有其他吗-2023-阿里实习","children":[]},{"level":3,"title":"hashmap，为什么要转成红黑树，不是一开始就用？（2023 阿里实习）","slug":"hashmap-为什么要转成红黑树-不是一开始就用-2023-阿里实习","link":"#hashmap-为什么要转成红黑树-不是一开始就用-2023-阿里实习","children":[]},{"level":3,"title":"Long 的长度和范围，为什么要减 1 ？（2023 快手）","slug":"long-的长度和范围-为什么要减-1-2023-快手","link":"#long-的长度和范围-为什么要减-1-2023-快手","children":[]},{"level":3,"title":"JAVA 异常的层次结构（2023 快手）","slug":"java-异常的层次结构-2023-快手","link":"#java-异常的层次结构-2023-快手","children":[]},{"level":3,"title":"JAVA 的集合类有了解么？（2023 快手）","slug":"java-的集合类有了解么-2023-快手","link":"#java-的集合类有了解么-2023-快手","children":[]},{"level":3,"title":"try{return “a”} fianlly{return “b”}这条语句返回啥（2023 快手）","slug":"try-return-a-fianlly-return-b-这条语句返回啥-2023-快手","link":"#try-return-a-fianlly-return-b-这条语句返回啥-2023-快手","children":[]},{"level":3,"title":"String s = new String（“abc”）执行过程中分别对应哪些内存区域？（2023 快手）","slug":"string-s-new-string-abc-执行过程中分别对应哪些内存区域-2023-快手","link":"#string-s-new-string-abc-执行过程中分别对应哪些内存区域-2023-快手","children":[]},{"level":3,"title":"Default修饰符和Proteted修饰符区别（2023 用友）","slug":"default修饰符和proteted修饰符区别-2023-用友","link":"#default修饰符和proteted修饰符区别-2023-用友","children":[]},{"level":3,"title":"自定义排序怎么实现？（2023 用友）","slug":"自定义排序怎么实现-2023-用友","link":"#自定义排序怎么实现-2023-用友","children":[]},{"level":3,"title":"arraylist的addAll方法，如果容量为1，addAll一个容量为100000的数组，怎么扩容？（2023 用友）","slug":"arraylist的addall方法-如果容量为1-addall一个容量为100000的数组-怎么扩容-2023-用友","link":"#arraylist的addall方法-如果容量为1-addall一个容量为100000的数组-怎么扩容-2023-用友","children":[]},{"level":3,"title":"枚举类，可以new出来么（2023 用友）","slug":"枚举类-可以new出来么-2023-用友","link":"#枚举类-可以new出来么-2023-用友","children":[]},{"level":3,"title":"Java抽象类和抽象方法抽象字段之间的因果关系？（2023 用友）","slug":"java抽象类和抽象方法抽象字段之间的因果关系-2023-用友","link":"#java抽象类和抽象方法抽象字段之间的因果关系-2023-用友","children":[]},{"level":3,"title":"多线程下如何保证HashSet的安全性？（2023 用友）","slug":"多线程下如何保证hashset的安全性-2023-用友","link":"#多线程下如何保证hashset的安全性-2023-用友","children":[]},{"level":3,"title":"线程池的 BlockingQueue 有什么需要特别注意的（长度溢出相关）？（2023 得物）","slug":"线程池的-blockingqueue-有什么需要特别注意的-长度溢出相关-2023-得物","link":"#线程池的-blockingqueue-有什么需要特别注意的-长度溢出相关-2023-得物","children":[]},{"level":3,"title":"ConcurrentHashMap 为什么 key 和 value 不能为 null？（2023 美团）","slug":"concurrenthashmap-为什么-key-和-value-不能为-null-2023-美团","link":"#concurrenthashmap-为什么-key-和-value-不能为-null-2023-美团","children":[]},{"level":3,"title":"HashMap在多线程情况下会产生哪些问题？会产生死锁吗？（2023 得物）","slug":"hashmap在多线程情况下会产生哪些问题-会产生死锁吗-2023-得物","link":"#hashmap在多线程情况下会产生哪些问题-会产生死锁吗-2023-得物","children":[]},{"level":3,"title":"假设有个hashmap上锁put，get不上锁会有线程安全问题吗？为什么？（2023 快手）","slug":"假设有个hashmap上锁put-get不上锁会有线程安全问题吗-为什么-2023-快手","link":"#假设有个hashmap上锁put-get不上锁会有线程安全问题吗-为什么-2023-快手","children":[]}]},{"level":2,"title":"🕝 并发编程","slug":"🕝-并发编程","link":"#🕝-并发编程","children":[{"level":3,"title":"Java的线程池有哪些？（2023 阿里）","slug":"java的线程池有哪些-2023-阿里","link":"#java的线程池有哪些-2023-阿里","children":[]},{"level":3,"title":"线程池队列的底层？（2023 美团）","slug":"线程池队列的底层-2023-美团","link":"#线程池队列的底层-2023-美团","children":[]},{"level":3,"title":"线程池的队列又分哪几种呢？（2023 美团）","slug":"线程池的队列又分哪几种呢-2023-美团","link":"#线程池的队列又分哪几种呢-2023-美团","children":[]},{"level":3,"title":"线程池的拒绝策略能自定义拒绝策略吗？（2023 阿里）","slug":"线程池的拒绝策略能自定义拒绝策略吗-2023-阿里","link":"#线程池的拒绝策略能自定义拒绝策略吗-2023-阿里","children":[]},{"level":3,"title":"线程池配置无界队列了之后，拒绝策略怎么搞，什么时候用到无界对列？（2023 快手）","slug":"线程池配置无界队列了之后-拒绝策略怎么搞-什么时候用到无界对列-2023-快手","link":"#线程池配置无界队列了之后-拒绝策略怎么搞-什么时候用到无界对列-2023-快手","children":[]},{"level":3,"title":"使用多线程要注意哪些问题？（2023 美团）","slug":"使用多线程要注意哪些问题-2023-美团","link":"#使用多线程要注意哪些问题-2023-美团","children":[]},{"level":3,"title":"保证数据的一致性有哪些方案呢？（2023 美团）","slug":"保证数据的一致性有哪些方案呢-2023-美团","link":"#保证数据的一致性有哪些方案呢-2023-美团","children":[]},{"level":3,"title":"怎么获取子线程的返回值？（2023 阿里实习）","slug":"怎么获取子线程的返回值-2023-阿里实习","link":"#怎么获取子线程的返回值-2023-阿里实习","children":[]},{"level":3,"title":"子线程抛异常，主线程 try-catch 是否可以获取到异常？（2023 阿里实习）","slug":"子线程抛异常-主线程-try-catch-是否可以获取到异常-2023-阿里实习","link":"#子线程抛异常-主线程-try-catch-是否可以获取到异常-2023-阿里实习","children":[]},{"level":3,"title":"AtomicInteger是怎么更新保证原子性的？（2023 小红书）","slug":"atomicinteger是怎么更新保证原子性的-2023-小红书","link":"#atomicinteger是怎么更新保证原子性的-2023-小红书","children":[]},{"level":3,"title":"Future抛出的两个异常的对比，都有什么用？（2023 百度提前批）","slug":"future抛出的两个异常的对比-都有什么用-2023-百度提前批","link":"#future抛出的两个异常的对比-都有什么用-2023-百度提前批","children":[]},{"level":3,"title":"线程池任务提交，比如调用execute或submit API之后的流程有了解吗？（2023 影石360）","slug":"线程池任务提交-比如调用execute或submit-api之后的流程有了解吗-2023-影石360","link":"#线程池任务提交-比如调用execute或submit-api之后的流程有了解吗-2023-影石360","children":[]},{"level":3,"title":"AQS队列中的任务怎么知道锁被释放了？（2023 美团）","slug":"aqs队列中的任务怎么知道锁被释放了-2023-美团","link":"#aqs队列中的任务怎么知道锁被释放了-2023-美团","children":[]}]},{"level":2,"title":"🍃 常用框架","slug":"🍃-常用框架","link":"#🍃-常用框架","children":[{"level":3,"title":"MyBatis运用了哪些常见的设计模式？（2023 美团）","slug":"mybatis运用了哪些常见的设计模式-2023-美团","link":"#mybatis运用了哪些常见的设计模式-2023-美团","children":[]},{"level":3,"title":"MyBatis中创建了一个Mapper接口，在写一个xml文件，java的接口是要实现的，为什么这没有实现呢？（2023 美团）","slug":"mybatis中创建了一个mapper接口-在写一个xml文件-java的接口是要实现的-为什么这没有实现呢-2023-美团","link":"#mybatis中创建了一个mapper接口-在写一个xml文件-java的接口是要实现的-为什么这没有实现呢-2023-美团","children":[]},{"level":3,"title":"与传统的JDBC相比，MyBatis的优点？（2023 美团）","slug":"与传统的jdbc相比-mybatis的优点-2023-美团","link":"#与传统的jdbc相比-mybatis的优点-2023-美团","children":[]},{"level":3,"title":"JDBC连接数据库的步骤（2023 美团）","slug":"jdbc连接数据库的步骤-2023-美团","link":"#jdbc连接数据库的步骤-2023-美团","children":[]},{"level":3,"title":"怎么理解SpringIoc？（2023 美团）","slug":"怎么理解springioc-2023-美团","link":"#怎么理解springioc-2023-美团","children":[]},{"level":3,"title":"如果让你设计一个SpringIoc，你觉得会从哪些方面考虑这个设计？（2023 美团）","slug":"如果让你设计一个springioc-你觉得会从哪些方面考虑这个设计-2023-美团","link":"#如果让你设计一个springioc-你觉得会从哪些方面考虑这个设计-2023-美团","children":[]},{"level":3,"title":"Spring给我们提供了很多扩展点，这些有了解吗？（2023 美团）","slug":"spring给我们提供了很多扩展点-这些有了解吗-2023-美团","link":"#spring给我们提供了很多扩展点-这些有了解吗-2023-美团","children":[]},{"level":3,"title":"大致了解SpringMVC的处理流程吗？（2023 美团）","slug":"大致了解springmvc的处理流程吗-2023-美团","link":"#大致了解springmvc的处理流程吗-2023-美团","children":[]},{"level":3,"title":"SpringAOP主要想解决什么问题（2023 美团）","slug":"springaop主要想解决什么问题-2023-美团","link":"#springaop主要想解决什么问题-2023-美团","children":[]},{"level":3,"title":"🔥 SpringAOP的原理了解吗（2023 美团、2023 完美世界、2023 影石360、2023 快手）","slug":"🔥-springaop的原理了解吗-2023-美团、2023-完美世界、2023-影石360、2023-快手","link":"#🔥-springaop的原理了解吗-2023-美团、2023-完美世界、2023-影石360、2023-快手","children":[]},{"level":3,"title":"拦截器有几个方法，分别在什么时候执行，对比过滤器（2023 完美世界）","slug":"拦截器有几个方法-分别在什么时候执行-对比过滤器-2023-完美世界","link":"#拦截器有几个方法-分别在什么时候执行-对比过滤器-2023-完美世界","children":[]},{"level":3,"title":"导入一个 jar 包怎么让 springboot 知道哪些需要自动配置（2023 完美世界）","slug":"导入一个-jar-包怎么让-springboot-知道哪些需要自动配置-2023-完美世界","link":"#导入一个-jar-包怎么让-springboot-知道哪些需要自动配置-2023-完美世界","children":[]},{"level":3,"title":"Spring IOC 中的 FactoryBean和BeanFactory？（2023 京东）","slug":"spring-ioc-中的-factorybean和beanfactory-2023-京东","link":"#spring-ioc-中的-factorybean和beanfactory-2023-京东","children":[]},{"level":3,"title":"Spring Boot启动时进行初始化的操作（2023 得物）","slug":"spring-boot启动时进行初始化的操作-2023-得物","link":"#spring-boot启动时进行初始化的操作-2023-得物","children":[]}]},{"level":2,"title":"🐬 MySQL","slug":"🐬-mysql","link":"#🐬-mysql","children":[{"level":3,"title":"可重复读和已提交读隔离级别表现的现象是什么，区别是什么样的？（2023 美团）","slug":"可重复读和已提交读隔离级别表现的现象是什么-区别是什么样的-2023-美团","link":"#可重复读和已提交读隔离级别表现的现象是什么-区别是什么样的-2023-美团","children":[]},{"level":3,"title":"数据库引擎知道哪些？（2023 美团）","slug":"数据库引擎知道哪些-2023-美团","link":"#数据库引擎知道哪些-2023-美团","children":[]},{"level":3,"title":"数据文件大体分成哪几种数据文件？（2023 美团）","slug":"数据文件大体分成哪几种数据文件-2023-美团","link":"#数据文件大体分成哪几种数据文件-2023-美团","children":[]},{"level":3,"title":"对一个慢sql怎么去排查？（2023 美团）","slug":"对一个慢sql怎么去排查-2023-美团","link":"#对一个慢sql怎么去排查-2023-美团","children":[]},{"level":3,"title":"索引字段是不是建的越多越好（2023 美团）","slug":"索引字段是不是建的越多越好-2023-美团","link":"#索引字段是不是建的越多越好-2023-美团","children":[]},{"level":3,"title":"什么是覆盖索引？（2023 快手）","slug":"什么是覆盖索引-2023-快手","link":"#什么是覆盖索引-2023-快手","children":[]},{"level":3,"title":"mysql的隔离级别是什么?mysql是如何实现的？（2023 阿里）","slug":"mysql的隔离级别是什么-mysql是如何实现的-2023-阿里","link":"#mysql的隔离级别是什么-mysql是如何实现的-2023-阿里","children":[]},{"level":3,"title":"MySQL中delete 和 truncate 的区别？（2023 阿里实习）","slug":"mysql中delete-和-truncate-的区别-2023-阿里实习","link":"#mysql中delete-和-truncate-的区别-2023-阿里实习","children":[]},{"level":3,"title":"什么是联合索引，为什么要建联合索引？（2023 阿里实习）","slug":"什么是联合索引-为什么要建联合索引-2023-阿里实习","link":"#什么是联合索引-为什么要建联合索引-2023-阿里实习","children":[]},{"level":3,"title":"SQL explain 会输出哪些信息？（2023 阿里实习）","slug":"sql-explain-会输出哪些信息-2023-阿里实习","link":"#sql-explain-会输出哪些信息-2023-阿里实习","children":[]},{"level":3,"title":"sql 怎么手动加锁（2023 阿里实习）","slug":"sql-怎么手动加锁-2023-阿里实习","link":"#sql-怎么手动加锁-2023-阿里实习","children":[]},{"level":3,"title":"介绍一些 mysql 底层结构？（2023 蚂蚁金服）","slug":"介绍一些-mysql-底层结构-2023-蚂蚁金服","link":"#介绍一些-mysql-底层结构-2023-蚂蚁金服","children":[]},{"level":3,"title":"mysql中，主键索引和唯一索引的区别是什么？（2023 百度提前批）","slug":"mysql中-主键索引和唯一索引的区别是什么-2023-百度提前批","link":"#mysql中-主键索引和唯一索引的区别是什么-2023-百度提前批","children":[]},{"level":3,"title":"一个联合索引（a, b, c），查询（a, c），能用到索引吗？（2023 百度提前批）","slug":"一个联合索引-a-b-c-查询-a-c-能用到索引吗-2023-百度提前批","link":"#一个联合索引-a-b-c-查询-a-c-能用到索引吗-2023-百度提前批","children":[]},{"level":3,"title":"事务原子性是怎么实现的？（2023 美团）","slug":"事务原子性是怎么实现的-2023-美团","link":"#事务原子性是怎么实现的-2023-美团","children":[]},{"level":3,"title":"事务的隔离性怎么实现的？（2023 美团）","slug":"事务的隔离性怎么实现的-2023-美团","link":"#事务的隔离性怎么实现的-2023-美团","children":[]},{"level":3,"title":"事务一致性怎么实现的？（2023 美团）","slug":"事务一致性怎么实现的-2023-美团","link":"#事务一致性怎么实现的-2023-美团","children":[]},{"level":3,"title":"事务的持久性怎么实现的？（通过2023 美团面试题思考补充）","slug":"事务的持久性怎么实现的-通过2023-美团面试题思考补充","link":"#事务的持久性怎么实现的-通过2023-美团面试题思考补充","children":[]},{"level":3,"title":"事务的这四个特性是怎么实现的？(2023 阿里)","slug":"事务的这四个特性是怎么实现的-2023-阿里","link":"#事务的这四个特性是怎么实现的-2023-阿里","children":[]},{"level":3,"title":"MySQL死锁的案例(2023 阿里)","slug":"mysql死锁的案例-2023-阿里","link":"#mysql死锁的案例-2023-阿里","children":[]},{"level":3,"title":"MySQL分库分表之后怎么确保每个表的id都是唯一的？（2023 阿里）","slug":"mysql分库分表之后怎么确保每个表的id都是唯一的-2023-阿里","link":"#mysql分库分表之后怎么确保每个表的id都是唯一的-2023-阿里","children":[]},{"level":3,"title":"MVCC的隔离机制介绍一下？（2023 美团）","slug":"mvcc的隔离机制介绍一下-2023-美团","link":"#mvcc的隔离机制介绍一下-2023-美团","children":[]},{"level":3,"title":"数据库的三大范式，可以反范式吗？（2023 美团）","slug":"数据库的三大范式-可以反范式吗-2023-美团","link":"#数据库的三大范式-可以反范式吗-2023-美团","children":[]},{"level":3,"title":"MySQL中，什么样的数据不推荐加索引？（2023 影石360）","slug":"mysql中-什么样的数据不推荐加索引-2023-影石360","link":"#mysql中-什么样的数据不推荐加索引-2023-影石360","children":[]},{"level":3,"title":"数据库自增id，当id值大于MAXINT时，数据库如何做 ？（2023 快手）","slug":"数据库自增id-当id值大于maxint时-数据库如何做-2023-快手","link":"#数据库自增id-当id值大于maxint时-数据库如何做-2023-快手","children":[]},{"level":3,"title":"了解过前缀索引吗？（2023 快手）","slug":"了解过前缀索引吗-2023-快手","link":"#了解过前缀索引吗-2023-快手","children":[]},{"level":3,"title":"介绍一下联合索引？最左匹配原则是什么？（2023 快手）","slug":"介绍一下联合索引-最左匹配原则是什么-2023-快手","link":"#介绍一下联合索引-最左匹配原则是什么-2023-快手","children":[]},{"level":3,"title":"MySQL的索引为什么是b+树（2023 得物）","slug":"mysql的索引为什么是b-树-2023-得物","link":"#mysql的索引为什么是b-树-2023-得物","children":[]},{"level":3,"title":"一个sql语句，判断是否用了索引，是否回表（2023 得物）","slug":"一个sql语句-判断是否用了索引-是否回表-2023-得物","link":"#一个sql语句-判断是否用了索引-是否回表-2023-得物","children":[]},{"level":3,"title":"mysql的死锁问题（2023 得物）","slug":"mysql的死锁问题-2023-得物","link":"#mysql的死锁问题-2023-得物","children":[]},{"level":3,"title":"手写个sql死锁，如果字段非索引会发生死锁吗（2023 快手）","slug":"手写个sql死锁-如果字段非索引会发生死锁吗-2023-快手","link":"#手写个sql死锁-如果字段非索引会发生死锁吗-2023-快手","children":[]}]},{"level":2,"title":"♨️ Redis","slug":"♨️-redis","link":"#♨️-redis","children":[{"level":3,"title":"Redis string底层的结构？（2023 美团）","slug":"redis-string底层的结构-2023-美团","link":"#redis-string底层的结构-2023-美团","children":[]},{"level":3,"title":"Redis 分布式锁的实现？过期时间怎样设置的？（2023 美团）","slug":"redis-分布式锁的实现-过期时间怎样设置的-2023-美团","link":"#redis-分布式锁的实现-过期时间怎样设置的-2023-美团","children":[]},{"level":3,"title":"redis怎么实现分布式锁 set nx命令有什么问题 如何解决？（2023小红书）","slug":"redis怎么实现分布式锁-set-nx命令有什么问题-如何解决-2023小红书","link":"#redis怎么实现分布式锁-set-nx命令有什么问题-如何解决-2023小红书","children":[]},{"level":3,"title":"什么情况使用 redis 反而降低性能（2023 完美世界）","slug":"什么情况使用-redis-反而降低性能-2023-完美世界","link":"#什么情况使用-redis-反而降低性能-2023-完美世界","children":[]},{"level":3,"title":"Redis大key如何解决（2023 滴滴）","slug":"redis大key如何解决-2023-滴滴","link":"#redis大key如何解决-2023-滴滴","children":[]},{"level":3,"title":"什么是热key？如何解决热key问题（2023 滴滴，2023 小红书）","slug":"什么是热key-如何解决热key问题-2023-滴滴-2023-小红书","link":"#什么是热key-如何解决热key问题-2023-滴滴-2023-小红书","children":[]},{"level":3,"title":"讲下Redis的ZSet（2023 滴滴）","slug":"讲下redis的zset-2023-滴滴","link":"#讲下redis的zset-2023-滴滴","children":[]},{"level":3,"title":"ZSet的范围查询的时间复杂度是多少（2023 滴滴）","slug":"zset的范围查询的时间复杂度是多少-2023-滴滴","link":"#zset的范围查询的时间复杂度是多少-2023-滴滴","children":[]},{"level":3,"title":"redis 批处理？（2023 阿里实习）","slug":"redis-批处理-2023-阿里实习","link":"#redis-批处理-2023-阿里实习","children":[]},{"level":3,"title":"RDB fork子进程去写日志的时候，如果宕机了是不是有数据就丢失了（2023 小红书）","slug":"rdb-fork子进程去写日志的时候-如果宕机了是不是有数据就丢失了-2023-小红书","link":"#rdb-fork子进程去写日志的时候-如果宕机了是不是有数据就丢失了-2023-小红书","children":[]},{"level":3,"title":"redis服务器挂了后，redis缓存问题考虑过吗？（2023 快手）","slug":"redis服务器挂了后-redis缓存问题考虑过吗-2023-快手","link":"#redis服务器挂了后-redis缓存问题考虑过吗-2023-快手","children":[]},{"level":3,"title":"Redis切片集群中，数据量多了，加实例还是加内存，为什么？加实例要注意什么问题？（2023 得物）","slug":"redis切片集群中-数据量多了-加实例还是加内存-为什么-加实例要注意什么问题-2023-得物","link":"#redis切片集群中-数据量多了-加实例还是加内存-为什么-加实例要注意什么问题-2023-得物","children":[]},{"level":3,"title":"Redis的主库崩溃了会怎么样（2023 得物）","slug":"redis的主库崩溃了会怎么样-2023-得物","link":"#redis的主库崩溃了会怎么样-2023-得物","children":[]},{"level":3,"title":"Redis数据更新成功，MySQL更新失败怎么办？（2023 用友）","slug":"redis数据更新成功-mysql更新失败怎么办-2023-用友","link":"#redis数据更新成功-mysql更新失败怎么办-2023-用友","children":[]},{"level":3,"title":"Redis保存数据有什么安全性问题？（2023 用友）","slug":"redis保存数据有什么安全性问题-2023-用友","link":"#redis保存数据有什么安全性问题-2023-用友","children":[]},{"level":3,"title":"在分布式锁中，Redis中A申请锁1min，30s B能获取这个锁吗？（2023 得物）","slug":"在分布式锁中-redis中a申请锁1min-30s-b能获取这个锁吗-2023-得物","link":"#在分布式锁中-redis中a申请锁1min-30s-b能获取这个锁吗-2023-得物","children":[]},{"level":3,"title":"redisson底层是怎么实现的（2023 快手）","slug":"redisson底层是怎么实现的-2023-快手","link":"#redisson底层是怎么实现的-2023-快手","children":[]}]},{"level":2,"title":"♻️ JVM","slug":"♻️-jvm","link":"#♻️-jvm","children":[{"level":3,"title":"堆是如何管理内存的（2023 快手）","slug":"堆是如何管理内存的-2023-快手","link":"#堆是如何管理内存的-2023-快手","children":[]},{"level":3,"title":"跨代引用问题怎么解决（2023 快手）","slug":"跨代引用问题怎么解决-2023-快手","link":"#跨代引用问题怎么解决-2023-快手","children":[]},{"level":3,"title":"元空间还会存放什么东西？（2023 影石360）","slug":"元空间还会存放什么东西-2023-影石360","link":"#元空间还会存放什么东西-2023-影石360","children":[]},{"level":3,"title":"对于static变量的理解？static变量分配内存的时候发生在哪个环节？（2023 影石360）","slug":"对于static变量的理解-static变量分配内存的时候发生在哪个环节-2023-影石360","link":"#对于static变量的理解-static变量分配内存的时候发生在哪个环节-2023-影石360","children":[]},{"level":3,"title":"每次回收都要从GC ROOT开始吗？哪些对象可以作为GC root？类加载器可以作为GC root吗？（2023 快手）","slug":"每次回收都要从gc-root开始吗-哪些对象可以作为gc-root-类加载器可以作为gc-root吗-2023-快手","link":"#每次回收都要从gc-root开始吗-哪些对象可以作为gc-root-类加载器可以作为gc-root吗-2023-快手","children":[]},{"level":3,"title":"垃圾回收过程如何判断每个阶段已经完成，可以进入下一个阶段（2023 快手）","slug":"垃圾回收过程如何判断每个阶段已经完成-可以进入下一个阶段-2023-快手","link":"#垃圾回收过程如何判断每个阶段已经完成-可以进入下一个阶段-2023-快手","children":[]},{"level":3,"title":"什么时候会发生FULL GC？（2023 小红书）","slug":"什么时候会发生full-gc-2023-小红书","link":"#什么时候会发生full-gc-2023-小红书","children":[]},{"level":3,"title":"可以在代码中捕获oom异常吗？（2023 小红书）","slug":"可以在代码中捕获oom异常吗-2023-小红书","link":"#可以在代码中捕获oom异常吗-2023-小红书","children":[]},{"level":3,"title":"能不能说一下堆区具体怎么划分，为什么这样划分（2023百度）","slug":"能不能说一下堆区具体怎么划分-为什么这样划分-2023百度","link":"#能不能说一下堆区具体怎么划分-为什么这样划分-2023百度","children":[]},{"level":3,"title":"怎么释放一个用完的大对象的内存空间？（2023 阿里实习）","slug":"怎么释放一个用完的大对象的内存空间-2023-阿里实习","link":"#怎么释放一个用完的大对象的内存空间-2023-阿里实习","children":[]},{"level":3,"title":"写查询语句的时候应该从哪些方面考虑来注意性能？（2023 阿里实习）","slug":"写查询语句的时候应该从哪些方面考虑来注意性能-2023-阿里实习","link":"#写查询语句的时候应该从哪些方面考虑来注意性能-2023-阿里实习","children":[]},{"level":3,"title":"怎么手动让 JAVA 虚拟机 OOM（2023 阿里实习）","slug":"怎么手动让-java-虚拟机-oom-2023-阿里实习","link":"#怎么手动让-java-虚拟机-oom-2023-阿里实习","children":[]},{"level":3,"title":"如果频繁出现Full GC该怎么排查（2023 小红书）","slug":"如果频繁出现full-gc该怎么排查-2023-小红书","link":"#如果频繁出现full-gc该怎么排查-2023-小红书","children":[]},{"level":3,"title":"Full GC会收集的是哪些对象（2023 小红书）","slug":"full-gc会收集的是哪些对象-2023-小红书","link":"#full-gc会收集的是哪些对象-2023-小红书","children":[]},{"level":3,"title":"解决Full GC，我们可以减少对象的频繁创建，那么有一个我们接请求需求创建对象的场景，可以怎么优化？（2023 小红书）","slug":"解决full-gc-我们可以减少对象的频繁创建-那么有一个我们接请求需求创建对象的场景-可以怎么优化-2023-小红书","link":"#解决full-gc-我们可以减少对象的频繁创建-那么有一个我们接请求需求创建对象的场景-可以怎么优化-2023-小红书","children":[]},{"level":3,"title":"Java线程之间通知怎么处理？（2023 得物）","slug":"java线程之间通知怎么处理-2023-得物","link":"#java线程之间通知怎么处理-2023-得物","children":[]},{"level":3,"title":"比如说有一个队列当中，有批量线程去处理的任务，然后一个任务处理失败之后要终止其他任务，这个怎么处理？（2023 得物）","slug":"比如说有一个队列当中-有批量线程去处理的任务-然后一个任务处理失败之后要终止其他任务-这个怎么处理-2023-得物","link":"#比如说有一个队列当中-有批量线程去处理的任务-然后一个任务处理失败之后要终止其他任务-这个怎么处理-2023-得物","children":[]},{"level":3,"title":"新生代频繁Minor GC原因，解决办法？（2023 得物）","slug":"新生代频繁minor-gc原因-解决办法-2023-得物","link":"#新生代频繁minor-gc原因-解决办法-2023-得物","children":[]},{"level":3,"title":"频繁Full GC（老年代GC）的原因？解决办法？（2023 得物）","slug":"频繁full-gc-老年代gc-的原因-解决办法-2023-得物","link":"#频繁full-gc-老年代gc-的原因-解决办法-2023-得物","children":[]},{"level":3,"title":"G1回收器 hop参数（2023 快手）","slug":"g1回收器-hop参数-2023-快手","link":"#g1回收器-hop参数-2023-快手","children":[]},{"level":3,"title":"G1回收器如何回收老年代对象（2023 快手）","slug":"g1回收器如何回收老年代对象-2023-快手","link":"#g1回收器如何回收老年代对象-2023-快手","children":[]}]},{"level":2,"title":"📭 中间件","slug":"📭-中间件","link":"#📭-中间件","children":[{"level":3,"title":"请求很多，消息堆积处理不过来了如何应对（2023滴滴）","slug":"请求很多-消息堆积处理不过来了如何应对-2023滴滴","link":"#请求很多-消息堆积处理不过来了如何应对-2023滴滴","children":[]},{"level":3,"title":"消息堆积时，用户以为卡了，多次请求怎么处理（2023滴滴）","slug":"消息堆积时-用户以为卡了-多次请求怎么处理-2023滴滴","link":"#消息堆积时-用户以为卡了-多次请求怎么处理-2023滴滴","children":[]},{"level":3,"title":"ES的索引？索引存储空间占用？ES索引和b+树索引区别？（2023 用友）","slug":"es的索引-索引存储空间占用-es索引和b-树索引区别-2023-用友","link":"#es的索引-索引存储空间占用-es索引和b-树索引区别-2023-用友","children":[]},{"level":3,"title":"kafka是基于磁盘存储，为什么高性能（2023 得物）","slug":"kafka是基于磁盘存储-为什么高性能-2023-得物","link":"#kafka是基于磁盘存储-为什么高性能-2023-得物","children":[]},{"level":3,"title":"kafka ack机制（2023 得物）","slug":"kafka-ack机制-2023-得物","link":"#kafka-ack机制-2023-得物","children":[]}]},{"level":2,"title":"🔗 微服务、分布式","slug":"🔗-微服务、分布式","link":"#🔗-微服务、分布式","children":[{"level":3,"title":"RPC如何进行序列化？（2023 阿里）","slug":"rpc如何进行序列化-2023-阿里","link":"#rpc如何进行序列化-2023-阿里","children":[]},{"level":3,"title":"dubbo 的请求处理流程（2023 完美世界）","slug":"dubbo-的请求处理流程-2023-完美世界","link":"#dubbo-的请求处理流程-2023-完美世界","children":[]},{"level":3,"title":"分布式系统的一致性怎么保证的？（2023 蚂蚁金服）","slug":"分布式系统的一致性怎么保证的-2023-蚂蚁金服","link":"#分布式系统的一致性怎么保证的-2023-蚂蚁金服","children":[]},{"level":3,"title":"gRPC，diRPC（滴滴自研）、Thrift和Dubbo各有什么优缺点，如何选型（2023 小红书）","slug":"grpc-dirpc-滴滴自研-、thrift和dubbo各有什么优缺点-如何选型-2023-小红书","link":"#grpc-dirpc-滴滴自研-、thrift和dubbo各有什么优缺点-如何选型-2023-小红书","children":[]},{"level":3,"title":"设计一个RPC框架需要注意什么？（2023 美团）","slug":"设计一个rpc框架需要注意什么-2023-美团","link":"#设计一个rpc框架需要注意什么-2023-美团","children":[]},{"level":3,"title":"为什么项目中一个使用了zookeeper一个使用了nacos，有什么区别（2023 美团）","slug":"为什么项目中一个使用了zookeeper一个使用了nacos-有什么区别-2023-美团","link":"#为什么项目中一个使用了zookeeper一个使用了nacos-有什么区别-2023-美团","children":[]},{"level":3,"title":"NGINX中正向代理和反向代理的区别？（2023 美团）","slug":"nginx中正向代理和反向代理的区别-2023-美团","link":"#nginx中正向代理和反向代理的区别-2023-美团","children":[]},{"level":3,"title":"了解哪些分布式事务？（2023 快手）","slug":"了解哪些分布式事务-2023-快手","link":"#了解哪些分布式事务-2023-快手","children":[]},{"level":3,"title":"负载均衡算法有哪些？（2023 得物）","slug":"负载均衡算法有哪些-2023-得物","link":"#负载均衡算法有哪些-2023-得物","children":[]}]},{"level":2,"title":"🌐 计算机网络","slug":"🌐-计算机网络","link":"#🌐-计算机网络","children":[{"level":3,"title":"服务端出现大量 close_wait 状态，可能的情况？（2023 美团）","slug":"服务端出现大量-close-wait-状态-可能的情况-2023-美团","link":"#服务端出现大量-close-wait-状态-可能的情况-2023-美团","children":[]},{"level":3,"title":"http协议的报文的格式有了解吗？","slug":"http协议的报文的格式有了解吗","link":"#http协议的报文的格式有了解吗","children":[]},{"level":3,"title":"http2了解吗？（2023小红书）","slug":"http2了解吗-2023小红书","link":"#http2了解吗-2023小红书","children":[]},{"level":3,"title":"建立 TCP 连接后，客户端下线了会发生什么（2023 百度）","slug":"建立-tcp-连接后-客户端下线了会发生什么-2023-百度","link":"#建立-tcp-连接后-客户端下线了会发生什么-2023-百度","children":[]},{"level":3,"title":"讲讲 ARP，ICMP? 什么时候不用查 ARP 表? ICMP 是哪个路由器回复的，什么地方用了 icmp，traceroute 怎么做的? （2023 阿里实习）","slug":"讲讲-arp-icmp-什么时候不用查-arp-表-icmp-是哪个路由器回复的-什么地方用了-icmp-traceroute-怎么做的-2023-阿里实习","link":"#讲讲-arp-icmp-什么时候不用查-arp-表-icmp-是哪个路由器回复的-什么地方用了-icmp-traceroute-怎么做的-2023-阿里实习","children":[]},{"level":3,"title":"如果同时有大量客户并发建立连接，服务器端有什么机制进行处理？（2023 字节提前批）","slug":"如果同时有大量客户并发建立连接-服务器端有什么机制进行处理-2023-字节提前批","link":"#如果同时有大量客户并发建立连接-服务器端有什么机制进行处理-2023-字节提前批","children":[]},{"level":3,"title":"🔥 HTTP1.1， 2.0区别（2023 热门问题之一：2023 百度提前批，2023 字节客户端，影石360）","slug":"🔥-http1-1-2-0区别-2023-热门问题之一-2023-百度提前批-2023-字节客户端-影石360","link":"#🔥-http1-1-2-0区别-2023-热门问题之一-2023-百度提前批-2023-字节客户端-影石360","children":[]},{"level":3,"title":"tcp 是怎么实现可靠传输的？（2023 字节、2023 影石360）","slug":"tcp-是怎么实现可靠传输的-2023-字节、2023-影石360","link":"#tcp-是怎么实现可靠传输的-2023-字节、2023-影石360","children":[]},{"level":3,"title":"IP数据报的报头有哪些字段？（2023 字节）","slug":"ip数据报的报头有哪些字段-2023-字节","link":"#ip数据报的报头有哪些字段-2023-字节","children":[]},{"level":3,"title":"IP 报文的TTL是什么意思？（2023 字节）","slug":"ip-报文的ttl是什么意思-2023-字节","link":"#ip-报文的ttl是什么意思-2023-字节","children":[]},{"level":3,"title":"如何实现一个可靠UDP？（2023 美团）","slug":"如何实现一个可靠udp-2023-美团","link":"#如何实现一个可靠udp-2023-美团","children":[]},{"level":3,"title":"ping命令是什么协议？（2023 美团）","slug":"ping命令是什么协议-2023-美团","link":"#ping命令是什么协议-2023-美团","children":[]},{"level":3,"title":"了解哪些网络错误码吗?（2023 美团）","slug":"了解哪些网络错误码吗-2023-美团","link":"#了解哪些网络错误码吗-2023-美团","children":[]},{"level":3,"title":"cookie和session区别？（2023 快手）","slug":"cookie和session区别-2023-快手","link":"#cookie和session区别-2023-快手","children":[]},{"level":3,"title":"TCP的粘包与拆包（2023 得物）","slug":"tcp的粘包与拆包-2023-得物","link":"#tcp的粘包与拆包-2023-得物","children":[]},{"level":3,"title":"HTTP 2 流式连接是怎么实现的？（2023 快手）","slug":"http-2-流式连接是怎么实现的-2023-快手","link":"#http-2-流式连接是怎么实现的-2023-快手","children":[]},{"level":3,"title":"什么是dns中间人攻击？（2023 快手）","slug":"什么是dns中间人攻击-2023-快手","link":"#什么是dns中间人攻击-2023-快手","children":[]},{"level":3,"title":"如何解决syn泛洪攻击？（2023 快手）","slug":"如何解决syn泛洪攻击-2023-快手","link":"#如何解决syn泛洪攻击-2023-快手","children":[]}]},{"level":2,"title":"🖥️ 操作系统","slug":"🖥️-操作系统","link":"#🖥️-操作系统","children":[{"level":3,"title":"🔥  进程和线程的概念和区别？（2023 热门问题之一：快手、影石360）","slug":"🔥-进程和线程的概念和区别-2023-热门问题之一-快手、影石360","link":"#🔥-进程和线程的概念和区别-2023-热门问题之一-快手、影石360","children":[]},{"level":3,"title":"用户态和内核态的区别？（2023 影石360）","slug":"用户态和内核态的区别-2023-影石360","link":"#用户态和内核态的区别-2023-影石360","children":[]},{"level":3,"title":"为什么用户态和内核态之间的切换会影响到线程的执行效率，真正慢的点在哪里？（2023 影石360）","slug":"为什么用户态和内核态之间的切换会影响到线程的执行效率-真正慢的点在哪里-2023-影石360","link":"#为什么用户态和内核态之间的切换会影响到线程的执行效率-真正慢的点在哪里-2023-影石360","children":[]},{"level":3,"title":"CPU和内存之间的三级缓存有了解吗?（2023 影石360）","slug":"cpu和内存之间的三级缓存有了解吗-2023-影石360","link":"#cpu和内存之间的三级缓存有了解吗-2023-影石360","children":[]},{"level":3,"title":"多核CPU下，三级缓存对于每个内核来说是共享的吗？那你知道它的数据存储以及指令存储的方式有了解过吗？（2023 影石360）","slug":"多核cpu下-三级缓存对于每个内核来说是共享的吗-那你知道它的数据存储以及指令存储的方式有了解过吗-2023-影石360","link":"#多核cpu下-三级缓存对于每个内核来说是共享的吗-那你知道它的数据存储以及指令存储的方式有了解过吗-2023-影石360","children":[]},{"level":3,"title":"CPU指令重排序的好处？（2023 影石360）","slug":"cpu指令重排序的好处-2023-影石360","link":"#cpu指令重排序的好处-2023-影石360","children":[]},{"level":3,"title":"linux有几种IO模型（2023 阿里）","slug":"linux有几种io模型-2023-阿里","link":"#linux有几种io模型-2023-阿里","children":[]},{"level":3,"title":"分配给进程的资源有哪些（2023 滴滴）","slug":"分配给进程的资源有哪些-2023-滴滴","link":"#分配给进程的资源有哪些-2023-滴滴","children":[]},{"level":3,"title":"操作系统是怎么做内存管理的？（2023 小红书）","slug":"操作系统是怎么做内存管理的-2023-小红书","link":"#操作系统是怎么做内存管理的-2023-小红书","children":[]},{"level":3,"title":"✨ 怎么向操作系统申请内存空间？（2023 小红书）【2023热门问题】","slug":"✨-怎么向操作系统申请内存空间-2023-小红书-【2023热门问题】","link":"#✨-怎么向操作系统申请内存空间-2023-小红书-【2023热门问题】","children":[]},{"level":3,"title":"有没有更快的申请内存方式（内存分配优化策略）？（2023 滴滴实习）","slug":"有没有更快的申请内存方式-内存分配优化策略-2023-滴滴实习","link":"#有没有更快的申请内存方式-内存分配优化策略-2023-滴滴实习","children":[]},{"level":3,"title":"申请一块大内存和一块小内存的效率是一样的吗？（2023 滴滴实习）","slug":"申请一块大内存和一块小内存的效率是一样的吗-2023-滴滴实习","link":"#申请一块大内存和一块小内存的效率是一样的吗-2023-滴滴实习","children":[]},{"level":3,"title":"jvm分代内存管理和操作系统内存管理的区别（2023 小红书）","slug":"jvm分代内存管理和操作系统内存管理的区别-2023-小红书","link":"#jvm分代内存管理和操作系统内存管理的区别-2023-小红书","children":[]},{"level":3,"title":"fork()读时、共享写时的拷贝是怎样的？（2023 滴滴实习）","slug":"fork-读时、共享写时的拷贝是怎样的-2023-滴滴实习","link":"#fork-读时、共享写时的拷贝是怎样的-2023-滴滴实习","children":[]},{"level":3,"title":"死锁的必要条件是什么？（2023 百度提前批）","slug":"死锁的必要条件是什么-2023-百度提前批","link":"#死锁的必要条件是什么-2023-百度提前批","children":[]},{"level":3,"title":"top命令有哪些参数，说一下（2023 美团）","slug":"top命令有哪些参数-说一下-2023-美团","link":"#top命令有哪些参数-说一下-2023-美团","children":[]},{"level":3,"title":"怎么显示线程？（2023 美团）","slug":"怎么显示线程-2023-美团","link":"#怎么显示线程-2023-美团","children":[]},{"level":3,"title":"虚拟地址是怎么转化到物理地址的？（2023 字节）","slug":"虚拟地址是怎么转化到物理地址的-2023-字节","link":"#虚拟地址是怎么转化到物理地址的-2023-字节","children":[]},{"level":3,"title":"页表是怎么构成的？（2023 字节）","slug":"页表是怎么构成的-2023-字节","link":"#页表是怎么构成的-2023-字节","children":[]},{"level":3,"title":"共享内存是怎么实现的？（2023 字节）","slug":"共享内存是怎么实现的-2023-字节","link":"#共享内存是怎么实现的-2023-字节","children":[]},{"level":3,"title":"操作系统原子操作怎么实现的？（2023 字节）","slug":"操作系统原子操作怎么实现的-2023-字节","link":"#操作系统原子操作怎么实现的-2023-字节","children":[]},{"level":3,"title":"Docker镜像文件是怎样的？（2023 快手）","slug":"docker镜像文件是怎样的-2023-快手","link":"#docker镜像文件是怎样的-2023-快手","children":[]},{"level":3,"title":"时间轮的概念（2023 得物）","slug":"时间轮的概念-2023-得物","link":"#时间轮的概念-2023-得物","children":[]},{"level":3,"title":"linux内存中的 reserver ，commited代表什么意思（2023 快手）","slug":"linux内存中的-reserver-commited代表什么意思-2023-快手","link":"#linux内存中的-reserver-commited代表什么意思-2023-快手","children":[]},{"level":3,"title":"Java线程几种状态？linux进程几种状态？（2023 快手）","slug":"java线程几种状态-linux进程几种状态-2023-快手","link":"#java线程几种状态-linux进程几种状态-2023-快手","children":[]}]},{"level":2,"title":"🧩 数据结构","slug":"🧩-数据结构","link":"#🧩-数据结构","children":[{"level":3,"title":"红黑树说一下，跳表说一下？（2023 美团）","slug":"红黑树说一下-跳表说一下-2023-美团","link":"#红黑树说一下-跳表说一下-2023-美团","children":[]},{"level":3,"title":"平衡二叉树和完全二叉树的概念和区别？（2023 影石360）","slug":"平衡二叉树和完全二叉树的概念和区别-2023-影石360","link":"#平衡二叉树和完全二叉树的概念和区别-2023-影石360","children":[]},{"level":3,"title":"有了解过哈希表吗？哈希表如何解决冲突？（2023 影石360）","slug":"有了解过哈希表吗-哈希表如何解决冲突-2023-影石360","link":"#有了解过哈希表吗-哈希表如何解决冲突-2023-影石360","children":[]},{"level":3,"title":"nogo算法（2023 快手）","slug":"nogo算法-2023-快手","link":"#nogo算法-2023-快手","children":[]}]},{"level":2,"title":"🎨 设计模式","slug":"🎨-设计模式","link":"#🎨-设计模式","children":[{"level":3,"title":"适配器模式、装饰器模式、代理模式有什么区别？（2023 小红书）","slug":"适配器模式、装饰器模式、代理模式有什么区别-2023-小红书","link":"#适配器模式、装饰器模式、代理模式有什么区别-2023-小红书","children":[]}]},{"level":2,"title":"🖼️ 场景题","slug":"🖼️-场景题","link":"#🖼️-场景题","children":[{"level":3,"title":"Java 程序运行了一周，发现老年代内存溢出，分析一下？（2023 美团）","slug":"java-程序运行了一周-发现老年代内存溢出-分析一下-2023-美团","link":"#java-程序运行了一周-发现老年代内存溢出-分析一下-2023-美团","children":[]},{"level":3,"title":"如果核心线程数是 5，已经启动 4 个任务，后面又进来 1 个，是优先复用前面四个任务中的空闲线程还是重新创建新线程（2023  完美世界）","slug":"如果核心线程数是-5-已经启动-4-个任务-后面又进来-1-个-是优先复用前面四个任务中的空闲线程还是重新创建新线程-2023-完美世界","link":"#如果核心线程数是-5-已经启动-4-个任务-后面又进来-1-个-是优先复用前面四个任务中的空闲线程还是重新创建新线程-2023-完美世界","children":[]},{"level":3,"title":"如果大量请求进来你怎么限流（2023 美团）","slug":"如果大量请求进来你怎么限流-2023-美团","link":"#如果大量请求进来你怎么限流-2023-美团","children":[]},{"level":3,"title":"写 MQ 时程序宕机了怎么办？（2023 美团）","slug":"写-mq-时程序宕机了怎么办-2023-美团","link":"#写-mq-时程序宕机了怎么办-2023-美团","children":[]},{"level":3,"title":"秒杀场景下扣减库存太慢了怎么办？（2023 滴滴）","slug":"秒杀场景下扣减库存太慢了怎么办-2023-滴滴","link":"#秒杀场景下扣减库存太慢了怎么办-2023-滴滴","children":[]},{"level":3,"title":"短信登录的短信怎么发送的（2023 滴滴）","slug":"短信登录的短信怎么发送的-2023-滴滴","link":"#短信登录的短信怎么发送的-2023-滴滴","children":[]},{"level":3,"title":"旁路缓存机制具体解决的什么场景（2023 滴滴）","slug":"旁路缓存机制具体解决的什么场景-2023-滴滴","link":"#旁路缓存机制具体解决的什么场景-2023-滴滴","children":[]},{"level":3,"title":"更新缓存失败了怎么办（2023 滴滴）","slug":"更新缓存失败了怎么办-2023-滴滴","link":"#更新缓存失败了怎么办-2023-滴滴","children":[]},{"level":3,"title":"如何设计抢优惠券？（2023 滴滴）","slug":"如何设计抢优惠券-2023-滴滴","link":"#如何设计抢优惠券-2023-滴滴","children":[]},{"level":3,"title":"有一个程序占用大量 cpu，并且一直运行，怎么排查？（2023 阿里实习）","slug":"有一个程序占用大量-cpu-并且一直运行-怎么排查-2023-阿里实习","link":"#有一个程序占用大量-cpu-并且一直运行-怎么排查-2023-阿里实习","children":[]},{"level":3,"title":"两个包含5亿URL的文件，如何找到两个文件的重复URL，内存只有4G（2023 百度提前批）","slug":"两个包含5亿url的文件-如何找到两个文件的重复url-内存只有4g-2023-百度提前批","link":"#两个包含5亿url的文件-如何找到两个文件的重复url-内存只有4g-2023-百度提前批","children":[]},{"level":3,"title":"一瞬间提交140个请求，核心线程数为40，最大线程数为100，请求最大延迟为5ms，平均rt为3ms，如何设计线程池参数降低处理延迟？(2023 快手)","slug":"一瞬间提交140个请求-核心线程数为40-最大线程数为100-请求最大延迟为5ms-平均rt为3ms-如何设计线程池参数降低处理延迟-2023-快手","link":"#一瞬间提交140个请求-核心线程数为40-最大线程数为100-请求最大延迟为5ms-平均rt为3ms-如何设计线程池参数降低处理延迟-2023-快手","children":[]},{"level":3,"title":"一个保存字符串的超大文件，如何判断一个字符串在不在这个文件这种。（2023 快手）","slug":"一个保存字符串的超大文件-如何判断一个字符串在不在这个文件这种。-2023-快手","link":"#一个保存字符串的超大文件-如何判断一个字符串在不在这个文件这种。-2023-快手","children":[]},{"level":3,"title":"假如有成千上百万条数据，内存空间无限大，怎么快速的往HashMap中插入数据？（2023 快手）","slug":"假如有成千上百万条数据-内存空间无限大-怎么快速的往hashmap中插入数据-2023-快手","link":"#假如有成千上百万条数据-内存空间无限大-怎么快速的往hashmap中插入数据-2023-快手","children":[]}]},{"level":2,"title":"🌀 其他","slug":"🌀-其他","link":"#🌀-其他","children":[{"level":3,"title":"讲一讲cms？","slug":"讲一讲cms","link":"#讲一讲cms","children":[]},{"level":3,"title":"DTS 了解过吗？(2023 小红书【数据库dts方向】)","slug":"dts-了解过吗-2023-小红书【数据库dts方向】","link":"#dts-了解过吗-2023-小红书【数据库dts方向】","children":[]},{"level":3,"title":"了解过蚂蚁的 oceanbase 吗？（2023 蚂蚁金服）","slug":"了解过蚂蚁的-oceanbase-吗-2023-蚂蚁金服","link":"#了解过蚂蚁的-oceanbase-吗-2023-蚂蚁金服","children":[]}]},{"level":2,"title":"💦 算法汇总","slug":"💦-算法汇总","link":"#💦-算法汇总","children":[]}],"git":{"createdTime":1725236822000,"updatedTime":1725237732000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":2}]},"readingTime":{"minutes":278.72,"words":83616},"filePathRelative":"Java/eightpart/gaint2023.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{l as data};
