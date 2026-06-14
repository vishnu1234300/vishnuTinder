const express = require("express");
const { connectDB } = require("./config/Database");
const User = require("./models/User"); 

const app = express();
app.use(express.json()); // This line reads the JSON from Postman and puts it inside req.body
app.get('/user', async (req,res) => {
   const userEmail = req.body.emailid;
  try {
      const users =  await User.find({emailid: userEmail})
      if(users.length === 0) {
        res.status(404).send("user not found");// this will find users who are matched with that emails and gives in array format []
      } else {
      res.send(users);
      }
  } catch(err) {
    res.status(400).send("something went wrong");

  }
})
//-feed Api 
 app.get('/feed', async  (req,res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch {
    res.status(400).send("something went wrong");
  }
}) 
app.post("/signup", async (req, res) => {
  try { 
    // 1. DYNAMIC FIX: Create the instance using data sent from Postman (req.body)
    const user = new UserModel(req.body);

    // 2. Wait for it to save to MongoDB Atlas
    await user.save();

    // 3. Tell Postman the request was successful!
    res.status(201).json({
      message: "User added successfully to the database!",
      data: user // This will now show the actual user saved
    });

  } catch (error) {
    res.status(500).json({ message: "Failed to save user", error: error.message });
  }
});

// Start the database first, then the server
connectDB()
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(7777, () => {
      console.log("server is successfully listening on port 7777");
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });