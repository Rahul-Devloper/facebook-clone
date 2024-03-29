import { Button, FormControl, Input } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import db from "./Firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  

  console.log(input);
  console.log(messages);

  useEffect(() => {
    //this is the db
    db.collection("Fb-Messages")
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({id: doc.id, message: doc.data()})));
    });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("Fb-Messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, {username: username, text: input}]);
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt="" />
      <h1>Facebook Messenger Clone</h1>
      <h2>{username} </h2>
      <form className='app_form'>
        <FormControl className='app_formControl'>
          <Input
            placeholder='Enter a message'
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            disabled={!input}
            variant="outlined"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </Button>
        </FormControl>
      </form>

      <FlipMove>
      {messages.map(({id, message}) => (
        <Message key={id} username={username} message={message} />
      ))}
      </FlipMove>
      
    </div>
  );
}

export default App;
