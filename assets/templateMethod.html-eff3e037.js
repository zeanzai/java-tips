import{_ as e,W as i,X as n,$ as d}from"./framework-c8643d23.js";const a={},l=d(`<h2 id="业务场景" tabindex="-1"><a class="header-anchor" href="#业务场景" aria-hidden="true">#</a> 业务场景</h2><p>假如一个业务流程需要几个通用的步骤，只有部分细节不一样外，其他的都一样，这种场景都适合使用模板方法模式。例如，喝红茶，喝绿茶、喝白茶等喝茶过程可以分为： 准备茶杯、挑选茶叶、煮茶。</p><h2 id="垃圾实现" tabindex="-1"><a class="header-anchor" href="#垃圾实现" aria-hidden="true">#</a> 垃圾实现</h2><p>垃圾的实现就是直接针对每一个场景都实现一套代码。</p><h2 id="模板方法实现" tabindex="-1"><a class="header-anchor" href="#模板方法实现" aria-hidden="true">#</a> 模板方法实现</h2><p>垃圾实现中会有很多重复的代码，比如都需要准备茶杯、都需要进行煮茶。</p><ol><li>构造一个抽象类，抽象类中有一个通用的算法骨架，及代表算法步骤的虚方法</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>main(){

    // 喝红茶
    DrinkTea drinkTea = new DrinkRedTea();
    drinkTea.drink();


    // 喝绿茶
    DrinkTea drinkTea = new DrinkGreenTea();
    drinkTea.drink();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ol><li>如果新增一种茶叶，那么就只需要创建一个类，然后继承DrinkTea类并实现pickTea()虚方法即可；</li><li>如果修改茶叶，只需要修改对应的茶叶的挑选方法就行，其他不需要修改。</li></ol><p>Spring中提供了一些template工具类，如RestTemplate、RedisTemplate，有兴趣可以了解一下。</p><h2 id="思路扩展" tabindex="-1"><a class="header-anchor" href="#思路扩展" aria-hidden="true">#</a> 思路扩展</h2><p>上面 DrinkTea 抽象类中：</p><ol><li>提供了一个模板方法： drink()， 这个方法中把业务步骤固定下来，方便客户端调用；</li><li>定义了一个留给子类实现的抽象方法 pickTea()， 这个方法是用来留给子类来实现的，方便扩展；</li><li>实现了 prepareCup() 、cookTea() 的默认方法，因为这些方法是扩展类都有的方法；</li></ol>`,23),s=[l];function r(v,c){return i(),n("div",null,s)}const u=e(a,[["render",r],["__file","templateMethod.html.vue"]]);export{u as default};
