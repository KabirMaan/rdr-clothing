import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import Stripe from "stripe";

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.post("/payment", (req, res) => {
  console.log("payment");
  console.log(req);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "gbp"
  };

  stripe.charges.create(body, (stripeErr: Stripe, stripeRes: Stripe) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
