import React from "react";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

export const NameButton = (props) => {
  const { style } = props;
  const handleClick = (e) => {
    navigator.clipboard.writeText(props.children);
  };
  const isPC = useMediaQuery({
    query: "(min-width: 390px)",
  });

  return (
    <button style={style} className="name-button">
      <div
        style={{
          width: isPC ? "14px" : "3.59vw",
          height: isPC ? "14px" : "3.59vw",
        }}
      ></div>
      {props.children}
      <button
        className="copy-button"
        value={props.children}
        onClick={handleClick}
      >
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
