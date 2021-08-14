import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Message from "./components/Message";
import db from "./Firebase";
import firebase from "firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  console.log(input);
  console.log(messages);

  useEffect(() => {
    //this is the db
    db.collection("Fb-Messages")
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
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
      <h1>Hello World</h1>
      <h2>{username} </h2>
      <form>
        <FormControl>
          <InputLabel>Enter a Message...</InputLabel>
          <Input
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
            Send Message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
