import "reflect-metadata";
import  express  from "express";
import morgan from "morgan";
import cors from "cors";

import { createConnection } from "typeorm";

import * as userRoutes from "./routes/user";


const app= express();


const port= process.env.PORT || 3000

//middlewars
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(userRoutes.router);

/* app.listen(port,async()=>{
    //await createConnection()
    //const database=async ()=> await createConnection()
    console.log(`App is running at http://localhost:${port}`);

}); */

async function messageServer(){
    let a:number=2+2;
    await a;
    //await console.log(`App is running at http://localhost:${port}`);
}

async function messageDatabase(){
    
    await createConnection();
    //return console.log(`conexion database successful`);
}

async function messages(){
   await messageDatabase();
   await messageServer();
}
const server=app.listen(port,messages);
server.close((err)=>{
    //console.log('server closed');
    //process.exit(err ? 1 : 0);
});


//console.log(`server on port ${port}`)
export { server,app,messages};