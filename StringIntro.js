document.getElementById("btnSubmit").addEventListener("click",function(){
    debugger;
   var Firstname=document.getElementById("txtFirstname").value
   var Lastname=document.getElementById("txtLastname").value
   var Email=document.getElementById("txtEmail").value
    
//    alert(Firstname);
//    alert(Lastname);
//    alert(Email);
//    alert( Firstname + '  '+ Lastname + '  ' +Email);
//    document.getElementById("pResult").innerHTML=("My First name is " +  Firstname +" , My Last name is " + Lastname +", My Email is "+  Email  + ' . ');

   document.getElementById("pResult").innerHTML=`My First name is ${Firstname} , My Last name is ${Lastname } , My Email is ${Email} . `;


});