import React, { useState, useEffect } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import "./Orders.css";
import OrderTables from "./OrderTables";

const Orders = () => {
  const currentData = [
    {
      
      channel: <ShoppingBagOutlinedIcon />,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "0.00",
      status: "Pending",
      
    },
    {
      channel: <ShoppingBagOutlinedIcon />,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "0.00",
      status: "Pending",
    },
    {
      channel: <ShoppingBagOutlinedIcon />,
      trackingNumber: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: "100",
      status: "Pending",
    },
  ];
  return (
    <div>
      <div className="ot">
        <OrderTables currentData={currentData} />
      </div>
    </div>
  );
};
export default Orders;
