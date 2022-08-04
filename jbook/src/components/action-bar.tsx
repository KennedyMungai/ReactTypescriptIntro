import React from 'react';
import { useActions } from '../hooks/use-actions';

interface ActionBarProps {
    id: string;
}

const ActionBar: React.FC<ActionBarProps> = ( {id} ) => {
    const { moveCell, deleteCell } = useActions();

  return (
    <div>
        <button>Up</button>
        <button>Down</button>
        <button>Delete</button>
    </div>
  )
}

export default ActionBar;