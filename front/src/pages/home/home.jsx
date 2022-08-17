import "./styles.css";
import { Modal } from "../../components/Modal/Modal";
import { Background } from "../../components/Background/Background";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { InputTitle } from "../../components/InputTitle/InputTitle";
import { useState } from "react";

export const Home = () => {
  const [inputs, setInputs] = useState({
    name_kor: "",
    name_eng: "",
    birth_year: "",
    birth_month: "",
    birth_day: "",
    mean: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return (
    <Background>
      <Modal>
        <div className="content-container">
          <InputTitle text={"한글 이름"} isRequired={true} />
          <CustomInput
            name="name_kor"
            value={inputs.name_kor}
            placeholder={"김한양"}
            handleChange={handleChange}
          />

          <InputTitle
            style={{ marginTop: "10px" }}
            text={"영문 이름"}
            isRequired={true}
          />
          <CustomInput
            name="name_eng"
            value={inputs.name_eng}
            placeholder={"Kim Hanyang"}
            handleChange={handleChange}
          />

          <InputTitle
            style={{ marginTop: "10px" }}
            text={"생년월일"}
            isRequired={true}
          />
          <div className="birth-inputs-container"></div>
        </div>
        <button onClick={() => console.log(inputs)}>제출</button>
      </Modal>
    </Background>
  );
};
