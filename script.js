var temp=0;

$(document).ready(function(){   
    $(".bdy").keydown(function(event)
    {
        
        var x = event.which, stg = String.fromCharCode(x);
        if(x==48||x==96)
        $("#bt0").addClass("bt");
        if(x==49||x==97)
        $("#bt1").addClass("bt");
        if(x==50||x==98)
        $("#bt2").addClass("bt");
        if(x==51||x==99)
        $("#bt3").addClass("bt");
        if(x==52||x==100)
        $("#bt4").addClass("bt");
        if(x==53||x==101)
        $("#bt5").addClass("bt");
        if(x==54||x==102)
        $("#bt6").addClass("bt");
        if(x==55||x==103)
        $("#bt7").addClass("bt");
        if(x==56||x==104)
        $("#bt8").addClass("bt");
        if(x==57||x==105)
        $("#bt9").addClass("bt");
        if(x==110||x==190)
        $("#btdot").addClass("bt");
        if(x==13)
        $("#bteq").addClass("bt");
        if(x==8)
        $("#btbs").addClass("btx");
        if(x==67)
        $("#btclr").addClass("btx");
        if(x==106)
        $("#btmtp").addClass("btx");
        if(x==107)
        $("#btadd").addClass("btx");
        if(x==109)
        $("#btsub").addClass("btx");
        if(x==111)
        $("#btdiv").addClass("btx");
});
$(".bdy").keyup(function()
{
    $("#bt0").removeClass("bt");
    $("#bt1").removeClass("bt");
    $("#bt2").removeClass("bt");
    $("#bt3").removeClass("bt");
    $("#bt4").removeClass("bt");
    $("#bt5").removeClass("bt");
    $("#bt6").removeClass("bt");
    $("#bt7").removeClass("bt");
    $("#bt8").removeClass("bt");
    $("#bt9").removeClass("bt");
    $("#btdot").removeClass("bt");
    $("#bteq").removeClass("bt");
    $("#btbs").removeClass("btx");
    $("#btclr").removeClass("btx");
    $("#btmtp").removeClass("btx");
    $("#btadd").removeClass("btx");
    $("#btsub").removeClass("btx");
    $("#btdiv").removeClass("btx");
    });
});

function getin(val) 
{ 
    document.getElementById("rslt").value+=val 
}  

function calc() 
{ 
    var x = document.getElementById("rslt").value
    var y = eval(x) 
    document.getElementById("rslt").value = y 
} 

function clrall() 
{ 
    document.getElementById("rslt").value = "" 
}

function backspace()
{
    var dlt  = document.getElementById('rslt').value;
    document.getElementById('rslt').value=dlt.substring(0,dlt.length -1);
}

function key1(event)
{
    var x = event.which, stg = String.fromCharCode(x);
    if(x == 67)
    {
    clrall();
    }
    else if(x == 8)
    {
    backspace(); 
    }
}

function key(event) {
    var x = event.which, stg = String.fromCharCode(x);
    if(x==13){
        calc();  
    }
    console.log("x="+x+" temp="+temp)
    if(x >39 && x<61 && x!=44 && x!=59 && x!=58 && x!=60 && x!=46){
        getin(stg);
        if(x==41 || x==40 || x==47 || x==42 || x==45 || x==43 || x==13)
        {
            temp=0;
        }
    }
    if(x==46 && temp==0){
        getin(stg);
        temp++;
    }
    else
        document.getElementById("rslt").value += "";
}

function cprslt()
{
    var copyTextarea = document.getElementById("rslt");
    copyTextarea.select();
    document.execCommand("copy");
    alert("Text copied!")
}