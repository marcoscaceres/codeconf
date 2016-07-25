/*jshint mocha: true, node: true */
"use strict";
const chai = require('chai');
// https://github.com/domenic/chai-as-promised
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
const expect = require('chai').expect;
const fs = require("fs");

describe("Promise constructor", () => {

  it("allows us to resolve with a value in the future", () => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {}, 100);
    });
    return promise.should.eventually.equal("pass");
  });

  it("allows us to reject with an error in the future", () => {
    const error = new Error("pass");
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {}, 100);
    });
    return promise.should.eventually.be.rejectedWith(error);
  });

  it("allows us to wrap legacy callback functions", () => {
    const promise = new Promise((resolve, reject) => {
      const fileToRead = __dirname + "/test_file.txt";
      fs.readFile(fileToRead, "utf-8", (err, data) => {
        
      });
    })
    return promise.should.eventually.be.equal("pass");
  });

});
