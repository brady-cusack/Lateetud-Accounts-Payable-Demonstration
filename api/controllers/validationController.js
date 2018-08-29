'use strict';

var mongoose = require('mongoose'),
Invoice = mongoose.model('InvoiceValidation');

exports.listInvoices = function(req, res) {
    Invoice.find({}, function(err, invoice) {
        if (err)
            res.send(err);
        res.json(invoice);
    });
};

exports.newInvoice = function(req, res) {
    var newInvoice = new Invoice(req.body);
    newInvoice.save(function(err, invoice) {
        if (err)
            res.send(err);
        res.json(invoice);
    });
};

exports.viewInvoice = function(req, res) {
    Invoice.findById(req.params.invoiceNumber, function(err, invoice) {
        if (err)
            res.send(err);
        res.json(invoice);
    });
};

exports.deleteInvoice = function(req, res) {
    Invoice.remove({ _id: req.params.invoiceNumber }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Invoice has been removed from the database' });
    });
};