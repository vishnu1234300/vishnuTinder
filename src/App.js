const express = require("express");

const app = express();

app.use( "/test", (req, res) => {
  res.send("server TEsT responded in &77 port ");
})
app.use( "/hello", (req, res) => {
  res.send("Hello responded in 777 port");
})
app.use( "/vishnu", (req, res) => {
  res.send("Hello VISHNU in 777 port");
})


app.use((req, res) => {
  res.send("server responded in &77 port ");
})




app.listen(7777, () => {
    console.log("app server is enabled");
})