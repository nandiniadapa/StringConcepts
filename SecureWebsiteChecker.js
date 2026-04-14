document.getElementById("btnCheck").addEventListener("click", function () {
    debugger;
    var stringName = document.getElementById("txtStringName").value;
    if (stringName.startsWith("http")) {
        document.getElementById("pResult").innerHTML = "it is a securedsite";
    } else {
        document.getElementById("pResult").innerHTML = "it is not a securedsite"

    }
});