

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
$(window).scroll(function(){
  var s=$(window).scrollTop();
  if (s<200) {
    $('#top .hidenav').stop().slideUp();
    $('#top .hidenav .hidenav_nav ul').hide();
    $('#top .hidenav .hidenav_nav>div>div').css('right', '-120px');
  }
  if (s>200 && s<699) {
    $('#top .hidenav').stop().slideDown();
    $('#top .hidenav .hidenav_nav ul').hide();
    $('#top .hidenav .hidenav_nav>div>div').css('right', '-120px');
  }
  if (s>700) {
    $('#top .hidenav').stop().slideDown();
    $('#top .hidenav .hidenav_nav ul').hide();
    $('#top .hidenav .hidenav_nav>div>div').css('right', '0');
  }
  if (s>880) {
    $('#top .hidenav').stop().slideDown();
    $('#top .hidenav .hidenav_nav ul').show();
    $('#top .hidenav .hidenav_nav>div>div').css('right', '0');
  }
});



//左侧点击小图边框，大图切换，右边隐藏内放大的图片切换
$('#main .container .c_left ul li').click(function(event) {
  $(this).css('border', '1px solid #999').siblings('li').css('border', '0px solid #999');
  var c = $(this).index();
  $("#main .container .c_left .cl_booth a").eq(c).css('display', 'block').siblings('a').css('display', 'none');
  $("#main .container .c_left .cr_img img").eq(c).css('display', 'block').siblings('img').css('display', 'none');
});

//右边选择类型等 边框
$('#main .container .c_right .cr_set dl dd a').click(function(event) {
  $(this).css('border-color', '#00c3f5').siblings('a').css('border-color', '#dcdcdc');
});

// 右边 购买数量 +号
$("#main .container .c_right .cr_buy dl dd>div>.top").click(function(event) {
  var t = $("#main .container .c_right .cr_buy dl dd>div input").val();
  t++;
  if (t>4) {
    t=5;
    $("#main .container .c_right .cr_buy dl dd>div>.top").css({'pointer-events':'none','color':'#dcdcdc'});
  }
  if (t>1) {
    $("#main .container .c_right .cr_buy dl dd>div>.bottom").css({'pointer-events':'auto','color':'#333'});
  }
  $("#main .container .c_right .cr_buy dl dd>div input").val(t);
});

// 右边 购买数量 -号
$("#main .container .c_right .cr_buy dl dd>div>.bottom").click(function(event) {
  var t = $("#main .container .c_right .cr_buy dl dd>div input").val();
  t--;
  if (t<=4){
    $("#main .container .c_right .cr_buy dl dd>div>.top").css({'pointer-events':'auto','color':'#333'});
  }
  if (t<=1) {
    $("#main .container .c_right .cr_buy dl dd>div>.bottom").css({'pointer-events':'none','color':'#dcdcdc'});
  }
  $("#main .container .c_right .cr_buy dl dd>div input").val(t);
});


//放大镜效果
$("#main .container .rom .c_left .c_cover").mousemove(function(event) {

  //获得事件对象
  var ev = window.event;
  var mouse_left = ev.offsetX;
  var mouse_top = ev.offsetY;

  //计算色块的位置
  var box_left = mouse_left - 100;
  var box_top = mouse_top - 100;

  // 判断是否超出
  if (box_left < 0) {
    box_left = 0;
  }
  if (box_left > 200) {
    box_left = 200;
  }
  if (box_top < 0) {
    box_top = 0;
  }
  if (box_top > 200) {
    box_top = 200;
  }

  //计算右侧图片位置
  var rpic_left = box_left*-2;
  var rpic_top = box_top*-2;


  // 让右侧移动
  $("#main .container .rom .c_left .cr_img img").css({'left':rpic_left + 'px','top':rpic_top + 'px'});
  $("#main .container .rom .c_left .cl_box").css({'left':box_left + 'px','top':box_top + 'px'});


})

$("#main .container .rom .c_left .c_cover").hover(function() {
  $("#main .container .rom .c_left .cl_box").css('display', 'block');
  $("#main .container .rom .c_left .cr_img").css('display', 'block');
}, function() {
  $("#main .container .rom .c_left .cl_box").css('display', 'none');
  $("#main .container .rom .c_left .cr_img").css('display', 'none');
});




$("#main .details .details_tab .container ul li").click(function(event) {
  var z = $(this).index();
  $("#top .hidenav .hidenav_nav ul li").eq(z).css('border-bottom', '2px solid #00c3f5').siblings('li').css('border-bottom', '0px');
  $("#top .hidenav .hidenav_nav ul li").eq(z).find('a').css('color', '#00c3f5');
  $("#top .hidenav .hidenav_nav ul li").eq(z).siblings('li').find('a').css('color', '#333');

  $("#main .details .d_content img").eq(z).css('display', 'block').siblings('img').css('display', 'none');

  $(this).css('border-bottom', '2px solid #00c3f5').siblings('li').css('border-bottom', '0px');
  $(this).find('a').css('color', '#00c3f5')
  $(this).siblings('li').find('a').css('color', '#333');
});


$("#top .hidenav .hidenav_nav ul li").click(function(event) {
  var z = $(this).index();
  $("#main .details .details_tab .container ul li").eq(z).css('border-bottom', '2px solid #00c3f5').siblings('li').css('border-bottom', '0px');
  $("#main .details .details_tab .container ul li").eq(z).find('a').css('color', '#00c3f5');
  $("#main .details .details_tab .container ul li").eq(z).siblings('li').find('a').css('color', '#333');

  $("#main .details .d_content img").eq(z).css('display', 'block').siblings('img').css('display', 'none');

  $(this).css('border-bottom', '2px solid #00c3f5').siblings('li').css('border-bottom', '0px');
  $(this).find('a').css('color', '#00c3f5')
  $(this).siblings('li').find('a').css('color', '#333');
});
