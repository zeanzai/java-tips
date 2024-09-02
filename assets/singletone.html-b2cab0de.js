import{_ as s,W as a,X as d,a0 as n,a1 as e,Z as l,$ as r,C as t}from"./framework-c8643d23.js";const c={},v=r(`<h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><p>针对要求软件系统中只保留某一个类的一个实例的业务场景。我们常写的普通的软件类，在高并发场景下，会创建多个实例，容易产生线程同步问题。因此需要采用特殊的设计模式完成类的设计。</p><p>如Hibernate中的sessionfactory就要求整个应用中只存在一个实例。此外还有一些应用场景，如日志、线程池、数据源、硬件设备驱动等。</p><h3 id="饿汉式-静态常量方式" tabindex="-1"><a class="header-anchor" href="#饿汉式-静态常量方式" aria-hidden="true">#</a> 饿汉式-静态常量方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{

  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 本类内部创建实例对象
  private final static Singleton instance = new Singleton();

  // 3. 对外暴露使用方法
  public static Singleton getInstance(){
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>在类加载时完成实例化，避免了线程同步的问题；</li><li>由于类加载机制中类的加载有很多中方式，因此不能确定是否有其他方式导致类加载；</li><li>如果软件过程中没有用到，可能会造成内存浪费；</li><li>可在生产环境下使用；</li></ul></li><li>使用场景 <ul><li>java.lang.Runtime 使用的就是这种单例模式的实现方式；</li></ul></li></ul><h3 id="饿汉式-静态代码块方式" tabindex="-1"><a class="header-anchor" href="#饿汉式-静态代码块方式" aria-hidden="true">#</a> 饿汉式-静态代码块方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{

  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 静态代码块中进行实例化
  static {
    instance = new Singleton();
  }

  // 4. 对外暴露使用方法
  public static Singleton getInstance(){
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>与上面方式类似，只不过是把类实例化过程放到了静态代码块中；</li><li>也可以在生产环境下使用，并且优缺点与上面方式一样；</li></ul></li></ul><h3 id="懒汉式-线程不安全-无同步措施方式" tabindex="-1"><a class="header-anchor" href="#懒汉式-线程不安全-无同步措施方式" aria-hidden="true">#</a> 懒汉式（线程不安全）-无同步措施方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回
  public static Singleton getInstance(){
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>使用了懒加载的方式，但是只能在单线程模式下使用；</li><li>如果一个线程执行到了判断语句，而另一个线程也执行到了判断语句，这时就会产生两个实例；</li><li>不建议在生产环境下使用；</li></ul></li></ul><h3 id="懒汉式-线程安全-同步方法" tabindex="-1"><a class="header-anchor" href="#懒汉式-线程安全-同步方法" aria-hidden="true">#</a> 懒汉式（线程安全）-同步方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；
  public static synchronized Singleton getInstance(){
    if (instance == null) {
      instance = new Singleton();
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>在上一种模式的基础上，对使用方法进行优化，添加了 synchronized 关键字；</li><li><code>虽然这种方式是线程安全的，但这种方式的效率太低了</code>，每一个想要获取实例的方法都需要进行同步进行等待，并且get方法实际上只需要执行一次即可，后面的使用可以直接返回即可。</li><li>生产环境下不推荐使用这种方式；</li></ul></li></ul><h3 id="懒汉式-线程不安全-同步代码块" tabindex="-1"><a class="header-anchor" href="#懒汉式-线程不安全-同步代码块" aria-hidden="true">#</a> 懒汉式（线程不安全）-同步代码块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 声明
  private static Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；
  public static Singleton getInstance(){
    if (instance == null) {
      synchronized (Singleton.class){
        instance = new Singleton();
      }
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>虽然使用了同步代码块的方式，但是如果多线程执行 判断条件 时，可能会同步创建出多个实例</li><li>生产环境下依然不建议使用；</li></ul></li></ul><h3 id="双重锁校验-dcl" tabindex="-1"><a class="header-anchor" href="#双重锁校验-dcl" aria-hidden="true">#</a> 双重锁校验（DCL）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
  // 1. 构造器私有化，防止外部new
  private Singleton(){}

  // 2. 使用 volatile 关键字来声明
  private static volatile Singleton instance;

  // 3. 对外暴露使用方法，如果对象不存在就生成一个进行返回，并且生成方法属于同步方法，避免线程同步问题；
  public static Singleton getInstance(){
    if (instance == null) {
      synchronized (Singleton.class){
        if (instance == null) {
          instance = new Singleton();
        }
      }
    }
    return instance;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>第一次校验时，如果之前已经完成实例化，就直接返回，不用再次生成，提高效率；</li><li>如果没有第二次校验，在并发情况下，线程a和线程b同时进入同步代码块，假设线程a先执行同步代码块进行，完成实例化，之后线程b获取执行权限后会再次生成一个实例；加上第二次校验后，线程b获取执行权限后判断已经完成实例化，就会直接跳出判断返回实例化对象；</li><li>高并发场景下，线程a和线程b同时执行到 synchronized 处获取的 instance 实例为 null，但是线程a完成实例化后，等待执行权限的线程b能够通过 volatile 关键字立刻获取到 instance 变量的通知，随后 instance 变成非空；</li><li>延迟加载，效率较高，建议在生产环境下使用；</li></ul></li></ul><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
  private Singleton(){}

  private static class SingletonHolder{
    private final static Singleton INSTANCE = new Singleton();
  }

  public static getInstance(){
    return SingletonHolder.INSTANCE;
  }
}

// 使用
Singleton oneSingleton = Singleton.getInstance();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>静态内部类 SingletonHolder 在类初始化时，并不会立即加载内部类，内部类不会加载，就不会生成 INSTANCE 实例，就不会占用内存空间；只有当getInstance()方法第一次被调用时，才会加载内部类，完成初始化；</li><li>jvm保证同一个加载器类型下，一个类型只会初始化一次；</li><li>由于是静态内部类方式完成的实例化，因此没有办法完成参数的传递；</li><li>这种方法不仅能够保证线程安全、也保证了单例的唯一性，同时还延迟了单例的实例化；</li><li>推荐使用</li></ul></li></ul><h3 id="枚举类" tabindex="-1"><a class="header-anchor" href="#枚举类" aria-hidden="true">#</a> 枚举类</h3><p>略。</p><ul><li>分析 <ul><li>能避免多线程同步问题，还能避免反序列化时生成多个实例的问题；</li><li>推荐使用</li></ul></li></ul><h3 id="单例模式在jdk中的使用" tabindex="-1"><a class="header-anchor" href="#单例模式在jdk中的使用" aria-hidden="true">#</a> 单例模式在jdk中的使用</h3><p>java.lang.Runtime 就是经典的饿汉式单例模式；</p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>`,30),u={href:"https://mp.weixin.qq.com/s?__biz=MzIyMjQwMTgyNA==&mid=2247483912&idx=1&sn=94e3c520c96a20346974ea498bc5b03a&chksm=e82f4647df58cf517fecbe048108c47cbdfde6c1688e2c4435ae532cc28d1ea5ba7e74d873ba&cur_album_id=1344000958027710464&scene=189#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},b={href:"http://www.cyc2018.xyz/%E5%85%B6%E5%AE%83/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%20-%20%E7%9B%AE%E5%BD%95.html#%E4%B8%80%E3%80%81%E5%89%8D%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},m={href:"https://mp.weixin.qq.com/s/Ji_mP7pO17ps5Mtku6Bq1Q",target:"_blank",rel:"noopener noreferrer"},o={href:"https://java-design-patterns.com/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://blog.csdn.net/t_chao/article/details/120194731",target:"_blank",rel:"noopener noreferrer"},h={href:"https://blog.csdn.net/a19860903/article/details/49093401",target:"_blank",rel:"noopener noreferrer"};function p(S,x){const i=t("ExternalLinkIcon");return a(),d("div",null,[v,n("ul",null,[n("li",null,[n("a",u,[e("终于有人把 java代理 讲清楚了，万字详解！"),l(i)])]),n("li",null,[n("a",b,[e("设计模式目录"),l(i)])]),n("li",null,[n("a",m,[e("2W 字详解设计模式"),l(i)])]),n("li",null,[n("a",o,[e("Java Design Patterns"),l(i)])]),n("li",null,[n("a",g,[e("短信防刷浅谈对设计模式的应用"),l(i)])]),n("li",null,[n("a",h,[e("手机验证短信设计与代码实现"),l(i)])])])])}const _=s(c,[["render",p],["__file","singletone.html.vue"]]);export{_ as default};
