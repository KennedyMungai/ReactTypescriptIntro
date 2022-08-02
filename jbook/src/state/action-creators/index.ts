import { ActionType } from "../action-types";
import { 
            Action, 
            UpdateCellAction, 
            DeleteCellAction, 
            MoveCellAction, 
            InsertCellBeforeAction 
        } from '../actions';


export const updateCell = (id: string, content: string): UpdateCellAction => {

    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id, 
            content
        }
    };
};

export const deleteCell = (id: string): DeleteCellAction => {};

export const moveCell = (): MoveCellAction => {};

export const insertCellbefore = (): InsertCellBeforeAction => {};