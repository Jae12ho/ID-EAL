import React from "react";
import "../pages/home/styles.css";
import { NameButton } from "./Buttons/NameButton/NameButton";
import { MainContainer } from "./MainContainer/MainContainer";
import { useEffect, useState } from "react";
import axios from "axios";
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
    console.log(inputs.nameMeaning)

    const tmp = []
    inputs.nameMeaning.map(e => {
      if (e && (e !== '' || e !== 'undefined')) {
        tmp.push(e);
      }
    })

    axios.get("http://43.200.104.40/get", {
      params: {
        korName: inputs.korName,
        initial: inputs.initial,
        birthDay: inputs.birthYear + inputs.birthMonth + inputs.birthDay,
        nameMeaning: tmp
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
    <div className="content-container">
      {nameList.map((e, index) => (
        <NameButton key={index}>{e[0]}</NameButton>
      ))}
      <button className="submit-btn" onClick={onSubmit} style={{marginTop: isPC ? "26px" : "6.66vw", backgroundColor: "#D7D2FF"}}>한 번 더 추천 받기</button>
    </div>
  )
}

export default Result