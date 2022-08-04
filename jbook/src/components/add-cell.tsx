import './add-cell.css';
import React from 'react';
import { useActions } from '../hooks/use-actions';

interface AddCellProps {
    nextCellId: string;
};

const AddCell: React.FC<AddCellProps> = ( { nextCellId } ) => {
    const { insertCellbefore } = useActions();

  return (
    <div>AddCell</div>
  )
}

export default AddCell;