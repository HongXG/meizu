// 顶部显隐标题

$(window).scroll(function(){
  var s=$(window).scrollTop();
  var w = $("#header .h_opacity").height();
  if (s>w) {
    $("#header .h_opacity").stop().css('opacity', '1');
  }else{
    $("#header .h_opacity").stop().css('opacity', '0');
  }
});


$("#main .content .c_nav a").click(function(event) {
  var z = $(this).index();
  $(this).css('color', '#00c3f5').siblings('a').css('color', '#666');
  $('#main .content .c_inner img').eq(z).removeClass('c_hide').siblings('img').addClass('c_hide');
});


//购物车选框
$("#main .prod .p_select , #footer .f_car").click(function(event) {
  $(".layer").css('display', 'block');
});
//关闭
$(".layer .l_inner .summary .s_info .s_close").click(function(event) {
  $(".layer").css('display', 'none');
});
//购物车选项
$(".layer .l_inner .property>div>dl dd a").click(function(event) {
  $(this).addClass('l_color').siblings('a').removeClass('l_color');
});
//购物车数量
  // 购买数量 +号
  $(".layer .l_inner .property>div>div>div .l_botton").click(function(event) {
    var t = $(".layer .l_inner .property>div>div>div input").val();
    t++;
    if (t>4) {
      t=5;
      $(".layer .l_inner .property>div>div>div .l_botton").css({'pointer-events':'none','color':'#dcdcdc'});
    }
    if (t>1) {
      $(".layer .l_inner .property>div>div>div .l_top").css({'pointer-events':'auto','color':'#666'});
    }
    $(".layer .l_inner .property>div>div>div input").val(t);
  });

//购买数量 -号
$(".layer .l_inner .property>div>div>div .l_top").click(function(event) {
  var t = $(".layer .l_inner .property>div>div>div input").val();
  t--;
  if (t<=4){
    $(".layer .l_inner .property>div>div>div .l_botton").css({'pointer-events':'auto','color':'#666'});
  }
  if (t<=1) {
    t=1;
    $(".layer .l_inner .property>div>div>div .l_top").css({'pointer-events':'none','color':'#dcdcdc'});
  }
  $(".layer .l_inner .property>div>div>div input").val(t);
});







0
