---
title: Tag-Plugins-Plus
comments: true
tags: Tag-Plugins-Plus
categories: 技术梳理
description: 针对行内样式、分栏、引用、复选列表、单选列表、时间轴、折叠框、链接卡片、注释、音频、视频做梳理
cover: /img/404.jpg
sticky: 99
ai: 
   - 针对行内样式、分栏、引用、复选列表、单选列表、时间轴、折叠框、链接卡片、注释、音频、视频做梳理
   - 1. 行内样式：在 HTML 标签中使用 style 属性来添加样式，例如： <p style="color:red;">这是一段红色的文字</p>
     2. 分栏：使用 CSS 中的栅格系统来实现网页布局的分栏效果，例如：使用框架 Bootstrap 中的 col-md-6 表示一个占据一半宽度的列。
     3. 引用：使用 HTML 中的 <blockquote> 标签来引用他人的话语或文本，例如： <blockquote><p>这是一段引用的文本。</p><cite>——引用者</cite></blockquote>
     4. 复选列表：使用 HTML 中的 <ul> 标签和 <input> 标签来创建复选列表，例如：<ul><li><input type="checkbox" name="fruit" value="apple">苹果</li><li><input type="checkbox" name="fruit" value="banana">香蕉</li></ul>
     5. 单选列表：使用 HTML 中的 <select> 标签和 <option> 标签来创建单选列表，例如： <select name="sex"><option value="male">男</option><option value="female">女</option></select>
     6. 时间轴：使用 HTML 和 CSS 来创建时间轴效果，例如：在一个 div 容器中创建多个子元素，然后通过设置子元素的 position、top 和 left 属性来实现时间轴的视觉效果。
     7. 折叠框：使用 HTML 和 CSS 来创建折叠框效果，例如：利用 input 和 label 元素的联系，通过设置它们的 id 和 for 属性，实现点击 label 时展开或收起内容。
     8. 链接卡片：使用 HTML 和 CSS 来创建链接卡片效果，例如：用 div 元素包含链接文本和元素，然后设置元素的 border、background、padding 等属性来实现链接卡片效果。
     9. 注释：使用 HTML 中的注释标签<!-- -->来添加注释，例如： <!-- 这是注释文本 -->
    10. 音频、视频：使用 HTML 中的 <audio> 和 <video> 标签来添加音频和视频，例如：<audio src="music.mp3" controls>您的浏览器不支持该音频格式。</audio>
abbrlink: e9cd2bbc
date: 2023-04-20 04:22:08
---
{% folding 参数（可选）, 必要安装插件 %}
- 安装插件,在博客根目录[Blogroot]下打开终端，运行以下指令：

```npm
npm install hexo-butterfly-tag-plugins-plus --save
```
- 考虑到hexo自带的markdown渲染插件hexo-renderer-marked与外挂标签语法的兼容性较差，建议您将其替换成hexo-renderer-kramed

```npm
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save
```

- 添加配置信息，以下为写法示例，在站点配置文件_config.yml或者主题配置文件_config.butterfly.yml中添加

```yml
# tag-plugins-plus
# see https://akilar.top/posts/615e2dec/
tag_plugins:
  enable: true # 开关
  priority: 5 #过滤器优先权
  issues: false #issues标签依赖注入开关
  link:
    placeholder: /img/link.png #link_card标签默认的图标图片
  CDN:
    anima: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/font-awesome-animation.min.css #动画标签anima的依赖
    jquery: https://npm.elemecdn.com/jquery@latest/dist/jquery.min.js #issues标签依赖
    issues: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/issues.js #issues标签依赖
    iconfont: //at.alicdn.com/t/font_2032782_8d5kxvn09md.js #参看https://akilar.top/posts/d2ebecef/
    carousel: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/assets/carousel-touch.js
    tag_plugins_css: https://npm.elemecdn.com/hexo-butterfly-tag-plugins-plus@latest/lib/tag_plugins.css
```
{% endfolding %}

## 行内文本样式

{% tabs 行内文本样式  %}
<!-- tab 标签语法 -->
```markdown
{% u 文本内容 %}
{% emp 文本内容 %}
{% wavy 文本内容 %}
{% del 文本内容 %}
{% kbd 文本内容 %}
{% psw 文本内容 %}
```
<!-- endtab -->

