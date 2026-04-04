document.getElementById("btnCompare").addEventListener("click",function(){
    debugger;
    var name1=document.getElementById("txtName1").value;
    var name2=document.getElementById("txtName2").value;
    if(name1.toUpperCase().trim()==name2.toUpperCase().trim()){
        document.getElementById("pResult").innerHTML="Both names are same";
    }   
    else{
        document.getElementById("pResult").innerHTML="Both names are different";
    }
});
