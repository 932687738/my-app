## 项目目录介绍
    /src
        /assets 项目资源文件，例如：图片等
        /components 通用组件
        /pages  页面
        /store mobx 状态仓库
        /utils 工具，例如token，axios的封装等
        App.js 根组件
        index.css 全局样式
        index.js 项目入口

<!-- 
    配置别名路径 craco
        需要在项目根目录配置 craco.config.js
        修改package.json中scripts中的react-scripts 为 craco
-->
yarn add -D @craco/craco


## 项目环境安装
<!-- 安装sass环境 -->
yarn add sass -D  

<!-- 安装路由 -->
yarn add react-router-dom

<!-- 安装antd 
可能会出现安装不成功的情况，将镜像变更为阿里的就可以了
    npm config set registry https://registry.npm.taobao.org
    npm config set disturl https://npm.taobao.org/dist
-->
yarn add antd

