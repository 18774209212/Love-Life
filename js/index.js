window.onload=function(){
	var home_obj=document.getElementById("home");
	home_obj.onmouseover=function(){
		home_obj.style.color="orange";	
	}
	home_obj.onmouseout=function(){
		home_obj.style.color="rgba(0, 0, 0, 0.7)";
	}
}
//当鼠标进入就让字体改变颜色
function mouseoverChange(obj){
	obj.onmouseover=function(){
		obj.style.color="orange";
	}
}
function onmouseoutChange(obj){
	obj.onmouseout=function(){
		obj.style.color="rgba(0, 0, 0, 0.7)";
	}
}
