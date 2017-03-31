$(document).ready(function (e) {
    $(document).on('blur', '#quiz-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#quiz-team-name').val()}));
    });
    $(document).on('blur', '#hunt-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#hunt-team-name').val()}));
    });
    $(document).on('blur', '#csgo-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#csgo-team-name').val()}));
    });
    $(document).on('blur', '#cod-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#cod-team-name').val()}));
    });
    $(document).on('blur', '#launch-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#launch-team-name').val()}));
    });
    $(document).on('blur', '#homepage-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#homepage-team-name').val()}));
    });
});
var checkTeamName = function (info) {
    $.ajax({
        url: "CheckTeamNameExists.php",
        type: "post",
        data: info,
        async: true,
        success: function (response) {
            // alert(response);
            console.log(response);
            jsondata = $.parseJSON(response);
            if (jsondata.result === 0) {
                alert('Available');
            } else {
                alert('Already Taken');
            }
        },
        error: function (response, status, errorThrown) {
            console.log(response + status);
            alert(response); //result from server if error occured
            alert(errorThrown);  //error code
        },
        cache: false,
        contentType: false,
        processData: false
    });
};