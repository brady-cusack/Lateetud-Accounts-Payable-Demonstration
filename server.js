var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Invoice = require('./api/models/validationModel.js'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/InvoiceValidation');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) { res.status(404).send({url: req.originalUrl + ' not found'}) });

var routes = require('./api/routes/validationRoutes');
routes(app); 

app.listen(port);

console.log('Validation RESTful API services has started on: ' + port);