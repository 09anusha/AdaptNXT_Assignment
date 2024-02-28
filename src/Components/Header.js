import React from "react";
import "../App.css";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
function Header() { 
  return (
    <div className="head1">
      <ul className="list1">
        <li style={{ paddingLeft: "20px" }}>icon</li>
        <li style={{ paddingLeft: "100px", paddingRight: "900px" }}>
          <ReorderOutlinedIcon />
        </li>
      </ul>

      <ul className="list2">
        <li style={{ paddingRight: "20px" }}>
          <NightlightRoundOutlinedIcon />
        </li>
        <li style={{ paddingRight: "20px" }}>
          <NotificationsNoneOutlinedIcon />
        </li>
        <li style={{ paddingRight: "20px" }}>
          <TranslateOutlinedIcon />
        </li>
        <li>avator</li>
      </ul>
    </div>
  );
}

export default Header;
