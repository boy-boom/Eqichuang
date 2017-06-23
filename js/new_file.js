window.onload=function(){

//轮播图开始
	var index=0;
	$(".btn ul li").click(function(){
		
	    index=$(this).index();
	
	$(".btn ul li").eq(index).css({"background-color":"#FFF"})
	.siblings().css({"background-color":"#BEBEC0"})

	//alert(index)
	play(index);
});

function play(index){
	$(".str").children().eq(index).fadeIn(400).siblings().fadeOut(400)
}

function autoplay(){
	setInterval(function(){
		index++;
		if(index==3){
			index=0;
		}
		
		$(".btn ul li").eq(index).css({"background-color":"#FFF"})
	.siblings().css({"background-color":"#BEBEC0"})
		
		play(index);
	},3000);
};

autoplay();

//轮播图结束



//中间页面切换
/*$(".container-left-top ul li:first").css({"background-color":"#FFF","color":"#333"})*/
var indexs=0;
$(".container-left-top ul li").mouseover(function(){
	
	indexs=$(this).index();
	
	$(".container-left-top ul li").eq(indexs).css({"background-color":"#FFF"}).children().css("color","#000")
	.end().siblings().css({"background-color":"#2486F9"}).children().css("color","#FFF");
	
	huanli(indexs);
});

function huanli(indexs){
	
	$(".container-left-middle").eq(indexs).addClass("on").siblings().removeClass("on");
	
};



};
