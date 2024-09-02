---
author: zeanzai
title: 建造者模式
category:
  - 设计模式
---




建造者模式也称为生成器模式、构建者模式等。

简单来说，就是把对象的构造过程与对象的表示过程进行分离，使得相同的构建过程能够实现不同的对象的表示过程。

换句话来说，就是当一个对象中有很多属性参数，并且有些参数是可选参数时，可以考虑使用建造者模式。

## 业务场景

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

## 垃圾实现

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


## 建造者模式实现


### 略好的实现方式
这种设计方式是稍微好一些的设计方式，也是传统的 Builder 模式。这种方式是额外添加三个角色的类：

- 构建者的抽象类，这个类主要是把构建目标对象的步骤抽象出来，形成一个统一对外的方法；
- 构建者的抽象类的实现类，这个实现类根据不同的目标对象，实现具体的构建过程；
- 组装类，这个类负责实现具体的组装方法；



![](https://cdn.nlark.com/yuque/0/2024/webp/29433025/1714187200231-28d02ff5-b829-4411-a089-c8506b8e4683.webp#averageHue=%23ececec&clientId=u17efc0c1-b6e1-4&from=paste&id=ub02d6a1d&originHeight=201&originWidth=336&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue44b3347-05b1-4b1e-9d88-c2b1f046e10&title=)

- Product: 最终要生成的对象，例如 Computer实例。
- Builder： 构建者的抽象基类（有时会使用接口代替）。其定义了构建Product的抽象步骤，其实体类需要实现这些步骤。其会包含一个用来返回最终产品的方法Product getProduct()。
- ConcreteBuilder: Builder的实现类。
- Director: 决定如何构建最终产品的算法. 其会包含一个负责组装的方法void Construct(Builder builder)， 在这个方法中通过调用builder的方法，就可以设置builder，等设置完成后，就可以通过builder的 getProduct() 方法获得最终的产品。


#### 具体实现步骤：

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


#### 扩展
如果想要新增一个华为电脑，则只需要定义一个 HuaweiComputerBuilder 类，然后实现 ComputerBuilder 类即可。


### 最佳实现

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



## 实际应用

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



## 参考

- [秒懂设计模式之建造者模式（Builder pattern）](https://zhuanlan.zhihu.com/p/58093669)
- [Java Builder 模式,你搞明白了么？](https://zhuanlan.zhihu.com/p/80910560)
- [我要打十个！详解建造者模式（builder pattern）](https://www.cnblogs.com/happyone/p/12513098.html)



