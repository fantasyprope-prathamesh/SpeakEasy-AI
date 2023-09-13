const express = require("express")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

const API_KEY = "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";


app.post('/completions', async (req,res)=>{

    console.log("request body: " + req.body.query)

    const prompt = req.body.query;

    const options = {
        method : "POST",
        headers : {
            "Authorization" : `Bearer ${API_KEY}`,
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            model : "gpt-3.5-turbo",
            messages : [{ role:"user" , content : prompt }],
            max_tokens : 700
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions' , options );

        const data = await response.json();

        // console.log( data );
        res.send(data);

    }catch(err){
        console.log(err)
    }
})


const PORT = 8001
app.listen(PORT , ()=>{
    console.log("Server running on port : " + PORT)
})

// key = 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;