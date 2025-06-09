import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose';
import path from 'path'
import { UserRagister, userLogin } from './Controlar/userControl.js';
import router from './routes/Contact.js';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';
import cors from 'cors'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env setup
config({path:'.env'})
mongoose.connect(
   process.env.Mongourl,
    {
        "dbName": "Backend_node_js"
    }
).then(() => console.log("mongodb connected")).catch((err) => console.log(err))

const app = express();
// middleware
//cors
app.use(cors({
    origin:true,
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));
// contact router
app.use('/api/contact',router)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
  });
app.post('/api/ragister', UserRagister)

app.post('/api/login', userLogin)

app.listen(3000, () => console.log("server is runnig on 3000 port"))