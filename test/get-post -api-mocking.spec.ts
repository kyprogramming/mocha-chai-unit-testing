import { expect } from "chai";
import Calculator from "../src/calculator";
import nock from "nock";

const baseUrl = 'https://jsonplaceholder.typicode.com';
describe.only("API Testing", ()=>{
  it("should make a GET request from API", async () => {
    // arrange
    const calc = new Calculator();
    const mockedUserResponse = {id:1 , name:'kumar programming'};
    nock(baseUrl).get('/users/1').reply(200 , mockedUserResponse);
    // act
    const res = await calc.getUser();
    // assert
    expect(res.status).to.equal(200);
    expect(res.data.id).to.equal(1);
  });

  it('should make a POST request from API', async ()=>{
      // arrange
      const calc = new Calculator();
      const userPayload = `{
          "name": "Kumar Programming",
          "username": "kumar",
          "email": "kumar@april.biz",
          "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
              }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
          }
      }`
      const expectedUserResponse = 
      {
        "name": "Kumar Programming",
        "username": "kumar",
        "id":11
    }
    
      nock(baseUrl).post("/users", userPayload).reply(201 , expectedUserResponse);

      // act
      const res = await calc.saveUser(userPayload);
      // assert
      expect(res.status).to.equal(201);
      expect(res.data.id).to.equal(11);
  });

  after(()=>{
    nock.cleanAll();
  });
})