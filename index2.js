const express=require("express");
const app=express();

let port=3000;
app.listen(port ,()=>{
  console.log(`app is listening to port ${port}`);
})

app.get("/",(req,res)=>{
  res.send("hello, i am root");
});

app.get("/apple",(req,res)=>{
  res.send("you are connected to apple path");
})

app.get("/banana",(req,res)=>{
  res.send("you are connected to banana path");
});

app.get("/orange",(req,res)=>{
  res.send("you are connected to orange path");
});

app.post("/",(req,res)=>{
  res.send("you are posted a request to root path");
});