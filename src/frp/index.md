---
date: 2023-05-31
icon: creative
category:
  - frp
tag:
  - 内网穿透
  - nginx
---

# frp
>
> 已备案的域名1个
>
> 带公网ip的云服务器1台
>
> 本地pc一个(待穿透)
>
> frp-0.30.0 的frps (github自行下载)
>
> nginx

## 云服务器上安装Frp

```bash
#下载
wget https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz 

#解压
tar -zxvf frp_0.20.0_linux_amd64.tar.gz
```

### 服务端配置
>
> 修改frps(frp server 服务端)

```bash

[common]

# 绑定端口

bind_port = 7000

# frpc Client客户端连接Frps服务端时的token 为了安全 建议添加

token = admin

# web端管理控制面板相关配置

dashboard_port = 7500
dashboard_user = admin
dashboard_pwd = admin

# 需要穿透http的统一访问端口(http类型的内网穿透，必须设置vhost_http_port，并且所有的http类型的客户端都将通过同一个vhost_http_port访问。)

vhost_http_port = 3000

# https的访问端口(如果需要的话)

# vhost_https_port = 7443

# 二级frp域名 三级sub子域名做saas

# 如果 frps 配置了 subdomain_host，则frpc中想自定义custom_domains 中不能是属于 subdomain_host 的子域名或者泛域名

subdomain_host = frp.daidaibenben.com
```

## DNS域名解析配置

> 需要解析共两条A记录：
>
> frp.xxx.com 和 *.frp.xxx.com

例:

| 记录值 | 记录类型(A类型) | ip地址 |
| --- | --- | --- |
| frp | A | ip地址 |
| *.frp | A | ip地址 |

## 配置Frpc Client客户端

> 修改frpc.ini

```bash
# frps公共服务端配置

[common]

# 公网ip,frps所在的服务器的ip

server_addr = xxx.xxx.xxx.xxx

# frps服务端连接端口

server_port = 7000

# 连接token,与frps中的token一致

token = admin

# 定义第一个转发

[web01]
type = http

# 本地(内网)服务的端口

local_port = 8001

# 与frps中的subdomain_host连接起来就是pc1.frp.xxx.com

subdomain = pc1

# 定义第二个转发

[web02]
type = http

# 本地(内网)服务的端口

local_port = 8002

# 与frps中的subdomain_host连接起来完整访问地址就是pc.frp.xxx.com

subdomain = pc


```

### 2种访问方式

1. 一种纯域名,nginx做好做二级域名三级泛域名及反向代理,直接访问

    [http://pc1.frp.xxx.com](http://pc1.frp.xxx.com/)

    [http://pc2.frp.xxx.com](http://pc2.frp.xxx.com/)

2. 一种sub域名+穿透端口号(vhost\_http\_port),nginx无需做二级域名三级泛域名配置

    [http://pc1.frp.xxx.com:7001](http://pc1.frp.xxx.com:7001/)

    [http://pc2.frp.xxx.com:7001](http://pc2.frp.xxx.com:7001/)

## 配置nginx,实现第一种访问方式

```bash

# 3000端口 frp服务的子域名配置

server {
    listen       80;
    # 域名配置 记得一定要加上*.frp.xxx.com +  frp.xxx.com这个，只加frp.xxx.com是不行的,无法支持泛域名做sub模式
server_name*.frp.daidaibenben.top frp.daidaibenben.top;

    access_log  /var/log/nginx/access.frp.log  main;

    #  这个Host的header一定要加，不然转发后frp拿不到通过哪个域名访问的，导致转发失败
    proxy_set_header   Host             $host;
    proxy_set_header   X-Real-IP        $remote_addr;
    proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
   
    location / {
        proxy_pass     http://127.0.0.1:3000;
    
    }
}

# dashboard服务

server {
    listen       80;
    server_name  db.frp.daidaibenben.top;

    access_log  /var/log/nginx/access.frp.log  main;
    proxy_set_header  X-Real-IP  $remote_addr;
    
    location / {
        proxy_pass      http://127.0.0.1:7500;
    }
}

```
