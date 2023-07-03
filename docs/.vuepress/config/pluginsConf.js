// 时间样式
const moment = require('moment');
const dayjs = require("dayjs");
// 设置中文格式
moment.locale("zh-cn");

module.exports = [
    // 更新日期插件 -- 显示最近更新时间(从github)上
    ['@vuepress/last-updated', {
        transformer: (timestamp) => {
            // 时间具体到秒
            // return moment(timestamp).format('YYYY MM D , h:mm:ss');
            // 时间具体到日
            return moment(timestamp).format('YYYY MM D');
        }
    }],


    // pwa插件 -- 通过图标访问webapp
    ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],

    // 翻页插件 -- 底部快速返回顶部
    ['@vuepress/back-to-top'],

    // 图片缩放插件 -- 点击图片之后可用快速缩放
    // ['@vuepress/medium-zoom', {
    //     // 可用指定图片进行缩放   被指定的图片设置class属性，
    //     // selector: 'img.zoom-custom-imgs',
    //     // 用于所有图片
    //     // selector: 'img',
    //     options: {
    //         margin: 20
    //     }
    // }],

    // 自动生成侧边栏
    // ["vuepress-plugin-auto-sidebar", {
    //     // options
    // }],


    // 动态标题
    // ["dynamic-title", {
    //     showIcon: "/devil.jpg",
    //     showText: "(/≧▽≦/)咦！又好了！",
    //     hideIcon: '/恶魔.webp',
    //     hideText: '(●—●)喔哟，崩溃啦！',
    //     recoverTime: 1000,
    // }],

    // 光标效果
    ['cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }],

    // 音乐插件
    ['@vuepress-reco/vuepress-plugin-bgm-player',{
        audios: [
            // 本地文件示例
            {
                name: '장가갈 수 있을까',
                artist: '咖啡少年',
                url: '/bgm/1.mp3',
                cover: '/bgm/1.jpg'
            },
            {
                name: '장가갈 수 있을까',
                artist: '着魔2',
                url: '/bgm/2.mp3',
                cover: '/bgm/1.jpg'
            },
        ]
    }],

    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    ['thirdparty-search', {
            thirdparty: [
                // 可选，默认 []
                // 菜鸟教程
                {
                    title: '在Runoob中搜索',
                    frontUrl: 'https://www.runoob.com/?s=',
                },
                // 百度搜索
                {
                    title: '在百度中搜索',
                    frontUrl: 'https://www.baidu.com/s?wd=',
                },
                // 必应搜索
                {
                    title: '在Bing中搜索',
                    frontUrl: 'https://cn.bing.com/search?q=',
                },
            ],
        }],

    // 百度自动推送
    'vuepress-plugin-baidu-autopush',

    // 代码块复制按钮
    ['one-click-copy', {
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false, // whether to display on the mobile side, default: false.
    }],

    // 放大图片
    ['vuepress-plugin-zooming', {
            selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
            options: {
                bgColor: 'rgba(0,0,0,0.6)',
            },
    }],

    // 全文搜索
    'fulltext-search',


    // 评论
    // ['vuepress-plugin-comment', {
    //         choosen: 'gitalk',
    //         options: {
    //             clientID: 'a6e1355287947096b88b',
    //             clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
    //             repo: 'blog-gitalk-comment', // GitHub 仓库
    //             owner: 'xugaoyi', // GitHub仓库所有者
    //             admin: ['xugaoyi'], // 对仓库有写权限的人
    //             // distractionFreeMode: true,
    //             pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //             id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //             title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //             labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //             body:
    //                 '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //         },
    // }],


    // 音乐插件  https://moefyit.github.io/moefy-vuepress/packages/meting.html#options
    // ["meting", {
    //     // 这个 API 是不可用的，只是作为示例而已
    //     // metingApi: '',
    //     meting: {
    //         server: 'netease',
    //         type: 'playlist',
    //         mid: '6838211960',
    //         auto: 'https://music.163.com/#/playlist?id=6838211960'
    //     },
    //     // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //         lrcType: 3,
    //         autoplay: true
    //     },
    //     defaultCover: 'https://nyakku.moe/avatar.jpg',
    // }],

]
