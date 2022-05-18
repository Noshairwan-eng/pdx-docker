function DisplayModal(strType, strText, strLink) {

    if (arguments.length > 2) {
        //0 for Failure
        //1 For Success
        if (strType == "0") {
            $("#modalBody img").attr("src", strLink);
            $("#modalBody label").html(strText).attr("style", "color:red !important");
            $("#MessageModal").modal();
        }
        else if (strType = "1") {
            $("#modalBody img").attr("src", strLink);
            $("#modalBody label").html(strText).attr("style", "color:green !important");
            $("#MessageModal").modal();

        }
    }
    else {
        //0 for Failure
        //1 For Success
        if (strType == "0") {
            $("#modalBody img").attr("src", "../images/error.png");
            $("#modalBody label").html(strText).attr("style", "color:red !important");
            $("#MessageModal").modal();

        }
        else if (strType = "1") {
            $("#modalBody img").attr("src", "../images/Success.png");
            $("#modalBody label").html(strText).attr("style", "color:green !important");
            $("#MessageModal").modal();

        }
    }
}

function DisplayPasswordStrengthModal() {
    $("#PasswordStrengthModal").modal();
}


function HandleServerError() {
    $("#SEModalBody img").attr("src", "../images/error.png");
    $("#SEModalBody label").html("Internal Server Error").attr("style", "color:red !important");
    $("#ServerErrorModal").modal();

}