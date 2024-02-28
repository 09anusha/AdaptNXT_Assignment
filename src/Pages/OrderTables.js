import React, { useState, useEffect } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import RectangleOutlinedIcon from "@mui/icons-material/RectangleOutlined";
import "./OrderTables.css";
import Orderrow from "./Orderrow";

const OrderTables = ({ currentData }) => {
  const orderdata = () => {
    return currentData.map((data, i) => {
      console.log(data);
      return <Orderrow obj={data} />;
    });
    console.log(currentData);
  };
  return (
    <div className="ot-container">
      <div
        className="list_tb"
        style={{ backgroundColor: "pink", borderRadius: "10px" }}
      >
        <ul className="ul_list_tb">
          <li style={{ paddingRight: "20px" }}>Pending</li>
          <li style={{ paddingRight: "20px" }}>Accepted</li>
          <li style={{ paddingRight: "20px" }}>AWB Created </li>
          <li style={{ paddingRight: "20px" }}>Ready to Ship</li>
          <li style={{ paddingRight: "20px" }}>Shipped</li>
          <li style={{ paddingRight: "20px" }}>Completed</li>
          <li style={{ paddingRight: "20px" }}>Cancelled</li>
        </ul>
      </div>
      <table className="o_table">
        <thead>
          <tr>
            <th>Channel</th>
            <th>TKN</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            
          </tr>
        </thead>
        <tbody className="tBody">{orderdata()}</tbody>
      </table>
    </div>
  );
};

export default OrderTables;
