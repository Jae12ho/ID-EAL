import "./styles.css";

export const Modal = (props) => {
  return (
    <div className="modal">
      {/* //? 모달 상단 바 */}
      <div className="modal-title">
        <div className="circle-btn red"></div>
        <div className="circle-btn yellow"></div>
        <div className="circle-btn green"></div>
      </div>

      <div className="modal-contents">
        {/* //? 모달 제목 - ID'eal + 하냥이 사진 */}
        <p className="modal-contents-title">
          <span className="title-ID">ID</span>
          <span className="title-eal">'eal</span>
        </p>
        {/* //? 하냥이 이미지 */}
        <div
          style={{ width: 116, height: 104, backgroundColor: "#f0f0f0" }}
        ></div>
      </div>

      {/* //? 콘텐츠 */}
      {props.children}
    </div>
  );
};
