$(function() {
    $('#yes').click(function(event) {
        modal('我就知道帅哥美女们一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('不知道哪里得罪了您，但祝您春节快乐！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('请您不要拒绝我', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你拒绝我', F);
}

function F() {
    modal('跟我一起过春节吧', G);
}

function G() {
    modal('不白来，真不白来', H);
}

function H() {
    modal('请您看烟花', I);
}

function I() {
    modal('五彩缤纷的烟花！', J)
}

function J() {
    modal('尊嘟，春节快乐，阖家团圆呀！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
