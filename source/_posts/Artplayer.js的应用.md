---
title: Artplayer.js的应用
tags:
  - 你的名字
  - B站
categories: 技术梳理
cover: 'https://artplayer.org/assets/sample/poster.jpg'
abbrlink: 29cbe460
date: 2022-11-13 00:18:13
---

##  你的名字
> 在远离大都会的小山村，住着巫女世家出身的高中女孩宫水三叶。不知从何时起，三叶在梦中就会变成一个住在东京的高中男孩。另一方面，住在东京的高中男孩立花泷则总在梦里来到陌生的小山村，以女孩子的身份过着全新的生活。许是受那颗神秘彗星的影响，立花和三叶在梦中交换了身份。

{% raw %}
<!DOCTYPE html>
<html>
    <head>
        <title>ArtPlayer</title>
        <meta charset="UTF-8" />
        <style>
            .artplayer-app {
                width: "auto";
                height: 410px;
            }
        </style>
    </head>
    <body>
        <div class="artplayer-app"></div>
        <script src="https://cdn.jsdelivr.net/npm/artplayer/dist/artplayer.js"></script>
        <script>
var art = new Artplayer({
    container: '.artplayer-app',
    url: 'https://artplayer.org/assets/sample/video.mp4',
    title: 'Your Name',
    poster: 'https://artplayer.org/assets/sample/poster.jpg',
    volume: 0.5,
    isLive: false,
    muted: false,
    autoplay: false,
    pip: true,
    autoSize: true,
    autoMini: true,
    screenshot: true,
    setting: true,
    loop: true,
    flip: true,
    playbackRate: true,
    aspectRatio: true,
    fullscreen: true,
    fullscreenWeb: true,
    subtitleOffset: true,
    miniProgressBar: true,
    mutex: true,
    backdrop: true,
    playsInline: true,
    autoPlayback: true,
    airplay: true,
    theme: '#23ade5',
    lang: navigator.language.toLowerCase(),
    whitelist: ['*'],
    moreVideoAttr: {
        crossOrigin: 'anonymous',
    },
    settings: [
        {
            width: 200,
            html: 'Subtitle',
            tooltip: 'Bilingual',
            icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/sample/poster.jpg">',
            selector: [
                {
                    html: 'Display',
                    tooltip: 'Show',
                    switch: true,
                    onSwitch: function (item) {
                        item.tooltip = item.switch ? 'Hide' : 'Show';
                        art.subtitle.show = !item.switch;
                        return !item.switch;
                    },
                },
                {
                    default: true,
                    html: 'Bilingual',
                    url: 'https://artplayer.org/assets/sample/subtitle.srt',
                },
                {
                    html: 'Chinese',
                    url: 'https://artplayer.org/assets/sample/subtitle.cn.srt',
                },
                {
                    html: 'Japanese',
                    url: 'https://artplayer.org/assets/sample/subtitle.jp.srt',
                },
            ],
            onSelect: function (item) {
                art.subtitle.switch(item.url, {
                    name: item.html,
                });
                return item.html;
            },
        },
        {
            html: 'Switcher',
            icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/state.svg">',
            tooltip: 'OFF',
            switch: false,
            onSwitch: function (item) {
                item.tooltip = item.switch ? 'OFF' : 'ON';
                console.info('You clicked on the custom switch', item.switch);
                return !item.switch;
            },
        },
        {
            html: 'Slider',
            icon: '<img width="22" heigth="22" src="https://artplayer.org/assets/img/state.svg">',
            tooltip: '5x',
            range: [5, 1, 10, 0.1],
            onRange: function (item) {
                return item.range + 'x';
            },
        },
    ],
    contextmenu: [
        {
            html: 'Custom menu',
            click: function (contextmenu) {
                console.info('You clicked on the custom menu');
                contextmenu.show = false;
            },
        },
    ],
    layers: [
        {
            html: '<img width="100" src="https://artplayer.org/assets/sample/layer.png">',
            click: function () {
                window.open('https://www.bilibili.com/bangumi/play/ss12044?theme=movie&spm_id_from=333.337.0.0');  https://aimu.app
                console.info('You clicked on the custom layer');
            },
            style: {
                position: 'absolute',
                top: '20px',
                right: '20px',
                opacity: '.9',
            },
        },
    ],
    quality: [
        {
            default: true,
            html: 'SD 480P',
            url: 'https://artplayer.org/assets/sample/video.mp4',
        },
        {
            html: 'HD 720P',
            url: 'https://artplayer.org/assets/sample/video.mp4',
        },
    ],
    thumbnails: {
        url: 'https://artplayer.org/assets/sample/thumbnails.png',
        number: 60,
        column: 10,
    },
    subtitle: {
        url: 'https://artplayer.org/assets/sample/subtitle.srt',
        type: 'srt',
        style: {
            color: '#fe9200',
            fontSize: '20px',
        },
        encoding: 'utf-8',
    },
    highlight: [
        {
            time: 15,
            text: 'One more chance',
        },
        {
            time: 30,
            text: '谁でもいいはずなのに',
        },
        {
            time: 45,
            text: '夏の想い出がまわる',
        },
        {
            time: 60,
            text: 'こんなとこにあるはずもないのに',
        },
        {
            time: 75,
            text: '终わり',
        },
    ],
    controls: [
        {
            position: 'right',
            html: 'Control',
            index: 1,
            tooltip: 'Control Tooltip',
            style: {
                marginRight: '20px',
            },
            click: function () {
                console.info('You clicked on the custom control');
            },
        },
    ],
    icons: {
        loading: '<img src="https://artplayer.org/assets/img/ploading.gif">',
        state: '<img width="150" heigth="150" src="https://artplayer.org/assets/img/state.svg">',
        indicator: '<img width="16" heigth="16" src="https://artplayer.org/assets/img/indicator.svg">',
    },
});

        </script>
    </body>
