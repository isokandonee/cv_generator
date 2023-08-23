const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB");
const cors=require("cors")
require("dotenv").config();
require("express-async-errors");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
const port = process.env.PORT || 5000;
const authRoute = require("./routes/authRouter");
const userRoute = require("./routes/userRoute");
const templateRoute = require("./routes/templateRoute");
const resumeRoute = require("./routes/resumeRoute");

app.use(express.json());
app.use(cors())
app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.static("./public"));
app.use("/simple", express.static("./public/template/simple.html"));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users/", userRoute);
app.use("/api/v1/templates", templateRoute);
app.use("/api/v1/resumes", resumeRoute);

app.use(notFound);
app.use(errorHandler);

const start = async () => {
  await connectDB(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
};

start();
