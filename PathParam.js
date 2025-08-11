const express=require("express");
const app=express();

let port=3000;
app.listen(port ,()=>{
  console.log(`app is listening to port ${port}`);
}) 
app.get("/",(req,res)=>{
  res.send("hello, i am root");
});

app.get("/:username/:id",(req,res)=>{
  let {username,id}=req.params;
  let htmlStr=`<h1>welcome to the page of @${username}</h1>`;
  res.send(htmlStr);
});

app.get("/search",(req,res)=>{
  let {q}=req.query;
  res.send( `<h1>these are the search results for query : ${q} </h1>`);
})

// app.get("/:username",(req,res)=>{

// })