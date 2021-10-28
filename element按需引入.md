# 安装element-ui
```
npm i element-ui -S
```
# 在项目所在目录下：
```
npm install babel-plugin-component -D
```
# babel.config.js中：
```
presets：[]配置项中追加 ["@babel/preset-env", { "modules": false }]并配置
plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
```
# main.js中：
```
import {组件名,~~~,} from 'element-ui';
Vue.component('组件别名',组件名);
~~~
```
