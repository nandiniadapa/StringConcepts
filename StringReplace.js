document.getElementById("btnCheck").addEventListener("click",function(){
    debugger;
   var stringName=document.getElementById("txtStringName").value;
   var textWord=document.getElementById("txtword").value;
   var replace=document.getElementById("txtReplaceword").value;
   document.getElementById("pResult").innerHTML=stringName.replace(textWord,replace);
});