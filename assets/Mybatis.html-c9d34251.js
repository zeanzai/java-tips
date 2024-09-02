const e=JSON.parse('{"key":"v-fcb0040c","path":"/Java/fm/Mybatis.html","title":"Mybatis","lang":"zh-CN","frontmatter":{"order":3,"title":"Mybatis","category":["数据库"],"description":"MyBatis ALL IN ONE 环境搭建 (#环境搭建); Mybatis配置文件 (#mybatis配置文件); mybatis基础增删改查 (#mybatis基础增删改查); 使用外部properties引用数据库连接 (#使用外部properties引用数据库连接); 使用setttings修改行为 (#使用setttings修改行为); ...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/fm/Mybatis.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"Mybatis"}],["meta",{"property":"og:description","content":"MyBatis ALL IN ONE 环境搭建 (#环境搭建); Mybatis配置文件 (#mybatis配置文件); mybatis基础增删改查 (#mybatis基础增删改查); 使用外部properties引用数据库连接 (#使用外部properties引用数据库连接); 使用setttings修改行为 (#使用setttings修改行为); ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:27:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Mybatis"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:27:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:27:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"环境搭建","slug":"环境搭建","link":"#环境搭建","children":[{"level":3,"title":"Mybatis配置文件","slug":"mybatis配置文件","link":"#mybatis配置文件","children":[]}]},{"level":2,"title":"mybatis基础增删改查","slug":"mybatis基础增删改查","link":"#mybatis基础增删改查","children":[]},{"level":2,"title":"使用外部properties引用数据库连接","slug":"使用外部properties引用数据库连接","link":"#使用外部properties引用数据库连接","children":[]},{"level":2,"title":"使用setttings修改行为","slug":"使用setttings修改行为","link":"#使用setttings修改行为","children":[]},{"level":2,"title":"typeAliases（类型别名）和typeHandlers（类型处理器）","slug":"typealiases-类型别名-和typehandlers-类型处理器","link":"#typealiases-类型别名-和typehandlers-类型处理器","children":[{"level":3,"title":"类型处理器","slug":"类型处理器","link":"#类型处理器","children":[]}]},{"level":2,"title":"【了解】plugins（插件）","slug":"【了解】plugins-插件","link":"#【了解】plugins-插件","children":[]},{"level":2,"title":"环境配置（environments）","slug":"环境配置-environments","link":"#环境配置-environments","children":[{"level":3,"title":"环境","slug":"环境","link":"#环境","children":[]}]},{"level":2,"title":"数据库厂商标识（databaseIdProvider）","slug":"数据库厂商标识-databaseidprovider","link":"#数据库厂商标识-databaseidprovider","children":[]},{"level":2,"title":"映射器（mappers）","slug":"映射器-mappers","link":"#映射器-mappers","children":[{"level":3,"title":"mappers","slug":"mappers","link":"#mappers","children":[]}]},{"level":2,"title":"SQL映射 获取自增ID","slug":"sql映射-获取自增id","link":"#sql映射-获取自增id","children":[{"level":3,"title":"在SQL映射文件内的 mapper 标签下可以写的主要标签有","slug":"在sql映射文件内的-mapper-标签下可以写的主要标签有","link":"#在sql映射文件内的-mapper-标签下可以写的主要标签有","children":[]},{"level":3,"title":"简述：delete update insert select 的属性","slug":"简述-delete-update-insert-select-的属性","link":"#简述-delete-update-insert-select-的属性","children":[]},{"level":3,"title":"获取主键自增属性","slug":"获取主键自增属性","link":"#获取主键自增属性","children":[]},{"level":3,"title":"获取非主键自增属性","slug":"获取非主键自增属性","link":"#获取非主键自增属性","children":[]}]},{"level":2,"title":"SQL映射 传入多个参数","slug":"sql映射-传入多个参数","link":"#sql映射-传入多个参数","children":[{"level":3,"title":"传入Map","slug":"传入map","link":"#传入map","children":[]},{"level":3,"title":"#{}取值属性","slug":"取值属性","link":"#取值属性","children":[]},{"level":3,"title":"两种取值方式：${} #{}","slug":"两种取值方式","link":"#两种取值方式","children":[]}]},{"level":2,"title":"SQL映射 查询集合","slug":"sql映射-查询集合","link":"#sql映射-查询集合","children":[{"level":3,"title":"封装成LIST","slug":"封装成list","link":"#封装成list","children":[]},{"level":3,"title":"封装成MAP","slug":"封装成map","link":"#封装成map","children":[]}]},{"level":2,"title":"SQL映射 自定义resultType","slug":"sql映射-自定义resulttype","link":"#sql映射-自定义resulttype","children":[]},{"level":2,"title":"SQL映射 级联属性查询","slug":"sql映射-级联属性查询","link":"#sql映射-级联属性查询","children":[{"level":3,"title":"序言: 一对一关联","slug":"序言-一对一关联","link":"#序言-一对一关联","children":[]}]},{"level":2,"title":"SQL映射 级联 一对多 多对多","slug":"sql映射-级联-一对多-多对多","link":"#sql映射-级联-一对多-多对多","children":[{"level":3,"title":"一对多","slug":"一对多","link":"#一对多","children":[]}]},{"level":2,"title":"SQL映射 分步查询","slug":"sql映射-分步查询","link":"#sql映射-分步查询","children":[{"level":3,"title":"association分步查询","slug":"association分步查询","link":"#association分步查询","children":[]},{"level":3,"title":"Collection分布查询","slug":"collection分布查询","link":"#collection分布查询","children":[]}]},{"level":2,"title":"SQL映射 延迟加载 按需加载","slug":"sql映射-延迟加载-按需加载","link":"#sql映射-延迟加载-按需加载","children":[]},{"level":2,"title":"动态SQL IF","slug":"动态sql-if","link":"#动态sql-if","children":[{"level":3,"title":"实战动态SQL IF","slug":"实战动态sql-if","link":"#实战动态sql-if","children":[]}]},{"level":2,"title":"动态SQL WHERE TRIM","slug":"动态sql-where-trim","link":"#动态sql-where-trim","children":[{"level":3,"title":"where 元素","slug":"where-元素","link":"#where-元素","children":[]},{"level":3,"title":"trim 标签","slug":"trim-标签","link":"#trim-标签","children":[]}]},{"level":2,"title":"动态SQL FOREACH","slug":"动态sql-foreach","link":"#动态sql-foreach","children":[]},{"level":2,"title":"动态SQL CHOOSE、WHEN、OTHERWISE","slug":"动态sql-choose、when、otherwise","link":"#动态sql-choose、when、otherwise","children":[]},{"level":2,"title":"动态SQL SET","slug":"动态sql-set","link":"#动态sql-set","children":[{"level":3,"title":"动态更新","slug":"动态更新","link":"#动态更新","children":[]}]},{"level":2,"title":"OGNL表达式","slug":"ognl表达式","link":"#ognl表达式","children":[{"level":3,"title":"伪属","slug":"伪属","link":"#伪属","children":[]}]},{"level":2,"title":"动态SQL BIND  INCLUDE","slug":"动态sql-bind-include","link":"#动态sql-bind-include","children":[{"level":3,"title":"bind","slug":"bind","link":"#bind","children":[]},{"level":3,"title":"include","slug":"include","link":"#include","children":[]}]},{"level":2,"title":"一级缓存","slug":"一级缓存","link":"#一级缓存","children":[{"level":3,"title":"一级缓存的失效情况","slug":"一级缓存的失效情况","link":"#一级缓存的失效情况","children":[]}]},{"level":2,"title":"二级缓存","slug":"二级缓存","link":"#二级缓存","children":[]},{"level":2,"title":"缓存的查询顺序和原理","slug":"缓存的查询顺序和原理","link":"#缓存的查询顺序和原理","children":[{"level":3,"title":"缓存查询顺序","slug":"缓存查询顺序","link":"#缓存查询顺序","children":[]},{"level":3,"title":"缓存原理图","slug":"缓存原理图","link":"#缓存原理图","children":[]}]},{"level":2,"title":"缓存的属性","slug":"缓存的属性","link":"#缓存的属性","children":[]}],"git":{"createdTime":1725236822000,"updatedTime":1725236822000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":1}]},"readingTime":{"minutes":28.6,"words":8581},"filePathRelative":"Java/fm/Mybatis.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{e as data};
