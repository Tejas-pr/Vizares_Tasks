const express = require("express");
const routes = require("./routes/routes");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());

app.use(express.json());

const port = process.env.PORT;
app.listen(port || 5000, () => {
  console.log(`App is listening at port ${port}`);
});

app.use("/v1/", routes);
