
function InitializeCalander(dateFormatCulture, maximumDate) {
///Condition:When Single Arguments Passsed,used as Normal Calander
    if (arguments.length == 1 || typeof arguments.length == "undefined")
     { 
         $('.calendarPicker').datepicker({
             beforeShow: function (input) {
                 setTimeout(function () {
                     var buttonPane = $(input)
     .datepicker("widget")
     .find(".ui-datepicker-buttonpane");
                     var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">Clear</button>');
                     btn.unbind("click").bind("click", function () {
                         $.datepicker._clearDate(input);
                     });

                     btn.appendTo(buttonPane);

                 }, 1) ;
             },
             dateFormat: dateFormatCulture,
             showButtonPanel: true,
             changeMonth: true,
             changeYear: true,
             maxDate: '0'
         }).attr('readonly', true);

$.datepicker._gotoToday = function (id) {
    var target = $(id);
    var inst = this._getInst(target[0]);
    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
    }
    else {
        var date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
        // the below two lines are new
        this._setDateDatepicker(target, date);
        this._selectDate(id, this._getDateDatepicker(target));
    }
    this._notifyChange(inst);
    this._adjustDate(target);
}

     }


else {
    ///Condition:when Two Arguments are passed,Future Dates are Disabled
    if (arguments.length == 2) {

        $('.calendarPicker').datepicker({
            beforeShow: function (input) {
                setTimeout(function () {
                    var buttonPane = $(input)
     .datepicker("widget")
     .find(".ui-datepicker-buttonpane");
                    var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">Clear</button>');
                    btn.unbind("click").bind("click", function () {
                        $.datepicker._clearDate(input);
                    });

                    btn.appendTo(buttonPane);

                }, 1);
            },
            dateFormat: dateFormatCulture,
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            maxDate: maximumDate

        }).attr('readonly', true);

        $.datepicker._gotoToday = function (id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            }
            else {
                var date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
                // the below two lines are new
                this._setDateDatepicker(target, date);
                this._selectDate(id, this._getDateDatepicker(target));
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        }
    
    }
    else {

        ///Condition:when Three Arguments are passed,or Above conditions not met,Future Dates are Enabled and Past dates are disabled
        $('.calendarPicker').datepicker({
            beforeShow: function (input) {
                setTimeout(function () {
                    var buttonPane = $(input)
     .datepicker("widget")
     .find(".ui-datepicker-buttonpane");
                    var btn = $('<button class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" type="button">Clear</button>');
                    btn.unbind("click").bind("click", function () {
                        $.datepicker._clearDate(input);
                    });

                    btn.appendTo(buttonPane);

                }, 1);
            },
            dateFormat: dateFormatCulture,
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            minDate: 0

        }).attr('readonly', true);

        $.datepicker._gotoToday = function (id) {
            var target = $(id);
            var inst = this._getInst(target[0]);
            if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            }
            else {
                var date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
                // the below two lines are new
                this._setDateDatepicker(target, date);
                this._selectDate(id, this._getDateDatepicker(target));
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        }
    
        

    
     }
    }
     

}