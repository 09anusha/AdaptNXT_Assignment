import React from "react";

function Orderrow({ obj }) {
  return (
    
    <tr >
      <td className="tab_d">{obj.channel}</td>
      <td className="tab_d">{obj.trackingNumber}</td>
      <td className="tab_d">{obj.orderDate}</td>
      <td className="tab_d">{obj.city}</td>
      <td className="tab_d">{obj.customerName}</td>
      <td className="tab_d">{obj.orderValue}</td>
      <td className="tab_d">{obj.status}</td>
    </tr>
  );
}

export default Orderrow;
