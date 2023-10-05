class Calculator{
    add(a:number , b:number):number{
        this.logMessage('logging add function');
        const c = this.getRandomValue();
        return a+b+c;
    }
    subsctract(a:number , b:number):number{
        this.logMessage('logging subsctract function');
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

    getRandomValue():number{
       return Math.floor(Math.random()*10 +1);
    }

    logMessage(msg:string){
        console.log(msg);
    }
}
export default Calculator;
