'use strict';

const assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe("Employee Payroll Service Test", () => {
  it("should return correct payroll for provided employee id", (done) => {
    request(app)
      .get('/api/employee_payroll?id=1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        const expectedEmployee = { payroll: '1000000' };
        assert.deepEqual(res.body, expectedEmployee);
        done();
      });
  });

  it("should return not found for unknown employee id", (done) => {
    request(app)
      .get('/api/employee_payroll?id=100')
      .expect('Content-Type', /json/)
      .expect(404)
      .end(function (err, res) {
        const expectedRes = { error: 'Not Found'};
        assert.deepEqual(res.body, expectedRes)
        done();
      });
  });
});
