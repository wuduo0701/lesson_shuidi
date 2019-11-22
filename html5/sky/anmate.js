var Animation = function(opts) {
    //els 参数
    var dur = 0.3,
    amount = '55%',
    tl = new TimelineMax({
        repeat: -1,
        yoyo: true,
        repeatDelay: 1
    });
    tl
        .add(
        fromLeft(
           opts.leftAnimated
        )
    )
        .add(
            fromRight(
                opts.rightAnimated
            )
        )
    function fromLeft(el) {
        return TweenMax.from(el, dur, {x:"-=" + amount, autoAlpha:0.2})
    }
    function fromRight(el) {
        return TweenMax.from(el, dur, {x:"+=" + amount, autoAlpha:0.2})
    }
}
// 流程式的，不适合复用

// var tl = new TimelineMax({
//     repeat: -1,  //重复执行的次数
//     yoyo: true,
//     repeatDelay: 1,
// })

// tl.from(['#box1,#box3'],0.3,{x:'-=55%'});
// tl.from(['#box2'],0.3,{x:'+=55%'});
