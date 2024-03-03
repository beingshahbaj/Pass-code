import React, { useEffect, useState } from "react";

function PincodeDetails({ data, pin }) {
  const [text, setText] = useState("");
  console.log(data, data[0].message);
  if (data[0].Status === "Error") {
    return <h1>{data[0].Message}</h1>;
  }

  function filterdata(e) {
    setText(e.target.value);
    const newdata = data[0].PostOffice.filter((data) =>
      data.name.include(text)
    );
    console.log(newdata);
  }

  return (
    <div className="postoffice">
      <div>
        {" "}
        <h2>Pincode Details: {"  " + pin}</h2>
        <h3>{data[0].Message}</h3>
      </div>
      <div className="inputbox">
        <span class="material-symbols-outlined search">search</span>
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
          {data[0].PostOffice.length > 0 &&
            data[0].PostOffice.map((data, index) => (
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
                  <span> District:</span> {" " + data.District}
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
            ))}
        </div>
      </ul>
    </div>
  );
}

export default PincodeDetails;
