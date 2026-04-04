document.getElementById("btnSubstring").addEventListener("click",function(){
    debugger;
    var name = document.getElementById("txtName").value;
    var startNumber = Number(document.getElementById("txtstartNumber").value);
    var endNumber = Number(document.getElementById("txtEndNumber").value);
    document.getElementById("pResult").innerHTML = name.substring(startNumber, endNumber);

});