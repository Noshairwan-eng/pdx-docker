function validatePhone(txtPhone) {
    var a = txtPhone;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function isValidEmailAddress(emailAddress) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(emailAddress);
    }

//Checking type and length of textfield
    function checkTypeandLength(length, type, id) {
    var val = $("#" + id).val();
    var Requiredval = val;
    if (val.length > length) {
        Requiredval = val.substring(0, length);
        $("#" + id).val(Requiredval);
    }
    if (type == "1") {
        Requiredval = val.replace(/\D/g, '');
        $("#" + id).val(Requiredval);
    }
}

$(function () {
    $(".numeric").select(function (event) {
        var ElementId = this.id;
        var maxlength = this.maxLength;
        $("#" + ElementId).attr('maxlength', maxlength+1);
    });
});

$(function () {
    $(".numeric").keypress(function (event) {
        //To avoid alphabet in textbox
        var element = this;
        var ElementID = element.id;
        var key = (event.which) ? event.which : event.keyCode;
        var elmenthidden = document.getElementById(ElementID + "hidden");
        var elmentmaxlength = 0;
        if (element.maxLength == elmenthidden.maxLength) {
            elmentmaxlength = element.maxLength;
        }
        else if (element.maxLength > elmenthidden.maxLength) {
            var difference = element.maxLength - elmenthidden.maxLength;
            if(difference>=1)
            {
                elmentmaxlength = element.maxLength;
                $("#" + ElementID).attr('maxlength', elmenthidden.maxLength);
            }
        }
        if (key == 46 || key == 8) {

            return true;

        }
        if (!(key >= 48 && key <= 57) && !key == 46) {

            if (key != 8 && key != 16) {

                event.returnValue = false
                if (event.preventDefault()) {
                    event.preventDefault();
                }
                //                return false;
            }
        }
        if ((key == 43 || key == 45 || key == 69 || key == 101 || key > 57 || key < 48) && (key != 8 || key != 16 || key != 13)) {

            event.returnValue = false
            if (event.preventDefault()) {
                event.preventDefault();
            }
        }


        if (this.value.length >= elmentmaxlength && key != 8 && key != 13 && key != 16) {

            event.returnValue = false
            if (event.preventDefault()) {
                event.preventDefault();
            }
        }
    })
});



$(function () {
    $(".fixlength").keypress(function (event) {
        //To avoid alphabet in textbox
        var element = this;
        var ElementID = element.id;
        var key = (event.which) ? event.which : event.keyCode;
        if (key == 46 || key == 8 || key==45) {

            if (!$.isNumeric(valu)) {
                $("#" + ElementID).val(valu.substring(0, valu.length - 1));
                $("#" + ElementID).focusEnd();
                event.returnValue = false
                if (event.preventDefault()) {
                    event.preventDefault();
                }
            }
            else {
                return true;
            }

        }
        if (!(key >= 48 && key <= 57) && key != 46 && key != 45) {
            if (key != 8 && key != 16) {

                event.returnValue = false
                if (event.preventDefault()) {
                    event.preventDefault();
                }
                //                return false;
            }
        }
        if ((key == 43 || key == 69 || key == 101 || key > 57 || key < 48) && (key != 8 || key != 16 || key != 13 || key != 45)) {

            event.returnValue = false
            if (event.preventDefault()) {
                event.preventDefault();
            }
        }


        var valu = $("#" + ElementID).val();
        var previousval = valu.substring(valu.length - 1, valu.length);

        if (valu.length > 1) {
            if (!$.isNumeric(valu)) {
                $("#" + ElementID).val(valu.substring(0, valu.length - 1));
                $("#" + ElementID).focusEnd();
                event.returnValue = false
                if (event.preventDefault()) {
                    event.preventDefault();
                }
            }
        }

        if (valu.length >= 16 && key != 8 && key != 13 && key != 16) {
            event.returnValue = false
            if (event.preventDefault()) {
                event.preventDefault();
            }
        }
    })
});


$(function () {
    $("#TelephoneNo").keypress(function (event) {
        //To avoid alphabet in textbox
        var element = this;
        var ElementID = element.id;
        var key = (event.which) ? event.which : event.keyCode;
        //alert(key);
        if (!(key >= 48 && key <= 57) && !key == 46) {
      
            if (key != 8 && key != 16) {
             
                event.preventDefault();
            }
        }
        if (this.value.length >= element.maxLength && key != 8 && key != 13 && key != 16) {

            return false;
        }
    })
});

$(function () {
    $(".txt").on("paste", function (event) {

        var element = this;
        var ElementID = element.id;
  
        setTimeout(function () {
            if (!$.isNumeric($("#" + ElementID).val().trim())) {
                $("#" + ElementID).val(""); false;
            }
            else {
                var text = $(element).val();
                if (text.length >= element.maxLength) {
                    $("#" + ElementID).val(text.substr(0, element.maxLength));
                }
            }
        }, 100);
    }); //numeric only end
});

$.fn.setCursorPosition = function (position) {
    if (this.length == 0) return this;
    return $(this).setSelection(position, position);
}

$.fn.setSelection = function (selectionStart, selectionEnd) {
    if (this.length == 0) return this;
    input = this[0];

    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }

    return this;
}

$.fn.focusEnd = function () {

    this.setCursorPosition(this.val().length);
    return this;
}
$(function () {
    var limit = function (event) {
        var linha = $(this).attr("limit").split(",")[0];
        var coluna = $(this).attr("limit").split(",")[1];

        var array = $(this)
            .val()
            .split("\n");

        $.each(array, function (i, value) {
            array[i] = value.slice(0, linha);
        });

        if (array.length >= coluna) {
            array = array.slice(0, coluna);
        }

        $(this).val(array.join("\n"))

    }
    $(".Textareabox")
        .keydown(limit)
        .keyup(limit);

})