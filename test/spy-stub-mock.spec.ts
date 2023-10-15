import { expect } from "chai";
import Calculator from "../src/calculator";
import sinon, { SinonMatcher, SinonMock, SinonSpy, SinonStub } from "sinon";

describe("Spy Stub and Mock Tests", () => {
  let calc: Calculator;
  let spy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;
  before(() => {
    console.log("before");
    calc = new Calculator();
  });
  beforeEach(() => {
    console.log("before each");
    mock = sinon.mock(calc);
});

  afterEach(() => {
    console.log("after each");
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });
  after(() => {
    console.log("after");
  });

  describe("add test suite", () => {
    it("should return sum", () => {
      // arrange
      spy = sinon.spy(calc, "add");
      stub = sinon.stub(calc, "getRandomValue").returns(2);
      let expectation = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("logging add function");
      // act
      const result = calc.add(2, 4);
      // assert
      expect(result).to.equal(8);
      expect(spy.calledOnceWith(2, 4)).to.be.true;
      expectation.verify();
    });
  });

  describe("subsctact test suite", () => {
    it("should return substract", () => {
      // arrange
      spy = sinon.spy(calc, "subsctract");
      let expectation = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("logging subsctract function");
      // act
      const result = calc.subsctract(5, 3);
      // assert
      expect(result).to.equal(2);
      expect(spy.calledOnceWith(5, 3)).to.be.true;
      expectation.verify();
    });
  });
});

