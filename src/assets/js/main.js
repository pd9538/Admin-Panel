$((function () { $("#loading-wrapper").fadeOut(1e3) })), $("#toggle-sidebar").on("click", (function () { $(".page-wrapper").toggleClass("toggled") })), $("#toggle-sidebar-fullscreen").on("click", (function () { $(".page-wrapper.fullscreen").toggleClass("toggled-fullscreen") })), $("#sidebar-togglescreen").on("click", (function () { $(".page-wrapper.togglescreen").toggleClass("toggled-togglescreen") })), jQuery((function (e) { e(".sidebar-dropdown > a").on("click", (function () { e(".sidebar-submenu").slideUp(200), e(this).parent().hasClass("active") ? (e(".sidebar-dropdown").removeClass("active"), e(this).parent().removeClass("active")) : (e(".sidebar-dropdown").removeClass("active"), e(this).next(".sidebar-submenu").slideDown(200), e(this).parent().addClass("active")) })), e((function () { e(window).resize((function () { e(window).width() <= 768 && e(".page-wrapper").removeClass("pinned") })), e(window).resize((function () { e(window).width() >= 768 && e(".page-wrapper").removeClass("toggled") })) })) })), $((function () { $(".graph-day-selection .btn").on("click", (function () { $(".graph-day-selection .btn").removeClass("active"), $(this).addClass("active") })) })), $(".download-reports").on("click", (function () { $.ajax({ url: "sample.txt", crossOrigin: null, xhrFields: { responseType: "blob" }, success: function (e) { var t = document.createElement("a"); t.href = window.URL.createObjectURL(e), t.download = "Reports.txt", t.click() } }) })), $((function () { setInterval((function () { var e = moment(); $(".todaysDate").html(e.format("LLLL")) }), 100) })), $(".pricing-change-plan a").on("click", (function () { $(this).hasClass("active-plan") ? $(".pricing-change-plan a").removeClass("active-plan") : ($(".pricing-change-plan a").removeClass("active-plan"), $(this).addClass("active-plan")) })); var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')), tooltipList = tooltipTriggerList.map((function (e) { return new bootstrap.Tooltip(e) })), popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')), popoverList = popoverTriggerList.map((function (e) { return new bootstrap.Popover(e) }));
