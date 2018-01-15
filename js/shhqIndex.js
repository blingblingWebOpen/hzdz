  function onfuskm(os){
  
  var tpskm=document.getElementById("tpskm");
  var yyskm=document.getElementById("yyskm");
  var cmskm=document.getElementById("cmskm");

  var tps1km=document.getElementById("tps1km");
  var yys1km=document.getElementById("yys1km");
  var cms1km=document.getElementById("cms1km");
    var iframelogin=document.getElementById("iframelogin");


  if(os=="tpskm"){
    tpskm.style.display="block";
    yyskm.style.display="none";
        iframelogin.style.display="none";
    tps1km.className="con";
    yys1km.className="mail";
    cms1km.className="mail";
  }

  if(os=="yyskm"){
      tpskm.style.display="none";
    yyskm.style.display="block";
        iframelogin.style.display="block";
    tps1km.className="mail";
    yys1km.className="con";
    cms1km.className="mail";
  }
  
  if(os=="cmskm")
  {
    tps1km.className="mail";
    yys1km.className="mail";
    cms1km.className="con";
  }
  }


function onfuskm_video(os,obj){
  
  var hqsp=document.getElementById("hqsp");
  var xcc=document.getElementById("xcc");
        var swb=document.getElementById("swb");

  var hqsp1=document.getElementById("hqsp1");
  var xcc1=document.getElementById("xcc1");
        var swb1=document.getElementById("swb1");

  if(os=="hqsp"){
    hqsp.style.display="block";
    xcc.style.display="none";
                swb.style.display="none";
    hqsp1.className="con";
    xcc1.className="mail";
                swb1.className="mail";
  }

  if(os=="xcc"){
          hqsp.style.display="none";
    xcc.style.display="block";
                swb.style.display="none";
    hqsp1.className="mail";
    xcc1.className="con";
                swb1.className="mail";
  }
if(os=="swb"){
          hqsp.style.display="none";
    xcc.style.display="none";
                swb.style.display="block";
    hqsp1.className="mail";
    xcc1.className="mail";
                swb1.className="con";
  
         }  
  }

  function onfu(os){
  
  var tp=document.getElementById("tp");
  var yy=document.getElementById("yy");

  var tp1=document.getElementById("tp1");
  var yy1=document.getElementById("yy1");

  if(os=="tp"){
    tp.style.display="block";
    yy.style.display="none";
    tp1.className="xxk1";
    yy1.className="xxk2";

  }

  if(os=="yy"){
      tp.style.display="none";
    yy.style.display="block";
    tp1.className="xxk2";
    yy1.className="xxk1";

  }
  }
  
   function onfuzs(os){
  
  var tpzs=document.getElementById("tpzs");
  var yyzs=document.getElementById("yyzs");

  var tp1zs=document.getElementById("tp1zs");
  var yy1zs=document.getElementById("yy1zs");

  if(os=="tpzs"){
    tpzs.style.display="block";
    yyzs.style.display="none";
    tp1zs.className="xxk1";
    yy1zs.className="xxk2";
  }

  if(os=="yyzs"){
      tpzs.style.display="none";
    yyzs.style.display="block";
    tp1zs.className="xxk2";
    yy1zs.className="xxk1";
  }
  }
  function onfuz(os){
  
  var tp=document.getElementById("tp");
  var yy=document.getElementById("yy");

  var tp1=document.getElementById("tp1");
  var yy1=document.getElementById("yy1");

  if(os=="tp"){
    tp.style.display="block";
    yy.style.display="none";
    tp1.className="xxk1";
    yy1.className="xxk2";
  }

  if(os=="yy"){
      tp.style.display="none";
    yy.style.display="block";
    tp1.className="xxk2";
    yy1.className="xxk1";
  }
  }
  
    function onfus(os){
  
  var tps=document.getElementById("tps");
  var yys=document.getElementById("yys");

  var tp1s=document.getElementById("tp1s");
  var yy1s=document.getElementById("yy1s");

  if(os=="tps"){
    tps.style.display="block";
    yys.style.display="none";
    tp1s.className="xxk1";
    yy1s.className="xxk2";

  }

  if(os=="yys"){
      tps.style.display="none";
    yys.style.display="block";
    tp1s.className="xxk2";
    yy1s.className="xxk1";

  }
  }
  
    function onfuw(os){
  
  var tpw=document.getElementById("tpw");
  var yyw=document.getElementById("yyw");
  var ytw=document.getElementById("ytw");
  var lbw=document.getElementById("lbw");
  var sxw=document.getElementById("sxw");

  var tp1w=document.getElementById("tp1w");
  var yy1w=document.getElementById("yy1w");
  var yt1w=document.getElementById("yt1w");
  var lb1w=document.getElementById("lb1w");
  var sx1w=document.getElementById("sx1w");

  if(os=="tpw"){
    tpw.style.display="block";
    yyw.style.display="none";
    ytw.style.display="none";
    lbw.style.display="none";
    sxw.style.display="none";
    tp1w.className="xxk1";
    yy1w.className="xxk2";
    yt1w.className="xxk2";
    lb1w.className="xxk2";
    sx1w.className="xxk2";

  }

  if(os=="yyw"){
      tpw.style.display="none";
    yyw.style.display="block";
    ytw.style.display="none";
    lbw.style.display="none";
    sxw.style.display="none";

    tp1w.className="xxk2";
    yy1w.className="xxk1";
    yt1w.className="xxk2";
    lb1w.className="xxk2";
    sx1w.className="xxk2";


  }
  if(os=="ytw"){
      tpw.style.display="none";
    yyw.style.display="none";
    ytw.style.display="block";
    lbw.style.display="none";
    sxw.style.display="none";
    tp1w.className="xxk2";
    yy1w.className="xxk2";
    yt1w.className="xxk1";
    lb1w.className="xxk2";
    sx1w.className="xxk2";
  }
    if(os=="lbw"){
      tpw.style.display="none";
    yyw.style.display="none";
    ytw.style.display="none";
    lbw.style.display="block";
    sxw.style.display="none";
    tp1w.className="xxk2";
    yy1w.className="xxk2";
    yt1w.className="xxk2";
    lb1w.className="xxk1";
    sx1w.className="xxk2";
  }
  if(os=="sxw"){
      tpw.style.display="none";
    yyw.style.display="none";
    ytw.style.display="none";
    lbw.style.display="none";
    sxw.style.display="block";
    tp1w.className="xxk2";
    yy1w.className="xxk2";
    yt1w.className="xxk2";
    lb1w.className="xxk2";
    sx1w.className="xxk1";
  }

  }
  
  
  
  
  
   function onfua(os){
  
  /*var tpa=document.getElementById("tpa");
  var yya=document.getElementById("yya");
  var yyb=document.getElementById("yyb");
  var yyc=document.getElementById("yyc");
  var yyd=document.getElementById("yyd");
  var yye=document.getElementById("yye");*/
  var yyf=document.getElementById("yyf");
  var yyg=document.getElementById("yyg");
  /*var yyh=document.getElementById("yyh");
  var yyk=document.getElementById("yyk");*/

  /*var tpa1=document.getElementById("tpa1");
  var yya1=document.getElementById("yya1");
  var yyb1=document.getElementById("yyb1");
  var yyc1=document.getElementById("yyc1");
  var yyd1=document.getElementById("yyd1");
  var yye1=document.getElementById("yye1");*/
  var yyf1=document.getElementById("yyf1");
  var yyg1=document.getElementById("yyg1");
  /*var yyh1=document.getElementById("yyh1");
  var yyk1=document.getElementById("yyk1");*/

  
  if(os=="yyf"){
    /*tpa.style.display="none";
    yya.style.display="none";
    yyb.style.display="none";
    yyc.style.display="none";
    yyd.style.display="none";
    yye.style.display="none";*/
    yyf.style.display="block";
    yyg.style.display="none";
    /*yyh.style.display="none";
    yyk.style.display="none";*/
    
    /*tpa1.className="xxk4";
    yya1.className="xxk4";
    yyb1.className="xxk4";
    yyc1.className="xxk4";
    yyd1.className="xxk4";
    yye1.className="xxk4";*/
    yyf1.className="xxk1";
    yyg1.className="xxk2";
    /*yyh1.className="xxk4";
    yyk1.className="xxk4";*/

  }
  if(os=="yyg"){
    
    yyf.style.display="none";
    yyg.style.display="block";
    /*yyh.style.display="none";
    yyk.style.display="none";*/
    
    
    yyf1.className="xxk2";
    yyg1.className="xxk1";
    /*yyh1.className="xxk4";
    yyk1.className="xxk4";*/

  }
  
  }
  
</script>
<script language="javascript">
var m_layer1,m_layer2;
function initMove() {
 m_layer1=document.getElementById("AdLayer1");
 m_layer1.style.top = "-200px";
 m_layer1.style.visibility = 'visible'
 
 m_layer2=document.getElementById("AdLayer2");
 m_layer2.style.top = "-200px";
 m_layer2.style.visibility = 'visible'
 MoveLayers();
 window.onscroll=MoveLayers;
}
function MoveLayers() {
 var x = 10; // 左右边距
 var y = 250; // 顶距

 var st=document.documentElement.scrollTop;
 var cw=document.documentElement.clientWidth;
 var y = st + y;
 m_layer1.style.top = y+"px";
 m_layer1.style.left = 8+x+"px";
 m_layer2.style.top = y+"px";
 m_layer2.style.left = cw-m_layer2.clientWidth-x+"px";
}
window.setTimeout("initMove()",600);


function hidead1()
{document.getElementById("AdLayer1").style.display="none";}
function hidead2()
{document.getElementById("AdLayer2").style.display="none";}