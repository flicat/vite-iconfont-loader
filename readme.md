# Vite + Vue3 图标按需加载插件文档

## 简介

这是一个专为 Vite 和 Vue3 项目设计的插件，旨在将阿里巴巴矢量图标库的 iconfont.js 转换为可按需加载的 SVG 图标，帮助项目优化性能并简化图标管理流程。

## 使用方法

### 安装插件

通过 npm 进行安装：

```
npm install vite-iconfont-loader --save-dev
```

或者使用 yarn：

```
yarn add vite-iconfont-loader --dev
```

### 配置插件

在 vite.config.js 文件中添加插件配置：

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteIconFontLoader from 'vite-iconfont-loader'

export default defineConfig({
  plugins: [
    vue(),
    viteIconFontLoader({
      moduleId: 'icon-font',
      iconFontPath: 'src/iconfont/iconfont.js',
      iconAttrs: {
        class: 'iconfont',
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        color: 'currentColor'
      }
    })
  ]
})
```

### 图标按需引入

在项目的 Vue 文件中按需引入 SVG 图标：

```
<script setup>
import { IconShuaxin } from 'virtual:icon-font'
</script>

<template>
  <IconShuaxin></IconShuaxin>
</template>
```

## 插件参数说明

| 参数名称     | 参数类型 | 是否必填 | 默认值 | 参数描述                                   |
| ------------ | -------- | -------- | ------ | ------------------------------------------ |
| moduleId     | string   | 是       | -      | 虚拟模块的 id 名称，用于标识图标模块       |
| iconFontPath | string   | 是       | -      | iconfont.js 文件的路径，指定图标库文件位置 |
| iconAttrs    | object   | 否       | -      | 图标属性，可设置图标的样式和属性           |

## 示例项目结构

```
your-project/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── iconfont/
│   │   └── iconfont.js
│   ├── main.js
│   └── App.vue
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## 注意事项

- 如果`iconfont.js`中定义的图标名称为`menu`，那么图标的引入id则是`IconMenu`，插件自动添加了Icon前缀并改成了驼峰写法。
- 确保 `iconfont.js` 文件路径配置正确，否则插件无法正常加载图标。
- 如果需要修改图标样式，可通过调整 `iconAttrs` 参数实现，也可以在项目中通过 CSS 覆盖样式。
