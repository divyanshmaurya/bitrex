var cArray = ["#algoholics", "#quriosity", "#scavengers", "#hack", "#homepage", "#ninja", "#launchpad", "#gaming"];
var chk = 0
$("a").click(function () {
    var flag = 0
    for (var i = cArray.length - 1; i >= 0; i--) {
        if (cArray[i] === ("#" + this.id)) {
            var url = 'contest.html?conid=' + cArray[i] + '&id=' + i;
            flag = 1;
            break;
        }

    }
    if (flag == 1) {
        window.location = url;
    }
    x = i + 1;

});

function onloadFunc() {
    var url = document.location.href;

    var params = url.split('?')[1];
    console.log(params);
    if (params === undefined || params === '') {
        $("#1").addClass('active');
        $('#algoholics').addClass('active');
    } else {
        params = params.split('&');
        var data = {}, tmp, x, y;
        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            x = tmp[0];
            data[tmp[0]] = tmp[1];
        }
        if (data) {
            var z = Number(data.id) + 1;
            var y = "#" + z;
            $(y).addClass('active');
            $(data.conid).addClass('active');
        }
    }

}
var cs_info = 1;
function cs_add_fields() {
    if (cs_info >= 5) {
        $("#cs_more_fields").hide();
    } else {
        $("#cs_less_fields").show();
        var objTo = document.getElementById('cs_additionalFields');
        var divtest = document.createElement("div");
        var x = cs_info + 1;
        if (cs_info == 1) {
            $("#csfirstmember").prepend('<div class="col-md-12 form-group row" style="margin-top: 20px;margin-left:5px;" id="csteam"><label for="example-text-input" class="col-2 col-form-label">Team-Name</label><div class="col-10"><input class="form-control" type="text" placeholder="Name of the Team" id="example-text-input"></div></div>');
        }
        divtest.innerHTML = '<div class="form-group row" style="margin-top: 20px;" id="cs"><label for="example-text-input" class="col-2 col-form-label">Participant ' + x + '</label><div class="col-10"><input class="form-control" type="text" placeholder="Name of the participant" id="example-text-input"></div></div>';
        console.log(divtest.innerHTML);
        objTo.appendChild(divtest);
        cs_info++;
        if (cs_info >= 5) {
            $("#cs_more_fields").hide();
        }
    }
}
function cs_remove_fields() {
    if (cs_info == 1) {
        $("#cs_less_fields").hide();
        $('div#csteam').remove();
    } else {
        $("#cs_more_fields").show();
        $('div#cs:last').remove();
        cs_info--;
        if (cs_info == 1) {
            $("#cs_less_fields").hide();
            $('div#csteam').remove();
        }
    }

}
var cod_info = 1;
function cod_add_fields() {
    if (cod_info >= 5) {
        $("#cod_more_fields").hide();
    } else {
        $("#cod_less_fields").show();
        var objTo = document.getElementById('cod_additionalFields');
        var divtest = document.createElement("div");
        var x = cod_info + 1;
        if (cod_info == 1) {
            $("#codfirstmember").prepend('<div class="col-md-12 form-group row" style="margin-top: 20px;margin-left:5px;" id="codteam"><label for="example-text-input" class="col-2 col-form-label">Team-Name</label><div class="col-10"><input class="form-control" type="text" placeholder="Name of the Team" id="example-text-input"></div></div>');
        }
        divtest.innerHTML = '<div class="form-group row" style="margin-top: 20px;" id="cod"><label for="example-text-input" class="col-2 col-form-label">Participant ' + x + '</label><div class="col-10"><input class="form-control" type="text" placeholder="Name of the participant" id="example-text-input"></div></div>';
        console.log(divtest.innerHTML);
        objTo.appendChild(divtest);
        cod_info++;
        if (cod_info >= 5) {
            $("#cod_more_fields").hide();
        }
    }
}
function cod_remove_fields() {
    if (cod_info == 1) {
        $("#cod_less_fields").hide();
        $('div#codteam').remove();
    } else {
        $("#cod_more_fields").show();
        $('div#cod:last').remove();
        cod_info--;
        if (cod_info == 1) {
            $("#cod_less_fields").hide();
            $('div#codteam').remove();
        }
    }
}


var l_info = 1;
function l_add_fields() {
    if (l_info >= 5) {
        $("#l_more_fields").hide();
    } else {
        $("#l_less_fields").show();
        var objTo = document.getElementById('l_additionalFields');
        var divtest = document.createElement("div");
        var x = l_info + 1;
        divtest.innerHTML = '<div class="form-group row l" style="margin-top: 20px;"><label for="launch-email-' + x + '" class="col-2 col-form-label">Participant ' + x + '</label><div class="col-10"><input class="form-control" type="text" placeholder="Email ID" id="launch-email-' + x + '"></div></div>';
        console.log(divtest.innerHTML)
        objTo.appendChild(divtest);
        l_info++;
        if (l_info >= 5) {
            $("#l_more_fields").hide();
        }
    }
}
function l_remove_fields() {
    if (l_info == 1) {
        $("#l_less_fields").hide();

    } else {
        $("#l_more_fields").show();
        $('div.l:last').remove();
        l_info--;
        if (l_info == 1) {
            $("#l_less_fields").hide();

        }
    }

}
var info = 1;
function add_fields() {
    if (info >= 3) {
        $("#more_fields").hide();
    } else {
        $("#less_fields").show();
        var objTo = document.getElementById('additionalFields');
        var divtest = document.createElement("div");
        var x = info + 1;
        divtest.innerHTML = '<div class="form-group row p" style="margin-top: 20px;"><label for="homepage-email-' + x + '" class="col-2 col-form-label">Participant ' + x + '</label><div class="col-10"><input class="form-control" type="text" placeholder="Email ID" id="homepage-email-' + x + '"></div></div>';
        console.log(divtest.innerHTML);
        objTo.appendChild(divtest);
        info++;
        if (info >= 3) {
            $("#more_fields").hide();

        }
    }
}
function remove_fields() {
    if (info == 1) {
        $("#less_fields").hide();
    } else {
        $("#more_fields").show();
        $('div.p:last').remove();
        info--;
        if (info == 1) {
            $("#less_fields").hide();

        }
    }

}