</html>

{% endraw %}

## 相关教程链接
* [Artplayer.js相关使用教程](https://www.fly63.com/nav/3888)

``` html
<script>
	var art = new Artplayer({
		container: '.artplayerBox', //容器
		url: './video/video.mp4', //视频地址
		title: 'this is title', //标题
		poster: './image/poster.png', //封面
		volume: 0.5, //音量大小
		isLive: false, //是否直播
		muted: false, //是否静音
		autoplay: false, //是否自动播放
		pip: true,
		autoSize: true, //是否自动播放大小
		screenshot: true, //显示截屏按钮
		setting: true, //显示设置按钮
		loop: true, //是否循环播放
		flip: true, //是否翻转
		playbackRate: true,
		aspectRatio: true, //显示保持比率按钮
		fullscreen: true, //显示全屏按钮
		fullscreenWeb: true, //是否网页全按钮
		subtitleOffset: true,
		miniProgressBar: true, //mini模式按钮
		localVideo: true, //本地视频
		localSubtitle: true, //本地字幕
		networkMonitor: false, //网络监控
		autoPip: true,
		mutex: true,
		backdrop: true,
		theme: '#ffad00', //主题色
		lang: navigator.language.toLowerCase(),
		moreVideoAttr: { //跨域
			crossOrigin: 'anonymous',
		},
		contextmenu: [{ //右键菜单
			html: 'Custom menu',
			click: function(contextmenu) {
				console.info('You clicked on the custom menu');
				contextmenu.show = false;
			},
		}, ],
		layers: [{ //视频图层
			html: `<img style="width: 100px" src="./image/icon.png">`,
			click: function() {
				console.info('You clicked on the custom layer');
			},
			style: {
				position: 'absolute',
				top: '20px',
				right: '20px',
				opacity: '.9',
			},
		}, ],
		quality: [{ //视频码率
				default: true,
				name: 'SD 480P',
				url: './video/quality.mp4',
			},
			{
				name: 'HD 720P',
				url: './video/quality_720.mp4',
			},
		],
		thumbnails: {
			url: './image/thumbnails.png',
			number: 100,
			width: 160,
			height: 90,
			column: 10,
		},
		//视频高亮字幕
		highlight: [{
				time: 60,
				text: 'One more chance',
			},
			{
				time: 120,
				text: 'good',
			},
		],
		//视频控制条
		controls: [{
			position: 'right',
			html: 'Control',
			click: function() {
				console.info('You clicked on the custom control');
			},
		}, ],
	});
</script>
```