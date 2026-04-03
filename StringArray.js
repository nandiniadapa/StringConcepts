document.getElementById("btnPrint").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value
    document.getElementById("pResult").innerHTML=name[1];
    document.getElementById("pLength").innerHTML=name.length;
    document.getElementById("pLastletter").innerHTML=name[name.length-1];
     document.getElementById("Result").innerHTML=name[0]+","+name[1]+" ,"+name[2]+","+name[3]+","+name[4]+",";

});