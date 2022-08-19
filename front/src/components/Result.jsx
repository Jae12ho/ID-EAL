import React from "react";
import "../pages/home/styles.css";
import { NameButton } from "./Buttons/NameButton/NameButton";
import { MainContainer } from "./MainContainer/MainContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { SubmitButton } from "./Buttons/SubmitButton/SubmitButton";
import { useMediaQuery } from "react-responsive";

const Result = ({ inputs }) => {
  const [nameList, setNameList] = useState(['first', 'second', 'third', 'four', 'five']);
  const [submit, setSubmit] = useState(0);

  const isPC = useMediaQuery({
      query: "(min-width: 391px)",
  });

  useEffect(() => {
    console.log(inputs.korName);
    console.log(inputs.initial)
    console.log(inputs.birthYear + inputs.birthMonth + inputs.birthDay)
    const a = inputs.birthYear + inputs.birthMonth + inputs.birthDay;
    console.log(inputs.nameMeaning)

    axios.get("http://43.200.104.40/get", {
      params: {
        korName: encodeURIComponent(inputs.korName),
        initial: inputs.initial,
        birthDay: a,
        nameMeaning: inputs.nameMeaning,
      }
    }).then((res) => {
    console.log(res.data);
    setNameList(res.data);
    }).catch(res => {
      console.log(res);
    });
  }, [submit]);

  const onSubmit = () => {
    setSubmit(submit + 1);
  }

  return (
    <div>
      {nameList.map((value, index) => (
        <NameButton key={index}>{value}</NameButton>
      ))}
      <button className="submit-btn" onClick={onSubmit} style={{marginTop: isPC ? "26px" : "6.66vw", backgroundColor: "#D7D2FF"}}>한 번 더 추천 받기</button>
    </div>
  )
}

export default Result