const express = require("express");
const app = express();
const porta = 3000;
const path = require("path");
const AnimeRoute = require("./routes/AnimeRoute");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/Anime", AnimeRoute);

app.listen(porta, () => {
  console.log("Servidor funcionando na porta 3000");
});
