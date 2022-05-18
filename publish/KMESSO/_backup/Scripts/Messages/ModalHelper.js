function DisplayModal(strType, strText, strTitle) {
    //0 for Failure
    //1 For Success
    //2 For Alert
    if (strType == "0") {
        $("#modalBody img").attr("src", "./images/error.png");
        $("#PopupMessageTitle").html(strTitle);
        $("#modalBody label").html(strText).attr("style", "color:Black !important;font-weight:normal !important");
        $("#MessageModal").modal();
    }
    else if (strType == "1") {
        $("#modalBody img").attr("src", "./images/Success.png");
        $("#PopupMessageTitle").html(strTitle);
        $("#modalBody label").html(strText).attr("style", "color:Black !important;font-weight:normal !important");
        $("#MessageModal").modal();
    }
    else if (strType == "2") {
        $("#modalBody img").attr("src", "./images/atention.png");
        $("#PopupMessageTitle").html(strTitle);
        $("#modalBody label").html(strText).attr("style", "color:Black !important;font-weight:normal !important");
        $("#MessageModal").modal();
    }
}

function DisplayPasswordStrengthModal(strType, strText, strTitle) {   
    $("#PasswordStrengthPopupMessageTitle").html(strTitle);
    $("#PasswordStrengthModal").modal();
  
    }
