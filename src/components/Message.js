import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from 'react';
import './Message.css'


const Message = forwardRef(({username, message}, ref) => {
const isUser = username === message.username;
   
  return (
    <div ref={ref}>
      <Card className= {`message ${isUser && 'message-user'}`}>
        <CardContent>
          <Typography className='color' gutterBottom>
            {!isUser && `${message.username ||'Unknown User' } :`} {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
})

export default Message;
