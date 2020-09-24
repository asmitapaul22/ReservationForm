// function emailValidation(inputtext, alertMsg){
//     var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
//     if(inputtext.value.match(emailExp)){
//     return true;
//     }else{
//     document.getElementById('p3').innerText = alertMsg;
//     inputtext.focus();
//     return false;
//     }
//     }
//     function validateEmail(emailField){
//         var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

//         if (reg.test(emailField.value) == false) 
//         {
//             alert('Invalid Email Address');
//             return false;
//         }

//         return true;

// }
function lettersOnly(input){
    var regex = /[^a-z\s]/gi;
    input.value = input.value.replace(regex,"");
}
function capitalise3(input) {
    var x = document.getElementById("child3PassportNo");
    x.value = x.value.toUpperCase();
    var regex = /[^a-z0-9]/gi;
    input.value = input.value.replace(regex,"");
  }
  function capitalise2(input) {
    var x = document.getElementById("child2PassportNo");
    x.value = x.value.toUpperCase();
    var regex = /[^a-z0-9]/gi;
    input.value = input.value.replace(regex,"");
  }
  function capitalise1(input) {
    var x = document.getElementById("child1PassportNo");
    x.value = x.value.toUpperCase();
    var regex = /[^a-z0-9]/gi;
    input.value = input.value.replace(regex,"");
  }
  function capitalise(input){
    var x = document.getElementById("passportno");
    x.value = x.value.toUpperCase();
    var regex = /[^a-z0-9]/gi;
    input.value = input.value.replace(regex,"");
  }
  function capitaliseS(input){
    var x = document.getElementById("spousePassportNo");
    x.value = x.value.toUpperCase();
    var regex = /[^a-z0-9]/gi;
    input.value = input.value.replace(regex,"");
  }
  function numbersOnly(input){
      var regex =/[^789,0-9]/gi;
      input.value = input.value.replace(regex,"");
  }
