document.getElementById("btnSplit").addEventListener("click",function(){
    debugger;
    var stringName=document.getElementById("txtStringName").value;
    document.getElementById("pResult").innerHTML=stringName.split(".")[0];
    document.getElementById("pResult1").innerHTML=stringName.split(".")[1];
});