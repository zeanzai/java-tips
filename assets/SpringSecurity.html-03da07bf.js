const e=JSON.parse('{"key":"v-1ab616f8","path":"/Java/fm/SpringSecurity.html","title":"SpringSecurity","lang":"zh-CN","frontmatter":{"order":6,"title":"SpringSecurity","category":["Spring"],"description":"Spring Security 基础 (#spring-security-基础); Spring Security 对比 Shiro (#spring-security-对比-shiro); Spring Security 核心 (#spring-security-核心); 对比shiro (#对比shiro); Http Basic认证模式 (#ht...","head":[["meta",{"property":"og:url","content":"https://zeanzai.github.io/java-tips/java-tips/Java/fm/SpringSecurity.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"SpringSecurity"}],["meta",{"property":"og:description","content":"Spring Security 基础 (#spring-security-基础); Spring Security 对比 Shiro (#spring-security-对比-shiro); Spring Security 核心 (#spring-security-核心); 对比shiro (#对比shiro); Http Basic认证模式 (#ht..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://zeanzai.github.io/java-tips/java-tips/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T00:27:02.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringSecurity"}],["meta",{"property":"article:author","content":"zeanzai"}],["meta",{"property":"article:modified_time","content":"2024-09-02T00:27:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringSecurity\\",\\"image\\":[\\"https://zeanzai.github.io/java-tips/java-tips/\\"],\\"dateModified\\":\\"2024-09-02T00:27:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zeanzai\\",\\"url\\":\\"https://github.com/zeanzai\\"}]}"]]},"headers":[{"level":2,"title":"Spring Security 对比 Shiro","slug":"spring-security-对比-shiro","link":"#spring-security-对比-shiro","children":[{"level":3,"title":"Spring Security 核心","slug":"spring-security-核心","link":"#spring-security-核心","children":[]},{"level":3,"title":"对比shiro","slug":"对比shiro","link":"#对比shiro","children":[]}]},{"level":2,"title":"Http Basic认证模式","slug":"http-basic认证模式","link":"#http-basic认证模式","children":[{"level":3,"title":"Http Basic不够安全的原因","slug":"http-basic不够安全的原因","link":"#http-basic不够安全的原因","children":[]}]},{"level":2,"title":"Hash算法","slug":"hash算法","link":"#hash算法","children":[{"level":3,"title":"PasswordEncoder 接口","slug":"passwordencoder-接口","link":"#passwordencoder-接口","children":[]}]},{"level":2,"title":"formLogin登录模式","slug":"formlogin登录模式","link":"#formlogin登录模式","children":[{"level":3,"title":"认证初体验","slug":"认证初体验","link":"#认证初体验","children":[]},{"level":3,"title":"源码解析","slug":"源码解析","link":"#源码解析","children":[]},{"level":3,"title":"自定义验证登录处理【重要】","slug":"自定义验证登录处理【重要】","link":"#自定义验证登录处理【重要】","children":[]},{"level":3,"title":"Session会话安全管理器","slug":"session会话安全管理器","link":"#session会话安全管理器","children":[]}]},{"level":2,"title":"RBAC权限模型","slug":"rbac权限模型","link":"#rbac权限模型","children":[]},{"level":2,"title":"动态加载RBAC数据","slug":"动态加载rbac数据","link":"#动态加载rbac数据","children":[{"level":3,"title":"实现Dao层接口和Service接口","slug":"实现dao层接口和service接口","link":"#实现dao层接口和service接口","children":[]},{"level":3,"title":"资源鉴权规则","slug":"资源鉴权规则","link":"#资源鉴权规则","children":[]}]},{"level":2,"title":"SPEL权限表达式","slug":"spel权限表达式","link":"#spel权限表达式","children":[{"level":3,"title":"常用权限表达式","slug":"常用权限表达式","link":"#常用权限表达式","children":[]},{"level":3,"title":"Method表达式安全控制","slug":"method表达式安全控制","link":"#method表达式安全控制","children":[]}]},{"level":2,"title":"RememberMe 记住我","slug":"rememberme-记住我","link":"#rememberme-记住我","children":[{"level":3,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[]},{"level":3,"title":"自定义配置","slug":"自定义配置","link":"#自定义配置","children":[]},{"level":3,"title":"数据库实现","slug":"数据库实现","link":"#数据库实现","children":[]}]},{"level":2,"title":"退出登录","slug":"退出登录","link":"#退出登录","children":[{"level":3,"title":"核心配置","slug":"核心配置","link":"#核心配置","children":[]},{"level":3,"title":"自定义配置","slug":"自定义配置-1","link":"#自定义配置-1","children":[]},{"level":3,"title":"配置LogoutSuccessHandler","slug":"配置logoutsuccesshandler","link":"#配置logoutsuccesshandler","children":[]}]},{"level":2,"title":"图片验证","slug":"图片验证","link":"#图片验证","children":[{"level":3,"title":"引入Kaptcha","slug":"引入kaptcha","link":"#引入kaptcha","children":[]},{"level":3,"title":"引入配置","slug":"引入配置","link":"#引入配置","children":[]},{"level":3,"title":"验证码在Session中的生成","slug":"验证码在session中的生成","link":"#验证码在session中的生成","children":[]}]},{"level":2,"title":"前后端分离的应用","slug":"前后端分离的应用","link":"#前后端分离的应用","children":[{"level":3,"title":"JWT工具类","slug":"jwt工具类","link":"#jwt工具类","children":[]},{"level":3,"title":"配置CORS解决跨站访问","slug":"配置cors解决跨站访问","link":"#配置cors解决跨站访问","children":[]}]}],"git":{"createdTime":1725236822000,"updatedTime":1725236822000,"contributors":[{"name":"zeanzai","email":"zeanzai.me@gmail.com","commits":1}]},"readingTime":{"minutes":30.86,"words":9258},"filePathRelative":"Java/fm/SpringSecurity.md","localizedDate":"2024年9月2日","autoDesc":true,"excerpt":""}');export{e as data};
