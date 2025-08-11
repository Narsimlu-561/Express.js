const express=require("express");
const app=express();

let port=8080;
app.listen(port,()=>{
  console.log(`server is listening to port ${port}`);
});

app.get("/",(req,res)=>{
  res.send("you are contacted to root path");
});

app.get("/apple",(req,res)=>{
  res.send("you are contacted to apple path");
});

app.get("/banana",(req,res)=>{
  res.send("you are contacted to banana path")
});

app.get("/orange",(req,res)=>{
  res.send("youn are contacted to orange path");
})

app.post("/",(req,res)=>{
  res.send("you posted a request to root");
})

// app.use((req,res)=>{
//   // console.log(req);
//   console.log("request recieved");
//   // let code="<h1>Fruits List</h1><ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//   res.send("<h1>Hello Achiever this is your response</h1>");
// })