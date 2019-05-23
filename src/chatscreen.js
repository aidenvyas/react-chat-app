import React, { useState, useEffect } from "react";
import Socketclient from "socket.io-client";
export default props => {
  let [message, setmsg] = useState("");
  let [arr, setmsgarr] = useState([]);
  let msgs;
  useEffect(() => {
    // Update the document title using the browser API
    props.socket.on("refreshmsgfeed", msgs => {
      console.log(msgs, "msgs");
      setmsgarr(msgs);
    });
  });
  console.log(props.socket.id);
  return (
    <div>
      <h2>Chat Here...!!</h2>
      <button
        onClick={() => {
          console.log("disconnected");
          props.socket.emit("disconnect");
          props.setScreen(0);
          props.setUserName('');
        }}
      >
        Logout
      </button>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (message) {
              //   props.socket.emit("sendMsg", message);
              props.socket.emit("sendMsg", {
                id: props.socket.id,
                name: props.userName,
                message
              });
              setmsg("");
            }
          }}
        >
          {arr.map(msg => (
            <p>
              {msg.name} says : {msg.message}
            </p>
          ))}

          <input
            type="text"
            value={message}
            onChange={e => {
              setmsg(e.target.value);
            }}
          />
          <button>Send MSG</button>
        </form>
      </div>
    </div>
  );
};
