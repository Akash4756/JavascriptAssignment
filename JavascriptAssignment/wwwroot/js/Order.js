
var menus = [
    { "item": "Veg Noodles", "price": 150 },
    { "item": "Paneer Noodles", "price": 200 },
    { "item": "Veg Manchurian", "price": 200 },
    { "item": "Paneer Chilly", "price": 250 },
    { "item": "Veg Fried Rice", "price": 150 },
    { "item": "Paneer Fried Rice", "price": 200 },
    { "item": "Veg Rolls", "price": 100 },
    { "item": "Paneer Rolls", "price": 130 }
]

var customerItems = []

$(document).ready(function () {
    bindMenuddl()
    $("#btnAdd").click(addOrder)

    $("#ddlMenu").change(function () {
        if ($("#ddlMenu").val() != "-1") {
            var price = $("#ddlMenu").val()
            $("#lblPrice").text("Price: " + price + " Rs.")
        }
        else {
            $("#lblPrice").text("")
        }
    })

})

function addOrder() {
    if ($("#ddlMenu").val() == "" || $("#ddlMenu").val() == "-1") {
        alert("Please select menu")
    }
    else if ($("#txtQuantity").val() == "" || $("#txtQuantity").val() == "0") {
        alert("Please enter quantity")
    }
    else {
        var menu = $("#ddlMenu option:selected").text()
        var price = $("#ddlMenu").val()
        var quantity = $("#txtQuantity").val()

        var obj = { "item": menu, "price": price, "quantity": quantity, "totalprice": price * quantity }
        customerItems.push(obj)

        $("#ddlMenu").val("-1")
        $("#txtQuantity").val("0")
        bindOrder()
    }
}

function bindOrder() {
    var tbl = "<table class='table table-bordered table-hover'><tr class='table-dark'><th>S.No</th><th>Menu</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>"
    var grandPrice = 0;
    customerItems.forEach(function (item, index) {
        tbl += "<tr><td>" + (index + 1) + "</td><td>" + item.item + "</td><td>" + item.price + "</td><td>" + item.quantity + "</td><td>" + item.totalprice + "</td></tr>"
        grandPrice += item.totalprice
    })
    tbl += "<tr><td colspan='3'></td><td colspan='2'><span>Grand Total: " + grandPrice + "</span></td></tr>"
    tbl += "</table>"
    $("#divOrder").html(tbl)

}

function bindMenuddl() {
    var op = "<option value='-1'>Select</option>"
    menus.forEach(function (item) {
        op += "<option value='" + item.price + "'>" + item.item + "</option>"
    })
    $("#ddlMenu").html(op)
}