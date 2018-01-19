var paypal = require('paypal-rest-sdk');
var configuration = require('../models/configure.js');

module.exports = function(app) {
    app.post("/new/transaction", function(req, res) {

        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://buymusicoin.com/completed",
                "cancel_url": "http://buymusicoin.com"
            },
            "transactions": [ req.body ]
        };

        paypal.configure.configuration;

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log("Create Payment Response");
                console.log(payment);
            }
        });

    });
};