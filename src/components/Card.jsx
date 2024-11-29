import React from 'react';
import '../css/card.css';

const Card = ({ ticket }) => {
  return (
    <div className="card">
      <div className="header">
        <h5>{ticket.id}</h5>
        <div className="user-avatar">
          <img src="/logo192.png" alt="User Avatar" />
        </div>
      </div>
      <p>{ticket.title}</p>
      <div className="content">
        <div className="icon-and-feature">
          <div className="feature-request">{ticket.tag[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
