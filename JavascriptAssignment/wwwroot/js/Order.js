
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

})

function bindOrder() {
    var tbl = "<table class='table table-bordered table-hover'><tr class='table-dark'><th>S.No</th><th>Menu</th><th>Price</th><th>Quantity</th><th>Total Price</th></tr>"
    customerItems.forEach(function (item, index) {
        tbl += "<tr><td>" + (index + 1) + "</td><td>" + item.item + "</td><td>" + item.price + "</td><td>" + item.quantity + "</td><td>" + item.totalprice + "</td></tr>"
    })
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