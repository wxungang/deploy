import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c as d,a as n,b as s,d as e,e as i}from"./app-70eb2c9f.js";const c={},p=i(`<h1 id="frp" tabindex="-1"><a class="header-anchor" href="#frp" aria-hidden="true">#</a> frp</h1><blockquote><p>已备案的域名1个</p><p>带公网ip的云服务器1台</p><p>本地pc一个(待穿透)</p><p>frp-0.30.0 的frps (github自行下载)</p><p>nginx</p></blockquote><h2 id="云服务器上安装frp" tabindex="-1"><a class="header-anchor" href="#云服务器上安装frp" aria-hidden="true">#</a> 云服务器上安装Frp</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#下载</span>
<span class="token function">wget</span> https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz 

<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> frp_0.20.0_linux_amd64.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置" aria-hidden="true">#</a> 服务端配置</h3><blockquote><p>修改frps(frp server 服务端)</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>common<span class="token punctuation">]</span>

<span class="token comment"># 绑定端口</span>

bind_port <span class="token operator">=</span> <span class="token number">7000</span>

<span class="token comment"># frpc Client客户端连接Frps服务端时的token 为了安全 建议添加</span>

token <span class="token operator">=</span> admin

<span class="token comment"># web端管理控制面板相关配置</span>

dashboard_port <span class="token operator">=</span> <span class="token number">7500</span>
dashboard_user <span class="token operator">=</span> admin
dashboard_pwd <span class="token operator">=</span> admin

<span class="token comment"># 需要穿透http的统一访问端口(http类型的内网穿透，必须设置vhost_http_port，并且所有的http类型的客户端都将通过同一个vhost_http_port访问。)</span>

vhost_http_port <span class="token operator">=</span> <span class="token number">3000</span>

<span class="token comment"># https的访问端口(如果需要的话)</span>

<span class="token comment"># vhost_https_port = 7443</span>

<span class="token comment"># 二级frp域名 三级sub子域名做saas</span>

<span class="token comment"># 如果 frps 配置了 subdomain_host，则frpc中想自定义custom_domains 中不能是属于 subdomain_host 的子域名或者泛域名</span>

subdomain_host <span class="token operator">=</span> frp.daidaibenben.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dns域名解析配置" tabindex="-1"><a class="header-anchor" href="#dns域名解析配置" aria-hidden="true">#</a> DNS域名解析配置</h2>`,8),o=n("p",null,"需要解析共两条A记录：",-1),v={href:"http://frp.xxx.com",target:"_blank",rel:"noopener noreferrer"},u=i(`<p>例:</p><table><thead><tr><th>记录值</th><th>记录类型(A类型)</th><th>ip地址</th></tr></thead><tbody><tr><td>frp</td><td>A</td><td>ip地址</td></tr><tr><td>*.frp</td><td>A</td><td>ip地址</td></tr></tbody></table><h2 id="配置frpc-client客户端" tabindex="-1"><a class="header-anchor" href="#配置frpc-client客户端" aria-hidden="true">#</a> 配置Frpc Client客户端</h2><blockquote><p>修改frpc.ini</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># frps公共服务端配置</span>

<span class="token punctuation">[</span>common<span class="token punctuation">]</span>

<span class="token comment"># 公网ip,frps所在的服务器的ip</span>

server_addr <span class="token operator">=</span> xxx.xxx.xxx.xxx

<span class="token comment"># frps服务端连接端口</span>

server_port <span class="token operator">=</span> <span class="token number">7000</span>

<span class="token comment"># 连接token,与frps中的token一致</span>

token <span class="token operator">=</span> admin

<span class="token comment"># 定义第一个转发</span>

<span class="token punctuation">[</span>web01<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> http

<span class="token comment"># 本地(内网)服务的端口</span>

local_port <span class="token operator">=</span> <span class="token number">8001</span>

<span class="token comment"># 与frps中的subdomain_host连接起来就是pc1.frp.xxx.com</span>

subdomain <span class="token operator">=</span> pc1

<span class="token comment"># 定义第二个转发</span>

<span class="token punctuation">[</span>web02<span class="token punctuation">]</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> http

<span class="token comment"># 本地(内网)服务的端口</span>

local_port <span class="token operator">=</span> <span class="token number">8002</span>

<span class="token comment"># 与frps中的subdomain_host连接起来完整访问地址就是pc.frp.xxx.com</span>

subdomain <span class="token operator">=</span> pc


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2种访问方式" tabindex="-1"><a class="header-anchor" href="#_2种访问方式" aria-hidden="true">#</a> 2种访问方式</h3>`,6),m=n("p",null,"一种纯域名,nginx做好做二级域名三级泛域名及反向代理,直接访问",-1),b={href:"http://pc1.frp.xxx.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://pc2.frp.xxx.com/",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"一种sub域名+穿透端口号(vhost_http_port),nginx无需做二级域名三级泛域名配置",-1),x={href:"http://pc1.frp.xxx.com:7001/",target:"_blank",rel:"noopener noreferrer"},_={href:"http://pc2.frp.xxx.com:7001/",target:"_blank",rel:"noopener noreferrer"},f=i(`<h2 id="配置nginx-实现第一种访问方式" tabindex="-1"><a class="header-anchor" href="#配置nginx-实现第一种访问方式" aria-hidden="true">#</a> 配置nginx,实现第一种访问方式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 3000端口 frp服务的子域名配置</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    <span class="token comment"># 域名配置 记得一定要加上*.frp.xxx.com +  frp.xxx.com这个，只加frp.xxx.com是不行的,无法支持泛域名做sub模式</span>
server_name*.frp.daidaibenben.top frp.daidaibenben.top<span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.frp.log  main<span class="token punctuation">;</span>

    <span class="token comment">#  这个Host的header一定要加，不然转发后frp拿不到通过哪个域名访问的，导致转发失败</span>
    proxy_set_header   Host             <span class="token variable">$host</span><span class="token punctuation">;</span>
    proxy_set_header   X-Real-IP        <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header   X-Forwarded-For  <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
   
    location / <span class="token punctuation">{</span>
        proxy_pass     http://127.0.0.1:3000<span class="token punctuation">;</span>
    
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># dashboard服务</span>

server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  db.frp.daidaibenben.top<span class="token punctuation">;</span>

    access_log  /var/log/nginx/access.frp.log  main<span class="token punctuation">;</span>
    proxy_set_header  X-Real-IP  <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    
    location / <span class="token punctuation">{</span>
        proxy_pass      http://127.0.0.1:7500<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function g(y,w){const a=t("ExternalLinkIcon");return r(),d("div",null,[p,n("blockquote",null,[o,n("p",null,[n("a",v,[s("frp.xxx.com"),e(a)]),s(" 和 *.frp.xxx.com")])]),u,n("ol",null,[n("li",null,[m,n("p",null,[n("a",b,[s("http://pc1.frp.xxx.com"),e(a)])]),n("p",null,[n("a",h,[s("http://pc2.frp.xxx.com"),e(a)])])]),n("li",null,[k,n("p",null,[n("a",x,[s("http://pc1.frp.xxx.com:7001"),e(a)])]),n("p",null,[n("a",_,[s("http://pc2.frp.xxx.com:7001"),e(a)])])])]),f])}const N=l(c,[["render",g],["__file","index.html.vue"]]);export{N as default};
