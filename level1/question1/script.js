//Use RegEx to validate form

function submitForm(){

    var nameInput = /^[a-zA-Z]+$/;
    var numberInput = /^[0-9]{8,10}$/;
    var emailInput = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
    
    var firstname = document.getElementById("firstName").value;
    var lastname = document.getElementById("lastName").value; 
    var email = document.getElementById("emailAddy").value;
    var number = document.getElementById("phoneNumber").value;
    
    
    (function validateFirstName(){
        
        if(firstname.match(nameInput)){
            document.getElementById("firstnameoutput").innerHTML = " Valid name entered ";
        }
        else{
            document.getElementById("firstnameoutput").innerHTML = " Please enter a valid First Name ";
        }
    })();
    
    (function validateLastName(){
        
        if(lastname.match(nameInput)){
           document.getElementById("lastnameoutput").innerHTML = "Valid Last Name entered";
          
    }
    
         else{
           document.getElementById("lastnameoutput").innerHTML = " Please enter a valid Last Name ";
    }

     })();

    (function validateNumber(){
        
         if(number.match(numberInput)){
           document.getElementById("phoneoutput").innerHTML = " Valid Number entered ";
         }
         else{
           document.getElementById("phoneoutput").innerHTML = " please enter a valid phone number ";
        }
    })();

    (function validateEmail(){
        
         if(email.match(emailInput)){
           document.getElementById("emailoutput").innerHTML = " valid email entered ";
       }
         else{
           document.getElementById("emailoutput").innerHTML = " please enter a valid email ";
    }
})();
    
}