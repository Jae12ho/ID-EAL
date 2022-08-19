import "./styles.css";

export const InputTitle = (props) => {
  const { text, isRequired, style } = props;
  return (
    <p className="input-title" style={style}>
      {text} <span style={{ color: "#F2554B" }}>{isRequired ? "*" : ""}</span>
    </p>
  );
};
