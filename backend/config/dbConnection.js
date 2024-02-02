const mongoose = require("mongoose");
// require("dotenv").config({path:"./.env"});
// const _DBUrl =process.env.DB;

mongoose.set('strictQuery', true); 
const password = encodeURIComponent("NaNi....");
mongoose
  .connect(`mongodb+srv://naniReddy:${password}@cluster0.xflfwqd.mongodb.net/credentials`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));

