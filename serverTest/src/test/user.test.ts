
//const axios = require('axios');
import axios from "axios";
import { Server } from "http";
/* import supertest from "supertest"; */
import { server } from "../server";

let url = "http://localhost:3000/users"

var base;

//afterAll(() => database.disconnect());
var port= process.env.PORT || 3000
/* beforeAll(async () => {
   

    
}) */



beforeEach(() => {
    //jest.setTimeout(3000);
    server.listen(port)
})

//for those tests the server should is runing o starting

describe("user",() => {
   
    test("example ", async () => {
        
        url = "http://localhost:3000/"
        let result;
        const b = await axios.get(url, {})
       
        console.log("status ", b.status, "    metodo ", b.config.method);
        console.log("message ", b.data.mensaje);
        expect(b.status).toBe(200);
        expect(b.config.method).toEqual('get');
        server.close();
        
    });

    /* test("findAllUsers ", async () => {

        
        url = "http://localhost:3000/"
        let result;
        const b = await axios.get(url, {})
    
        console.log("status ", b.status, "    metodo ", b.config.method);

        expect(b.status).toBe(200);
        expect(b.config.method).toEqual('get');
    }); */



    /* test("findUser ID ", async () => {

        let path = url + "/2"

        const b = await axios.get(path, {})

        console.log("status ", b.status, "    metodo ", b.config.method);
        expect(b.status).toBe(200);
        expect(b.config.method).toEqual('get');
    }); */

    /* test("saveUser ", async () => {
        let params = {
            "Name": "gelta",
            "Email": "g@2.com",
            "Pass": "g"
        }

        const b = await axios.post(url, params)
        let data={ "Name":b.data.Name,"Email":b.data.Email,"Pass":b.data.Pass};
        //console.log("data ",data);
        //console.log("status ", b.status, "    metodo ", b.config.method);
        expect(b.status).toBe(200);
        expect(b.config.method).toEqual('post');
        expect(data).toEqual(params);
       
    }); */

    /* test("updateUser ", async () => {
        let params = {
            "Name": "felta",
            "Email": "f@2.com",
            "Pass": "f"
        }
        let path = url + "/2"
        const b = await axios.put(path, params)
        let data={ "Name":b.data.Name,"Email":b.data.Email,"Pass":b.data.Pass};
        //console.log("data ",data);
        //console.log("status ", b.status, "    metodo ", b.config.method);
        expect(b.status).toBe(200);
        expect(b.config.method).toEqual('put');
        expect(data).toEqual(params);
       
    }); */

    /* test("deleteUser ", async () => {
        let params = {
            "id": 6
        }
        
        const b = await axios.delete(url, {
            data:params
        });

        console.log("data",b);
        //
        expect(b.status).toBe(200);
        expect(b.config.method).toEqual('delete');
        expect(b.data.msg).toEqual("user deteled");
       
    }); */

});


