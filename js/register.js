$(document).ready(function () {
   $(document).on('click','#submit-register',function (e) {
       e.preventDefault();
       var regtype=1;
       var style='logo on white';
       var isISC=$("#isc").is(':checked') ? 1 : 0;
       var size=$('#register-tshirt-size').val();
       var info={
                    name:$('#register-name').val(),
                    email:$('#register-email').val(),
                    phone:$('#register-phone').val(),
                    college:$('#register-college').val(),
                    university:$('#register-university').val(),
                    course:$('#register-course').val(),
                    regtype:regtype,
                    address:$('#register-address').val(),
                    style:style ,
                    size:size,
                    isISC:isISC
       };
       info=JSON.stringify(info);
      // console.log(info);
       //registerFest(info);
   })
});
var registerFest = function(info){
    $.ajax({
        url:"Register.php",
        type:"post",
        data:info,
        async:true,
        success:function(response){
            //alert(response);
            console.log(response);
            /* jsondata=$.parseJSON(response);
             if(jsondata.result === 0){
             alert('Available');
             }else{
             alert('Already Taken');
             }*/
        },
        error: function(response, status, errorThrown) {
            console.log(response+status);
            alert(response) ; //result from server if error occured
            alert(errorThrown);  //error code
        },
        cache: false,
        contentType: false,
        processData: false
    });
};
