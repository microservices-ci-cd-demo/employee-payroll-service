'use strict';

const express = require('express');
const url = require('url');
const app = express();

const employeePayroll = {
  "1": {
    "payroll": "1000000"
  },
  "2": {
    "payroll": "2000000"
  }
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/employee_payroll', function (req, res) {
  const employeeId = url.parse(req.url, true).query.id;
  const payroll = employeePayroll[employeeId];
   payroll ? res.json(payroll) : res.status(404).send({"error": "Not Found"});
});

module.exports = app;
