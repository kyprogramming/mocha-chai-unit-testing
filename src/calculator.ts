import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com';
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

    asyncFunctionPromise(){
       return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(4);
        },1000);
       })
    }

    async getUser(){
        return await axios.get(`${baseUrl}/users/1`);
    }

    async saveUser(userPayload:any){
        return await axios.post(`${baseUrl}/users`, userPayload)
    };

    anonmyousAdd = (a:number , b:number) => a+b;


}
export default Calculator;
