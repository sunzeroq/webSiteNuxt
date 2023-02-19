---
title: Http 缓存
author: sunzeroq
publishedAt: "2023-01-15"
tag: 网络
---

# 强缓存

1. Expires 缓存到期时间 HTTP1.0

    a. 值为日期格式，绝对时间最小单位是秒

2. cache-control

    a. max-age 资源可以被缓存的最大时间

    b. **no-cache **（**协商缓存**） 缓存但要验证是否过期

    c. **no-store** 无缓存,每次都向服务器发起请求

    d. Private 中间人不能缓存,只能客户端缓存

    e. max-age 资源可以被缓存的最大时间

# 协商缓存（强缓存过期/no-cache 时使用）

1. Last-Modified/If-Modified-Since

    a. 第一次请求后带上最后修改时间

    b. 下次请求相同资源时将修改时间写入请求头的 If-Modified-Since

    c. 服务器对比，未修改返回 304（Not Modified）修改过返回 200 和新资源

2. Etag/If-None-Match

    a. 生成文件唯一标识判断是否过期，流程同上

    b. 比 Last-Modified 精确，可以判断秒以下的改变

---
