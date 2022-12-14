import express from 'express';
import route from './Route/adminRoute.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser'
import './Db/connection.js'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path:path.resolve('./config.env')
})


const app = express();
const port = 3040;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(cookieParser())

app.use(express.json());
app.use(route);

app.set('view engine', 'ejs');



app.listen(3040);
console.log("server invoked at http://localhost:3040");