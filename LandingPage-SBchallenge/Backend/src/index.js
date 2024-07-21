const express = require("express");
const userRouter = require("./routes/userRouter");
const cors = require("cors");
require("./Config/db");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(userRouter);

app.get("/", (req,res)=>{
    res.status(200).send({message: "Welcome to my authentication API"});
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});