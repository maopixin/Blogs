<h2 style="text-align:center">博客APP</h2>
## 初次接触rn写的一个demo

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


## 第三方库


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
- [ ] 我的收藏

