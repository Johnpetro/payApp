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
    const { user_name,email,password,phone,amount } = req.body;
   try{
    let user = new User({
      username:user_name,
      password:password,
      email:email,
      phone:phone,
      amount:amount
      })
      user = await user.save()
      res.json(user);
   }catch(ex){
    console.log("eror"+ex)

   }
   
  });



  // handlle logins
app.post('/login', async(req,res)=>{
  const {email,password}=req.body
  if(email==""&&password=="")res.status(401).json("do not enter null value")
  console.log(password)
  try{
    let result =  await User.find({email:email});
    if(!result)return res.status(401).json("Bad Request")
    const pass = result[0].password;
    if(pass==password){
      res.status(200).json(result)//main return here
    }else{
      res.status(400).json("Incorrect Credential")
    }
    // res.status(200).json(result[0].)

  }catch(e){
    res.status(500).send("Intenal server error")

  }
   
})
  

const  connectDB =  async ()=>{
    try{
        mongoose.connect("mongodb+srv://johnpetro335:z3IOOCaREDfqjl2w@cluster0.q0jvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
          .then(()=>console.log("Connected...."))
         .catch(err=>console.error("Failed to connect ...m.."+ err))
    }catch(error){
        console.log(error);

    }
}
connectDB()
app.listen(PORT,()=>console.log(`applicatin is running on port: ${PORT}`))
