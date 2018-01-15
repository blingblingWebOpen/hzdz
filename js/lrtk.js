/*微博中*/
function jQueryaa(e) {return document.getElementById(e);}


document.getElementsByClassName = function(cl) {
    var retnode = [];
    var myclass = new RegExp('\\b'+cl+'\\b');
    var elem = this.getElementsByTagName('*');
    for (var i = 0; i < elem.length; i++) {
        var classes = elem[i].className;
        if (myclass.test(classes)) retnode.push(elem[i]);
    }
    return retnode;
}



var MyMar;
var speed = 1; //速度，越大越慢
var spec = 135; //每次滚动的间距, 越大滚动越快
var ipath = 'images/'; //图片路径
var thumbs = document.getElementsByClassName('thumb_img');
var ints=$("#showArea ul").children().length-1;
var int;
//for (var i=0; i<thumbs.length; i++) {
//    thumbs[i].onmouseover = function () {jQueryaa('main_img').src=this.rel; jQueryaa('main_img').link=this.link;};
//    thumbs[i].onclick = function () {location = this.link}
//}
//
//jQueryaa('main_img').onclick = function () {location = this.link;}



jQueryaa('gotop').onmousedown = function() {this.src = ipath + 'gotop2.png'; MyMar=setTimeout(gotop,speed);}
jQueryaa('gotop').onmouseup = function() {this.src = ipath + 'gotop.png'; clearInterval(MyMar);}
jQueryaa('gobottom').onmousedown = function() {this.src = ipath + 'gobottom2.png'; MyMar=setTimeout(gobottom,speed);}
jQueryaa('gobottom').onmouseup = function() {this.src = ipath + 'gobottom.png'; clearInterval(MyMar);}
function gotop() {jQueryaa('showArea').scrollTop-=spec;
}
function gobottom() {
if(jQueryaa('showArea').scrollTop>=540)
{
	
	jQueryaa('showArea').scrollTop=0;
	this.src = ipath + 'gotop.png'; clearInterval(MyMar);
	this.src = ipath + 'gotop2.png'; MyMar=setTimeout(gotop,speed);
}	
jQueryaa('showArea').scrollTop+=spec;
}
//window.onload=function() {this.src = ipath + 'gobottom.png'; int=setInterval(gobottom,2000);};

jQueryaa('gotop').onmouseover=function(){clearInterval(int);};
jQueryaa('gobottom').onmouseover=function(){clearInterval(int);};
//jQueryaa('gotop').onmouseout=function() {this.src = ipath + 'gotop.png'; int=setInterval(gobottom,2000);};
//jQueryaa('gobottom').onmouseout=function() {this.src = ipath + 'gobottom.png'; int=setInterval(gobottom,2000);};
