document.getElementById("btnEmail").addEventListener("click", function(){
    debugger;
    var email=document.getElementById("txtEmail").value;
    if( email.toLowerCase().trim()=="nnandiniadapa@gmail.com".toLowerCase().trim()){
        document.getElementById("pResult").innerHTML="Login succesfully.";
    }else{
        document.getElementById("pResult").innerHTML="Login failed.please check your email.";
    }
});

    