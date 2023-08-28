class Calculator{
    add(a:number , b:number):number{
        return a+b;
    }
    subsctract(a:number , b:number):number{
        return a-b;
    }
    multply(a:number , b:number):number{
        return a*b;
    }
    divide(a:number , b:number):number{
        if(b === 0){
            throw new Error('Can not divide by zero.')
        }
        return a/b;
    }
}
export default Calculator;