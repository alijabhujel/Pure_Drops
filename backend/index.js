import express from "express";

const app = express();
const PORT = 3000;

//routes
app.get("/workshop", (req, res) => {
  console.log("I am here");
});

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
