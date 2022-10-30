
const express = require("express");
const app = express();


app.use(express.json());

app.use("/grade", (req, res)=>{
    res.json( { "slackUsername": "AICO", "backend": true, "age": 10, "bio": "hard working" })
})


app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on 5000`)
);