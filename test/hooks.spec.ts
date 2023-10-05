import { expect } from "chai";
import Calculator from "../src/calculator";

describe("hooks test", () => {

  let calc:Calculator;
  before(() => {
    console.log("before");
    calc = new Calculator();
  });
  beforeEach(() => {
    console.log("before each");
  });

  afterEach(() => {
    console.log("after each");
  });
  after(() => {
    console.log("after");
  });

  describe('add test suite', ()=>{
    it("should return sum", () => {
      // arrange
      // act
      const result = calc.add(2, 3);
      // assert
      expect(result).to.equal(5);
    });
  })

  
  describe('subsctact test suite', ()=>{
    it("should return substract", () => {
      // arrange
      // act
      const result = calc.subsctract(5, 3);
      // assert
      expect(result).to.equal(2);
    });
  })
});
