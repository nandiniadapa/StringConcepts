document.getElementById("btncount").addEventListener("click",function(){
    debugger;
    var inputText=document.getElementById("txtStringName").value;
   var count=document.getElementById("txtRepeatCount").value; 

    document.getElementById("pResult").innerHTML=inputText.repeat(count);

});
