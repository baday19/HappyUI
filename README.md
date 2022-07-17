## 前言

HappyUI是一个基于原生微信小程序的组件库。利用HappyUI的组件，你可以在快速构建出简洁优美的页面的同时，极大的减少wxml和wxss的代码量。使用HappyUI，你可能只需要关注逻辑层的书编写。

## 样例

通过下载并导入整个项目查看

## 快速上手

### 完整引入

1. 将happyui文件夹导入项目根目录

2. 在app.wxss中写入以下内容

```javascript
@import "happyui/main.wxss";
```

3. 全局引入组件：在app.json中加入以下内容

```json
"usingComponents": {
  "ha-toolbar": "/happyui/components/HappyToolbar/HappyToolbar",
  "ha-user": "/happyui/components/HappyUser/HappyUser",
  "ha-menu": "/happyui/components/HappyMenu/HappyMenu",
  "ha-card": "/happyui/components/HappyCard/HappyCard"
},
```

`注：与"window"同级`

<u>接下来就可以方便地使用HappyUI中的组件</u>

### 按需引入

为方便使用，推荐全局引入。

## 组件

### Card 卡片

#### 功能描述

具有多种类型的卡片，包含图片和文字信息。

#### 基础使用



#### 属性说明

| 参数     | 说明                               | 类型   | 可选值         | 默认值 |
| -------- | ---------------------------------- | ------ | -------------- | ------ |
| title    | 卡片的主标题                       | string | -              | -      |
| subTitle | 卡片的子标题/备注信息              | string | -              | -      |
| src      | 卡片中的图片                       | string | -              | -      |
| type     | 卡片的类型，包括图片在右、左、上。 | string | right/left/top | right  |
| style    | 组件的样式                         | string | -              | -      |

### Button 按钮

### Search 搜索框

### Container 通用容器

### User 用户信息

### Toolbar 工具栏

#### 功能描述

具有多种类型的工具栏列表，可包含图片和文字信息。

#### 基础使用



#### 属性说明

| 参数      | 说明                                                      | 类型           | 可选值     | 默认值 |
| --------- | --------------------------------------------------------- | -------------- | ---------- | ------ |
| title     | 工具栏的主标题                                            | string         | -          | -      |
| subTitle  | 工具栏的子标题/备注信息                                   | string         | -          | -      |
| data      | 工具栏所展示的信息                                        | Array.<object> | -          | -      |
| ul        | 工具栏的类型。若为true，按照竖向列表展示                  | boolean        | false/true | false  |
| style     | 组件的样式                                                | string         | -          | -      |
| bindhatap | 点击栏目条目会触发hatap事件。event.detail为点击条目的索引 | eventhandle    | -          | -      |

```js
// data实例，icon非必选，可以使用按钮的微信开放能力
data: [
    {
        icon: '/res/xianzhi.png',
        text: "反馈",
        // openType: "feedback"
    },
    {
        icon: '/res/xianzhi.png',
        text: "测试",
    }
],
```

### Menu 菜单

#### 功能描述

竖向排列的菜单列表，

#### 基础使用



#### 属性说明

| 参数      | 说明                                                      | 类型           | 可选值 | 默认值 |
| --------- | --------------------------------------------------------- | -------------- | ------ | ------ |
| data      | 菜单所展示的列表信息                                      | Array.<object> | -      | -      |
| style     | 组件的样式                                                | string         | -      | -      |
| bindhatap | 点击菜单条目会触发hatap事件。event.detail为点击条目的索引 | eventhandle    | -      | -      |

```js
// data实例，subTitle非必选，可以通过openType属性使用按钮的微信开放能力
data: [
    {
        title: '我的足迹',
    },
    {
        title: '客服中心',
        subtitle: '联系客服',
        openType: "contact"
    },
    {
        title: '问题反馈',
        subtitle: '提交发现的问题',
        openType: "feedback"
    },
    {
        title: '更多设置',
    },
]
```
