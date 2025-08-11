const express=require("express");
const app=express();
let port=8080;
const path=require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
  res.render("home"); 
});

app.get("/ig/:username",(req,res)=>{
  let followers=["sundhar pechai","steve jobs","satya Nadella","Bill Gates"];
  let {username}=req.params;
  res.render("insta.ejs",{username,followers});
})
app.listen(port,()=>{
  console.log(`server is listeninng on port ${port}`);
})