<!-- tab  示例源码 -->
```markdown
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
```
<!-- endtab -->

<!-- tab 渲染展示 -->
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}
<!-- endtab -->
{% endtabs %}

## 分栏 tab

{% tabs 分栏 tab %}
<!-- tab 标签语法-->
```Plaintext
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}
```
<!-- endtab -->

<!-- tab 配置参数-->
1.Unique name :

选项卡块标签的唯一名称，不带逗号。

将在#id中用作每个标签及其索引号的前缀。

如果名称中包含空格，则对于生成#id，所有空格将由破折号代替。

仅当前帖子/页面的URL必须是唯一的！

2.[index]:

活动选项卡的索引号。

如果未指定，将选择第一个标签（1）。

如果index为-1，则不会选择任何选项卡。

可选参数。

3.[Tab caption]:

当前选项卡的标题。

如果未指定标题，则带有制表符索引后缀的唯一名称将用作制表符的标题。

如果未指定标题，但指定了图标，则标题将为空。

可选参数。

4.[@icon]:

FontAwesome图标名称（全名，看起来像“ fas fa-font”）

可以指定带空格或不带空格；

例如’Tab caption @icon’ 和 ‘Tab caption@icon’.

可选参数。
<!-- endtab -->

<!-- tab 示例源码-->
```Plaintext
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

<!-- endtab -->

<!-- tab 渲染展示-->
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}


<!-- endtab -->
{% endtabs %}

## 引用 note

{% tabs test1 %}
<!-- tab 标签语法 -->
```
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```
<!-- endtab -->

<!-- tab 配置参数 -->
| 参数 | 用法 |
| : ---- : | : ---- : |
| class |【可选】标识，不同的标识有不同的配色 （ default /primary/success /info/warning /danger ） |
| no-icon |【可选】不显示 icon |
| style |【可选】可以覆盖配置中的 style （simple/modern/flat/disabled） |

<!-- endtab -->

<!-- tab  示例源码-->
{% folding cyan, 1.simple样式 %}
```PLAINTEXT

{% note simple %}默认 提示块标签{% endnote %}

{% note default simple %}default 提示块标签{% endnote %}

{% note primary simple %}primary 提示块标签{% endnote %}

{% note success simple %}success 提示块标签{% endnote %}

{% note info simple %}info 提示块标签{% endnote %}

{% note warning simple %}warning 提示块标签{% endnote %}

{% note danger simple %}danger 提示块标签{% endnote %}

```
{% endfolding %}

{% folding cyan, 2.modern样式 %}
```PLAINTEXT

{% note modern %}默认 提示块标签{% endnote %}

{% note default modern %}default 提示块标签{% endnote %}

{% note primary modern %}primary 提示块标签{% endnote %}

{% note success modern %}success 提示块标签{% endnote %}

{% note info modern %}info 提示块标签{% endnote %}

{% note warning modern %}warning 提示块标签{% endnote %}

{% note danger modern %}danger 提示块标签{% endnote %}

```
{% endfolding %}

{% folding cyan, 3.flat样式 %}
```PLAINTEXT

{% note flat %}默认 提示块标签{% endnote %}

{% note default flat %}default 提示块标签{% endnote %}

{% note primary flat %}primary 提示块标签{% endnote %}

{% note success flat %}success 提示块标签{% endnote %}

{% note info flat %}info 提示块标签{% endnote %}

{% note warning flat %}warning 提示块标签{% endnote %}

{% note danger flat %}danger 提示块标签{% endnote %}

```
{% endfolding %}

{% folding cyan, 4.disabled样式 %}
```PLAINTEXT

{% note disabled %}默认 提示块标签{% endnote %}

{% note default disabled %}default 提示块标签{% endnote %}

{% note primary disabled %}primary 提示块标签{% endnote %}

{% note success disabled %}success 提示块标签{% endnote %}

{% note info disabled %}info 提示块标签{% endnote %}

{% note warning disabled %}warning 提示块标签{% endnote %}

{% note danger disabled %}danger 提示块标签{% endnote %}

```
{% endfolding %}

{% folding cyan, 5.no-icon样式 %}
```PLAINTEXT

{% note no-icon %}默认 提示块标签{% endnote %}

