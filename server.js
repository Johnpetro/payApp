const mongoose =  require('mongoose');
const express =  require('express')
const app = express()

const cors = require('cors');
app.use(cors());
// const bodyPares =  require('body-parser');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 5000;
const User =  require("./model/User");
// console.log(User)


app.get('/us', (req, res) => {
  console.log('GET request to /us');
  res.send('Hello from /us');
});

app.post('/app', async (req, res) => {
    // console.log('Received request:', req.body);  // Log the request body
    // console.log("app")
    const { user_name,email,password,phone } = req.body;
   try{
    let user = new User({
      username:user_name,
      password:password,
      email:email,
      phone:phone
      })
      user = await user.save()
      res.send(user);
   }catch(ex){
    console.log("eror"+ex)
   }
   
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
