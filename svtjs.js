function getValue(){
    var num1 = document.getElementById("ds-number").value;
    var num2 = document.getElementById("is-number1").value;
    var num3 = document.getElementById("is-number2").value;
    var num4 = document.getElementById("is-number3").value;
    var num5 = document.getElementById("sp-1").value;
    var num6 = document.getElementById("sp-2").value;
    var num7 = document.getElementById("sp-3").value;
    var num8 = document.getElementById("sp-4").value;
    var num9 = document.getElementById("math-1").value;
    var num10 = document.getElementById("math-2").value;
    var num11 = document.getElementById("math-3").value;
    var num12 = document.getElementById("phelo-1").value;
    var num13 = document.getElementById("phelo-2").value;
    var num14 = document.getElementById("phelo-3").value;
    var num15 = document.getElementById("pc-1").value;
    var num16 = document.getElementById("pc-2").value;
    var num17 = document.getElementById("pc-3").value;
    var num18 = document.getElementById("eng-1").value;
    var num19 = document.getElementById("eng-2").value;
    var num20 = document.getElementById("eng-3").value;
    var num21 = document.getElementById("ar-1").value;
    var num22 = document.getElementById("ar-2").value;
    var num23 = document.getElementById("ar-3").value;
    var num24 = document.getElementById("fr-1").value;
    var num25 = document.getElementById("fr-2").value;
    var num26 = document.getElementById("fr-3").value;
    var num27 = document.getElementById("fr-4").value;
    var num28 = document.getElementById("fr-5").value;
    var num29 = document.getElementById("svt-1").value;
    var num30 = document.getElementById("svt-2").value;
    var num31= document.getElementById("svt-3").value;
    var num32 = document.getElementById("svt-4").value;
var num1a1 = (parseInt(num1))*1;
var num1a2 = ((parseInt(num2) + parseInt(num3) + parseInt(num4))/3)*2 ;
var num1a3 = ((parseInt(num5) + parseInt(num6) + parseInt(num7))/3)*4;
var num1a4 = ((parseInt(num8) + parseInt(num9) + parseInt(num10))/3)*7;
var num1a5 = ((parseInt(num11) + parseInt(num12) + parseInt(num13))/3)*2;
var num1a6 = ((parseInt(num14) + parseInt(num15) + parseInt(num16) + parseInt(num17))/4)*5;
var num1a7 = ((parseInt(num18) + parseInt(num19) + parseInt(num20))/3)*2;
var num1a8 = ((parseInt(num21) + parseInt(num22) + parseInt(num23))/3)*2;
var num1a9 = ((parseInt(num24) + parseInt(num25) + parseInt(num26) + parseInt(num27) + parseInt(num28))/5)*4;
var num1a10 = ((parseInt(num29) +parseInt(num30) + parseInt(num31) + parseInt(num32))/4)*7;
var moaaddal = (parseInt(num1a1)+parseInt(num1a2)+parseInt(num1a3)+parseInt(num1a4)+parseInt(num1a5)+parseInt(num1a6)+parseInt(num1a7)+parseInt(num1a8)+parseInt(num1a9)+parseInt(num1a10))/36;
if(moaaddal < 10){
    document.getElementById("rs").innerText = "غير ناجح";
    document.getElementById("rs").style.color = "red";
    document.getElementById("rs").style.border = " solid red";
    document.getElementById("num-index").innerText = moaaddal.toFixed(2);
    document.getElementById("num-index").style.color = "red";
    document.getElementById("num-index").style.border = " solid red";
    
}else if(moaaddal >= 10 && moaaddal <= 20){
    document.getElementById("rs").innerText = "ناجح"
    document.getElementById("rs").style.color = "green";
    document.getElementById("rs").style.border = " solid green";
    document.getElementById("num-index").innerText = moaaddal.toFixed(2);
    document.getElementById("num-index").style.color = "green";
    document.getElementById("num-index").style.border = " solid green";
}else{
    document.getElementById("rs").innerText = "خطأ!";
    document.getElementById("rs").style.color = "red";
    document.getElementById("rs").style.border = " solid red";
    document.getElementById("num-index").innerText = moaaddal.toFixed(2);
    document.getElementById("num-index").style.color = "red";
    document.getElementById("num-index").style.border = " solid red";

}
};
    
