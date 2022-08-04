import React from 'react';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ( {id} ) => {
  return (
    <div>
        <button>Up</button>
        <button>Down</button>
        <button>Delete</button>
    </div>
  )
}

export default ActionBar;