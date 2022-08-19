import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const get = () => {
    axios.get('http://127.0.0.1/get',{
      params: {
        korName: "양재호",
        initial: "YJH",
        birthDay: "20020412",
        nameMeaning: ['들보', '재상', '호걸'],
      }
    })
      .then(res => {
        console.log(res.data);
        setList(res.data);
      })
  }
  return (
    <div className="App">
      <button onClick={get}>버튼</button>
      {list.map((e, index)=> (
        <p key={index}>{e[0]} / {e[1]}</p>
      ))}
    </div>
  );
}

export default App;