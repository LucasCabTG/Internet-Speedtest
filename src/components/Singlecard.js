import React from "react";
import { WifiOutline } from "react-ionicons";
const SingleCards = ({ iconName, txtMain, txtInfo }) => {
  return (
    <span className="card">
      <span className="card-main-heading">{txtMain}</span>
      <span className="card-info">
        <WifiOutline
          color={"#000000"}
          title={iconName}
          height="200px"
          width="200px"
        />
        <span className="card-info-msg">{txtInfo}</span>
      </span>
    </span>
  );
};
export default SingleCards;