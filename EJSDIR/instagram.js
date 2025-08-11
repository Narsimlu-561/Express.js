const express=require("express");
const app=express();
const path=require("path");
let port=8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
  res.send("home");
});

app.get("/ig/:username",(req,res)=>{
  let {username}=req.params;
  res.render("instagram.ejs",{username})
})

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
});