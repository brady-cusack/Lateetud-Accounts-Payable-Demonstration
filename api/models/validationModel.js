'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ValidationSchema = new Schema({
    InvoiceNumber: { type: Number, required: true },
    VatRegNumber: { type: Number, min: 100000000, max: 999999999, required: true },
    Amount : { type: Number, required: true },
    TransactionNum: { type: Number, required: true },
    ExpenseType: { type: String },
    ExpenseArea: { type: String },
    Supplier: { type: String, required: true },
    InvoiceDate: { type: Date, required: true },
    DepartmentFamily: { type: String, required: true }
});

// Validation Schemas for Currency in MongoDB
ValidationSchema.path('Amount').get(function(amount) {
    return (amount/100).toFixed(2);
});

ValidationSchema.path('Amount').set(function(amount) {
    return amount * 100;
});
  
module.exports = mongoose.model('InvoiceValidation', ValidationSchema);