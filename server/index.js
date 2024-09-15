const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
