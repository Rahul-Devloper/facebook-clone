import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import './Message.css'

const Message = ({username, message}) => {
const isUser = username === message.username;
   
  return (
    <div>
      <Card className= {`message ${isUser && 'message-user'}`}>
        <CardContent>
          <Typography className='color' gutterBottom>
            {message.username}: {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
