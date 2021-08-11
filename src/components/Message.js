import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import './Message.css'

const Message = (props) => {
  return (
    <div>
      <Card className='message'>
        <CardContent>
          <Typography className='color' gutterBottom>
            {props.username}: {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
