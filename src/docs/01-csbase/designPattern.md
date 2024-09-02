---
order: 5
author: zeanzai
title: 设计模式
category:
  - 计算机基础
---


## 1. 研究方式

1.  提出目标： 为了使软件具有更高的可维护性、可读性、可重用性，实现高内聚、低耦合的目标 
2.  评判标准： 设计模式的七大原则 
3.  解决方案： 在实践过程中，不断总结和完善，之后形成固定的模式，并推广使用之 

## 2. 学习方法

根据现实生活中的开发样例所具备的问题，进行改造，改造之后进行总结。

需要了解相关的Java使用方式。最主要是：`上转型与下转型`。

## 3. 设计模式的原则

-  单一职责原则 
   - 定义： 在类级别上，一个类应该只负责一项职责，即对类要进行拆分
-  接口隔离原则 
   - 定义： 客户端不应该依赖它不需要的接口，即一个类对另一个类的依赖应该建立在最小的接口上。
-  依赖倒转 
   - 定义： 抽象不应该依赖于细节，细节应该依赖于抽象。
   - 依赖传递的三种方法： 
      - 接口传递
      - 构造方法传递
      - setter方法传递
-  里氏替换原则 
   - 定义： 所有能使用父类型对象的地方，必须能透明的使用其子类型对象。即子类型不能重写父类型的方法，可以使用组合、聚合或使用更抽象的基类。
-  开闭原则 
   - 定义： 对扩展开放，对修改关闭。用抽象构建框架，用实现扩展细节。当一个软件发生变化时，尽量针对原有功能进行扩展，而不是对原有功能进行修改。对提供方开放扩展，对使用方关闭修改。
-  迪米特原则 
   - 定义： 一个类对其依赖的类的实现细节应该知道的越少越好。实际操作： 多使用成员变量、方法参数、方法返回值的方式，少使用局部变量的方式。
-  合成复用原则 
   - 定义： 软件过程时尽量使用合成/聚合的方式，而不是使用继承。依赖、组合、聚合的相关实现方式。
   - 现有一A类，B类对A类进行操作： 
      - 依赖： B类中有一方法，A是此方法的参数；
      - 聚合： A是B的成员变量，并且B中有A的setter方法；
      - 组合： A是B的成员变量，并且A是直接new出来的；
-  七大原则的核心思想 
   - 尽可能找出软件中可能产生变化的部分，并把他们独立出来；
   - 针对接口编程而不是针对实现编程；
   - 为了交互对象的松耦合的设计而努力；

## 4. 类与类之间的关系

- 依赖关系： 一个类中用到了另外一个类，如果另一个类不存在，编译都无法通过；
- 关联关系： 属于依赖关系的特例，具有导向性和多重性，能指明类与类之间的对应关系的数量；
- 泛化关系： 继承关系，子类继承父类；
- 实现关系： 类实现接口；
- 组合关系： 整体与部分的关系，部分可以脱离整体存在；
- 聚合关系： 整体与部分的关系，部分不能脱离整体存在；



## 5. 单例模式

针对要求软件系统中只保留某一个类的一个实例的业务场景。我们常写的普通的软件类，在高并发场景下，会创建多个实例，容易产生线程同步问题。因此需要采用特殊的设计模式完成类的设计。

如Hibernate中的sessionfactory就要求整个应用中只存在一个实例。此外还有一些应用场景，如日志、线程池、数据源、硬件设备驱动等。

### 5.1. 饿汉式-静态常量方式


```
public class Singleton{

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

```

-  分析 
   - 在类加载时完成实例化，避免了线程同步的问题；
   - 由于类加载机制中类的加载有很多中方式，因此不能确定是否有其他方式导致类加载；
   - 如果软件过程中没有用到，可能会造成内存浪费；
   - 可在生产环境下使用；
-  使用场景 
   - java.lang.Runtime 使用的就是这种单例模式的实现方式；

### 5.2. 饿汉式-静态代码块方式


```
public class Singleton{

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

```

- 分析 
   - 与上面方式类似，只不过是把类实例化过程放到了静态代码块中；
   - 也可以在生产环境下使用，并且优缺点与上面方式一样；

### 5.3. 懒汉式（线程不安全）-无同步措施方式


```
public class Singleton{
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

```

