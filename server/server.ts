import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import Stripe from "stripe";
import compression from "compression";
import enforce from "express-sslify";

if (process.env.NODE_ENV !== "production") require("dotenv").config();
console.log(process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server running on port " + port);
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "service-worker.js"));
});

app.post("/payment", (req, res) => {
  // console.log("payment");
  // console.log("req", req);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  console.log(body);

  stripe.charges.create(body, (stripeErr: any, stripeRes: any) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});
