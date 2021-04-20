import React from "react"
import './App.css';
import useFormCustomHook from './useForm-hook';


function App() {

  const customHook = useFormCustomHook();


  return (
      <div className="App">
          <h1 style={{
              "marginBottom": "50px"
          }}>
              Form validation
          </h1>

          <input
            value ={customHook.formInfo.firstName}
            onChange={customHook.inputChangeHandler}
            name="first name" 
            placeholder="Your First Name"
          />

          <input
            value={customHook.formInfo.secondName}
            onChange={customHook.inputChangeHandler}
            name="second name" 
            placeholder="Your Second Name"
          />

          <input
            value={customHook.formInfo.email}
            onChange={customHook.inputChangeHandler}
            name="third name" 
            placeholder="Your Third Name"
          />

          <button onClick={customHook.outPut} > Submit </button>

      </div>
  );
}

export default App;
