
# 🎨 设计模式

以下的概念介绍都严谨的引用《秒懂设计模式》，这是一本神一般的书，当时我在地铁上一点一点看完，完全没有一丝痛苦感，这本书实在是太奇妙了，真的佩服作者的鬼斧神工！

## 单例（Singleton）

### 概念介绍

> 单例模式（Singleton）是一种非常简单且容易理解的设计模式。顾名思义，单例即单一的实例，确切地讲就是指在某个系统中只存在一个实例，同时提供集中、统一的访问接口，以使系统行为保持协调一致。singleton一词在逻辑学中指“有且仅有一个元素的集合”，这非常恰当地概括了单例的概念，也就是“一个类仅有一个实例”。

### 饿汉式
```java
public class Sun {
    public static final Sun sun = new Sun();

    private Sun() {

    }

    public static Sun getInstance() {
        return sun;
    }
}
```

### 懒汉式
```java
public class Sun {
    public static Sun sun;

    private Sun() {

    }

    public static Sun getInstance() {
        if (sun == null) {
            sun = new Sun();
        }
        return sun;
    }
}
```

让它更加安全的写法：
```java
public class Sun {
    public static Sun sun;

    private Sun() {

    }

    public static synchronized Sun getInstance() {
        if (sun == null) {
            sun = new Sun();
        }
        return sun;
    }
}
```

当然上面的代码，线程还没进入方法内部便不管三七二十一直接加锁排队，会造成线程阻塞。要保证多线程并发下逻辑的正确性：

```java
public class Sun {
    // 关键字volatile对静态变量的修饰则能保证变量值在各线程访问时的同步性、唯一性。
    public volatile static Sun sun;

    private Sun() {

    }

    public static Sun getInstance() {
        if (sun == null) {
            // 使用synchronized关键字对Sun.class进行同步，
            // 可以保证在多线程环境下只有一个线程能够进入synchronized代码块，
            // 从而避免了多个线程同时创建多个实例的情况。
            synchronized (Sun.class) {
                if (sun == null) {
                    sun = new Sun();
                }
            }
        }
        return sun;
    }
}
```

具体来说，当sun为null时，多个线程可能会同时进入synchronized代码块并创建多个实例，从而违反了单例模式的原则。因此，使用synchronized关键字对Sun.class进行同步，可以保证在多线程环境下只有一个线程能够进入synchronized代码块，并创建一个实例，避免了多个线程同时创建多个实例的情况。

## 原型（Prototype Pattern）
### 概念
> 原型模式（Prototype），在制造业中通常是指大批量生产开始之前研发出的概念模型，并基于各种参数指标对其进行检验，如果达到了质量要求，即可参照这个原型进行批量生产。原型模式达到以原型实例创建副本实例的目的即可，并不需要知道其原始类，也就是说，原型模式可以用对象创建对象，而不是用类创建对象，以此达到效率的提升。

### 通过Java的Cloneable实现
在Java中，可以通过实现Cloneable接口并重写Object类中的clone()方法来实现原型模式。

```java
public class EnemyPlane implements Cloneable{

    /**
     * 敌机横坐标
     */
    private int x;
    /**
     * 敌机纵坐标
     */
    private int y = 0;

    public EnemyPlane(int x) {
        this.x = x;
    }

    public int getX() {
        return x;
    }

    public void setX(int x) {
        this.x = x;
    }

    public int getY() {
        return y;
    }

    public void fly() {
        y++;
    }

    @Override
    protected EnemyPlane clone() throws CloneNotSupportedException {
        return (EnemyPlane)super.clone();
    }
}
```

创建一个工厂方法（属实是提前学习了）

```java
public class EnemyPlaneFactory {

    private static EnemyPlane prototype = new EnemyPlane(200);

    public static EnemyPlane getInstance(int x) throws CloneNotSupportedException {
        EnemyPlane clone = prototype.clone();
        clone.setX(x);
        return clone;
    }
}
```

测试

```java
public class Main {
    public static void main(String[] args) {
        try {
            EnemyPlane e1 = EnemyPlaneFactory.getInstance(12);
            EnemyPlane e2 = EnemyPlaneFactory.getInstance(12);
            e1.fly();
            System.out.println(e1.getY());
            System.out.println(e2.getY());
        } catch (CloneNotSupportedException e) {
            throw new RuntimeException(e);
        }
    }
}
// 1
// 0
```

