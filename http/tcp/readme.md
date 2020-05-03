## TCP协议灵魂之问，巩固你的网络底层基础

1. TCP和UDP的区别
共同点：位于传输层(两层协议，应用场景，传输内容)

应用层(HTTP)->表示层(解码和编码)->会话层(seesion)->传输层(TCP)->网络层(IP)->数据链路层(mac地址)->物理层  OSI
七层(Open System Interconnection)
Web TCP/IP
TCP Transmission Control System 传输控制
Content-type 解析

客户端  Client 浏览器 
服务器  Server
HTTP协议  domain -> cdn解析 -> 服务器ip   req,res ->Client

分成字节流  
建立连接 TCP  可信  可控制

- TCP是一个面向连接的，可靠的，基于字节流的传输层协议

- UDP 前端不太多  ,网络真瘠薄，电影 传输速度为主要的要求 数据的到达 完整
  性并不要求高

  面向无链接的传输协议  User Datagram Protocol  