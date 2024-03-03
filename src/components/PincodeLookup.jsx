import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "./Loder";

const PincodeLookup = ({ setData, setPin }) => {
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isNaN(pincode) || pincode.toString().length !== 6) {
      setError("Pincode must be a 6-digit number.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      );

      if (!response.data || response.data.length === 0) {
        throw new Error("No data found for the given pincode.");
      }

      setError(null);
      setLoading(false);
      setPincode("");
      setData(response.data);
      setPin(pincode);
      navigate("PincodeDetails");
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="loockup">
      <h2>Enter Pincode</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter 6-digit Indian Postal Code"
        />
        <button type="submit">Lookup</button>
      </form>
      {loading && <Loader />}
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
    </div>
  );
};

export default PincodeLookup;
