const mongoose =  require('mongoose');
const express =  require('express')
const app = express()

const cors = require('cors');
app.use(cors());
// const bodyPares =  require('body-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:true}))
const PORT = 5000;
const User =  require("./model/User");
// console.log(User)


// app.post('/app/user',(req,res)=>{
//     const username =  req.body.user_name;
//     res.send(username);
//     console.log(username)
// })
app.post('/app/user', (req, res) => {
    console.log('Received request:', req.body);  // Log the request body
    const { user_name } = req.body;
    res.json({ message: 'User name received successfully', user_name });
  });
  

const  connectDB =  async ()=>{
    try{
        mongoose.connect("mongodb+srv://johnpetro335:Ya2t3ABBq8Rr415H@user.nlou7.mongodb.net/?retryWrites=true&w=majority&appName=User")
          .then(()=>console.log("Connected...."))
         .catch(err=>console.error("Failed to connect ...m.."+ err))
    }catch(error){
        console.log(error);

    }
}
connectDB()
app.listen(PORT,()=>console.log(`applicatin is running on port: ${PORT}`))
