const express = require("express");
const mongoose = require("mongoose");
const stuffRoutes = require("./routes/stuff");
const app = express();

app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://norkoffire:AUe9hsOeaknclXpT@demo-express.1fl4y.mongodb.net/?retryWrites=true&w=majority&appName=demo-express"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/stuff", stuffRoutes);

module.exports = app;
