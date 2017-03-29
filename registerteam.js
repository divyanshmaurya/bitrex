$(document).ready(function(e){
        $(document).on('blur',"#teamName",function(e){
            var info={teamName:$("#teamName").val()}
            info=JSON.stringify(info);
            //alert(info);
            checkTeamName(info);
        });
        $(document).on('click',"#submit",function(e){
            e.preventDefault();
            var info={  
                        teamName:$("#teamName").val(),
                        eventName:$("#eventName").val(),
                        noOfParticipants:$("#noOfParticipants").val(),
                        emails:[]                            
                     };
            for(var i=1; i <= $("#noOfParticipants").val();i++){
                info.emails.push({email:$("#email"+i).val()});
            }
            info=JSON.stringify(info);
            registerTeam(info);
        });
});
var checkTeamName=function(info){
    $.ajax({
        url:"CheckTeamNameExists.php",
        type:"post",
        data:info,
        async:true,
        success:function(response){
           // alert(response);
            jsondata=$.parseJSON(response);
            if(jsondata.result === 0){
                alert('Available');
            }else{
                alert('Already Taken');
            }
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
var registerTeam=function(info){
    $.ajax({
        url:"RegisterTeamEvents.php",
        type:"post",
        data:info,
        async:true,
        success:function(response){
            alert(response);
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
