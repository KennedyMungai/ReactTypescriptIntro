import './add-cell.css';
import React from 'react';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string;
};

const AddCell: React.FC<AddCellProps> = ( { nextCellId } ) => {
    const { insertCellbefore } = useActions();

  return (
    <div>
        <button>Code</button>
        <button>Text</button>
    </div>
  )
}

export default AddCell;