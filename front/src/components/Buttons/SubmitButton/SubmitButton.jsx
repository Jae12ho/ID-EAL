import "./styles.css";

export const SubmitButton = (props) => {
  const { style, onSubmit, children } = props;
  return (
    <button className="submit-btn" onSubmit={onSubmit} style={style}>
      {children}
    </button>
  );
};