- 分析 
   - 使用了懒加载的方式，但是只能在单线程模式下使用；
   - 如果一个线程执行到了判断语句，而另一个线程也执行到了判断语句，这时就会产生两个实例；
   - 不建议在生产环境下使用；

### 5.4. 懒汉式（线程安全）-同步方法


```
public class Singleton{
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

```

- 分析 
   - 在上一种模式的基础上，对使用方法进行优化，添加了 synchronized 关键字；
   - `虽然这种方式是线程安全的，但这种方式的效率太低了`，每一个想要获取实例的方法都需要进行同步进行等待，并且get方法实际上只需要执行一次即可，后面的使用可以直接返回即可。
   - 生产环境下不推荐使用这种方式；

### 5.5. 懒汉式（线程不安全）-同步代码块


```
public class Singleton{
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

```

- 分析 
   - 虽然使用了同步代码块的方式，但是如果多线程执行 判断条件 时，可能会同步创建出多个实例
   - 生产环境下依然不建议使用；

### 5.6. 双重锁校验（DCL）


```
public class Singleton{
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

```

- 分析 
   - 第一次校验时，如果之前已经完成实例化，就直接返回，不用再次生成，提高效率；
   - 如果没有第二次校验，在并发情况下，线程a和线程b同时进入同步代码块，假设线程a先执行同步代码块进行，完成实例化，之后线程b获取执行权限后会再次生成一个实例；加上第二次校验后，线程b获取执行权限后判断已经完成实例化，就会直接跳出判断返回实例化对象；
   - 高并发场景下，线程a和线程b同时执行到 synchronized 处获取的 instance 实例为 null，但是线程a完成实例化后，等待执行权限的线程b能够通过 volatile 关键字立刻获取到 instance 变量的通知，随后 instance 变成非空；
   - 延迟加载，效率较高，建议在生产环境下使用；

### 5.7. 静态内部类


```
public class Singleton{
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

```

- 分析 
   - 静态内部类 SingletonHolder 在类初始化时，并不会立即加载内部类，内部类不会加载，就不会生成 INSTANCE 实例，就不会占用内存空间；只有当getInstance()方法第一次被调用时，才会加载内部类，完成初始化；
   - jvm保证同一个加载器类型下，一个类型只会初始化一次；
   - 由于是静态内部类方式完成的实例化，因此没有办法完成参数的传递；
   - 这种方法不仅能够保证线程安全、也保证了单例的唯一性，同时还延迟了单例的实例化；
   - 推荐使用

### 5.8. 枚举类

略。

- 分析 
   - 能避免多线程同步问题，还能避免反序列化时生成多个实例的问题；
   - 推荐使用

### 5.9. 单例模式在jdk中的使用

java.lang.Runtime 就是经典的饿汉式单例模式；




## 6. 建造者模式

建造者模式也称为生成器模式、构建者模式等。

简单来说，就是把对象的构造过程与对象的表示过程进行分离，使得相同的构建过程能够实现不同的对象的表示过程。

换句话来说，就是当一个对象中有很多属性参数，并且有些参数是可选参数时，可以考虑使用建造者模式。

### 6.1. 业务场景

例如，一个电脑中有 cpu、内存、usb 插孔、键盘、显示器等部件，但是只有 cpu 和内存是必须的，其它都是可选的。


```java
public class Computer {
    private String cpu;//必须
    private String ram;//必须
    private int usbCount;//可选
    private String keyboard;//可选
    private String display;//可选
}

```

### 6.2. 垃圾实现

方式一： 折叠构造函数模式（telescoping constructor pattern ）

```java
public class Computer {
     ...
    public Computer(String cpu, String ram) {
        this(cpu, ram, 0);
    }
    public Computer(String cpu, String ram, int usbCount) {
        this(cpu, ram, usbCount, "罗技键盘");
    }
    public Computer(String cpu, String ram, int usbCount, String keyboard) {
        this(cpu, ram, usbCount, keyboard, "三星显示器");
    }
    public Computer(String cpu, String ram, int usbCount, String keyboard, String display) {
        this.cpu = cpu;
        this.ram = ram;
        this.usbCount = usbCount;
        this.keyboard = keyboard;
        this.display = display;
    }
}

// 特点： 有多个构造函数。

```


方式二： JavaBean 方式

