import {ChatEngine} from "react-chat-engine";
import './App.css';
import ChatFeed from "./components/ChatFeed"; 

function App() {
  return (
    <div className="App">
      <ChatEngine
      height ="100vh"
      projectID="92c9b25c-1101-499c-81a1-9b72116edf04"
      useerName="john"
      userSecret="qwerty"
      renderChatFeed = {(charAppProps)=> <ChatFeed{...charAppProps}/>}
      onNewMessage ={()=> new Audio ('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play}
      />
    </div>
  );
}

export default App;
