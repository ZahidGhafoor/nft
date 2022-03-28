const express = require("express")
// const bodyParser = require("body-Parser");
const app = express()

app.use(express.json());


const mongoose = require("mongoose");

const authRoute = require("./routes/auth")

const mongoURL = "mongodb+srv://port:8c8yg6BU5uGni2zV@cluster0.feluv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(mongoURL,{
    useNewUrlParser: true,
})
mongoose.connection.on("connected", () => {
    console.log("Connected to mongooDB");
  });
  mongoose.connection.on("error", (error) => {
    console.log("Error While connecting with mongoDB", error);
  });


app.use("/api/auth", authRoute);

app.listen(5000, () => {
    console.log("connected with backend")
})
