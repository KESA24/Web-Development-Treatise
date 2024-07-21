const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/authData";
mongoose.connect(url,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser:true,
})

const db = mongoose.connection;

if(db){
    console.log("Successfully connected to the database");

}
else{
    console.log("Check your connection");
}