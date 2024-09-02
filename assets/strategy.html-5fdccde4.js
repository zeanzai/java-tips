import{_ as e,W as i,X as n,$ as l}from"./framework-c8643d23.js";const s={},d=l(`<h2 id="业务场景" tabindex="-1"><a class="header-anchor" href="#业务场景" aria-hidden="true">#</a> 业务场景</h2><p>假设有一个业务场景是，根据不同的文件类型进行不同的解析，则伪代码就会像这样：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(type==&quot;A&quot;){
	//按照A格式解析
}else if(type==&quot;B&quot;){
	//按B格式解析
}else{
	//按照默认格式解析
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样实现的缺点：</p><ol><li>不符合开闭原则（多扩展开放，对修改关闭）。因为修改或增加一个文件类型的解析，都需要修改原来的代码；</li><li>不符合单一职责原则。</li></ol><p>理想的效果是『给程序传入策略的名称以及所需要的参数，让程序自动找到对应的策略类，并自动执行具体策略』。</p><h2 id="策略模式的实现" tabindex="-1"><a class="header-anchor" href="#策略模式的实现" aria-hidden="true">#</a> 策略模式的实现</h2><ol><li>定义策略接口，接口中只定义两个方法，一个是获得具体的策略实现类，一个是公共的业务逻辑方法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public interface IFileStrategy {
    
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@RestController
public class TestController{

    @Autowired
    private StrategyUseService strategyUseService;

    @GetMapping(&quot;/resolveFile&quot;)
    public void resolveFile(FileTypeResolveEnum fileTypeResolveEnum, Object objectParam){
        strategyUseService.resolveFile(fileTypeResolveEnum, objectParam);
    }

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ol><li>如果需要修改类型为A的解析逻辑，只需要修改 AFileResolve ，并不需要修改调用过程；</li><li>如果要增加一个类型为C的解析逻辑，只需要添加一个类来实现 IFileStrategy ，也不需要修改调用过程；</li></ol>`,22),a=[d];function v(r,t){return i(),n("div",null,a)}const u=e(s,[["render",v],["__file","strategy.html.vue"]]);export{u as default};
