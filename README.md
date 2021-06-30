# supermalltest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### 遇到的问题
为什么组件里的自定义组件使用元素选择器没有效果，要加#才能选中， #tab-bar
因为style里面没有加 scoped, 然后css就可以去子组件里面找 #tab-bar, 如果加了scoped,作用域就只在当前页面，这个就找不到了。但是组件是不能通过元素选择器来选定的。