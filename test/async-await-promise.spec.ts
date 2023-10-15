import { expect } from "chai";
import Calculator from "../src/calculator"

describe.only('ASYNC AWIAT AND PROMISE TEST SUITE', ()=>{
    let calc:Calculator;

    it('should work with async and awiat',async ()=>{

        // arrange
        calc = new Calculator();
        // act
        const result = await calc.asyncFunctionPromise();
        // assert
        expect(result).to.equal(4);
    })

    it('should work with promise', ()=>{

        // arrange
        calc = new Calculator();
        // act
        calc.asyncFunctionPromise().then((result)=>{
            expect(result).to.equal(4);
        });
        // assert
       
    })
})