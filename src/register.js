import React, { useState } from "react";

import "./App.css";

function App(props) {
  return (
    <div className="App">
      <form
        onClick={e => {
          e.preventDefault();
          if (props.userName) {
            props.socket.emit("addUser", props.userName);
            props.setScreen(1);
          }
        }}
      >
        <input
          type="text"
          placeholder="enter your name"
          onChange={e => {
            props.setUserName(e.target.value);
          }}
        />
        <button onClick={() => {}}>Submit</button>
      </form>
    </div>
  );
}

export default App;
