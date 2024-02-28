import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

import Header from "./Components/Header";
import Inventory from "./Pages/Inventory";
import Channel from "./Pages/Channel";
import Orders from "./Pages/Orders";
import Shipping from "./Pages/Shipping";
import Dashbord from "./Pages/Dashboard";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="Sidebar">
      <nav className="navigation-bar">
        <NavLink to="/dashbord" className="nav-item" activeClassName="active">
          <AccessTimeIcon /> Dashboard
        </NavLink>
        <NavLink to="/inventory" className="nav-item" activeClassName="active">
          <SellOutlinedIcon /> Inventory
        </NavLink>
        <NavLink to="/channel" className="nav-item" activeClassName="active">
          <ShareOutlinedIcon /> Channel
        </NavLink>
        <NavLink to="/orders" className="nav-item" activeClassName="active">
          <ListAltOutlinedIcon /> Orders
        </NavLink>
        <NavLink to="/shipping" className="nav-item" activeClassName="active">
          <LocalShippingOutlinedIcon /> Shipping
        </NavLink>
      </nav>
      </div>

      <Routes>
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/shipping" element={<Shipping />} />
      </Routes>
    </div>
  );
}

export default App;