### 自定义
首先，我们需要定义一个原型接口，它包含一个克隆方法，用于复制当前对象并返回一个新的实例。

```java
public interface Prototype {
    Prototype clone();
}
```

接下来，我们可以定义一个具体的原型类，实现Prototype接口并重写克隆方法。在本例中，我们创建一个Person类作为原型，并在克隆方法中进行对象的复制。

```java
public class Person implements Prototype {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Prototype clone() {
        return new Person(name, age);
    }

    // getter and setter methods
}
```

现在我们可以使用原型模式创建新对象了。首先，我们创建一个原型对象并设置其属性。然后，我们可以使用原型对象的克隆方法来创建一个新的对象，而不需要显式地使用构造函数。

```java
public class Main {
    public static void main(String[] args) {
        // create a prototype object
        Prototype prototype = new Person("Tom", 25);

        // clone the prototype to create a new object
        Prototype newObject = prototype.clone();

        // print the properties of the new object
        System.out.println("Name: " + ((Person) newObject).getName());
        System.out.println("Age: " + ((Person) newObject).getAge());
    }
}
```


## 工厂方法（Factory Method）

### 概念
> 制造业是一个国家工业经济发展的重要支柱，而工厂则是其根基所在。程序设计中的工厂类往往是对对象构造、实例化、初始化过程的封装，而工厂方法（Factory Method）则可以升华为一种设计模式，它对工厂制造方法进行接口规范化，以允许子类工厂决定具体制造哪类产品的实例，最终降低系统耦合，使系统的可维护性、可扩展性等得到提升。

### 简单工厂
设计一个抽象类-敌人，其中绘制作为抽象方法：

```java
public abstract class Enemy {

    protected int x;

    protected int y;

    public Enemy(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public abstract void show();
}
```

敌机设计

```java
public class Airplane extends Enemy{

    public Airplane(int x, int y) {
        super(x, y);
    }

    @Override
    public void show() {
        System.out.println("绘制飞机于上层图层，出现坐标：" + x +
                "," + y);
        System.out.println("飞机向玩家发起攻击……");
    }
}
```

坦克设计：
```java
public class Tank extends Enemy{

    public Tank(int x, int y) {
        super(x, y);
    }

    @Override
    public void show() {
        System.out.println("绘制坦克于下层图层，出现坐标：" + x +
                "," + y);
        System.out.println("坦克向玩家发起攻击……");
    }
}
```

终于到了工厂函数了！这里我使用了Java11以上的语法：

```java
public class SimpleFactory {

    private int screenWidth;

    private Random random;

    public SimpleFactory(int screenWidth) {
        this.screenWidth = screenWidth;
        this.random = new Random();
    }

    public Enemy create(String type) {
        int x = random.nextInt(screenWidth);

        return switch (type) {
            case "airplane" -> new Airplane(x, 0); // 实例化飞机
            case "tank" -> new Tank(x, 0); // 实例化坦克
            default -> throw new IllegalArgumentException("Invalid type: " + type);
        };
    }
}
```

最后测试一下：

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("游戏开始");
        SimpleFactory factory = new SimpleFactory(100);
        factory.create("airplane").show();
        factory.create("tank").show();
    }
}
```


```
游戏开始
绘制飞机于上层图层，出现坐标：9,0
飞机向玩家发起攻击……
绘制坦克于下层图层，出现坐标：2,0
坦克向玩家发起攻击……
```

### 工厂标准
先抽象出每个工厂都会有的特征-创造：

```java
public interface Factory {

    Enemy create(int screenWidth);
}

```

好的，开始创造，第一个创造飞机：

```java
public class AirplaneFactory implements Factory {
    @Override
    public Enemy create(int screenWidth) {
        Random random = new Random();
        return new Airplane(random.nextInt(screenWidth), 0);
    }
}
```

第二个创造坦克：

```java
public class TankFactory implements Factory{

    @Override
    public Enemy create(int screenWidth) {
        Random random = new Random();
        return new Tank(random.nextInt(screenWidth), 0);
    }
}
```

创造一个boss：

```java
public class Boss extends Enemy{

    public Boss(int x, int y) {
        super(x, y);
    }