```java
public class Computer {
    ...

    public String getCpu() {
        return cpu;
    }
    public void setCpu(String cpu) {
        this.cpu = cpu;
    }
    public String getRam() {
        return ram;
    }
    public void setRam(String ram) {
        this.ram = ram;
    }
    public int getUsbCount() {
        return usbCount;
    }
    ...
}

// 特点： 每一个属性可以单独设置。

```

缺点：

1. 方式一由于有很多构造函数，因此在使用时很容易搞混，调试时也是跳来跳去；
2. 方式二容易漏掉一些属性的设置；


### 6.3. 建造者模式实现


#### 6.3.1. 略好的实现方式
这种设计方式是稍微好一些的设计方式，也是传统的 Builder 模式。这种方式是额外添加三个角色的类：

- 构建者的抽象类，这个类主要是把构建目标对象的步骤抽象出来，形成一个统一对外的方法；
- 构建者的抽象类的实现类，这个实现类根据不同的目标对象，实现具体的构建过程；
- 组装类，这个类负责实现具体的组装方法；



![](https://cdn.nlark.com/yuque/0/2024/webp/29433025/1714187200231-28d02ff5-b829-4411-a089-c8506b8e4683.webp#averageHue=%23ececec&clientId=u17efc0c1-b6e1-4&from=paste&id=ub02d6a1d&originHeight=201&originWidth=336&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue44b3347-05b1-4b1e-9d88-c2b1f046e10&title=)

- Product: 最终要生成的对象，例如 Computer实例。
- Builder： 构建者的抽象基类（有时会使用接口代替）。其定义了构建Product的抽象步骤，其实体类需要实现这些步骤。其会包含一个用来返回最终产品的方法Product getProduct()。
- ConcreteBuilder: Builder的实现类。
- Director: 决定如何构建最终产品的算法. 其会包含一个负责组装的方法void Construct(Builder builder)， 在这个方法中通过调用builder的方法，就可以设置builder，等设置完成后，就可以通过builder的 getProduct() 方法获得最终的产品。


##### 6.3.1.1. 具体实现步骤：

1. 定义目标对象类

```java
public class Computer {
    private String cpu;//必须
    private String ram;//必须
    private int usbCount;//可选
    private String keyboard;//可选
    private String display;//可选

    public Computer(String cpu, String ram) {
        this.cpu = cpu;
        this.ram = ram;
    }
    public void setUsbCount(int usbCount) {
        this.usbCount = usbCount;
    }
    public void setKeyboard(String keyboard) {
        this.keyboard = keyboard;
    }
    public void setDisplay(String display) {
        this.display = display;
    }
    @Override
    public String toString() {
        return "Computer{" +
                "cpu='" + cpu + '\'' +
                ", ram='" + ram + '\'' +
                ", usbCount=" + usbCount +
                ", keyboard='" + keyboard + '\'' +
                ", display='" + display + '\'' +
                '}';
    }
}

```

2. 构建者的抽象基类

```java
public abstract class ComputerBuilder {
    public abstract void setUsbCount();
    public abstract void setKeyboard();
    public abstract void setDisplay();

    public abstract Computer getComputer();
}

```

3. 构建者的抽象基类的实现子类

```java
// 苹果电脑
public class MacComputerBuilder extends ComputerBuilder {
    private Computer computer;
    public MacComputerBuilder(String cpu, String ram) {
        computer = new Computer(cpu, ram);
    }
    @Override
    public void setUsbCount() {
        computer.setUsbCount(2);
    }
    @Override
    public void setKeyboard() {
        computer.setKeyboard("苹果键盘");
    }
    @Override
    public void setDisplay() {
        computer.setDisplay("苹果显示器");
    }
    @Override
    public Computer getComputer() {
        return computer;
    }
}

// 联想电脑
public class LenovoComputerBuilder extends ComputerBuilder {
    private Computer computer;
    public LenovoComputerBuilder(String cpu, String ram) {
        computer=new Computer(cpu,ram);
    }
    @Override
    public void setUsbCount() {
        computer.setUsbCount(4);
    }
    @Override
    public void setKeyboard() {
        computer.setKeyboard("联想键盘");
    }
    @Override
    public void setDisplay() {
        computer.setDisplay("联想显示器");
    }
    @Override
    public Computer getComputer() {
        return computer;
    }
}

```

4. 组装

```java
public class ComputerDirector {
    public void makeComputer(ComputerBuilder builder){
        builder.setUsbCount();
        builder.setDisplay();
        builder.setKeyboard();
    }
}

```

5. 使用

```java
public static void main(String[] args) {
    ComputerDirector director=new ComputerDirector();//1
    ComputerBuilder builder=new MacComputerBuilder("I5处理器","三星125");//2
    director.makeComputer(builder);//3
    Computer macComputer=builder.getComputer();//4
    System.out.println("mac computer:"+macComputer.toString());

    ComputerBuilder lenovoBuilder=new LenovoComputerBuilder("I7处理器","海力士222");
    director.makeComputer(lenovoBuilder);
    Computer lenovoComputer=lenovoBuilder.getComputer();
    System.out.println("lenovo computer:"+lenovoComputer.toString());
}

```


##### 6.3.1.2. 扩展
如果想要新增一个华为电脑，则只需要定义一个 HuaweiComputerBuilder 类，然后实现 ComputerBuilder 类即可。


#### 6.3.2. 最佳实现

上面这种方式实际上并不是最佳的实现方式，因为我们发现上面这种方式会有很多的冗余的“辅助类”，这些辅助类事实上并没有简化我们的开发。我们可以设想，如果我们把折叠构造方式和 JavaBean 方式的有点结合起来呢？于是我们的实现就变成了这样：

```java
public class Computer {
    private final String cpu;//必须
    private final String ram;//必须
    private final int usbCount;//可选
    private final String keyboard;//可选
    private final String display;//可选

    private Computer(Builder builder){
        this.cpu=builder.cpu;
        this.ram=builder.ram;
        this.usbCount=builder.usbCount;
        this.keyboard=builder.keyboard;
        this.display=builder.display;
    }
    public static class Builder{
        private String cpu;//必须
        private String ram;//必须
        private int usbCount;//可选
        private String keyboard;//可选
        private String display;//可选

        public Builder(String cup,String ram){
            this.cpu=cup;
            this.ram=ram;
        }

        public Builder setUsbCount(int usbCount) {
            this.usbCount = usbCount;
            return this;
        }
        public Builder setKeyboard(String keyboard) {
            this.keyboard = keyboard;
            return this;
        }
        public Builder setDisplay(String display) {
            this.display = display;
            return this;
        }        
        public Computer build(){
            return new Computer(this);
        }
    }
  //省略getter方法
}

```
使用时，我们只需要链式调用即可：

```java
Computer computer=new Computer.Builder("因特尔","三星")
                .setDisplay("三星24寸")
                .setKeyboard("罗技")
                .setUsbCount(2)
                .build();

```
分析一下这种方式，我们会发现这种方式有以下特点：

1. 目标类有两个特点：
   1. 有一个静态内部类，这个静态内部类具有和目标类同样多的参数；
   2. 有一个私有构造方法，参数为静态内部类；
2. 静态内部类也有两个特点：
   1. 必选参数使用 public 标识的构造函数进行设置，可选参数则使用 setter 方式实现，并且这些 setter 的返回值均为当前对象；
   2. 有一个 build() 方法，这个方法中完成目标类对象的构建，并返回；



### 6.4. 实际应用

- StringBuilder

```java
StringBuilder sb = new StringBuilder();
sb.append(123).append('a')
        .append(1.23)
        .append(true)
        .append("hhhh");

```

- Swagger 中的 Docket(摘要) 的实现；

```java
return new Docket(DocumentationType.SWAGGER_2)
        .apiInfo(apiInfo())
        .select()
        .apis(RequestHandlerSelectors.basePackage("com.curry.springbootswagger.controller"))
        .paths(PathSelectors.any())
        .build();

```

- Mybatis 中的 SqlSessionFactoryBuilder 、XMLMapperBuilder 、XMLStatementBuilder 

```java
public SqlSessionFactory build(Reader reader, String environment, Properties properties) {
    SqlSessionFactory var5;
    try {
        XMLConfigBuilder parser = new XMLConfigBuilder(reader, environment, properties);
        var5 = this.build(parser.parse());
    } catch (Exception var14) {
        throw ExceptionFactory.wrapException("Error building SqlSession.", var14);
    } finally {
        ErrorContext.instance().reset();

        try {
            reader.close();
        } catch (IOException var13) {
        }

    }

    return var5;
}

```



### 6.5. 参考

- [秒懂设计模式之建造者模式（Builder pattern）](https://zhuanlan.zhihu.com/p/58093669)
- [Java Builder 模式,你搞明白了么？](https://zhuanlan.zhihu.com/p/80910560)
- [我要打十个！详解建造者模式（builder pattern）](https://www.cnblogs.com/happyone/p/12513098.html)



## 7. 模板方法模式

### 7.1. 业务场景

假如一个业务流程需要几个通用的步骤，只有部分细节不一样外，其他的都一样，这种场景都适合使用模板方法模式。例如，喝红茶，喝绿茶、喝白茶等喝茶过程可以分为： 准备茶杯、挑选茶叶、煮茶。


### 7.2. 垃圾实现

垃圾的实现就是直接针对每一个场景都实现一套代码。


### 7.3. 模板方法实现

垃圾实现中会有很多重复的代码，比如都需要准备茶杯、都需要进行煮茶。

1. 构造一个抽象类，抽象类中有一个通用的算法骨架，及代表算法步骤的虚方法


```

public abstract class DrinkTea{

    // 喝茶
    public final void drink() {
        prepareCup();
        pickTea();
        cookTea();
    }

    // 准备茶杯
    public void prepareCup(){
        System.out.println("准备了茶杯")
    } 

    // 挑选茶叶 
    public abstract void pickTea();

    // 煮茶
    public void cookTea(){
        System.out.println("煮茶")
    } 
}

```

2. 根据业务需求继承DrinkTea抽象类，并实现抽象类中的虚方法

喝红茶：


```
public class DrinkRedTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println("挑选了红茶")
    }
}

```

喝绿茶：


```
public class DrinkGreenTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println("挑选了绿茶")
    }
}

```

喝白茶：


```
public class DrinkWhiteTea extends DrinkTea{
    @Override
    public void pickTea(){
        System.out.println("挑选了白茶")
    }
}

```


### 7.4. 使用


```
main(){

    // 喝红茶
    DrinkTea drinkTea = new DrinkRedTea();
    drinkTea.drink();


    // 喝绿茶
    DrinkTea drinkTea = new DrinkGreenTea();
    drinkTea.drink();
}

```


### 7.5. 其他

1. 如果新增一种茶叶，那么就只需要创建一个类，然后继承DrinkTea类并实现pickTea()虚方法即可；
2. 如果修改茶叶，只需要修改对应的茶叶的挑选方法就行，其他不需要修改。

Spring中提供了一些template工具类，如RestTemplate、RedisTemplate，有兴趣可以了解一下。



### 7.6. 思路扩展
上面 DrinkTea 抽象类中：

1. 提供了一个模板方法： drink()， 这个方法中把业务步骤固定下来，方便客户端调用；
2. 定义了一个留给子类实现的抽象方法 pickTea()， 这个方法是用来留给子类来实现的，方便扩展；
3. 实现了 prepareCup() 、cookTea() 的默认方法，因为这些方法是扩展类都有的方法；



## 8. 策略模式

### 8.1. 业务场景

假设有一个业务场景是，根据不同的文件类型进行不同的解析，则伪代码就会像这样：


```
if(type=="A"){
	//按照A格式解析
}else if(type=="B"){
	//按B格式解析
}else{
	//按照默认格式解析
}

```

这样实现的缺点：

1. 不符合开闭原则（多扩展开放，对修改关闭）。因为修改或增加一个文件类型的解析，都需要修改原来的代码；
2. 不符合单一职责原则。

理想的效果是『给程序传入策略的名称以及所需要的参数，让程序自动找到对应的策略类，并自动执行具体策略』。


### 8.2. 策略模式的实现

1. 定义策略接口，接口中只定义两个方法，一个是获得具体的策略实现类，一个是公共的业务逻辑方法


```
public interface IFileStrategy {
    
    //属于哪种文件解析类型
    FileTypeResolveEnum gainFileType();
    
    //封装的公用算法（具体的解析方法）
    void resolve(Object objectparam);
}

```

2. 具体策略实现策略接口，并分别实现接口中的两个方法

针对A类型文件的处理：


```
@Component
public class AFileResolve implements IFileStrategy {
    
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_A_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info("A 类型解析文件，参数：{}",objectparam);
      //A类型解析具体逻辑
    }
}

```

针对B类型文件的处理：


```
@Component
public class BFileResolve implements IFileStrategy {
   
    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_B_RESOLVE;
    }


    @Override
    public void resolve(Object objectparam) {
      logger.info("B 类型解析文件，参数：{}",objectparam);
      //B类型解析具体逻辑
    }
}

```

默认文件类型的处理：


```
@Component
public class DefaultFileResolve implements IFileStrategy {

    @Override
    public FileTypeResolveEnum gainFileType() {
        return FileTypeResolveEnum.File_DEFAULT_RESOLVE;
    }

    @Override
    public void resolve(Object objectparam) {
      logger.info("默认类型解析文件，参数：{}",objectparam);
      //默认类型解析具体逻辑
    }
}

```

3. 借助Spring容器，把具体的策略实现类和策略名称放到Map中，并对外提供一个方法：根据传入的策略名称自动执行具体策略


```
@Component
public class StrategyUseService implements ApplicationContextAware{

  
    private Map<FileTypeResolveEnum, IFileStrategy> iFileStrategyMap = new ConcurrentHashMap<>();

    //把不同策略放到map
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        Map<String, IFileStrategy> tmepMap = applicationContext.getBeansOfType(IFileStrategy.class);
        tmepMap.values().forEach(strategyService -> iFileStrategyMap.put(strategyService.gainFileType(), strategyService));
    }

    // 对外提供方法
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam) {
        IFileStrategy iFileStrategy = iFileStrategyMap.get(fileTypeResolveEnum);
        if (iFileStrategy != null) {
            iFileStrategy.resolve(objectParam);
        }
    }
}

```


### 8.3. 使用


```
@RestController
public class TestController{

    @Autowired
    private StrategyUseService strategyUseService;

    @GetMapping("/resolveFile")
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam){
        strategyUseService.resolveFile(fileTypeResolveEnum, objectParam);
    }

}

```


### 8.4. 其他

1. 如果需要修改类型为A的解析逻辑，只需要修改 AFileResolve ，并不需要修改调用过程；
2. 如果要增加一个类型为C的解析逻辑，只需要添加一个类来实现 IFileStrategy ，也不需要修改调用过程；



## 9. 责任链模式


### 9.1. 业务场景

实际业务开发过程中，我们往往需要对请求进行各种校验，如黑白名单校验、参数校验、功能权限校验、数据权限校验等。并且这些校验往往是一个链，如先校验黑名单，如果通过就校验参数，再通过就校验功能权限......也就是校验成功一个就接着校验下一个，其中只要有一个没有通过，下面的也就不需要校验了。

还记得上学时，每次发试卷的时候，老师都会把试卷递给第一排的同学，然后第一排同学拿一张后把剩下的传递给座位后面的同学，责任链就类似于这种场景。


### 9.2. 垃圾实现


```
if(黑白名单校验) {
    if(参数校验) {
        if(功能权限校验){
            if(数据权限校验){
                // 业务逻辑
            }
        }
    }
}

```


### 9.3. 责任链模式

1. 提供一个抽象类，抽象类中完成对责任链的组装，并提供一个抽象方法让子类自己去实现


```
public abstract class AbstractHandler {

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

```

2. 责任链中的节点继承上一步的抽象类，并实现各自的业务逻辑


```
/**
 * 参数校验对象
 **/
@Component
@Order(1) //顺序排第1，最先校验
public class CheckParamFilterObject extends AbstractHandler {

    @Override
    public void doFilter(Request request, Response response) {
        System.out.println("非空参数检查");
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
        System.out.println("安全调用校验");
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
        System.out.println("校验黑名单");
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
        System.out.println("check rule");
    }
}

```

3. 提供一个工具类，把责任链节点对象串起来，并提供调用入口


```
@Component("ChainPatternDemo")
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
    private List<AbstractHandler> abstractHandleList;

    //spring注入后自动执行，责任链的对象连接起来
    @PostConstruct
    public void initializeChainFilter(){

        for(int i = 0;i<abstractHandleList.size();i++){
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

```


### 9.4. 使用

1. 直接在业务代码中调用ChainPatternDemo中的exec()方法。
2. 如果需要修改某个责任节点，只需要修改这个责任节点的doFilter()方法；
3. 如果需要新增一个责任节点，只需要新建一个类继承AbstractHandler类，并实现虚方法doFilter()；


