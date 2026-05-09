require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Server is running...");
});

app.post("/test", (req,res)=>{
    const {task} = req.body;

    res.json({
        message: "Recieved successfully",
        yourTask: task
    })
});

app.post("/suggest", async(req, res)=>{
    const {task} = req.body;

    try{
        const response = await axios.post(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                model: "llama-3.1-8b-instant",

                messages : [
                    {
                        role: "user",
                        content: `Suggest 3 subtasks for: ${task}`
                    }
                ]
            },

            {
                headers:{
                    Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
                    "Content-Type": "application/json",
                }
            }
        );

        res.json({suggestions: response.data.choices[0].message.content});
    }catch(error){
            console.log(error.response?.data || error.message);

            res.status(500).json({
                error:"Something went wrong"
            });
    }
});


app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");
});