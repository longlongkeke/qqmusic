window.onload=choosePict;
	var theAd=0;
  	var myPix=new Array(
    "photos/li.jpg",
    "photos/zhang.jpg",
    "photos/zhou.jpg",
    "photos/lin.jpg",
    "photos/deng.jpg",
    "photos/wangsulong.jpg",
    "photos/xue.jpg",
    "photos/pan.jpg",
    "photos/singer1.png",
    "photos/singer2.png",
    "photos/singer3.png",
    "photos/singer4.png",
    "photos/singer5.png",
    "photos/singer6.png",
    "photos/singer7.png",
    "photos/singer8.png",
	  );
  function choosePict(){
    var elmg=document.getElementsByClassName("adBanner1");
    for(var i=0;i<elmg.length; i++) {
    theAd=Math.floor (Math.random()*myPix.length);
    elmg[i].src=myPix[theAd];
    }
    rotate();
  }

  function rotate(){
  var elmg=document.getElementsByClassName("adBanner1");
  for(var i=0;i<elmg.length; i++) {
    theAd=Math.floor (Math.random()*myPix.length);
    elmg[i].src=myPix[theAd];
    theAd++;
    if(theAd == myPix.length){
    theAd=0;
  }
      }
  setTimeout(rotate,3*1000);
    }

// JavaScript Document