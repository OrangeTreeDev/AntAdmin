# AntAdmin
following  zuiidea to build the admin dashbord application with dva and antd <br/>
参考项目地址 <https://github.com/zuiidea/antd-admin>

# 项目构建步骤
初始化项目
```bash
dva new AntAdmin
```

安装依赖
```bash
npm install
```

按需加载antd组件和样式,安装插件
```bash
npm install babel-plugin-import
```

修改.roadhogrc，添加插件支持
```
"extraBabelPlugins": [
    "transform-runtime",
    [ "import", { "libraryName": "antd", "style": true } ]
  ]
```


