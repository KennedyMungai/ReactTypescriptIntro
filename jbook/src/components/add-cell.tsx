import './add-cell.css';
import React from 'react';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string | null;
};

const AddCell: React.FC<AddCellProps> = ( { nextCellId } ) => {
    const { insertCellbefore } = useActions();

  return (
    <div>
        <button onClick={() => insertCellbefore(nextCellId, 'code')} >Code</button>
        <button onClick={() => insertCellbefore(nextCellId, 'text')} >Text</button>
    </div>
  )
}

export default AddCell;