{% note default no-icon %}default 提示块标签{% endnote %}

{% note primary no-icon %}primary 提示块标签{% endnote %}

{% note success no-icon %}success 提示块标签{% endnote %}

{% note info no-icon %}info 提示块标签{% endnote %}

{% note warning no-icon %}warning 提示块标签{% endnote %}

{% note danger no-icon %}danger 提示块标签{% endnote %}

```
{% endfolding %}
<!-- endtab -->

<!-- tab 渲染演示-->
{% folding cyan open, 1.simple样式 %}

{% note simple %}默认 提示块标签{% endnote %}

{% note default simple %}default 提示块标签{% endnote %}

{% note primary simple %}primary 提示块标签{% endnote %}

{% note success simple %}success 提示块标签{% endnote %}

{% note info simple %}info 提示块标签{% endnote %}

{% note warning simple %}warning 提示块标签{% endnote %}

{% note danger simple %}danger 提示块标签{% endnote %}

{% endfolding %}
{% folding cyan open, 2.modern样式 %}

{% note modern %}默认 提示块标签{% endnote %}

{% note default modern %}default 提示块标签{% endnote %}

{% note primary modern %}primary 提示块标签{% endnote %}

{% note success modern %}success 提示块标签{% endnote %}

{% note info modern %}info 提示块标签{% endnote %}

{% note warning modern %}warning 提示块标签{% endnote %}

{% note danger modern %}danger 提示块标签{% endnote %}

{% endfolding %}
{% folding cyan open, 3.flat样式 %}

{% note flat %}默认 提示块标签{% endnote %}

{% note default flat %}default 提示块标签{% endnote %}

{% note primary flat %}primary 提示块标签{% endnote %}

{% note success flat %}success 提示块标签{% endnote %}

{% note info flat %}info 提示块标签{% endnote %}

{% note warning flat %}warning 提示块标签{% endnote %}

{% note danger flat %}danger 提示块标签{% endnote %}

{% endfolding %}
{% folding cyan open, 4.disabled样式 %}

{% note disabled %}默认 提示块标签{% endnote %}

{% note default disabled %}default 提示块标签{% endnote %}

{% note primary disabled %}primary 提示块标签{% endnote %}

{% note success disabled %}success 提示块标签{% endnote %}

{% note info disabled %}info 提示块标签{% endnote %}

{% note warning disabled %}warning 提示块标签{% endnote %}

{% note danger disabled %}danger 提示块标签{% endnote %}

{% endfolding %}
{% folding cyan open, 5.no-icon样式 %}

{% note no-icon %}默认 提示块标签{% endnote %}

{% note default no-icon %}default 提示块标签{% endnote %}

{% note primary no-icon %}primary 提示块标签{% endnote %}

{% note success no-icon %}success 提示块标签{% endnote %}

{% note info no-icon %}info 提示块标签{% endnote %}

{% note warning no-icon %}warning 提示块标签{% endnote %}

{% note danger no-icon %}danger 提示块标签{% endnote %}

{% endfolding %}
<!-- endtab -->
{% endtabs %}

## 复选列表 checkbox

{% tabs test1 %}
<!-- tab  标签语法-->
```markdown
{% checkbox 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `样式`: plus, minus, times
2. `选中状态`: checked
<!-- endtab -->

<!-- tab  示例源码-->
```markdown
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
```
<!-- endtab -->

<!-- tab  渲染演示-->
{% checkbox 纯文本测试 %}
{% checkbox checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% checkbox red, 支持自定义颜色 %}
{% checkbox green checked, 绿色 + 默认选中 %}
{% checkbox yellow checked, 黄色 + 默认选中 %}
{% checkbox cyan checked, 青色 + 默认选中 %}
{% checkbox blue checked, 蓝色 + 默认选中 %}
{% checkbox plus green checked, 增加 %}
{% checkbox minus yellow checked, 减少 %}
{% checkbox times red checked, 叉 %}
<!-- endtab -->
{% endtabs %}

## 单选列表 radio

{% tabs test1 %}
<!-- tab  标签语法-->
```markdown
{% radio 样式参数（可选）, 文本（支持简单md） %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. 选中状态: checked
<!-- endtab -->

<!-- tab  示例源码-->
```markdown
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

```
<!-- endtab -->

<!-- tab  渲染演示-->
{% radio 纯文本测试 %}
{% radio checked, 支持简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法 %}
{% radio red, 支持自定义颜色 %}
{% radio green, 绿色 %}
{% radio yellow, 黄色 %}
{% radio cyan, 青色 %}
{% radio blue, 蓝色 %}

<!-- endtab -->
{% endtabs %}

## 时间轴 timeline

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTEXT
{% timeline 时间线标题（可选）[,color] %}
<!-- timeline 时间节点（标题） -->
正文内容
<!-- endtimeline -->
<!-- timeline 时间节点（标题） -->
正文内容
<!-- endtimeline -->
{% endtimeline %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. title: 标题/时间线
2. color: timeline颜色:default(留空) / blue / pink / red / purple / orange / green  [本博客颜色无法获取]
<!-- endtab -->

<!-- tab  示例源码-->
```PLAINTEXT
{% timeline 时间轴样式,blue %}

<!-- timeline 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

<!-- endtimeline -->

<!-- timeline 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) -->

