document.getElementById("btnUppercase").addEventListener("click", function () {
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.toUpperCase();
});

document.getElementById("btnLowercase").addEventListener("click", function () {
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.toLowerCase();
});

document.getElementById("btnTrim").addEventListener("click", function () {
    
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.trim();
});

document.getElementById("btntrimstart").addEventListener("click", function () {
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.trimStart();
});

document.getElementById("btntrimEnd").addEventListener("click", function () {
    debugger;
    var name = document.getElementById("txtName").value;
    document.getElementById("pResult").innerHTML = name.trimEnd();
});


