
$("button").click(function() {
    $("#test").CSS("fontweight","Bold");
});
$("button").click(function(){
    $("#test").CSS("fontstyle","Italic");
});
$("button").click(function(){
    $("#test").CSS("textdecoration","underline");
});
$("select").change(function(){
   var batta=$("#test1").value();
   $("#test").CSS("fontfamily",batta);
});
$("select").change(function(){
    var kalb=$("#test2").value();
    $("#test").CSS("fontsize",kalb);
 });