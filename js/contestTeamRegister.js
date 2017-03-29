var registerTeamEvent=function (info){
    $.ajax({
        url:"RegisterTeamEvents.php",
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



