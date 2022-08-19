import "./styles.css";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { Background } from "../../components/Background/Background";

import Input from "../../components/Input";

export const Home = () => {

  return (
    <Background>
      <MainContainer characterImg={"home.gif"}>
        <Input />
      </MainContainer>
    </Background>
  );
};
