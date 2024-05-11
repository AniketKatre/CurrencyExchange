const express = require("express");
require("dotenv").config();
const axios = require("axios");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const PORT = process.env.PORT || 5000;

const app = express();

//api url

const API_URL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = process.env.CURRENCY_EXCHANGE;

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});

//CORS configure
const corsOptions = {
  origin: ["http://localhost:5173"],
};

// Middleware
app.use(express.json()); //pass incoming data
app.use(apiLimiter);

app.use(cors(corsOptions));

//conversion rate api call
app.post("/api/convert", async (req, res) => {
  try {
    //get the user data
    const { from, to, amount } = req.body;
    console.log({ from, to, amount });

    // construct the api:
    const url = `${API_URL}/${API_KEY}/pair/${from}/${to}/${amount}`;
    // console.log(url);
    const response = await axios.get(url);
    if (response.data && response.data.result === "success") {
      res.json({
        base: from,
        target: to,
        conversionRate: response.data.conversion_rate,
        convertedAmount: response.data.conversion_result,
      });
    } else {
      res.json({ message: "Error coverting currency", details: response.data });
    }
  } catch (error) {
    res.json({ message: "Error coverting currency", details: error.message });
  }
});

// START the server
app.listen(PORT, console.log("Server start at port:", PORT));
