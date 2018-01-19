$(document).ready(function() {
    var paypalButton = $("#paypal-button");

    paypalButton.on("click", sendPayment);

    function sendPayment() {
        event.preventDefault();

        // var total = $("#dollar-input");
        // var amount = $("#coin-amount");
        // var price = $("#current-price");
        var total = 1;
        var amount = 2;
        var price = 3;
        

         var newTransaction = {
                item_list: {
                    items: [{
                        name: "Musicoin",
                        price: price,
                        currency: "USD",
                        quantity: amount
                    }]
                },
                amount: {
                    currency: "USD",
                    total: total
                },
                description: "Thank you from ordering from Buymusicoin.com."
                };

        $.post("/new/transaction", newTransaction)

        .done(function(data) {

            console.log(data);
            alert("done");
        });

        $("#dollar-input").val("");
        $("#coin-amount").val("");
        $("#current-price").val("");
    };

});