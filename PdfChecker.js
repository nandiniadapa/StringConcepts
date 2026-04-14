document.getElementById("btnpdfchecker").addEventListener("click",function(){
    debugger;
     var filename= document.getElementById("txtFilename").value;
     if(filename.endsWith(".pdf"))  {
        document.getElementById("pResult").innerHTML="it is a Pdf"
        
     }else{
        document.getElementById("pResult").innerHTML="it is not a pdf"
     }

    })
     
    
