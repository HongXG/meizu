// ------------------ 导航和轮播图 ------------------

// 购物车详情显隐
$('#top .nav .nav_center .nc_cart').hover(
  function() {
  $('#top .nav .nav_center .nc_cart .ncc_store').stop().fadeIn('hide');
}, function() {
  $('#top .nav .nav_center .nc_cart .ncc_store').stop().fadeOut('hide');
});

// 我的详情显隐
$('#top .nav .nav_center .nc_mine').hover(
  function() {
  $('#top .nav .nav_center .nc_mine ul').stop().fadeIn('hide');
}, function() {
  $('#top .nav .nav_center .nc_mine ul').stop().fadeOut('hide');
});

// 首屏导航栏详情 显隐
$('#top .nav .nav_center .nc_nav ul>.ncn_detail').hover(
  function() {
  $("#top .nav").stop().css('background', '#fff');
  $(this).find('.ncn_detail').stop().fadeIn('hide');
}, function() {
  $("#top .nav").stop().css('background', 'rgba(251, 251, 251, 0.50)');
  $(this).find('.ncn_detail').stop().fadeOut('hide');
});

// 固定在顶部的导航
var wh=$(window).height();
$(window).scroll(function(){
  var s=wh-$(window).scrollTop();
  if (s < 340) {
    $('#top .hidenav').removeClass('hide');
  }else {
    $('#top .hidenav').addClass('hide');
  }
})
$('#top .hidenav .hidenav_nav>ul>li').hover(function() {
  $(this).find('a').css('color', '#00c3f5');
  $(this).find('i').css('background-color', '#00c3f5');
}, function() {
  $(this).find('a').css('color', '#333');
  $(this).find('i').css('background-color', '#fff');
});

// banner图 滚动
var c = 0;//设置总变量c
var sta = 2;//判断能不能点击(运动中不能点击1，不运动是能点击2)
var t;//定时炸弹

//自动轮播
function run(){
  c++;
  if (c==6) {//平缓滑动
    $("#top .banner .banner_window .banner_all").css({'left':'0'});
    c=1;
  }
  //计算大div应该到达的left值
  var left = c * -1920;
  sta = 1;//正在运动不可以点击
  $("#top .banner .banner_window .banner_all").animate({'left':left+'px'},500,function(){
    sta = 2;//滑动结束时可以点击
  });
  //li变化
  if (c==5) {//转到5号图的时候，调成0号元素
    $("#top .banner .banner_list span").eq(0).css({'background-color':'#fff','border':'1px solid #333'}).siblings('span').css({'background-color':'rgb(66, 66, 66)','border':'0px solid #333'});
  }else{
  $("#top .banner .banner_list span").eq(c).css({'background-color':'#fff','border':'1px solid #333'}).siblings('span').css({'background-color':'rgb(66, 66, 66)','border':'0px solid #333'});
  }
}

//启动定时器，自动轮播
var timer = setInterval(run,7000)

//给span加鼠标点击事件
$("#top .banner .banner_list span").click(function(){
  if (sta==1) {//不能点击
    return;//返回
  }
  //设置定时炸弹，延迟重启定时器
  clearTimeout(t);
  //清理定时器
  clearInterval(timer);
  //重启定时器
  t = setTimeout(function(){
    timer = setInterval(run,7000);
  },400)
  //获得当前被点击的li序号
  c = $(this).index();
  //计算大div应该到达的left值
  var left = c * -1920;
  $("#top .banner .banner_window .banner_all").stop().animate({'left':left+'px'},500);

  $(this).css({'background-color':'#fff','border':'1px solid #333'}).siblings('span').css({'background-color':'rgb(66, 66, 66)','border':'0px solid #333'});
})



/*------------------ 中间部分container ------------------*/
/*------------------ 手机左右移动 ------------------*/
$("#container .c_static_phone ul li a").hover(function() {
  $(this).find('.cs_abs').stop().animate({left: '25%'}, 800);
  $(this).find('.cs_no_abs').stop().animate({left: '-25%'}, 800);
}, function() {
  $(this).find('.cs_abs').stop().animate({left: '0'}, 300);
  $(this).find('.cs_no_abs').stop().animate({left: '0'}, 300);
});

/*------------------ 手机左右轮播图 ------------------*/
// banner图 滚动
var i = 0;//设置总变量c
var m;//定时炸弹
var ind = 2;

//给span加鼠标点击事件
$("#container .c_rotation_phone .cr_list span").click(function(){
  //获得当前被点击的li序号
  i = $(this).index();
  //计算大div应该到达的left值
  var left = i * -1240;
  $("#container .c_rotation_phone .cr_main .crm_window .crmw_all").stop().animate({'left':left+'px'},500,function(){
  });
  $(this).css({'background-color':'#000'}).siblings('span').css({'background-color':'#d9d9d9'});
})

$("#container .c_rotation_phone .cr_main .crm_left").click(function(){
  i--;
  if (i<0) {
    i=0;
    return;
  }
  var left = i * -1240;
  $("#container .c_rotation_phone .cr_main .crm_window .crmw_all").stop().animate({'left':left+'px'},500);
  $("#container .c_rotation_phone .cr_list span").eq(i).css({'background-color':'#000'}).siblings('span').css({'background-color':'#d9d9d9'});
})

$("#container .c_rotation_phone .cr_main .crm_right").click(function(){
  i++;
  if (i>2) {
    i=2;
    return;
  }
  var left = i * -1240;
  $("#container .c_rotation_phone .cr_main .crm_window .crmw_all").stop().animate({'left':left+'px'},500);
  $("#container .c_rotation_phone .cr_list span").eq(i).css({'background-color':'#000'}).siblings('span').css({'background-color':'#d9d9d9'});
})














1
