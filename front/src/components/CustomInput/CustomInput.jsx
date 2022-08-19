import "./styles.css";

export const CustomInput = ({ name, value, placeholder, style, handleChange, required }) => {
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
