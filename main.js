function Bold(){
    document.getElementById("test").style.fontWeight="Bold";
}
function Italic(){
    document.getElementById("test").style.fontStyle="Italic"
}
function Underlined(){
    document.getElementById("test").style.textDecoration="Underline"
}
function done(){
var batta = document.getElementById("test1").value;
document.getElementById("test").style.fontFamily= batta;
}
function dan(){
var kalb = document.getElementById("test2").value;
document.getElementById("test").style.fontSize= kalb;
    }