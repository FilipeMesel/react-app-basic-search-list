import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import JASONDATA from './MOCK_DATA.json'

function App() {
  const [textInput, setTextInput] = useState('')
  return (
    <div className="App">
      <input 
          type = "text"
          placeholder='Search...'
          onChange = {(event) => {
          setTextInput(event.target.value);
          }}
          />
        {JASONDATA.filter((val)=>{
          if(textInput == "") {
            return val
          } else if(val.first_name.toLowerCase().includes(textInput.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div  className="user" key = {key}>
              <p>{val.first_name}</p>
            </div>
          )
        })}
    </div>
  );
}

export default App;
