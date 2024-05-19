import { expect } from "chai";
import Calculator from "../src/calculator";
import sinon, { SinonMock, SinonSpy, SinonStub } from "sinon";

describe.only("Anonymous Function - Spy Stub and Mock Tests", () => {
  let calc: Calculator;
  let spy: SinonSpy;
  let stub: SinonStub;
  let mock: SinonMock;
  before(() => {
    calc = new Calculator();
  });
  afterEach(() => {
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });

  describe("Anonymous Function Tests", () => {
    it("should spy on a anonymous function", () => {
      // arrange
      spy = sinon.spy(calc, "anonmyousAdd");
      // act
      calc.anonmyousAdd(3, 3);
      // assert
      expect(spy.calledOnce).to.be.true;
      expect(spy.calledWith(3, 3)).to.be.true;
    });

    it("should stub on a anonymous function", () => {
      // arrange
      stub = sinon.stub(calc, "anonmyousAdd").returns(9);
      // act
      const result = calc.anonmyousAdd(3, 2);
      // assert
      expect(stub.calledOnce).to.be.true;
      expect(result).to.equal(9);
    });

    it("should mock on a anonymous function", () => {
      // arrange
      mock = sinon.mock(calc);
      mock.expects("anonmyousAdd").once().returns(10);
      // act
      const result = calc.anonmyousAdd(3, 2);
      // assert
      expect(result).to.equal(10);
      mock.verify();
    });
  });
});
