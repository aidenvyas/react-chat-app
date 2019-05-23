import React, { Component } from "react";
import Register from "./register";
import Socketclient from "socket.io-client";
import ChatScreen from "./chatscreen";
import "./App.css";

// function App() {
//   let [screen, setScreen] = useState(0);
//   let [endpoint] = useState("http://127.0.0.1:3001");
//   let [socket, setSocket] = useState("");
//   useEffect(() => {
//     setSocket(Socketclient(endpoint));
//   });
//   return (
//     <div className="App">
//       {screen === 0 ? (
//         <Register setScreen={setScreen} socket={socket} endpoint={endpoint} />
//       ) : (
//         <ChatScreen setScreen={setScreen} socket={socket} endpoint={endpoint} />
//       )}
//     </div>
//   );
// }

export class App extends React.Component {
  state = {
    screen: 0,
    endpoint: "http://127.0.0.1:3001",
    socket: "",
    userName: ""
  };
  componentWillMount() {
    let socket = Socketclient(this.state.endpoint);

    this.setState({ socket });
  }
  setUserName = val => {
    this.setState({ userName: val });
  };
  setScreen = value => {
    this.setState({ screen: value });
  };

  render() {
    return (
      <div className="App">
        {this.state.screen === 0 ? (
          <Register
            setScreen={this.setScreen}
            setSocket={this.setSocket}
            socket={this.state.socket}
            endpoint={this.state.endpoint}
            userName={this.state.userName}
            setUserName={this.setUserName}
          />
        ) : (
          <ChatScreen
            setScreen={this.setScreen}
            setSocket={this.setSocket}
            userName={this.state.userName}
            setUserName={this.setUserName}
            socket={this.state.socket}
            endpoint={this.state.endpoint}
          />
        )}
      </div>
    );
  }
}
export default App;

// import React, { useState } from "react";
// import Socketclient from "socket.io-client";
// import "./App.css";

// function App() {
//   let [userName, setUserName] = useState("");
//   let app = "http://localhost:3001";
//   return (
//     <div className="App">
//       <form
//         onClick={e => {
//           e.preventDefault();
//           if (userName) {
//             let socket = Socketclient(app);
//             socket.emit("addUser", userName);
//           }
//         }}
//       >
//         <input
//           type="text"
//           placeholder="enter your name"
//           onChange={e => {
//             setUserName(e.target.value);
//           }}
//         />
//         <button onClick={() => {}}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
