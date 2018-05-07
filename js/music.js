
$(document).ready(function(){
	var w=$(window).width();
	var h=$(window).height();
	$(".ceng").css({width:w+"px",height:h+"px"});
	$("#form").css({left:(w-561)/2+"px",top:(h-411)/2+"px"});
	$('#btn').click(function(){
		$('#form').css({display:"block"});
		$(".ceng").css({display:"block"});
	});
	$('#across').click(function(){
		$('#form').css({display:"none"});
		$(".ceng").css({display:"none"});
	});
    //setTimeout(function(){
		
		//document.getElementById("div_two").getElementsByTagName("h1");
		//console.log(oh1.style.display);
		//oh1.style.display='block' }, 3000);
	$("#div_two h1").css('display','none').fadeIn(3000);
	$("#div_two p").css('display','none').fadeIn(6000);
	//2.使用事件处理程序写出：当username文本框获得焦点，调用tipUsername函数
	$('#username').focus(function() {
	                //改变id为feedback的元素class属性值
	$('#feedback').html('用户名应大于5个字符' ); //改变id为feedback的元素的内容
  });
  //3.使用事件监听器写出：当username文本框失去焦点，调用checkUsername函数
	$('#username').blur(function () {
	var username = this.value;             // 存储username文本框里的值
	if (username.length < 5) {           // 假如username值长度小于5
	  $('#feedback').html('<img src="images/error.png.png" width="16" height="16">'+'长度小于5个字符，请重新输入');// 改变id为feedback的元素的内容
    $('#username').focus(); //Firefox中无作用
	} else {                             
	  $('#feedback').html('输入正确'); 
	}
  });
	$('#password').focus(function (){
		$('#feeddown').html('密码必须包括数字，字母，下划线并且为6-12位');
	});
	$('#password').blur(function (){
	  var password=this.value;
	  var right=/^\w{6,12}$/;
	  if (right.test(password)) { 
		$('#feeddown').html('输入正确');
    $('#password').focus(); //Firefox中无作用
	} else {                             
	  $('#feeddown').html('格式不正确');
	}
	});
	

});// JavaScript Document