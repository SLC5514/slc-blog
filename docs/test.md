---
lang: zh-CN
title: 示例
description: 页面描述
---

# Hello VuePress

# Markdown

## 链接

[首页](./README.md) | [关于](./about.md) | [en关于](./en/about.md)

## Emoji 🎉

> VuePress 2 已经发布 :tada: ！

## 目录

[[toc]]

## 代码块

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```

```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

### 导入代码块

@[code{3-10} js{3}:no-line-numbers](@docs/test.js)

## 在 Markdown 中使用 Vue

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />

<CodeGroup>
<CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn
```

</CodeGroupItem>
<CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

</CodeGroupItem>
</CodeGroup>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

# 静态资源

![图片](/images/logo.png)
<img src="/images/logo.png" width="200" />
![来自路径别名的图片](@docs/logo.png)
