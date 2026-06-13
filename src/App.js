const express = require("express");
const { connectDB } = require("./config/Database");
const UserModel = require("./models/User"); 

const app = express();
app.use(express.json()); // This line reads the JSON from Postman and puts it inside req.body

app.post("/signup", async (req, res) => {


  console.log(req.body)
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