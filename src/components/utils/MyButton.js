// @flow
import React from 'react';
import Button from '@material-ui/core/Button';
import TicketIcon from '../../resources/images/icons/ticket.png';

type Props = {
  bck: string,
  color: string,
  link: string,
  text: string,
};

const MyButton = (props: Props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size="small"
      style={{
        background: props.bck,
        color: props.color,
      }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {props.text}
    </Button>
  );
};

export default MyButton;
