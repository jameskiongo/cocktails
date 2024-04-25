import express from "express";
import axios from "axios";
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const app = express();
const port = 3000;
// 3. Use the public folder for static files.
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("index.ejs", { content: "" });
});
app.get("/drink", async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    const result = JSON.stringify(response.data);
    res.render("index.ejs", { content: result });
  } catch (error) {
    console.log(error);
    res.render("index.ejs", { content: error });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
