$(function () {

    var win = $(window);
    var header = $('.header-bg');
    var nav_toggle = header.find('.navbar-mobile-toggle');

    // 小屏模式菜单开关
    (function () {

        nav_toggle.on('click', function () {
            // 按钮显示的动态控制
            buttonPlay();
        })

        var isOpen = false;
        function buttonPlay() {
            if (!isOpen) {
                header.addClass('open');
            }
            else {
                header.removeClass('open');
            }
            isOpen = !isOpen;
        }
    })();

    // 判断滚动到顶部
    (function () {
        win.scroll(function () {
            var top = win.scrollTop();
            if (top == 0) {
                header.removeClass('on');
            }
            else {
                header.addClass('on');
            }
        })
    })();

    // 显示隐藏子菜单
    (function () {
        var main = header.find('.nav_main');
        var menu = main.find('.item-menu-sub');
        menu.hover(
            function () {
                main.addClass('menuhover');
            },
            function () {
                main.removeClass('menuhover');
            }
        );
    })();

    // 滚动方向，显示隐藏header
    (function () {
        var p = 0, t = 0;

        $(window).scroll(function (e) {
            p = $(this).scrollTop();

            if (t <= p) {//向下滚
                header.addClass('down');
            } else {//向上滚
                header.removeClass('down');
            }
            setTimeout(function () { t = p; }, 0);
        });
    })();

})
