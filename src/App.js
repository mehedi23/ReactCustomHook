import React , {useState} from "react"
import './App.css';

function App() {
  const [ first , setFirst ] = useState('');
  const [ second , setSecond ] = useState('');
  const [ third , setThird ] = useState('');

  const first_name = (e) => {
    setFirst(e.target.value)
  }

  const second_name = (e) => {
    setSecond(e.target.value)
  }

  const third_name = (e) => {
    setThird(e.target.value)
  }

  const outPut = e => {
    const form_val = [ first , second , third ];
    console.log(form_val)
    setFirst('')
    setSecond('')
    setThird('')
  }

  return (
      <div className="App">
          <h1 style={{
              "marginBottom": "50px"
          }}>
              Form validation
          </h1>

          <input 
            value ={first}
            onChange={first_name}
            name="first name" 
            placeholder="Your First Name"
          />

          <input 
            value={second}
            onChange={second_name}
            name="second name" 
            placeholder="Your Second Name"
          />

          <input 
            value={third}
            onChange={third_name}
            name="third name" 
            placeholder="Your Third Name"
          />

          <button onClick={outPut}> Submit </button>

      </div>
  );
}

export default App;
