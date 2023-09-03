const express = require("express");
const { Xero } = require("./sheetData");
const app = express();

app.use(express.json());

const PORT = 5000;

app.get("/getBalanceSheet/:provider", (req, res) => {
  const provider = req.params.provider;

  if (provider === "Xero") {
    res.status(200).send({
      status: 200,
      message: "Balance sheet fetched successfully!",
      data: Xero,
    });
  }
});

app.listen(PORT, () => {
  console.log("Accounting service running at port", PORT);
});
