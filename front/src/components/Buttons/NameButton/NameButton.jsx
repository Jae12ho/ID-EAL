import React from "react";
import "./styles.css";

export const NameButton = (props) => {
  const { style } = props;
  return (
    <button style={style} className="name-button">
      {props.children}
      <button className="copy-button" value={props.children}>
        <img
          src={require("../../../static/images/icons/copy.png")}
          style={{
            width: "8px",
            height: "9px",
          }}
        />
      </button>
    </button>
  );
};
