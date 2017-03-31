var regPhone= /^([987]{1}[0-9]{9})$/;
var regEmail= /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var regTeam=  /^([a-zA-Z]{1}[a-zA-Z0-9 ]{2,}\w+)$/;
var regPlainText=  /[a-z/, A-Z\-0-9]+/;
var regAddress= /[a-zA-Z ,]/;
$(document).ready(function(e){
   $(document).on('click','#submit-register',function(e){
       e.preventDefault();
        var text=$('#register-address').val();
       validateAddress(text);
   });
});
var validatePhone=function(text){
    console.log(regPhone.test(text));
    return regPhone.test(text);
};
var validateEmail=function(text){
    console.log(regEmail.test(text));
    return regEmail.test(text);
};
var validateTeamName=function(text){
    console.log(regTeam.test(text));
    return regTeam.test(text);  
};
var validateAddress=function(text){
    console.log(regTeam.test(text));
    return regAddress.test(text);
}