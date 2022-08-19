import "./styles.css";

export const MainContainer = ({ characterImg, children }) => {
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
        <img
          src={require("../../static/images/logo/logo.png")}
          className="logo"
        />
        {/* //? 하냥이 이미지 */}
        <img
          src={
            characterImg
              ? require("../../static/images/characters/" + characterImg)
              : ""
          }
          className="character"
        />
      </div>

      {/* //? 콘텐츠 */}
      {children}
    </div>
  );
};