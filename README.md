# 组件开发笔记

## Icon
- svg图标使用 svg-sprite-loader加载
- react组件内部没内容，标签推荐使用XML形式 <xxx />，而不是使用HTML形式<xxx></xxx>
- /* 只能匹配1.js 2.js和b文件夹，无法匹配b文件夹下的文件。 include:[/**/*]可以配置a文件下下所有的文件
- 使用importAll文件批量导入svg文件
- tree-shaking,例如lodash，我们只使用其中两个功能，其他的功能就不会打包进去。 静态引入import可以使用tree-shaking，importAll动态引入无法使用tree-shaking
a
|_ 1.js
|__2.js
|__b
   |__3.js
   |__4.js