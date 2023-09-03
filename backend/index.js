const { default: axios } = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/initiateApplication", (req, res) => {
  res.status(200).send({ status: 200, message: "Initiate Complete!" });
});

app.get("/fetchBalanceSheet/:provider", (req, res) => {
  const accountingProvider = req.params.provider;

  axios
    .get(
      `${process.env.ACCOUNTING_SERVICE}/getBalanceSheet/${accountingProvider}`
    )
    .then((res1) =>
      res.status(200).send({
        status: 200,
        message: "Balance Sheet fetched successfully!",
        data: res1.data.data,
      })
    )
    .catch((err) =>
      res.status(400).send({
        status: 400,
        message: "Error fetching balance sheet!",
        data: err,
      })
    );
});

app.listen(PORT, () => {
  console.log("Server running at port", PORT);
});
