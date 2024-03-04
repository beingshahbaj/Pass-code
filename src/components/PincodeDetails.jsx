import React, { useEffect, useState } from "react";

function PincodeDetails({ data, pin }) {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (data[0].Status === "Error") {
      setFilteredData([]);
    } else {
      setFilteredData(data[0].PostOffice);
    }
  }, [data]);

  function filterdata(e) {
    const value = e.target.value;
    if (value.length > 0) {
      const filtered = data[0].PostOffice.filter((data) =>
        data.Name.toLowerCase().includes(value.toLowerCase())
      );
      if (filtered.length === 0) {
        setErr(true);
        setText(value);

        console.log(filtered.length);
      } else {
        console.log(filtered.length);
        setFilteredData(filtered);
        setText(value);
        setErr(false);
      }
    } else {
      setText(value);
      setFilteredData(data[0].PostOffice);
      return;
    }
  }

  return (
    <div className="postoffice">
      <div>
        <h2>Pincode Details: {"  " + pin}</h2>
        <h3>{data[0].Message}</h3>
      </div>
      <div className="inputbox">
        <span className="material-symbols-outlined search">search</span>
        <input
          className="filter"
          type="text"
          value={text}
          placeholder="filter"
          onChange={(e) => {
            filterdata(e);
          }}
        />
      </div>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          border: "2px solid gray",
          padding: "20px",
        }}
      >
        <div className="box">
          {err ? (
            <h1>Couldn’t find the postal data you’re looking for…</h1>
          ) : (
            filteredData.length > 0 &&
            filteredData.map((data, index) => (
              <li className="item" key={index}>
                <h3>{data.Name}</h3>
                <p>
                  <span>Branch Type </span>
                  {"  " + data.BranchType}
                </p>
                <p>
                  <span>Delivery Status:</span> {data.DeliveryStatus}
                </p>
                <p>
                  <span> District:</span> {"  " + data.District}
                </p>
                <p>
                  <span>State: </span>
                  {"  " + data.State}
                </p>
                <p>
                  <span>Circle:</span>
                  {"  " + data.Circle}
                </p>
                <p>
                  <span> Region: </span>
                  {"  " + data.Region}
                </p>
                <p>
                  <span>Country: </span>
                  {"  " + data.Country}
                </p>
                <p>
                  <span> Pincode:</span>
                  {"  " + data.Pincode}
                </p>
              </li>
            ))
          )}
        </div>
      </ul>
    </div>
  );
}

export default PincodeDetails;
