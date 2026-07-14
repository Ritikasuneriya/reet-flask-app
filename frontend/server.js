const express=require("express");
const axios=require("axios");

const app=express();

app.get("/",async(req,res)=>{

    try{

        const response=await axios.get("http://98.90.200.55:5000/api");

        res.send(`
        <h1>Express Frontend</h1>
        <h2>Backend Response</h2>
        <pre>${JSON.stringify(response.data,null,2)}</pre>
        `);

    }catch(err){

        res.send("Cannot connect backend");
    }

});

app.listen(3000,"0.0.0.0",()=>{

console.log("Frontend running");

});