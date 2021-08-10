import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hi', 'hello',])


  console.log(input)
  console.log(messages)


  const sendMessage = (e)=>{
    e.preventDefault();
    setMessages([...messages, input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form action="">
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
      <button type='submit' onClick={sendMessage}>Send Message</button>
      </form>
      

    {
      messages.map((message)=>(
        <p>{message}</p>
      ))
    }

    </div>
  );
}

export default App;
