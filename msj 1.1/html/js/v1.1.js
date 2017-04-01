


$(document).on('click', '.idenBtn', function () {
    $(this).addClass('idenBtn2').removeClass('idenBtn');
    var i = 60;
    setInterval(function () {

        i--;
        $('.idenBtn2 p').text(i + 's后重新发送')
    }, 1000)

})

$(document).on('click', '.passwordImg', function () {
    $(this).removeClass('passwordImg').addClass('passwordImg2');
})
$(document).on('click', '.passwordImg2', function () {
    $(this).removeClass('passwordImg2').addClass('passwordImg');
})

$(document).on('click', 'p.message', function () {
    if ($('p.message i').hasClass('checked')) {
        $('p.message i').removeClass('checked');
    } else {
        $('p.message i').addClass('checked');
    }

})


$(document).on('click', ' .box-top .btn', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(' .box-top .btn1').hasClass('active')) {
        console.log(123)
        $('.login-box .box2').show();
        $('.login-box .box1').hide();
    } else {
        console.log(456)
        $('.login-box .box1').show();
        $('.login-box .box2').hide();
    }
})

$(document).on('click', '.login-box .back-login', function (e) {
    e.preventDefault();
    $('.login-1').show();
    $('.R-password').hide();

})

$(document).on('click', '.box2 .forget', function (e) {
    e.preventDefault();
    $('.login-1').hide();
    $('.R-password').show();

})

$(document).on('click', '.login .login-btn', function (e) {
    e.preventDefault();
    $('.shade').show();
})

$(document).on('click', '.message .close', function () {
    $('.shade').hide();
})