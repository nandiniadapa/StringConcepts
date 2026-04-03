document.getElementById("btnUppercase").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML=name.toUpperCase();
});
   document.getElementById("btnLowercase").addEventListener("click",function(){
    debugger;
    var name=document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML=name.toLowerCase();
   });