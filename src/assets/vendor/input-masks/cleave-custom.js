var cleave = new Cleave("#phone-format-us", {
        phone: !0,
        phoneRegionCode: "US"
    }),
    cleaveG = (cleave = new Cleave("#phone-format-in", {
        phone: !0,
        phoneRegionCode: "IN"
    }), cleave = new Cleave("#phone-format-br", {
        phone: !0,
        phoneRegionCode: "BR"
    }), cleave = new Cleave("#date-formatting", {
        date: !0,
        delimiter: "-",
        datePattern: ["Y", "m", "d"]
    }), cleave = new Cleave("#date-formatting2", {
        date: !0,
        datePattern: ["m", "y"]
    }), cleave = new Cleave("#time-formatting", {
        time: !0,
        timePattern: ["h", "m", "s"]
    }), cleave = new Cleave("#time-formatting2", {
        time: !0,
        timePattern: ["h", "m"]
    }), new Cleave("#input-numeral-thousand", {
        numeral: !0,
        numeralThousandsGroupStyle: "thousand"
    }));
cleaveG = new Cleave("#input-numeral-lakh", {
    numeral: !0,
    numeralThousandsGroupStyle: "lakh"
}), cleave = new Cleave("#input-blocks", {
    blocks: [4, 4, 4, 4],
    uppercase: !0
}), cleave = new Cleave("#input-delimiter", {
    delimiter: "Â·",
    blocks: [3, 3, 3],
    uppercase: !0
}), cleave = new Cleave("#input-delimiter2", {
    delimiters: [".", ".", "-"],
    blocks: [3, 3, 3, 2],
    uppercase: !0
}), cleave = new Cleave("#input-prefix", {
    prefix: "PREFIX",
    delimiter: "-",
    blocks: [6, 4, 4, 4],
    uppercase: !0
}), cleave = new Cleave("#input-credit-card", {
    creditCard: !0,
    onCreditCardTypeChanged: function(e) {
        var a = $("#creditCardType").find("." + e);
        a.length ? (a.addClass("highlight"), a.siblings().removeClass("highlight")) : $("#creditCardType .credit-card").removeClass("highlight")
    }
});