import './add-cell.css';
import React from 'react';

interface AddCellProps {
    nextCellId: string;
};

const AddCell: React.FC<AddCellProps> = ( { nextCellId } ) => {
  return (
    <div>AddCell</div>
  )
}

export default AddCell;