    @Override
    public void show() {
        System.out.println("Boss出现坐标：" + x + "," + y);
        System.out.println("Boss向玩家发起攻击……");
    }
}
```

给boss也来个工厂：

```java
public class BossFactory implements Factory {

    @Override
    public Enemy create(int screenWidth) {
        // 让Boss出现在屏幕中央
        return new Boss(screenWidth / 2, 0);
    }
}
```

最后，就可以实践了，不得不说太符合List的设计模式了！

```java
public class Main {
    public static void main(String[] args) {
        int screenWidth = 100;
        System.out.println("游戏开始");

        Factory factory = new TankFactory();
        for (int i = 0; i < 5; i++) {
            factory.create(screenWidth).show();
        }

        factory = new AirplaneFactory();
        for (int i = 0; i < 5; i++) {
            factory.create(screenWidth).show();
        }

        System.out.println("抵达关底");
        factory = new BossFactory();
        factory.create(screenWidth).show();
    }
}
```


## 抽象工厂（Abstract Factory）

> 抽象工厂模式（Abstract Factory）是对工厂的抽象化，而不只是制造方法。我们知道，为了满足不同用户对产品的多样化需求，工厂不会只局限于生产一类产品，但是系统如果按工厂方法那样为每种产品都增加一个新工厂又会造成工厂泛滥。所以，为了调和这种矛盾，抽象工厂模式提供了另一种思路，将各种产品分门别类，基于此来规划各种工厂的制造接口，最终确立产品制造的顶级规范，使其与具体产品彻底脱钩。抽象工厂是建立在制造复杂产品体系需求基础之上的一种设计模式，在某种意义上，我们可以将抽象工厂模式理解为工厂方法模式的高度集群化升级版。



## 建造者
> 建造者模式（Builder）所构建的对象一定是庞大而复杂的，并且一定是按照既定的制造工序将组件组装起来的，例如计算机、汽车、建筑物等。我们通常将负责构建这些大型对象的工程师称为建造者。建造者模式又称为生成器模式，主要用于对复杂对象的构建、初始化，它可以将多个简单的组件对象按顺序一步步组装起来，最终构建成一个复杂的成品对象。与工厂系列模式不同的是，建造者模式的主要目的在于把烦琐的构建过程从不同对象中抽离出来，使其脱离并独立于产品类与工厂类，最终实现用同一套标准的制造工序能够产出不同的产品。

## 门面
> 门面模式（Facade）可能是最简单的结构型设计模式，它能将多个不同的子系统接口封装起来，并对外提供统一的高层接口，使复杂的子系统变得更易使用。顾名思义，“门”可以理解为建筑物的入口，而“面”则通常指物体的外层表面，比如人脸

## 组合
> 组合模式（Composite）是针对由多个节点对象（部分）组成的树形结构的对象（整体）而发展出的一种结构型设计模式，它能够使客户端在操作整体对象或者其下的每个节点对象时做出统一的响应，保证树形结构对象使用方法的一致性，使客户端不必关注对象的整体或部分，最终达到对象复杂的层次结构与客户端解耦的目的。

## 装饰器
> 装饰指在某物件上装点额外饰品的行为，以使其原本朴素的外表变得更加饱满、华丽，而装饰器（装饰者）就是能够化“腐朽”为神奇的利器。装饰器模式（Decorator）能够在运行时动态地为原始对象增加一些额外的功能，使其变得更加强大。从某种程度上讲，装饰器非常类似于“继承”，它们都是为了增强原始对象的功能，区别在于方式的不同，后者是在编译时（compile-time）静态地通过对原始类的继承完成，而前者则是在程序运行时（run-time）通过对原始对象动态地“包装”完成，是对类实例（对象）“装饰”的结果。

## 适配器
> 适配器模式（Adapter）通常也被称为转换器，顾名思义，它一定是进行适应与匹配工作的物件。当一个对象或类的接口不能匹配用户所期待的接口时，适配器就充当中间转换的角色，以达到兼容用户接口的目的，同时适配器也实现了客户端与接口的解耦，提高了组件的可复用性。

## 享元
> 计算机世界中无穷无尽的可能，其本质都是由1和0两个“元”的组合变化而产生的。元，顾名思义，始也，有本初、根源的意思。“享元”则是共享元件的意思。享元模式的英文flyweight是轻量级的意思，这就意味着享元模式能使程序变得更加轻量化。当系统存在大量的对象，并且这些对象又具有相同的内部状态时，我们就可以用享元模式共享相同的元件对象，以避免对象泛滥造成资源浪费。

## 代理
> 代理模式（Proxy），顾名思义，有代表打理的意思。某些情况下，当客户端不能或不适合直接访问目标业务对象时，业务对象可以通过代理把自己的业务托管起来，使客户端间接地通过代理进行业务访问。如此不但能方便用户使用，还能对客户端的访问进行一定的控制。简单来说，就是代理方以业务对象的名义，代理了它的业务。

## 桥接
> 桥接模式（Bridge）能将抽象与实现分离，使二者可以各自单独变化而不受对方约束，使用时再将它们组合起来，就像架设桥梁一样连接它们的功能，如此降低了抽象与实现这两个可变维度的耦合度，以保证系统的可扩展性。

## 模板方法
> 模板是对多种事物的结构、形式、行为的模式化总结，而模板方法模式（TemplateMethod）则是对一系列类行为（方法）的模式化。我们将总结出来的行为规律固化在基类中，对具体的行为实现则进行抽象化并交给子类去完成，如此便实现了子类对基类模板的套用。模板方法模式非常类似于定制表格，设计者先将所有需要填写的信息头（字段名）抽取出来，再将它们整合在一起成为一种既定格式的表格，最后让填表人按照这个标准化模板去填写自己特有的信息，而不必为书写内容、先后顺序、格式而感到困扰。

## 迭代器
> 迭代，在程序中特指对某集合中各元素逐个取用的行为。迭代器模式（Iterator）提供了一种机制来按顺序访问集合中的各元素，而不需要知道集合内部的构造。换句话讲，迭代器满足了对集合迭代的需求，并向外部提供了一种统一的迭代方式，而不必暴露集合的内部数据结构。

## 责任链
> 责任链是由很多责任节点串联起来的一条任务链条，其中每一个责任节点都是一个业务处理环节。责任链模式（ChainofResponsibility）允许业务请求者将责任链视为一个整体并对其发起请求，而不必关心链条内部具体的业务逻辑与流程走向，也就是说，请求者不必关心具体是哪个节点起了作用，总之业务最终能得到相应的处理。在软件系统中，当一个业务需要经历一系列业务对象去处理时，我们可以把这些业务对象串联起来成为一条业务责任链，请求者可以直接通过访问业务责任链来完成业务的处理，最终实现请求者与响应者的解耦。

## 策略
> 策略，古时也称“计”，指为了达成某个目标而提前策划好的方案。但计划往往不如变化快，当目标突变或者周遭情况不允许实施某方案的时候，我们就得临时变更方案。策略模式（Strategy）强调的是行为的灵活切换，比如一个类的多个方法有着类似的行为接口，可以将它们抽离出来作为一系列策略类，在运行时灵活对接，变更其算法策略，以适应不同的场景。例如我们经常在电影中看到，特工在执行任务时总要准备好几套方案以应对突如其来的变化。实施过程中由于情况突变而导致预案无法继续实施A计划时，马上更换为B计划，以另一种行为方式达成目标。所以说提前策划非常重要，而随机应变的能力更是不可或缺，系统需要时刻确保灵活性、机动性才能立于不败之地。

## 状态
> 状态指事物基于所处的状况、形态表现出的不同的行为特性。状态模式（State）构架出一套完备的事物内部状态转换机制，并将内部状态包裹起来且对外部不可见，使其行为能随其状态的改变而改变，同时简化了事物的复杂的状态变化逻辑。

## 备忘录
> 备忘录用来记录曾经发生过的事情，使回溯历史变得切实可行。备忘录模式（Memento）则可以在不破坏元对象封装性的前提下捕获其在某些时刻的内部状态，并像历史快照一样将它们保留在元对象之外，以备恢复之用。

## 中介
>中介是在事物之间传播信息的中间媒介。中介模式（Mediator）为对象构架出一个互动平台，通过减少对象间的依赖程度以达到解耦的目的。我们的生活中有各种各样的媒介，如婚介所、房产中介、门户网站、电子商务、交换机组网、通信基站、即时通软件等，这些都与人类的生活息息相关，离开它们我们将举步维艰。对媒体来说，虽然它们的作用都一样，但在传递信息的方式上还是有差别的。以传统媒体为例，书刊杂志、报纸、电视、广播等，都是把信息传递给读者，有些是实时的（如电视），有些是延迟的（如报纸），但它们都是以单向的传递方式来传递信息的。而作为新媒体的互联网，不但可以更高效地把信息传递给用户，而且可以反向地获取用户的反馈信息。除此之外，互联网还能作为一个平台，让用户相互进行沟通，这种全终端、多点互通的结构特点更类似于中介模式。

## 命令
>命令是一个对象向另一个或多个对象发送的指令信息。命令的发送方负责下达指令，接收方则根据命令触发相应的行为。作为一种数据（指令信息）驱动的行为型设计模式，命令模式（Command）能够将指令信息封装成一个对象，并将此对象作为参数发送给接收方去执行，以使命令的请求方与执行方解耦，双方只通过传递各种命令过象来完成任务。此外，命令模式还支持命令的批量执行、顺序执行以及命令的反执行等操作。

## 访问者
> 访问者模式（Visitor）主要解决的是数据与算法的耦合问题，尤其是在数据结构比较稳定，而算法多变的情况下。为了不“污染”数据本身，访问者模式会将多种算法独立归类，并在访问数据时根据数据类型自动切换到对应的算法，实现数据的自动响应机制，并且确保算法的自由扩展。众所周知，对数据的封装，我们常常会用到POJO类，它除get和set方法之外不应包含任何业务逻辑，也就是说它只封装了一组数据且不具备任何数据处理能力，最常见的如做OR-Mapping时数据库表所对应的持久化对象（PersistentObject，PO）或转换后的值对象（ValueObject，VO）。因为数据库是相对稳定的，所以这些POJO类亦是如此。反之，业务逻辑却是灵活多变的，所以通常我们不会将业务逻辑封装在这些数据类里面，而是交给专门的业务类（businessservice）（或者算法类）去处理。此时我们可以加入“访问者”模块，并根据不同类型的数据开展不同的业务，最终达到期望的响应结果。

## 观察者
> 察言观色、思考分析一直是人类认识客观事物的重要途径。观察行为通常是一种为了对目标状态变化做出及时响应而采取的监控及调查活动。观察者模式（Observer）可以针对被观察对象与观察者对象之间一对多的依赖关系建立起一种行为自动触发机制，当被观察对象状态发生变化时主动对外发起广播，以通知所有观察者做出响应。观察者往往眼观六路，耳听八方，随时监控着被观察对象的一举一动。作为主动方的观察者对象必须与被观察对象建立依赖关系，以获得其最新动态，例如记者与新闻、摄影师与景物、护士与病人、股民与股市等，以股民盯盘为例对象属性是反映对象状态的重要特征。如图23-1所示，为了能在股市中获利，股民们时刻关注着股市的风吹草动，其正类似于捉摸不定的数据对象状态。为了实现状态即时同步的目的，对象间就得建立合适的依赖关系与通告机制，而不是像股民那样，每个人都必须持续监控股市动态，除此之外不做其他任何事情，所以如何设计对象间的交互方式决定着软件运行效率的高低。

## 解释器
> 解释有拆解、释义的意思，一般可以理解为针对某段文字，按照其语言的特定语法进行解析，再以另一种表达形式表达出来，以达到人们能够理解的目的。类似地，解释器模式（Interpreter）会针对某种语言并基于其语法特征创建一系列的表达式类（包括终极表达式与非终极表达式），利用树结构模式将表达式对象组装起来，最终将其翻译成计算机能够识别并执行的语义树。例如结构型数据库对查询语言SQL的解析，浏览器对HTML语言的解析，以及操作系统Shell对命令的解析。不同的语言有着不同的语法和翻译方式，这都依靠解释器完成。以最常见的Java编程语言为例。当我们以人类能够理解的语言完成了一段程序并命名为Hello.java后，经过调用编译器会生成Hello.class的字节码文件，执行的时候则会加载此文件到内存并进行解释、执行，最终被解释的机器码才是计算机可以理解并执行的指令格式，如图24-1所示。从Java语言到机器语言，这个跨越语言鸿沟的翻译步骤必须由解释器来完成，这便是其存在的意义。
