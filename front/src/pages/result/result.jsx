import React from "react";
import "./styles.css";
import { Background } from "../../components/Background/Background";
import { NameButton } from "../../components/Buttons/NameButton/NameButton";
import { Modal } from "../../components/Modal/Modal";

export const Result = () => {
  return (
    <Background>
      <Modal characterImg="result.gif">
        <form action="" method="get" className="result-container">
          <NameButton>best._.tree</NameButton>
        </form>
      </Modal>
    </Background>
  );
};
