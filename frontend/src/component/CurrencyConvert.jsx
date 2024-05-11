import React, { useState } from "react";
import axios from "axios";
import "../index.css";
import { Loader } from "./Loader";

export const CurrencyConvert = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const currencyCodes = [
    "USD",
    "AED",
    "INR",
    "AUD",
    "BDT",
    "BRL",
    "CAD",
    "QAR",
    "EUR",
    "GBP",
    "GHS",
    "JPY",
    "CAD",
    "BSD",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //http request
    try {
      const response = await axios.post(
        "http://localhost:5000/api/convert",
        formData
      );

      setResult(response?.data);

      setError("");
    } catch (error) {
      setError(
        "Something went wrong! Error ⚠",
        error?.response ? error?.response?.data : error?.message
      );
    }
  };

  return (
    <div>
      <section className="converter">
        <form onSubmit={handleSubmit}>
          <select
            name="from"
            value={formData.from}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select From Currency</option>
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <select
            name="to"
            value={formData.to}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select To Currency</option>
            {currencyCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
          <input
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            type="number"
            className="input"
          />
          <button type="submit" className="submit-btn">
            Convert
          </button>
        </form>

        {result && (
          <div className="result">
            <p>
              Converted Amount: {result.convertedAmount} {result.target}
            </p>
            <p>Conversion Rate: {result.conversionRate}</p>
          </div>
        )}
        {error && <p className="error">Error: {error}</p>}
      </section>
    </div>
  );
};
