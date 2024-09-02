import{_ as l,W as t,X as p,a0 as n,a1 as a,$ as e,Y as i,C as c}from"./framework-713583e3.js";const o={},u=i(`<h2 id="_1-研究方式" tabindex="-1"><a class="header-anchor" href="#_1-研究方式" aria-hidden="true">#</a> 1. 研究方式</h2><ol><li>提出目标： 为了使软件具有更高的可维护性、可读性、可重用性，实现高内聚、低耦合的目标</li><li>评判标准： 设计模式的七大原则</li><li>解决方案： 在实践过程中，不断总结和完善，之后形成固定的模式，并推广使用之</li></ol><h2 id="_2-学习方法" tabindex="-1"><a class="header-anchor" href="#_2-学习方法" aria-hidden="true">#</a> 2. 学习方法</h2><p>根据现实生活中的开发样例所具备的问题，进行改造，改造之后进行总结。</p><p>需要了解相关的Java使用方式。最主要是：<code>上转型与下转型</code>。</p><h2 id="_3-设计模式的原则" tabindex="-1"><a class="header-anchor" href="#_3-设计模式的原则" aria-hidden="true">#</a> 3. 设计模式的原则</h2><ul><li>单一职责原则 <ul><li>定义： 在类级别上，一个类应该只负责一项职责，即对类要进行拆分</li></ul></li><li>接口隔离原则 <ul><li>定义： 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上。</li></ul></li><li>依赖倒转 <ul><li>定义： 抽象不应该依赖于细节，细节应该依赖于抽象。</li><li>依赖传递的三种方法： <ul><li>接口传递</li><li>构造方法传递</li><li>setter方法传递</li></ul></li></ul></li><li>里氏替换原则 <ul><li>定义： 所有能使用父类型对象的地方，必须能透明的使用其子类型对象。即子类型不能重写父类型的方法，可以使用组合、聚合或使用更抽象的基类。</li></ul></li><li>开闭原则 <ul><li>定义： 对扩展开放，对修改关闭。用抽象构建框架，用实现扩展细节。当一个软件发生变化时，尽量针对原有功能进行扩展，而不是对原有功能进行修改。对提供方开放扩展，对使用方关闭修改。</li></ul></li><li>迪米特原则 <ul><li>定义： 一个类对其依赖的类的实现细节应该知道的越少越好。实际操作： 多使用成员变量、方法参数、方法返回值的方式，少使用局部变量的方式。</li></ul></li><li>合成复用原则 <ul><li>定义： 软件过程时尽量使用合成/聚合的方式，而不是使用继承。依赖、组合、聚合的相关实现方式。</li><li>现有一A类，B类对A类进行操作： <ul><li>依赖： B类中有一方法，A是此方法的参数；</li><li>聚合： A是B的成员变量，并且B中有A的setter方法；</li><li>组合： A是B的成员变量，并且A是直接new出来的；</li></ul></li></ul></li><li>七大原则的核心思想 <ul><li>尽可能找出软件中可能产生变化的部分，并把他们独立出来；</li><li>针对接口编程而不是针对实现编程；</li><li>为了交互对象的松耦合的设计而努力；</li></ul></li></ul><h2 id="_4-类与类之间的关系" tabindex="-1"><a class="header-anchor" href="#_4-类与类之间的关系" aria-hidden="true">#</a> 4. 类与类之间的关系</h2><ul><li>依赖关系： 一个类中用到了另外一个类，如果另一个类不存在，编译都无法通过；</li><li>关联关系： 属于依赖关系的特例，具有导向性和多重性，能指明类与类之间的对应关系的数量；</li><li>泛化关系： 继承关系，子类继承父类；</li><li>实现关系： 类实现接口；</li><li>组合关系： 整体与部分的关系，部分可以脱离整体存在；</li><li>聚合关系： 整体与部分的关系，部分不能脱离整体存在；</li></ul><h2 id="_5-单例模式" tabindex="-1"><a class="header-anchor" href="#_5-单例模式" aria-hidden="true">#</a> 5. 单例模式</h2><p>针对要求软件系统中只保留某一个类的一个实例的业务场景。我们常写的普通的软件类，在高并发场景下，会创建多个实例，容易产生线程同步问题。因此需要采用特殊的设计模式完成类的设计。</p><p>如Hibernate中的sessionfactory就要求整个应用中只存在一个实例。此外还有一些应用场景，如日志、线程池、数据源、硬件设备驱动等。</p><h3 id="_5-1-饿汉式-静态常量方式" tabindex="-1"><a class="header-anchor" href="#_5-1-饿汉式-静态常量方式" aria-hidden="true">#</a> 5.1. 饿汉式-静态常量方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>在类加载时完成实例化，避免了线程同步的问题；</li><li>由于类加载机制中类的加载有很多中方式，因此不能确定是否有其他方式导致类加载；</li><li>如果软件过程中没有用到，可能会造成内存浪费；</li><li>可在生产环境下使用；</li></ul></li><li>使用场景 <ul><li>java.lang.Runtime 使用的就是这种单例模式的实现方式；</li></ul></li></ul><h3 id="_5-2-饿汉式-静态代码块方式" tabindex="-1"><a class="header-anchor" href="#_5-2-饿汉式-静态代码块方式" aria-hidden="true">#</a> 5.2. 饿汉式-静态代码块方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>与上面方式类似，只不过是把类实例化过程放到了静态代码块中；</li><li>也可以在生产环境下使用，并且优缺点与上面方式一样；</li></ul></li></ul><h3 id="_5-3-懒汉式-线程不安全-无同步措施方式" tabindex="-1"><a class="header-anchor" href="#_5-3-懒汉式-线程不安全-无同步措施方式" aria-hidden="true">#</a> 5.3. 懒汉式（线程不安全）-无同步措施方式</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>使用了懒加载的方式，但是只能在单线程模式下使用；</li><li>如果一个线程执行到了判断语句，而另一个线程也执行到了判断语句，这时就会产生两个实例；</li><li>不建议在生产环境下使用；</li></ul></li></ul><h3 id="_5-4-懒汉式-线程安全-同步方法" tabindex="-1"><a class="header-anchor" href="#_5-4-懒汉式-线程安全-同步方法" aria-hidden="true">#</a> 5.4. 懒汉式（线程安全）-同步方法</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>在上一种模式的基础上，对使用方法进行优化，添加了 synchronized 关键字；</li><li><code>虽然这种方式是线程安全的，但这种方式的效率太低了</code>，每一个想要获取实例的方法都需要进行同步进行等待，并且get方法实际上只需要执行一次即可，后面的使用可以直接返回即可。</li><li>生产环境下不推荐使用这种方式；</li></ul></li></ul><h3 id="_5-5-懒汉式-线程不安全-同步代码块" tabindex="-1"><a class="header-anchor" href="#_5-5-懒汉式-线程不安全-同步代码块" aria-hidden="true">#</a> 5.5. 懒汉式（线程不安全）-同步代码块</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>虽然使用了同步代码块的方式，但是如果多线程执行 判断条件 时，可能会同步创建出多个实例</li><li>生产环境下依然不建议使用；</li></ul></li></ul><h3 id="_5-6-双重锁校验-dcl" tabindex="-1"><a class="header-anchor" href="#_5-6-双重锁校验-dcl" aria-hidden="true">#</a> 5.6. 双重锁校验（DCL）</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>第一次校验时，如果之前已经完成实例化，就直接返回，不用再次生成，提高效率；</li><li>如果没有第二次校验，在并发情况下，线程a和线程b同时进入同步代码块，假设线程a先执行同步代码块进行，完成实例化，之后线程b获取执行权限后会再次生成一个实例；加上第二次校验后，线程b获取执行权限后判断已经完成实例化，就会直接跳出判断返回实例化对象；</li><li>高并发场景下，线程a和线程b同时执行到 synchronized 处获取的 instance 实例为 null，但是线程a完成实例化后，等待执行权限的线程b能够通过 volatile 关键字立刻获取到 instance 变量的通知，随后 instance 变成非空；</li><li>延迟加载，效率较高，建议在生产环境下使用；</li></ul></li></ul><h3 id="_5-7-静态内部类" tabindex="-1"><a class="header-anchor" href="#_5-7-静态内部类" aria-hidden="true">#</a> 5.7. 静态内部类</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Singleton{
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分析 <ul><li>静态内部类 SingletonHolder 在类初始化时，并不会立即加载内部类，内部类不会加载，就不会生成 INSTANCE 实例，就不会占用内存空间；只有当getInstance()方法第一次被调用时，才会加载内部类，完成初始化；</li><li>jvm保证同一个加载器类型下，一个类型只会初始化一次；</li><li>由于是静态内部类方式完成的实例化，因此没有办法完成参数的传递；</li><li>这种方法不仅能够保证线程安全、也保证了单例的唯一性，同时还延迟了单例的实例化；</li><li>推荐使用</li></ul></li></ul><h3 id="_5-8-枚举类" tabindex="-1"><a class="header-anchor" href="#_5-8-枚举类" aria-hidden="true">#</a> 5.8. 枚举类</h3><p>略。</p><ul><li>分析 <ul><li>能避免多线程同步问题，还能避免反序列化时生成多个实例的问题；</li><li>推荐使用</li></ul></li></ul><h3 id="_5-9-单例模式在jdk中的使用" tabindex="-1"><a class="header-anchor" href="#_5-9-单例模式在jdk中的使用" aria-hidden="true">#</a> 5.9. 单例模式在jdk中的使用</h3><p>java.lang.Runtime 就是经典的饿汉式单例模式；</p><h2 id="_6-建造者模式" tabindex="-1"><a class="header-anchor" href="#_6-建造者模式" aria-hidden="true">#</a> 6. 建造者模式</h2><p>建造者模式也称为生成器模式、构建者模式等。</p><p>简单来说，就是把对象的构造过程与对象的表示过程进行分离，使得相同的构建过程能够实现不同的对象的表示过程。</p><p>换句话来说，就是当一个对象中有很多属性参数，并且有些参数是可选参数时，可以考虑使用建造者模式。</p><h3 id="_6-1-业务场景" tabindex="-1"><a class="header-anchor" href="#_6-1-业务场景" aria-hidden="true">#</a> 6.1. 业务场景</h3><p>例如，一个电脑中有 cpu、内存、usb 插孔、键盘、显示器等部件，但是只有 cpu 和内存是必须的，其它都是可选的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> cpu<span class="token punctuation">;</span><span class="token comment">//必须</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ram<span class="token punctuation">;</span><span class="token comment">//必须</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">;</span><span class="token comment">//可选</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">;</span><span class="token comment">//可选</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> display<span class="token punctuation">;</span><span class="token comment">//可选</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-垃圾实现" tabindex="-1"><a class="header-anchor" href="#_6-2-垃圾实现" aria-hidden="true">#</a> 6.2. 垃圾实现</h3><p>方式一： 折叠构造函数模式（telescoping constructor pattern ）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
     <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span> ram<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">,</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span> ram<span class="token punctuation">,</span> usbCount<span class="token punctuation">,</span> <span class="token string">&quot;罗技键盘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">,</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">,</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span> ram<span class="token punctuation">,</span> usbCount<span class="token punctuation">,</span> keyboard<span class="token punctuation">,</span> <span class="token string">&quot;三星显示器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">,</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">,</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">,</span> <span class="token class-name">String</span> display<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ram <span class="token operator">=</span> ram<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>usbCount <span class="token operator">=</span> usbCount<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyboard <span class="token operator">=</span> keyboard<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> display<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 特点： 有多个构造函数。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方式二： JavaBean 方式</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getCpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> cpu<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setCpu</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getRam</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> ram<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRam</span><span class="token punctuation">(</span><span class="token class-name">String</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ram <span class="token operator">=</span> ram<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> usbCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token comment">// 特点： 每一个属性可以单独设置。</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缺点：</p><ol><li>方式一由于有很多构造函数，因此在使用时很容易搞混，调试时也是跳来跳去；</li><li>方式二容易漏掉一些属性的设置；</li></ol><h3 id="_6-3-建造者模式实现" tabindex="-1"><a class="header-anchor" href="#_6-3-建造者模式实现" aria-hidden="true">#</a> 6.3. 建造者模式实现</h3><h4 id="_6-3-1-略好的实现方式" tabindex="-1"><a class="header-anchor" href="#_6-3-1-略好的实现方式" aria-hidden="true">#</a> 6.3.1. 略好的实现方式</h4><p>这种设计方式是稍微好一些的设计方式，也是传统的 Builder 模式。这种方式是额外添加三个角色的类：</p><ul><li>构建者的抽象类，这个类主要是把构建目标对象的步骤抽象出来，形成一个统一对外的方法；</li><li>构建者的抽象类的实现类，这个实现类根据不同的目标对象，实现具体的构建过程；</li><li>组装类，这个类负责实现具体的组装方法；</li></ul><figure><img src="https://cdn.nlark.com/yuque/0/2024/webp/29433025/1714187200231-28d02ff5-b829-4411-a089-c8506b8e4683.webp#averageHue=%23ececec&amp;clientId=u17efc0c1-b6e1-4&amp;from=paste&amp;id=ub02d6a1d&amp;originHeight=201&amp;originWidth=336&amp;originalType=url&amp;ratio=1&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=ue44b3347-05b1-4b1e-9d88-c2b1f046e10&amp;title=" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Product: 最终要生成的对象，例如 Computer实例。</li><li>Builder： 构建者的抽象基类（有时会使用接口代替）。其定义了构建Product的抽象步骤，其实体类需要实现这些步骤。其会包含一个用来返回最终产品的方法Product getProduct()。</li><li>ConcreteBuilder: Builder的实现类。</li><li>Director: 决定如何构建最终产品的算法. 其会包含一个负责组装的方法void Construct(Builder builder)， 在这个方法中通过调用builder的方法，就可以设置builder，等设置完成后，就可以通过builder的 getProduct() 方法获得最终的产品。</li></ul><h5 id="_6-3-1-1-具体实现步骤" tabindex="-1"><a class="header-anchor" href="#_6-3-1-1-具体实现步骤" aria-hidden="true">#</a> 6.3.1.1. 具体实现步骤：</h5><ol><li>定义目标对象类</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> cpu<span class="token punctuation">;</span><span class="token comment">//必须</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> ram<span class="token punctuation">;</span><span class="token comment">//必须</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">;</span><span class="token comment">//可选</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">;</span><span class="token comment">//可选</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> display<span class="token punctuation">;</span><span class="token comment">//可选</span>

    <span class="token keyword">public</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu <span class="token operator">=</span> cpu<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ram <span class="token operator">=</span> ram<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> usbCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>usbCount <span class="token operator">=</span> usbCount<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token class-name">String</span> keyboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyboard <span class="token operator">=</span> keyboard<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token class-name">String</span> display<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> display<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Computer{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;cpu=&#39;&quot;</span> <span class="token operator">+</span> cpu <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, ram=&#39;&quot;</span> <span class="token operator">+</span> ram <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, usbCount=&quot;</span> <span class="token operator">+</span> usbCount <span class="token operator">+</span>
                <span class="token string">&quot;, keyboard=&#39;&quot;</span> <span class="token operator">+</span> keyboard <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token string">&quot;, display=&#39;&quot;</span> <span class="token operator">+</span> display <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>构建者的抽象基类</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">ComputerBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Computer</span> <span class="token function">getComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>构建者的抽象基类的实现子类</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 苹果电脑</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MacComputerBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">ComputerBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Computer</span> computer<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">MacComputerBuilder</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span> ram<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token string">&quot;苹果键盘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token string">&quot;苹果显示器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span> <span class="token function">getComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 联想电脑</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LenovoComputerBuilder</span> <span class="token keyword">extends</span> <span class="token class-name">ComputerBuilder</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Computer</span> computer<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">LenovoComputerBuilder</span><span class="token punctuation">(</span><span class="token class-name">String</span> cpu<span class="token punctuation">,</span> <span class="token class-name">String</span> ram<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span>cpu<span class="token punctuation">,</span>ram<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token string">&quot;联想键盘&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        computer<span class="token punctuation">.</span><span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token string">&quot;联想显示器&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Computer</span> <span class="token function">getComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> computer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>组装</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ComputerDirector</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">makeComputer</span><span class="token punctuation">(</span><span class="token class-name">ComputerBuilder</span> builder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        builder<span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        builder<span class="token punctuation">.</span><span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>使用</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ComputerDirector</span> director<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ComputerDirector</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//1</span>
    <span class="token class-name">ComputerBuilder</span> builder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MacComputerBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;I5处理器&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;三星125&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//2</span>
    director<span class="token punctuation">.</span><span class="token function">makeComputer</span><span class="token punctuation">(</span>builder<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//3</span>
    <span class="token class-name">Computer</span> macComputer<span class="token operator">=</span>builder<span class="token punctuation">.</span><span class="token function">getComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//4</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;mac computer:&quot;</span><span class="token operator">+</span>macComputer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">ComputerBuilder</span> lenovoBuilder<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">LenovoComputerBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;I7处理器&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;海力士222&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    director<span class="token punctuation">.</span><span class="token function">makeComputer</span><span class="token punctuation">(</span>lenovoBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Computer</span> lenovoComputer<span class="token operator">=</span>lenovoBuilder<span class="token punctuation">.</span><span class="token function">getComputer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;lenovo computer:&quot;</span><span class="token operator">+</span>lenovoComputer<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_6-3-1-2-扩展" tabindex="-1"><a class="header-anchor" href="#_6-3-1-2-扩展" aria-hidden="true">#</a> 6.3.1.2. 扩展</h5><p>如果想要新增一个华为电脑，则只需要定义一个 HuaweiComputerBuilder 类，然后实现 ComputerBuilder 类即可。</p><h4 id="_6-3-2-最佳实现" tabindex="-1"><a class="header-anchor" href="#_6-3-2-最佳实现" aria-hidden="true">#</a> 6.3.2. 最佳实现</h4><p>上面这种方式实际上并不是最佳的实现方式，因为我们发现上面这种方式会有很多的冗余的“辅助类”，这些辅助类事实上并没有简化我们的开发。我们可以设想，如果我们把折叠构造方式和 JavaBean 方式的有点结合起来呢？于是我们的实现就变成了这样：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Computer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> cpu<span class="token punctuation">;</span><span class="token comment">//必须</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ram<span class="token punctuation">;</span><span class="token comment">//必须</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">;</span><span class="token comment">//可选</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">;</span><span class="token comment">//可选</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span> display<span class="token punctuation">;</span><span class="token comment">//可选</span>

    <span class="token keyword">private</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token class-name">Builder</span> builder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token operator">=</span>builder<span class="token punctuation">.</span>cpu<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>ram<span class="token operator">=</span>builder<span class="token punctuation">.</span>ram<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>usbCount<span class="token operator">=</span>builder<span class="token punctuation">.</span>usbCount<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keyboard<span class="token operator">=</span>builder<span class="token punctuation">.</span>keyboard<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>display<span class="token operator">=</span>builder<span class="token punctuation">.</span>display<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Builder</span><span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> cpu<span class="token punctuation">;</span><span class="token comment">//必须</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> ram<span class="token punctuation">;</span><span class="token comment">//必须</span>
        <span class="token keyword">private</span> <span class="token keyword">int</span> usbCount<span class="token punctuation">;</span><span class="token comment">//可选</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> keyboard<span class="token punctuation">;</span><span class="token comment">//可选</span>
        <span class="token keyword">private</span> <span class="token class-name">String</span> display<span class="token punctuation">;</span><span class="token comment">//可选</span>

        <span class="token keyword">public</span> <span class="token class-name">Builder</span><span class="token punctuation">(</span><span class="token class-name">String</span> cup<span class="token punctuation">,</span><span class="token class-name">String</span> ram<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>cpu<span class="token operator">=</span>cup<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>ram<span class="token operator">=</span>ram<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token keyword">int</span> usbCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>usbCount <span class="token operator">=</span> usbCount<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token class-name">String</span> keyboard<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>keyboard <span class="token operator">=</span> keyboard<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">public</span> <span class="token class-name">Builder</span> <span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token class-name">String</span> display<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>display <span class="token operator">=</span> display<span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>        
        <span class="token keyword">public</span> <span class="token class-name">Computer</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Computer</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token comment">//省略getter方法</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用时，我们只需要链式调用即可：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Computer</span> computer<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Computer<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token string">&quot;因特尔&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;三星&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setDisplay</span><span class="token punctuation">(</span><span class="token string">&quot;三星24寸&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setKeyboard</span><span class="token punctuation">(</span><span class="token string">&quot;罗技&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setUsbCount</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析一下这种方式，我们会发现这种方式有以下特点：</p><ol><li>目标类有两个特点： <ol><li>有一个静态内部类，这个静态内部类具有和目标类同样多的参数；</li><li>有一个私有构造方法，参数为静态内部类；</li></ol></li><li>静态内部类也有两个特点： <ol><li>必选参数使用 public 标识的构造函数进行设置，可选参数则使用 setter 方式实现，并且这些 setter 的返回值均为当前对象；</li><li>有一个 build() 方法，这个方法中完成目标类对象的构建，并返回；</li></ol></li></ol><h3 id="_6-4-实际应用" tabindex="-1"><a class="header-anchor" href="#_6-4-实际应用" aria-hidden="true">#</a> 6.4. 实际应用</h3><ul><li>StringBuilder</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">&#39;a&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token number">1.23</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;hhhh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Swagger 中的 Docket(摘要) 的实现；</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">basePackage</span><span class="token punctuation">(</span><span class="token string">&quot;com.curry.springbootswagger.controller&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mybatis 中的 SqlSessionFactoryBuilder 、XMLMapperBuilder 、XMLStatementBuilder</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token class-name">Reader</span> reader<span class="token punctuation">,</span> <span class="token class-name">String</span> environment<span class="token punctuation">,</span> <span class="token class-name">Properties</span> properties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">SqlSessionFactory</span> var5<span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">XMLConfigBuilder</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLConfigBuilder</span><span class="token punctuation">(</span>reader<span class="token punctuation">,</span> environment<span class="token punctuation">,</span> properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        var5 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span>parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> var14<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token class-name">ExceptionFactory</span><span class="token punctuation">.</span><span class="token function">wrapException</span><span class="token punctuation">(</span><span class="token string">&quot;Error building SqlSession.&quot;</span><span class="token punctuation">,</span> var14<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token class-name">ErrorContext</span><span class="token punctuation">.</span><span class="token function">instance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            reader<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> var13<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> var5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-参考" tabindex="-1"><a class="header-anchor" href="#_6-5-参考" aria-hidden="true">#</a> 6.5. 参考</h3>`,86),d={href:"https://zhuanlan.zhihu.com/p/58093669",target:"_blank",rel:"noopener noreferrer"},r={href:"https://zhuanlan.zhihu.com/p/80910560",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/happyone/p/12513098.html",target:"_blank",rel:"noopener noreferrer"},k=i(`<h2 id="_7-模板方法模式" tabindex="-1"><a class="header-anchor" href="#_7-模板方法模式" aria-hidden="true">#</a> 7. 模板方法模式</h2><h3 id="_7-1-业务场景" tabindex="-1"><a class="header-anchor" href="#_7-1-业务场景" aria-hidden="true">#</a> 7.1. 业务场景</h3><p>假如一个业务流程需要几个通用的步骤，只有部分细节不一样外，其他的都一样，这种场景都适合使用模板方法模式。例如，喝红茶，喝绿茶、喝白茶等喝茶过程可以分为： 准备茶杯、挑选茶叶、煮茶。</p><h3 id="_7-2-垃圾实现" tabindex="-1"><a class="header-anchor" href="#_7-2-垃圾实现" aria-hidden="true">#</a> 7.2. 垃圾实现</h3><p>垃圾的实现就是直接针对每一个场景都实现一套代码。</p><h3 id="_7-3-模板方法实现" tabindex="-1"><a class="header-anchor" href="#_7-3-模板方法实现" aria-hidden="true">#</a> 7.3. 模板方法实现</h3><p>垃圾实现中会有很多重复的代码，比如都需要准备茶杯、都需要进行煮茶。</p><ol><li>构造一个抽象类，抽象类中有一个通用的算法骨架，及代表算法步骤的虚方法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
public abstract class DrinkTea{

    // 喝茶
    public final void drink() {
        prepareCup();
        pickTea();
        cookTea();
    }

    // 准备茶杯
    public void prepareCup(){
        System.out.println(&quot;准备了茶杯&quot;)
    } 

    // 挑选茶叶 
    public abstract void pickTea();

    // 煮茶
    public void cookTea(){
        System.out.println(&quot;煮茶&quot;)
    } 
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>根据业务需求继承DrinkTea抽象类，并实现抽象类中的虚方法</li></ol><p>喝红茶：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class DrinkRedTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println(&quot;挑选了红茶&quot;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>喝绿茶：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class DrinkGreenTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println(&quot;挑选了绿茶&quot;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>喝白茶：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class DrinkWhiteTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println(&quot;挑选了白茶&quot;)
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4-使用" tabindex="-1"><a class="header-anchor" href="#_7-4-使用" aria-hidden="true">#</a> 7.4. 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>main(){

    // 喝红茶
    DrinkTea drinkTea = new DrinkRedTea();
    drinkTea.drink();


    // 喝绿茶
    DrinkTea drinkTea = new DrinkGreenTea();
    drinkTea.drink();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-5-其他" tabindex="-1"><a class="header-anchor" href="#_7-5-其他" aria-hidden="true">#</a> 7.5. 其他</h3><ol><li>如果新增一种茶叶，那么就只需要创建一个类，然后继承DrinkTea类并实现pickTea()虚方法即可；</li><li>如果修改茶叶，只需要修改对应的茶叶的挑选方法就行，其他不需要修改。</li></ol><p>Spring中提供了一些template工具类，如RestTemplate、RedisTemplate，有兴趣可以了解一下。</p><h3 id="_7-6-思路扩展" tabindex="-1"><a class="header-anchor" href="#_7-6-思路扩展" aria-hidden="true">#</a> 7.6. 思路扩展</h3><p>上面 DrinkTea 抽象类中：</p><ol><li>提供了一个模板方法： drink()， 这个方法中把业务步骤固定下来，方便客户端调用；</li><li>定义了一个留给子类实现的抽象方法 pickTea()， 这个方法是用来留给子类来实现的，方便扩展；</li><li>实现了 prepareCup() 、cookTea() 的默认方法，因为这些方法是扩展类都有的方法；</li></ol><h2 id="_8-策略模式" tabindex="-1"><a class="header-anchor" href="#_8-策略模式" aria-hidden="true">#</a> 8. 策略模式</h2><h3 id="_8-1-业务场景" tabindex="-1"><a class="header-anchor" href="#_8-1-业务场景" aria-hidden="true">#</a> 8.1. 业务场景</h3><p>假设有一个业务场景是，根据不同的文件类型进行不同的解析，则伪代码就会像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(type==&quot;A&quot;){
	//按照A格式解析
}else if(type==&quot;B&quot;){
	//按B格式解析
}else{
	//按照默认格式解析
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样实现的缺点：</p><ol><li>不符合开闭原则（多扩展开放，对修改关闭）。因为修改或增加一个文件类型的解析，都需要修改原来的代码；</li><li>不符合单一职责原则。</li></ol><p>理想的效果是『给程序传入策略的名称以及所需要的参数，让程序自动找到对应的策略类，并自动执行具体策略』。</p><h3 id="_8-2-策略模式的实现" tabindex="-1"><a class="header-anchor" href="#_8-2-策略模式的实现" aria-hidden="true">#</a> 8.2. 策略模式的实现</h3><ol><li>定义策略接口，接口中只定义两个方法，一个是获得具体的策略实现类，一个是公共的业务逻辑方法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface IFileStrategy {
    
    //属于哪种文件解析类型
    FileTypeResolveEnum gainFileType();
    
    //封装的公用算法（具体的解析方法）
    void resolve(Object objectparam);
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>具体策略实现策略接口，并分别实现接口中的两个方法</li></ol><p>针对A类型文件的处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class AFileResolve implements IFileStrategy {
    
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_A_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info(&quot;A 类型解析文件，参数：{}&quot;,objectparam);
      //A类型解析具体逻辑
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对B类型文件的处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class BFileResolve implements IFileStrategy {
   
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_B_RESOLVE;
    }


    @Override
    public void resolve(Object objectparam) {
      logger.info(&quot;B 类型解析文件，参数：{}&quot;,objectparam);
      //B类型解析具体逻辑
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认文件类型的处理：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class DefaultFileResolve implements IFileStrategy {

    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_DEFAULT_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info(&quot;默认类型解析文件，参数：{}&quot;,objectparam);
      //默认类型解析具体逻辑
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>借助Spring容器，把具体的策略实现类和策略名称放到Map中，并对外提供一个方法：根据传入的策略名称自动执行具体策略</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class StrategyUseService implements ApplicationContextAware{

  
    private Map&lt;FileTypeResolveEnum, IFileStrategy&gt; iFileStrategyMap = new ConcurrentHashMap&lt;&gt;();

    //把不同策略放到map
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        Map&lt;String, IFileStrategy&gt; tmepMap = applicationContext.getBeansOfType(IFileStrategy.class);
        tmepMap.values().forEach(strategyService -&gt; iFileStrategyMap.put(strategyService.gainFileType(), strategyService));
    }

    // 对外提供方法
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam) {
        IFileStrategy iFileStrategy = iFileStrategyMap.get(fileTypeResolveEnum);
        if (iFileStrategy != null) {
            iFileStrategy.resolve(objectParam);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-3-使用" tabindex="-1"><a class="header-anchor" href="#_8-3-使用" aria-hidden="true">#</a> 8.3. 使用</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RestController
public class TestController{

    @Autowired
    private StrategyUseService strategyUseService;

    @GetMapping(&quot;/resolveFile&quot;)
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam){
        strategyUseService.resolveFile(fileTypeResolveEnum, objectParam);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-4-其他" tabindex="-1"><a class="header-anchor" href="#_8-4-其他" aria-hidden="true">#</a> 8.4. 其他</h3><ol><li>如果需要修改类型为A的解析逻辑，只需要修改 AFileResolve ，并不需要修改调用过程；</li><li>如果要增加一个类型为C的解析逻辑，只需要添加一个类来实现 IFileStrategy ，也不需要修改调用过程；</li></ol><h2 id="_9-责任链模式" tabindex="-1"><a class="header-anchor" href="#_9-责任链模式" aria-hidden="true">#</a> 9. 责任链模式</h2><h3 id="_9-1-业务场景" tabindex="-1"><a class="header-anchor" href="#_9-1-业务场景" aria-hidden="true">#</a> 9.1. 业务场景</h3><p>实际业务开发过程中，我们往往需要对请求进行各种校验，如黑白名单校验、参数校验、功能权限校验、数据权限校验等。并且这些校验往往是一个链，如先校验黑名单，如果通过就校验参数，再通过就校验功能权限......也就是校验成功一个就接着校验下一个，其中只要有一个没有通过，下面的也就不需要校验了。</p><p>还记得上学时，每次发试卷的时候，老师都会把试卷递给第一排的同学，然后第一排同学拿一张后把剩下的传递给座位后面的同学，责任链就类似于这种场景。</p><h3 id="_9-2-垃圾实现" tabindex="-1"><a class="header-anchor" href="#_9-2-垃圾实现" aria-hidden="true">#</a> 9.2. 垃圾实现</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(黑白名单校验) {
    if(参数校验) {
        if(功能权限校验){
            if(数据权限校验){
                // 业务逻辑
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-3-责任链模式" tabindex="-1"><a class="header-anchor" href="#_9-3-责任链模式" aria-hidden="true">#</a> 9.3. 责任链模式</h3><ol><li>提供一个抽象类，抽象类中完成对责任链的组装，并提供一个抽象方法让子类自己去实现</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class AbstractHandler {

    //责任链中的下一个对象
    private AbstractHandler nextHandler;

    public void setNextHandler(AbstractHandler nextHandler){
        this.nextHandler = nextHandler;
    }

    public AbstractHandler getNextHandler() {
        return nextHandler;
    }

    // 需要子类实现的虚方法
    abstract void doFilter(Request filterRequest, Response response);

    /**
     * 先执行自身的业务逻辑，之后执行下一个对象的业务逻辑...
     */
    public void filter(Request request, Response response) {
        doFilter(request, response);
        if (getNextHandler() != null) {
            getNextHandler().filter(request, response);
        }
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>责任链中的节点继承上一步的抽象类，并实现各自的业务逻辑</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 参数校验对象
 **/
@Component
@Order(1) //顺序排第1，最先校验
public class CheckParamFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        System.out.println(&quot;非空参数检查&quot;);
    }
}

/**
 *  安全校验对象
 */
@Component
@Order(2) //校验顺序排第2
public class CheckSecurityFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //invoke Security check
        System.out.println(&quot;安全调用校验&quot;);
    }
}
/**
 *  黑名单校验对象
 */
@Component
@Order(3) //校验顺序排第3
public class CheckBlackFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //invoke black list check
        System.out.println(&quot;校验黑名单&quot;);
    }
}

/**
 *  规则拦截对象
 */
@Component
@Order(4) //校验顺序排第4
public class CheckRuleFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        //check rule
        System.out.println(&quot;check rule&quot;);
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>提供一个工具类，把责任链节点对象串起来，并提供调用入口</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component(&quot;ChainPatternDemo&quot;)
public class ChainPatternDemo {

    private AbstractHandler abstractHandler;

    public AbstractHandler getAbstractHandler() {
        return abstractHandler;
    }

    public void setAbstractHandler(AbstractHandler abstractHandler) {
        this.abstractHandler = abstractHandler;
    }

    // 自动注入各个责任链的对象
    @Autowired
    private List&lt;AbstractHandler&gt; abstractHandleList;

    //spring注入后自动执行，责任链的对象连接起来
    @PostConstruct
    public void initializeChainFilter(){

        for(int i = 0;i&lt;abstractHandleList.size();i++){
            if(i == 0){
                abstractHandler = abstractHandleList.get(0);
            }else{
                AbstractHandler currentHander = abstractHandleList.get(i - 1);
                AbstractHandler nextHander = abstractHandleList.get(i);
                currentHander.setNextHandler(nextHander);
            }
        }
    }

    // 直接调用这个方法使用
    public Response exec(Request request, Response response) {
        abstractHandler.filter(request, response);
        return response;
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4-使用" tabindex="-1"><a class="header-anchor" href="#_9-4-使用" aria-hidden="true">#</a> 9.4. 使用</h3><ol><li>直接在业务代码中调用ChainPatternDemo中的exec()方法。</li><li>如果需要修改某个责任节点，只需要修改这个责任节点的doFilter()方法；</li><li>如果需要新增一个责任节点，只需要新建一个类继承AbstractHandler类，并实现虚方法doFilter()；</li></ol>`,62);function m(b,g){const s=c("ExternalLinkIcon");return t(),p("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("秒懂设计模式之建造者模式（Builder pattern）"),e(s)])]),n("li",null,[n("a",r,[a("Java Builder 模式,你搞明白了么？"),e(s)])]),n("li",null,[n("a",v,[a("我要打十个！详解建造者模式（builder pattern）"),e(s)])])]),k])}const y=l(o,[["render",m],["__file","designPattern.html.vue"]]);export{y as default};
