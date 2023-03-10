$(".datepicker").daterangepicker({
    singleDatePicker: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-opens-left").daterangepicker({
    singleDatePicker: !0,
    opens: "left",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-week-numbers").daterangepicker({
    singleDatePicker: !0,
    showWeekNumbers: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-iso-week-numbers").daterangepicker({
    singleDatePicker: !0,
    showISOWeekNumbers: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-time").daterangepicker({
    singleDatePicker: !0,
    timePicker: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD hh:mm A"
    }
}), $(".datepicker-time-24").daterangepicker({
    drops: "up",
    singleDatePicker: !0,
    timePicker: !0,
    timePicker24Hour: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD hh:mm A"
    }
}), $(".datepicker-time-seconds").daterangepicker({
    drops: "up",
    singleDatePicker: !0,
    timePicker: !0,
    timePicker24Hour: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD hh:mm:ss A"
    }
}), $(".datepicker-range").daterangepicker({
    drops: "up",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-week-numbers").daterangepicker({
    drops: "up",
    showWeekNumbers: !0,
    opens: "left",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-iso-week-numbers").daterangepicker({
    drops: "up",
    opens: "left",
    showWeekNumbers: !0,
    showISOWeekNumbers: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-time").daterangepicker({
    drops: "up",
    timePicker: !0,
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD hh:mm A"
    }
}), $(".datepicker-range-time-24").daterangepicker({
    drops: "up",
    timePicker: !0,
    timePicker24Hour: !0,
    opens: "left",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD hh:mm A"
    }
}), $(".datepicker-range-left").daterangepicker({
    opens: "left",
    drops: "up",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-right").daterangepicker({
    opens: "right",
    drops: "up",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-top-right").daterangepicker({
    opens: "right",
    drops: "up",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-top-left").daterangepicker({
    opens: "left",
    drops: "up",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $(".datepicker-range-auto-apply").daterangepicker({
    autoApply: !0,
    drops: "up",
    opens: "left",
    startDate: moment().startOf("hour"),
    endDate: moment().startOf("hour").add(32, "hour"),
    locale: {
        format: "YYYY-MM-DD"
    }
}), $((function() {
    var t = moment().subtract(29, "days"),
        e = moment();

    function a(t, e) {
        $(".custom-daterange span").html(t.format("MMM D, YYYY") + " - " + e.format("MMM D, YYYY"))
    }
    $(".custom-daterange").daterangepicker({
        opens: "left",
        startDate: t,
        endDate: e,
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    }, a), a(t, e)
})), $((function() {
    var t = moment().subtract(29, "days"),
        e = moment();

    function a(t, e) {
        $(".custom-daterange2 span").html(t.format("MMM D, YYYY") + " - " + e.format("MMM D, YYYY"))
    }
    $(".custom-daterange2").daterangepicker({
        autoApply: !0,
        opens: "left",
        startDate: t,
        endDate: e,
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    }, a), a(t, e)
}));