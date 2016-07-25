"use strict";
const chai = require('chai');
const expect = require('chai').expect;

describe("generator function", () => {
  it("represents an iterable list", () => {
    //convert the array to a generator
    const listGenerator = [1, 2, 3];
    const list = null;
    expect(list.next().value).to.equal(1);
    expect(list.next().value).to.equal(2);
    expect(list.next().value).to.equal(3);
  });

  it("allows us to create dynamic/lazy lists", () => {
    function* range(start, end) {
      yield 20;
    }
    for (let n of range(1, 4)) {
      expect(n).to.be.below(5)
    }
  });

  it("allows us to pass values into the generator", () => {
    function* helloGenerator(arg) {
      const result = yield arg;
      return result;
    }
    expect(hello.next().value).to.equal("HELLO");
    expect(hello.next().done).to.equal(true);
  });

  it("allows us throw into the generator", () => {
    function* recoverGenerator() {
      let result = "fail";
      try {
        yield "value";
      } catch (err) {
        console.log(err);
        result = err.message;
      }
      return result;
    }
    const gen = recoverGenerator();
    gen.next();
    const { value } = gen.throw();
    expect(value).to.equal("pass");
  });
})
