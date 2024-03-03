import { useState } from "react";
import "./App.css";
import PincodeLookup from "./components/PincodeLookup";
import PincodeDetails from "./components/PincodeDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState({})
  const [pin , setPin] = useState("")
  useState;
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<PincodeLookup setData={setData} setPin={setPin} />}
        />
        <Route path="PincodeDetails" element={<PincodeDetails data={data} pin={pin} />} />
      </Routes>
    </div>
  );
}

export default App;