不需要额外处理。

<!-- endtimeline -->

<!-- timeline 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

<!-- endtimeline -->

{% endtimeline %}

```
<!-- endtab -->

<!-- tab  渲染演示-->
{% timeline 时间轴样式,blue %}

<!-- timeline 2020-07-24 [2.6.6 -> 3.0](https://github.com/volantis-x/hexo-theme-volantis/releases) -->

1. 如果有 `hexo-lazyload-image` 插件，需要删除并重新安装最新版本，设置 `lazyload.isSPA: true`。
2. 2.x 版本的 css 和 js 不适用于 3.x 版本，如果使用了 `use_cdn: true` 则需要删除。
3. 2.x 版本的 fancybox 标签在 3.x 版本中被重命名为 gallery 。
4. 2.x 版本的置顶 `top: true` 改为了 `pin: true`，并且同样适用于 `layout: page` 的页面。
5. 如果使用了 `hexo-offline` 插件，建议卸载，3.0 版本默认开启了 pjax 服务。

<!-- endtimeline -->

<!-- timeline 2020-05-15 [2.6.3 -> 2.6.6](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.6) -->

不需要额外处理。

<!-- endtimeline -->

<!-- timeline 2020-04-20 [2.6.2 -> 2.6.3](https://github.com/volantis-x/hexo-theme-volantis/releases/tag/2.6.3) -->

1. 全局搜索 `seotitle` 并替换为 `seo_title`。
2. group 组件的索引规则有变，使用 group 组件的文章内，`group: group_name` 对应的组件名必须是 `group_name`。
2. group 组件的列表名优先显示文章的 `short_title` 其次是 `title`。

<!-- endtimeline -->

{% endtimeline %}
<!-- endtab -->
{% endtabs %}

## 折叠框 folding

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTEXT
{% folding 参数（可选）, 标题 %}
![](https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/image-20221203162942063.webp)
{% endfolding %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `颜色`：blue, cyan, green, yellow, red   [本博客颜色无法获取]
2. `状态`：状态填写 open 代表默认打开。
<!-- endtab -->

<!-- tab  示例源码-->
```markdown
{% folding 查看图片测试 %}

![](https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/image-20221203162942063.webp)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha

{% endfolding %}

{% endfolding %}

