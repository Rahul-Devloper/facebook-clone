import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Message from "./components/Message";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: "Surya", text: "Hello"}, {username: "Deepak", text: "Hi"}]);
  const [username, setUsername] = useState('');

  console.log(input);
  console.log(messages);

  useEffect(()=>{
    setUsername(prompt('Please enter your name'))
  }, [])


  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
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
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  );
}

export default App;
