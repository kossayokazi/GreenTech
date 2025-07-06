const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const authRoutes = require("./routes/auth");
const categoryRoutes = require("./routes/categories");
const articleRoutes = require("./routes/articles");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


app.use(express.static(path.join(__dirname, "frontend")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});


app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/articles", articleRoutes);


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(" Connecté à MongoDB");
  app.listen(5000, () => console.log(" Serveur sur http://localhost:5000"));
}).catch(err => console.error(" Erreur MongoDB :", err));
