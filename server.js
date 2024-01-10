const express=require('express')
const app = express();
const mongoose =require('mongoose')
const cors = require('cors')

app.get('/',(req,res)=>{res.send("hello i'm deepika...")})

app.use(cors())
app.use(express.json())

const Db = async()=>{
    try {
        await mongoose.connect('mongodb+srv://deepika:deepika@cluster0.inpxc0e.mongodb.net/?retryWrites=true&w=majority').then(
            ()=>{
                console.log("Connected to DataBase...")
            }
        )
    } catch (error) {
        console.log(error)
    }
}

Db();

app.listen(4000,()=>{console.log("Server is running on port 4000...")})