const expect = require("chai").expect;
const request = require("request");

describe("Calculator API", function () {
  const baseUrl = "http://localhost:3000";

  //   Basic API availability test
  it("returns status 200 to check if API works", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  //   Positive test cases
  it("should return correct sum for valid numbers", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 10, num2: 5, operation: "add" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(response.statusCode).to.equal(200);
        expect(result.result).to.equal(15);
        done();
      }
    );
  });

  it("should return correct product for multiplication", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 7, num2: 6, operation: "multiply" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(result.result).to.equal(42);
        done();
      }
    );
  });

  //   Negative test cases
  it("should return error for missing parameters", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 10, operation: "add" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(result.error).to.equal("Please enter valid numbers.");
        done();
      }
    );
  });

  it("should return error for non-numeric input", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: "abc", num2: "xyz", operation: "add" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(result.error).to.equal("Please enter valid numbers.");
        done();
      }
    );
  });

  it("should handle invalid operation gracefully", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 5, num2: 3, operation: "modulo" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(result.result).to.equal("Invalid operation");
        done();
      }
    );
  });

  //   Boundary test cases
  it("should handle very large numbers", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 999999999, num2: 1, operation: "add" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(result.result).to.equal(1000000000);
        done();
      }
    );
  });

  it("should handle decimal inputs correctly", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 0.1, num2: 0.2, operation: "add" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        // Floating point issue, so check close enough
        expect(result.result).to.be.closeTo(0.3, 0.0001);
        done();
      }
    );
  });

  it("should handle divide by zero", function (done) {
    request.post(
      { url: `${baseUrl}/calculate`, form: { num1: 10, num2: 0, operation: "divide" } },
      function (error, response, body) {
        const result = JSON.parse(body);
        expect(result.result).to.equal("Cannot divide by zero");
        done();
      }
    );
  });
});
