"use strict";
const expect = require('chai').expect;

describe("template strings", () => {
  function multiplyBy5(number){
    return number * 5;
  }
  it("simplifies concatination of strings", function() {
    const string1 = "strings";
    const string = "awesome";
    const result = `template are ()`;
    expect(result).to.equal(
      "template strings are awesome (25)"
    );
  });
});
