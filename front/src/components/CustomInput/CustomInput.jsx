import "./styles.css";

export const CustomInput = (props) => {
  const { name, value, placeholder, style, handleChange, required } = props;
  return (
    <input
      name={name}
      value={value}
      className={"container"}
      style={style}
      type={"text"}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
    ></input>
  );
};
