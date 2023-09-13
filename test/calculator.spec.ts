import { expect } from 'chai';
import Calculator from '../src/calculator';

describe('Test Calculator Class', ()=>{

    it('should return sum',()=>{
        // arrange 
        const calc = new Calculator();
        // act
        const result = calc.add(2,3);
        // assert
        expect(result).to.equal(5);
        
    });
    it('should return substract',()=>{
        // arrange 
        const calc = new Calculator();
        // act
        const result = calc.subsctract(5,3);
        // assert
        expect(result).to.equal(2);
    });
    it('should return multiply',()=>{
        // arrange 
        const calc = new Calculator();
        // act
        const result = calc.multply(5,3);
        // assert
        expect(result).to.equal(15);
    });
    it('should return divide',()=>{
        // arrange 
        const calc = new Calculator();
        // act
        const result = calc.divide(9,3);
        // assert
        expect(result).to.equal(3);
    });
    it('should throw an error while dividing by zero',()=>{
         // arrange 
         const calc = new Calculator();
       expect(()=> calc.divide(10,0)).to.throw('Can not divide by zero.');
    });

});