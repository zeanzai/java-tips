import{_ as e,W as i,X as n,$ as s}from"./framework-c8643d23.js";const l={},d=s(`<h2 id="业务场景" tabindex="-1"><a class="header-anchor" href="#业务场景" aria-hidden="true">#</a> 业务场景</h2><p>实际业务开发过程中，我们往往需要对请求进行各种校验，如黑白名单校验、参数校验、功能权限校验、数据权限校验等。并且这些校验往往是一个链，如先校验黑名单，如果通过就校验参数，再通过就校验功能权限......也就是校验成功一个就接着校验下一个，其中只要有一个没有通过，下面的也就不需要校验了。</p><p>还记得上学时，每次发试卷的时候，老师都会把试卷递给第一排的同学，然后第一排同学拿一张后把剩下的传递给座位后面的同学，责任链就类似于这种场景。</p><h2 id="垃圾实现" tabindex="-1"><a class="header-anchor" href="#垃圾实现" aria-hidden="true">#</a> 垃圾实现</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if(黑白名单校验) {
    if(参数校验) {
        if(功能权限校验){
            if(数据权限校验){
                // 业务逻辑
            }
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h2><ol><li>提供一个抽象类，抽象类中完成对责任链的组装，并提供一个抽象方法让子类自己去实现</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public abstract class AbstractHandler {

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><ol><li>直接在业务代码中调用ChainPatternDemo中的exec()方法。</li><li>如果需要修改某个责任节点，只需要修改这个责任节点的doFilter()方法；</li><li>如果需要新增一个责任节点，只需要新建一个类继承AbstractHandler类，并实现虚方法doFilter()；</li></ol>`,14),r=[d];function a(v,c){return i(),n("div",null,r)}const u=e(l,[["render",a],["__file","chainOfResponsibility.html.vue"]]);export{u as default};
