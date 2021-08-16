import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from 'react';
import './Message.css'
import FlipMove from 'react-flip-move';


const Message = forwardRef(({username, message}, ref) => {
const isUser = username === message.username;
   
  return (
    <div ref={ref}>
      <Card className= {`message ${isUser && 'message-user'}`}>
        <CardContent>
          <Typography className='color' gutterBottom>
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
})

export default Message;
