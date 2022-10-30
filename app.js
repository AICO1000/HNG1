
const express = require("express");
const app = express();


app.use(express.json());

app.use("/", (req, res)=>{
    res.json({message: "success"})
})


app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on 5000`)
);