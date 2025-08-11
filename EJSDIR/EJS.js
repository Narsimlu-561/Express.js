const express=require("express");
const app=express();
// const path=require("path");
let port=8080;

// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"))
// app.get("/",(req,res)=>{
//   res.render("home");
// });
// app.get("/home",(req,res)=>{
//   data
//   res.send("hello.ejs");
// });
app.get("/rolldice",(req,res)=>{
  let diceVal=Math.floor(Math.random()*6)+1;
  res.render("rolldice.ejs", {diceVal});
})
app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})