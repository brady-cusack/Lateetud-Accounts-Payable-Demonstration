'use strict';
module.exports = function(app) {
    var validationApi = require('../controllers/validationController.js');

    app.route('/invoiceValidations')
        .get(validationApi.listInvoices)
        .post(validationApi.newInvoice);

    app.route('/invoiceValidations/:invoiceNumber')
        .get(validationApi.viewInvoice)
        .delete(validationApi.deleteInvoice);
};