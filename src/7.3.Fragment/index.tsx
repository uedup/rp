import React, { Fragment, useState } from "react";

export default function Demo() {
  const html = "<span style='color:red'>html值</span>";
  const html2 = `<div id="content_views" class="htmledit_views">
  <blockquote style="margin:0 0 0 40px;border:none;padding:0px;">
<p>在<a href="https://so.csdn.net/so/search?q=react&amp;spm=1001.2101.3001.7020" target="_blank" class="hl hl-1" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.7020&quot;,&quot;dest&quot;:&quot;https://so.csdn.net/so/search?q=react&amp;spm=1001.2101.3001.7020&quot;,&quot;extra&quot;:&quot;{\&quot;searchword\&quot;:\&quot;react\&quot;}&quot;}" data-tit="react" data-pretit="react">react</a>中，通过富文本编辑器进行操作后的内容，会保留原有的标签样式，并不能正确展示。</p>
</blockquote>
<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">
<p>在显示时，将内容写入__html对象中即可。具体如下：</p>
<p></p>
<pre data-index="0"><code class="language-html hljs language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span> = <span class="hljs-string">{{</span> <span class="hljs-attr">__html:</span> <span class="hljs-attr">checkMessages.details</span> }} /&gt;</span></code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
<p>如果是直接调用接口中的值，则是以上的写法，如果是单纯的显示固定的内容，用如下的写法：</p>
<pre data-index="1"><code class="language-html hljs language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{</span> <span class="hljs-attr">__html:</span> '&lt;<span class="hljs-attr">div</span>&gt;</span>123<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>' }} /&gt;</code><div class="hljs-button {2}" data-title="复制" onclick="hljs.copyCode(event)"></div></pre>
</blockquote>
<blockquote style="margin:0 0 0 40px;border:none;padding:0px;">
<p>原理：</p>
<p>1.dangerouslySetInnerHTMl 是React标签的一个属性，类似于angular的ng-bind；</p>
<p>2.有2个{{}}，第一{}代表jsx语法开始，第二个是代表dangerouslySetInnerHTML接收的是一个对象键值对;</p>
<p>3.既可以插入DOM，又可以插入字符串；</p>
<p>4.不合时宜的使用 innerHTML 可能会导致 cross-site scripting (XSS) 攻击。 净化用户的输入来显示的时候，经常会出现错误，不合适的净化也是导致网页攻击的原因之一。dangerouslySetInnerHTML 这个 prop 的命名是故意这么设计的，以此来警告，它的 prop 值（ 一个对象而不是字符串 ）应该被用来表明净化后的数据。</p>
<p>相关资料：</p>
<p>http://wiki.jikexueyuan.com/project/react/dangerously.html</p>
<p><br></p>
</blockquote>
</div>`;
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
      <p dangerouslySetInnerHTML={{ __html: html2 }}></p>
    </>
  );
}
