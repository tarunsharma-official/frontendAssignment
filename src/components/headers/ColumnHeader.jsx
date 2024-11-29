import React from 'react'

function ColumnHeader({ title,number }) {
    return <div className="column-header" >
        <div>
        {title}
        {number}
        </div>
        <div>
        <img src="add.svg" alt="add" className="navbar-icon" />
        <img src="3 dot menu.svg" alt="3dot" className="navbar-icon" />
        </div>
    </div>;
  }

export default ColumnHeader