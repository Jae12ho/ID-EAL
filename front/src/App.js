import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const get = () => {
    axios.get('http://43.200.104.40/get',{
      params: {
        korName: "장정우",
        initial: "JJW",
        birthDay: "20010903",
        nameMeaning: ['베풀다', '도울'],
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