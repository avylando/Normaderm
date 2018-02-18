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
    $(".sld3 .s0 .lotion").addClass('animated zoomIn');

    $(".sld3 .s0 .plus-1").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s1").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s1 .col").removeClass('col-e');
            $(".sld3 .s1 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s1 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s1 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s1 .x").click(function () {
        $(".sld3 .s1").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s1 .col").addClass('col-e');
            $(".sld3 .s1 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s1 .p").click(function () {
        $(".sld3 .s1 .protocol").fadeIn(500);
    })
    $(".sld3 .s1 .pr-x").click(function () {
        $(".sld3 .s1 .protocol").fadeOut(500);
    })
    $(".sld3 .s1 .button-off").click(function () {
        $(".sld3 .s1").fadeOut(500);
        $(".sld3 .s2").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s2 .col").removeClass('col-e');
            $(".sld3 .s2 .rect").removeClass('rect-f');
            $(".sld3 .s1 .col").addClass('col-e');
            $(".sld3 .s1 .rect").addClass('rect-f');
        }, 300);
        
        $(".sld3 .s2 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s2 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s2 .button-off").click(function () {
        $(".sld3 .s2").fadeOut(500);
        $(".sld3 .s1").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s1 .col").removeClass('col-e');
            $(".sld3 .s1 .rect").removeClass('rect-f');
            $(".sld3 .s2 .col").addClass('col-e');
            $(".sld3 .s2 .rect").addClass('rect-f');
        }, 300);
        
        $(".sld3 .s1 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s1 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s2 .x").click(function () {
        $(".sld3 .s2").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s2 .col").addClass('col-e');
            $(".sld3 .s2 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s2 .p").click(function () {
        $(".sld3 .s2 .protocol").fadeIn(500);
    })
    $(".sld3 .s2 .pr-x").click(function () {
        $(".sld3 .s2 .protocol").fadeOut(500);
    })

    $(".sld3 .s0 .plus-2").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
    })
    $(".sld3 .s3 .x").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
    })
    $(".sld3 .s3 .block-1 .plus").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s3-1").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-1 .col").removeClass('col-e');
            $(".sld3 .s3-1 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s3-1 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s3-1 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s3-1 .x").click(function () {
        $(".sld3 .s3-1").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-1 .col").addClass('col-e');
            $(".sld3 .s3-1 .rect").addClass('rect-f');
        }, 300);
    })

    $(".sld3 .s3 .block-2 .plus").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s3-2").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-2 .col").removeClass('col-e');
            $(".sld3 .s3-2 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s3-2 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s3-2 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s3-2 .x").click(function () {
        $(".sld3 .s3-2").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-2 .col").addClass('col-e');
            $(".sld3 .s3-2 .rect").addClass('rect-f');
        }, 300);
    })

    $(".sld3 .s3 .block-3 .plus").click(function () {
        $(".sld3 .s3").fadeOut(500);
        $(".sld3 .s3-3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-3 .col").removeClass('col-e');
            $(".sld3 .s3-3 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s3-3 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s3-3 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s3-3 .x").click(function () {
        $(".sld3 .s3-3").fadeOut(500);
        $(".sld3 .s3").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s3-3 .col").addClass('col-e');
            $(".sld3 .s3-3 .rect").addClass('rect-f');
        }, 300);
    })

    $(".sld3 .s3 .p").click(function () {
        $(".sld3 .s3 .protocol").fadeIn(500);
    })
    $(".sld3 .s3 .pr-x").click(function () {
        $(".sld3 .s3 .protocol").fadeOut(500);
    })

    $(".sld3 .s0 .plus-4").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s4").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s4 .col").removeClass('col-e');
            $(".sld3 .s4 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s4 .gr-item .number").hide();
        setTimeout(function () {
            $(".sld3 .s4 .gr-item .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s4 .x").click(function () {
        $(".sld3 .s4").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s4 .col").addClass('col-e');
            $(".sld3 .s4 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s4 .p").click(function () {
        $(".sld3 .s4 .popup").fadeIn(500);
    })
    $(".sld3 .s4 .popup .pr-x").click(function () {
        $(".sld3 .s4 .popup").fadeOut(500);
    })

    $(".sld3 .s0 .plus-3").click(function () {
        $(".sld3 .s0").fadeOut(500);
        $(".sld3 .s5").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s5 .col").removeClass('col-e');
            $(".sld3 .s5 .rect").removeClass('rect-f');
        }, 300);
        
        $(".sld3 .s5 .graph .number").hide();
        setTimeout(function () {
            $(".sld3 .s5 .graph .number").fadeIn(300);
        }, 800);
    })
    $(".sld3 .s5 .x").click(function () {
        $(".sld3 .s5").fadeOut(500);
        $(".sld3 .s0").fadeIn(500);
        setTimeout(function () {
            $(".sld3 .s5 .col").addClass('col-e');
            $(".sld3 .s5 .rect").addClass('rect-f');
        }, 300);
    })
    $(".sld3 .s5 .p").click(function () {
        $(".sld3 .s5 .protocol").fadeIn(500);
    })
    $(".sld3 .s5 .protocol .pr-x").click(function () {
        $(".sld3 .s5 .protocol").fadeOut(500);
    })


    // slide4
    $(".sld4 .s0 .lotion").addClass('animated slideInLeft');

    //slide5
    $(".sld5 .s0 .block-1 .arrow").click(function () {
        $(".sld5 .s0 .block-1").toggleClass('block-wide');
    })
    $(".sld5 .s0 .block-2 .arrow").click(function () {
        $(".sld5 .s0 .block-2").toggleClass('block-wide');
    })
    $(".sld5 .s0 .block-3 .arrow").click(function () {
        $(".sld5 .s0 .block-3").toggleClass('block-wide');
    })

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