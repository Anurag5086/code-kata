const express = require("express");
const app = express();

app.use(express.json());

const PORT = 5001;

app.get("/requestDecision", (req, res) => {
  res.status(200).send({
    status: 200,
    message: "Balance sheet fetched successfully!",
    data: sheet,
  });
});

app.listen(PORT, () => {
  console.log("Decision service running at port", PORT);
});
