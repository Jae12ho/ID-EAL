import "./styles.css";

export const InputTitle = ({ text, isRequired, style }) => {
  return (
    <p className="input-title" style={style}>
      {text} <span style={{ color: "#F2554B" }}>{isRequired ? "*" : ""}</span>
    </p>
  );
};
