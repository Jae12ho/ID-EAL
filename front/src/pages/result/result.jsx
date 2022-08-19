import React from "react";
import "./styles.css";
import { Background } from "../../components/Background/Background";
import { NameButton } from "../../components/Buttons/NameButton/NameButton";
import { Modal } from "../../components/Modal/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { SubmitButton } from "../../components/Buttons/SubmitButton/SubmitButton";
import { useMediaQuery } from "react-responsive";

export const Result = (props) => {
  const { userInfo } = props;
  const [nameList, setNameList] = useState([]);

  const isPC = useMediaQuery({
    query: "(min-width: 391px)",
  });

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setNameList(res.data.map((value, index) => value.username));
    });
  }, []);

  return (
    <Background>
      <Modal characterImg="result.gif">
        <form action="" method="get" className="result-container">
          <NameButton>best._.tree</NameButton>
          {nameList.map((value, index) => {
            <NameButton>{value}</NameButton>;
          })}
          <SubmitButton
            style={{
              marginTop: isPC ? "26px" : "6.66vw",
              backgroundColor: "#D7D2FF",
            }}
          >
            한 번 더 추천 받기
          </SubmitButton>
        </form>
      </Modal>
    </Background>
  );
};
