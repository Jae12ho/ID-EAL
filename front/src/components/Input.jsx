import { MainContainer } from "./MainContainer/MainContainer";
import { InputTitle } from "./InputTitle/InputTitle";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Result from "./Result";
import './style.css';

const Input = () => {
  const [isSubmited, setIsSubmited] = useState(false);

  const [inputs, setInputs] = useState({
    korName: "",
    initial: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    nameMeaning: [""],
  });

  const isPC = useMediaQuery({
    query: "(min-width: 391px)",
  });

  //* 한자 입력 칸 추가되었는지 확인하는 변수
  const [countAdded, setCountAdded] = useState([0]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onAddButtonClick = () => {
    if (countAdded.length < 4) {
      setCountAdded([...countAdded, 0]);
    }
  };
  
  const onSubmit = (e) => {
    console.log(e);
    setIsSubmited(true);
  };

  return (
    <div>
      {isSubmited && (
        <Result inputs={inputs}/>
      )}
      {!isSubmited && (
        <div className="content-container">
          {/* //? 한글 이름 입력 */}
          <InputTitle text={"한글 이름"} isRequired={true} />
            <input
              name="korName"
              value={inputs.korName}
              className="container"
              type="text"
              placeholder="김한양"
              onChange={handleChange}
              required
            ></input>
          {/* //? 영문 이름 입력 */}
          <InputTitle
            style={{ marginTop: isPC ? "10px" : "2.56vw" }}
            text={"영문 이름"}
            isRequired
          />
          <input
            name="initial"
            value={inputs.initial}
            className="container"
            type="text"
            placeholder="KHY"
            onChange={handleChange}
            required
          ></input>
          {/* //? 생년월일 입력 */}
          <InputTitle
            style={{ marginTop: isPC ? "10px" : "2.56vw" }}
            text={"생년월일"}
            isRequired
          />
          <div className="birth-inputs-container">
            {/* //? 생년 */}
            <input name="birthYear" value={inputs.birthYear} className="container" type="text" placeholder="YYYY" onChange={handleChange} required />
            {/* //? 월 */}
            <input name="birthMonth" value={inputs.birthMonth} className="container" type="text" placeholder="MM" onChange={handleChange} required />
            {/* //? 일 */}
            <input name="birthDay" className="container" value={inputs.birthDay} type="text" placeholder="DD" onChange={handleChange} style={{width: isPC ? "62px" : "15.9vw"}} required />
          </div>

          {/* //? 한자 뜻 입력 */}
          <InputTitle
            style={{
              marginTop: isPC ? "10px" : "2.56vw",
            }}
            text={"내 이름에 사용된 한자 뜻"}
          />
          <div>
            {countAdded.map((e, index) => (
              <div key={index} className="nameMeaning-input-container">
                <input
                  name="nameMeaning"
                  className="container"
                  value={inputs.nameMeaning[index]}
                  type="text"
                  placeholder="빼어나다"
                  onChange={(e) => {
                    const result = inputs.nameMeaning.concat();
                    result[index] = e.target.value;
                    setInputs({
                      ...inputs,
                      nameMeaning: result,
                    });
                  }}
                  style={{ width: isPC ? "227px" : "58.2vw" }}
                ></input>
              </div>
            ))}
              <button onClick={onAddButtonClick} className="add-btn">+</button>
          </div>
          {/* //? 제출 버튼 */}
          <button className="submit-btn" onClick={onSubmit} style={{marginTop: isPC ? "28px" : "7.18vw",backgroundColor: "#9CE3E4"}}>ID 추천 받기</button>
        </div>
      )}
    </div>
  )
}

export default Input