import "./styles.css";

export const AddButton = (props) => {
  const { style, onClick, isPlus } = props;
  return (
    <button onClick={onClick} style={style} className="add-btn">
      {isPlus ? "+" : "-"}
    </button>
  );
};
