## 博客APP
![image](https://img.shields.io/appveyor/ci/gruntjs/grunt.svg)
![image](https://camo.githubusercontent.com/9a140a4c68e7c178bc660bee7675f4f25ff7ade3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7675652e737667)
![image](https://img.shields.io/badge/react--native-0.55.4-blue.svg)
[![image](https://img.shields.io/badge/%E5%8D%9A%E5%AE%A2%E5%9B%AD-%E5%8D%81%E5%B9%B4%E9%9B%AA%E8%90%BD-blue.svg)](https://www.cnblogs.com/maopixin/)



初次接触rn写的一个demo

说下体会，虽然是使用react开发，但是如果你仅仅只会react，那么你开发出来的app，他还是类似网页一样的功能，因为在开发时，你会接触到很多原生的东西，并且层出不迭的红屏报错，保证你感觉自己活在深渊里。哈哈。。。。。

## 安装
首先保证安装了react-native的开发环境（[react-native开发环境安装传送门](https://facebook.github.io/react-native/docs/getting-started)）

```bash
git clone https://github.com/maopixin/lzbk.git
cd lzbk 
npm i
react-native run-ios
或
react-native run-android
```


## 第三方库（对应版本可以在package.json中找到）

注意：请不要随意使用最新版第三方包，说不定你就会遇到无可预期的bug

库名 | 描述 | 官网 | github
---|---|---|---
react-navigation | 官方推荐路由 | https://reactnavigation.org/docs/zh-Hans/hello-react-navigation.html | https://github.com/react-navigation/react-navigation
react-native-htmlview | 轻量显示html的组件 | 0 | https://github.com/jsdf/react-native-htmlview
react-native-scrollable-tab-view | 滚动tab | 0 | https://github.com/ptomasroos/react-native-scrollable-tab-view
react-native-vector-icons | icon | 0 | https://github.com/oblador/react-native-vector-icons
teaset | 一款不错的ui库 | 0 | https://github.com/rilyu/teaset


## 已完成功能

- [x] 个人中心（静态）
- [x] 技术心得（上拉加载，下拉刷新）
- [x] 生活随笔（上拉加载）
- [x] 博客详情（WebView直接加载的移动端）
- [x] 歌曲排行榜
- [x] 歌曲列表
- [x] 歌曲播放页
- [x] 注册 (无接口支持仅静态)
- [x] 登录 (无接口支持仅静态)
- [x] 监测网络变化
- [x] 设置


