import express from 'express'
import bodyParser from 'express'
import mongoose from 'mongoose';
import { UserRagister, userLogin } from './Controlar/userControl.js';
import { AddContact, ById, deleteById, update } from './Controlar/contactControl.js';
mongoose.connect(
    "mongodb+srv://sachintiwari751858:eCzPGEAKdxZCBVtu@cluster0.wiqjxa0.mongodb.net/",
    {
        "dbName": "Backend_node_js"
    }
).then(() => console.log("mongodb connected")).catch((err) => console.log(err))

const app = express();
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send("This is simple api for user to save our contact in mongodb datbase");
})
app.post('/api/ragister', UserRagister)

app.post('/api/login', userLogin)

app.post('/api/contact/add', AddContact)
app.get('/api/contact/:id', ById);

app.put('/api/contact/update/:phone',update)

app.delete('/api/contact/delete/:id',deleteById)
app.listen(3000, () => console.log("server is runnig on 3000 port"))