{% endfolding %}
```
<!-- endtab -->

<!-- tab  渲染演示-->
{% folding 查看图片测试 %}

![](https://cloud-image-host.oss-cn-beijing.aliyuncs.com/background/image-20221203162942063.webp)

{% endfolding %}

{% folding cyan open, 查看默认打开的折叠框 %}

这是一个默认打开的折叠框。

{% endfolding %}

{% folding green, 查看代码测试 %}
假装这里有代码块（代码块没法嵌套代码块）
{% endfolding %}

{% folding yellow, 查看列表测试 %}

- haha
- hehe

{% endfolding %}

{% folding red, 查看嵌套测试 %}

{% folding blue, 查看嵌套测试2 %}

{% folding 查看嵌套测试3 %}

hahaha

{% endfolding %}

{% endfolding %}

{% endfolding %}

<!-- endtab -->
{% endtabs %}

## 链接卡片 link

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% link [title],[sitename],[link] %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `title`: 应用外链标题
2. `text`: 引用外链名称
3. `link`: 外链地址
<!-- endtab -->

<!-- tab  示例源码-->
```PLAINTEXT
{% link 获取网站的Favicon图标并显示在你的网页上,owen0o0,https://github.com/owen0o0/getFavicon %}
```
<!-- endtab -->

<!-- tab  渲染演示-->
{% link 获取网站的Favicon图标并显示在你的网页上,owen0o0,https://github.com/owen0o0/getFavicon %}
<!-- endtab -->
{% endtabs %}


## 注释 notation

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% nota [label] , [text] %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `label`: 注释词汇
2. `text`: 悬停显示的注解内容
<!-- endtab -->

<!-- tab  示例源码-->
```PLAINTEXT
{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}
```
<!-- endtab -->

<!-- tab  渲染演示-->

{% nota 把鼠标移动到我上面试试 ,可以看到注解内容出现在顶栏 %}

<!-- endtab -->
{% endtabs %}

## 上标标签 tip

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% tip [参数，可选] %}文本内容{% endtip %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `样式`: success,error,warning,bolt,ban,home,sync,cogs,key,bell
2. `自定义图标`: 支持fontawesome。
<!-- endtab -->

<!-- tab  示例源码-->
```PLAINTEXT
{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}
```
<!-- endtab -->

<!-- tab  渲染演示-->

{% tip %}default{% endtip %}
{% tip info %}info{% endtip %}
{% tip success %}success{% endtip %}
{% tip error %}error{% endtip %}
{% tip warning %}warning{% endtip %}
{% tip bolt %}bolt{% endtip %}
{% tip ban %}ban{% endtip %}
{% tip home %}home{% endtip %}
{% tip sync %}sync{% endtip %}
{% tip cogs %}cogs{% endtip %}
{% tip key %}key{% endtip %}
{% tip bell %}bell{% endtip %}
{% tip fa-atom %}自定义font awesome图标{% endtip %}

<!-- endtab -->
{% endtabs %}


## 动态标签 anima

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% tip [参数，可选] %}文本内容{% endtip %}
```
<!-- endtab -->

<!-- tab  配置参数-->

> 更多详情请参看font-awesome-animation文档
  1. 将所需的CSS类添加到图标（或DOM中的任何元素）。
  2. 对于父级悬停样式，需要给目标元素添加指定CSS类，同时还要给目标元素的父级元素添加CSS类faa-parent animated-hover。（详情见示例及示例源码）
  You can regulate the speed of the animation by adding the CSS class or . faa-fastfaa-slow
  3. 可以通过给目标元素添加CSS类faa-fast或faa-slow来控制动画快慢。

| On DOM load   <br>  当页面加载时 <br> 显示动画	 | On hover <br> 当鼠标悬停时  <br> 显示动画 | On parent hover <br> 当鼠标悬停在父级元素时   <br> 显示动画 |
| : ---- : | : ---- : | : ---- : |
| faa-wrench animated	 | faa-wrench animated-hover	| faa-wrench |
| faa-ring animated	 | faa-ring animated-hover	 | faa-ring |
| faa-horizontal animated	 | faa-horizontal animated-hover	| faa-horizontal |
| faa-vertical animated	 | faa-vertical animated-hover	| faa-vertical |
| faa-flash animated	 | faa-flash animated-hover	| faa-flash |
| faa-bounce animated	 | faa-bounce animated-hover	| faa-bounce |
| faa-spin animated	 | faa-spin animated-hover	| faa-spin |
| faa-tada animated	 | faa-tada animated-hover	| faa-tada |
| faa-pulse animated	 | faa-pulse animated-hover	| faa-pulse |
| faa-shake animated	 | faa-shake animated-hover	| faa-shake |
| faa-tada animated	 | faa-tada animated-hover	| faa-tada |
| faa-passing animated	| faa-passing animated-hover	| faa-passing |
| faa-passing-reverse animated	| faa-passing-reverse animated-hover	| faa-passing-reverse |
| faa-burst animated	 | faa-burst animated-hover	 | faa-burst |
| faa-falling animated	| faa-falling animated-hover	| faa-falling |
| faa-rising animated	| faa-rising animated-hover	 | faa-rising |

<!-- endtab -->

<!-- tab  示例源码-->

1. On DOM load（当页面加载时显示动画）

```PLAINTEXT
{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}
```

2. 调整动画速度

```PLAINTEXT
{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}
```

3. On hover（当鼠标悬停时显示动画）

```PLAINTEXT
{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}
```

4. On parent hover（当鼠标悬停在父级元素时显示动画）

```PLAINTEXT
{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}
```
<!-- endtab -->

<!-- tab  渲染演示-->

1. On DOM load（当页面加载时显示动画）

{% tip warning faa-horizontal animated %}warning{% endtip %}
{% tip ban faa-flash animated %}ban{% endtip %}

2. 调整动画速度

{% tip warning faa-horizontal animated faa-fast %}warning{% endtip %}
{% tip ban faa-flash animated faa-slow %}ban{% endtip %}

3. On hover（当鼠标悬停时显示动画）

{% tip warning faa-horizontal animated-hover %}warning{% endtip %}
{% tip ban faa-flash animated-hover %}ban{% endtip %}

4. On parent hover（当鼠标悬停在父级元素时显示动画）

{% tip warning faa-parent animated-hover %}<p class="faa-horizontal">warning</p>{% endtip %}
{% tip ban faa-parent animated-hover %}<p class="faa-flash">ban</p>{% endtip %}

<!-- endtab -->
{% endtabs %}

## 诗词标签 poem

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% poem [title],[author] %}
诗词内容
{% endpoem %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `title`：诗词标题
2. `author`：作者，可以不写
<!-- endtab -->

<!-- tab  示例源码-->
```PLAINTEXT
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}
```
<!-- endtab -->

<!-- tab  渲染演示-->

{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

<!-- endtab -->
{% endtabs %}


## 按钮 btns

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% btns 样式参数 %}
{% cell 标题, 链接, 图片或者图标 %}
{% cell 标题, 链接, 图片或者图标 %}
{% endbtns %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. 圆角样式：rounded, circle
2. 增加文字样式：可以在容器内增加 <b>标题</b>和<p>描述文字</p>
3. 布局方式：
默认为自动宽度，适合视野内只有一两个的情况。

|参数|含义|
|:----:|:----:|
|wide	|宽一点的按钮|
|fill	|填充布局，自动铺满至少一行，多了会换行|
|center	|居中，按钮之间是固定间距|
|around	|居中分散|
|grid2	|等宽最多2列，屏幕变窄会适当减少列数|
|grid3	|等宽最多3列，屏幕变窄会适当减少列数|
|grid4	|等宽最多4列，屏幕变窄会适当减少列数|
|grid5	|等宽最多5列，屏幕变窄会适当减少列数|

<!-- endtab -->

<!-- tab  示例源码-->

1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：

```PLAINTEXT
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}
```
2. 或者含有图标的按钮：

```PLAINTEXT
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
```
3. 圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中

```PLAINTEXT
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}
```


<!-- endtab -->

<!-- tab  渲染演示-->

1. 如果需要显示类似「团队成员」之类的一组含有头像的链接：
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}
{% endbtns %}
2. 或者含有图标的按钮：
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
3. 圆形图标 + 标题 + 描述 + 图片 + 网格5列 + 居中
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}

<!-- endtab -->
{% endtabs %}

## 特效标签wow

{% tabs test1 %}
<!-- tab  标签语法-->
```PLAINTXT
{% progress [width] [color] [text] %}
```
<!-- endtab -->

<!-- tab  配置参数-->
1. `width`: 0到100的阿拉伯数字
2. `color`: 颜色，取值有red,yellow,green,cyan,blue,gray
3. `text`:进度条上的文字内容
<!-- endtab -->

<!-- tab  示例源码-->
```PLAINTXT
{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}
```

<!-- endtab -->

<!-- tab  渲染演示-->

{% progress 10 red 进度条样式预览 %}
{% progress 30 yellow 进度条样式预览 %}
{% progress 50 green 进度条样式预览 %}
{% progress 70 cyan 进度条样式预览 %}
{% progress 90 blue 进度条样式预览 %}
{% progress 100 gray 进度条样式预览 %}

<!-- endtab -->
{% endtabs %}

