$((function() {
	$("#basicExample").DataTable({
		lengthMenu: [
			[5, 10, 25, 50],
			[5, 10, 25, 50, "All"]
		],
		language: {
			lengthMenu: "Display _MENU_ Records Per Page",
			info: "Showing Page _PAGE_ of _PAGES_"
		}
	})
})), $((function() {
	$("#scrollVertical").DataTable({
		scrollY: "800px",
		scrollCollapse: !0,
		paging: !1,
		bInfo: !1
	})
})), $((function() {
	$("#highlightRowColumn").DataTable({
		lengthMenu: [
			[5, 10, 25, 50],
			[5, 10, 25, 50, "All"]
		],
		language: {
			lengthMenu: "Display _MENU_ Records Per Page"
		}
	});
	var e = $("#highlightRowColumn").DataTable();
	$("#highlightRowColumn tbody").on("mouseenter", "td", (function() {
		var l = e.cell(this).index().column;
		$(e.cells().nodes()).removeClass("highlight"), $(e.column(l).nodes()).addClass("highlight")
	}))
})), $((function() {
	$("#apiCallbacks").DataTable({
		lengthMenu: [
			[5, 10, 25, 50],
			[5, 10, 25, 50, "All"]
		],
		language: {
			lengthMenu: "Display _MENU_ Records Per Page"
		},
		initComplete: function() {
			var e = this.api();
			e.$("td").on("click", (function() {
				e.search(this.innerHTML).draw()
			}))
		}
	})
})), $((function() {
	$("#hideSearchExample").DataTable({
		lengthMenu: [
			[5, 10, 25, 50],
			[5, 10, 25, 50, "All"]
		],
		searching: !1,
		language: {
			lengthMenu: "Display _MENU_ Records Per Page",
			info: "Showing Page _PAGE_ of _PAGES_"
		}
	})
}));