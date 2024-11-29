import React from 'react';
import Card from './Card';
import ColumnHeader from './headers/ColumnHeader';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <ColumnHeader title={title} number={tickets.length} />
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default Column;
