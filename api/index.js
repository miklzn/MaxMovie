const express = require("express");
const app = express();
const morgan = require("morgan");
const volleyball = require("volleyball");
const db = require("./config/db");
const models = require("./models");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use("/api", routes);

db.sync({ force: false })
  .then(() => {
    app.listen(3001, () => {
      console.log(`Servidor corriendo en el puerto 3001`);
    });
  })
  .catch(console.error);
