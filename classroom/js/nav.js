$(function () {
    var navList = [
        {
            title: '课程管理',
            icon: 'icon-kechengguanli',
            level: [{ name: '课程管理', url: 'pages/kecheng.html' }],
        },
        {
            title: '用户管理',
            icon: 'icon-yonghuguanli',
            level: [{ name: '用户信息', url: 'pages/yonghuxinxi.html' }],
        },
        {
            title: '论坛管理',
            icon: 'icon-icon_luntan-xian',
            level: [{ name: '技术分享', url: 'pages/jishufenxiang.html' }],
        },
        {
            title: '系统管理',
            icon: 'icon-xitongguanli',
            level: [{ name: '操作员管理', url: 'pages/caozuoyuanguanli.html' }],
        }
    ];
    var navhtml = '';
    for(var i=0;i<navList.length;i++) {
        navhtml += '<li class="nav-item">\n' +
            ' <a href="javascript:;"><i class="iconfont '+navList[i].icon+'"></i><span class="one-level">'+navList[i].title+'</span><i class="iconfont nav-more icon-jiantouarrow487"></i></a>\n' +
            '    <ul>';
        var level = navList[i].level;
        for(var j=0;j<level.length;j++) {
            navhtml += '<li class="nav-list" data-url="'+level[j].url+'"><a href="javascript:;"><span>'+level[j].name+'</span></a></li>';
        }
        navhtml += '</ul></li>';
    }
    $('.nav .navbox').html(navhtml);
    $('.nav-item>a').on('click', function () {
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            } else {
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        }
    });
    // $('#mini').on('click', function () {
    //     alert(0);
    //     if (!$('.nav').hasClass('nav-mini')) {
    //         $('.nav-item.nav-show').removeClass('nav-show');
    //         $('.nav-item').children('ul').removeAttr('style');
    //     } else {
    //         $('.nav').removeClass('nav-mini');
    //     }
    // });
    $(".navbox").on("click", ".nav-list",function () {
        var url = $(this).attr("data-url");

        $("#myFrame").attr("src", $(this).attr("data-url"));
    })
});