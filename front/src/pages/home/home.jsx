import "./styles.css";
import { Modal } from "../../components/Modal/Modal";
import { Background } from "../../components/Background/Background";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { InputTitle } from "../../components/InputTitle/InputTitle";
import { useState } from "react";
import { SubmitButton } from "../../components/Buttons/SubmitButton/SubmitButton";
import { useMediaQuery } from "react-responsive";
import { AddButton } from "../../components/Buttons/AddButton/AddButton";

export const Home = () => {
  const [inputs, setInputs] = useState({
    name_kor: "",
    name_eng: "",
    birth_year: "",
    birth_month: "",
    birth_day: "",
    mean: [""],
  });

  //* 한자 입력 칸 추가되었는지 확인하는 변수
  const [added, setAdded] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isPC = useMediaQuery({
    query: "(min-width: 391px)",
  });

  const onAddButtonClick = () => {
    const means = inputs.mean.concat();

    //* 한자 입력 칸 추가되어있지 않을 때만 입력 칸을 추가한다
    if (!added) {
      means.push("");
    } else {
      means.pop();
    }

    setInputs({
      ...inputs,
      mean: means,
    });

    setAdded(!added);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <Background>
      <Modal characterImg={"home.gif"}>
        <form method="get" className="content-container">
          {/* //? 한글 이름 입력 */}
          <InputTitle text={"한글 이름"} isRequired={true} />
          <CustomInput
            name="name_kor"
            value={inputs.name_kor}
            placeholder={"김한양"}
            handleChange={handleChange}
            required
          />

          {/* //? 영문 이름 입력 */}
          <InputTitle
            style={{ marginTop: isPC ? "10px" : "2.56vw" }}
            text={"영문 이름"}
            isRequired
          />
          <CustomInput
            name="name_eng"
            value={inputs.name_eng}
            placeholder={"Kim Hanyang"}
            handleChange={handleChange}
            required
          />

          {/* //? 생년월일 입력 */}
          <InputTitle
            style={{ marginTop: isPC ? "10px" : "2.56vw" }}
            text={"생년월일"}
            isRequired
          />
          <div className="birth-inputs-container">
            {/* //? 생년 */}
            <CustomInput
              name="birth_year"
              value={inputs.birth_year}
              placeholder={"YYYY"}
              handleChange={handleChange}
              style={{
                width: isPC ? "125px" : "32.05vw",
              }}
              required
            />
            {/* //? 월 */}
            <CustomInput
              name="birth_month"
              value={inputs.birth_month}
              placeholder={"MM"}
              handleChange={handleChange}
              style={{
                width: isPC ? "62px" : "15.9vw",
              }}
              required
            />
            {/* //? 일 */}
            <CustomInput
              name="birth_day"
              value={inputs.birth_day}
              placeholder={"DD"}
              handleChange={handleChange}
              style={{
                width: isPC ? "62px" : "15.9vw",
              }}
              required
            />
          </div>

          {/* //? 한자 뜻 입력 */}
          <InputTitle
            style={{
              marginTop: isPC ? "10px" : "2.56vw",
            }}
            text={"내 이름에 사용된 한자 뜻"}
          />
          <div>
            <div className="mean-input-container">
              <CustomInput
                name="mean"
                value={inputs.mean[0]}
                placeholder={"빼어나다"}
                handleChange={(e) => {
                  const { value } = e.target;
                  const result = inputs.mean.concat();
                  result[0] = value;
                  setInputs({
                    ...inputs,
                    mean: result,
                  });
                }}
                style={{
                  width: isPC ? "227px" : "58.2vw",
                }}
              />
              <AddButton onClick={onAddButtonClick} isPlus={!added} />
            </div>
            {added && (
              <CustomInput
                name="mean"
                value={inputs.mean[1]}
                placeholder={"소나무"}
                handleChange={(e) => {
                  const { value } = e.target;
                  const result = inputs.mean.concat();
                  result[1] = value;
                  setInputs({
                    ...inputs,
                    mean: result,
                  });
                }}
                style={{
                  width: isPC ? "227px" : "58.2vw",
                  marginTop: "4px",
                }}
              />
            )}
            {/* {inputs.mean.map((value, index) => {
              if (index !== 0) {
                return (
                  <CustomInput
                    key={index}
                    name="mean"
                    value={value}
                    placeholder={"소나무"}
                    handleChange={(e) => {
                      const { value } = e.target;
                      const result = inputs.mean.concat();
                      result[index] = value;
                      setInputs({
                        ...inputs,
                        mean: result,
                      });
                    }}
                    style={{
                      width: isPC ? "227px" : "58.2vw",
                      marginTop: "4px",
                    }}
                  />
                );
              }
            })} */}
          </div>

          {/* //? 제출 버튼 */}
          <SubmitButton
            onSubmit={onSubmit}
            style={{
              marginTop: isPC ? "28px" : "7.18vw",
              backgroundColor: "#9CE3E4",
            }}
          >
            ID 추천 받기
          </SubmitButton>
        </form>
      </Modal>
    </Background>
  );
};
