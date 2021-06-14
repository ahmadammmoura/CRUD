const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const homePage = require("./controller/index.controller");
const Crud = require("./controller/Crud.controller");
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", homePage);
app.get("/get-data", Crud.getData);
app.post("/add-data", Crud.addData);
app.get("/get-fav", Crud.getFav);
app.delete("/delete-fav/:id", Crud.deleteFav);
app.put("/update-fav/:id", Crud.updateFav);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
