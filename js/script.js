$(document).ready(function() {

    // slide1
    $(".sld1 .plus").click(function () {
        $(".sld1 .s1").fadeIn(500);
        $(".sld1 .s0").fadeOut(500);
    });
    $(".sld1 .s1 .x").click(function () {
        $(".sld1 .s1").fadeOut(500);
        $(".sld1 .s0").fadeIn(500);
        setTimeout(function () {
            $('input[type="range"]').fadeIn(100);
            $('.sld1 .s1 .scale').fadeIn(100);
            $(".sld1 .s1 .title1").fadeIn(100);
            $(".sld1 .s1 .title2").fadeOut(100);
            $(".sld1 .s1 .lotion").fadeOut(100);
        }, 300);
    });
    $('input[type="range"]').change(function () {
        var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        var val2 = val *0.7
        $(this).css('background-image',
            '-webkit-gradient(linear, left top, right top, '
            + 'color-stop(' + val2 + ', #7cc7b6), '
            + 'color-stop(' + val + ', #fff)'
            + ')'
        );
        setTimeout(function () {
            $('input[type="range"]').fadeOut(500);
            $('.sld1 .s1 .scale').fadeOut(500);
            $(".sld1 .s1 .title1").fadeOut(500);
            $(".sld1 .s1 .title2").fadeIn(500);
            $(".sld1 .s1 .lotion").fadeIn(500);
        }, 300);
    });

    // slide2
    $(".sld2 .list1 .plus").click(function () {
        $(".sld2 .popup1").fadeIn(500);
    })

    $(".sld2 .list2 .plus").click(function () {
        $(".sld2 .popup2").fadeIn(500);
    })

    $(".sld2 .list3 .plus").click(function () {
        $(".sld2 .popup3").fadeIn(500);
    })

    //slide3
    $(".sld3 .b").addClass('animated zoomIn');
    $(".s1m-plus1").click(function () {
        $(".b1 p").animate({top:"-14px"},500,function () {
            $(".sld3 .b1-down").fadeIn(500);
        })
    });
    $(".s1m-plus2").click(function () {
        $(".b2 p").animate({top:"-17px"},500,function () {
            $(".sld3 .b2-down").fadeIn(500);
        })
    });
    $(".s1m-plus3").click(function () {
        $(".b3 p").animate({top:"-10px"},500,function () {
            $(".sld3 .b3-down").fadeIn(500);
        })
    });

    // slide4
    function showGraphs() {
        $(".sld4 .gr1s").hide().slideDown(1000)
        $(".sld4 .gr1big").hide().slideDown(1000)
        $(".sld4 .gr2s").hide().slideDown(1000)
        $(".sld4 .gr2big").hide().slideDown(1000)
        $(".sld4 .gr3s").hide().slideDown(1000)
        $(".sld4 .gr3big").hide().slideDown(1000)
        $(".sld4 .gr4s").hide().slideDown(1000)
        $(".sld4 .gr4big").hide().slideDown(1000)
        $(".sld4 .t4,.sld4 .t5 ,.sld4 .t6,.sld4 .t7").hide()
        setTimeout(function () {
            $(".sld4 .t4,.sld4 .t5 ,.sld4 .t6,.sld4 .t7").fadeIn(300)
        }, 1000)
    }
    showGraphs();

    $(".sld4 .block1 .p").click(function () {
        $(".sld4 .popup1").fadeIn(500);
        $(".sld4 .block1").css({opacity:0.3})
        $(".popup1 .x").click(function () {
            $(".sld4 .popup1").fadeOut(500);
            $(".sld4 .block1").css({opacity:1})
        })
    })
    $(".sld4 .block2 .p").click(function () {
        $(".sld4 .popup2").fadeIn(500);
        $(".sld4 .block2").css({opacity:0.3})
        $(".popup2 .x").click(function () {
            $(".sld4 .popup2").fadeOut(500);
            $(".sld4 .block2").css({opacity:1})
        })
    })
    $(".sld4 .block1 .button2").click(function () {
        showGraphs();
        $(".sld4 .block1").fadeOut(300)
        $(".sld4 .block2").fadeIn(500)
    })
    $(".sld4 .block2 .button2").click(function () {
        showGraphs();
        $(".sld4 .block2").fadeOut(300)
        $(".sld4 .block1").fadeIn(500)
    })

    //slide5

    $(".sld5 .b0").addClass('animated zoomIn')


    // slide6
    $(".sld6 .back").addClass('animated fadeInUp')

    $(".sld6 .s-plus").click(function () {
        $(".sld6 .b-popup").fadeIn(300)
        $(".sld6 .b-popup .x").click(function () {
            $(".sld6 .b-popup").fadeOut(300)
        })
    })

    //slide7
    $(".sld7 .t2").addClass('animated fadeInLeft')
});