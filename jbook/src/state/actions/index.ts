import { Action } from "redux";
import { ActionType } from "../action-types";

interface MoveCellAction {
    type: ActionType.MOVE_CELL;
    payload: {
        id: string;
        direction: 'up' | 'down';
    }
}

interface DeleteCellAction {
    type: ActionType.DELETE_CELL;
}

interface InsertCellAction {
    type: ActionType.INSERT_CELL_BEFORE;
}

interface UpdateCellAction {
    type: ActionType.UPDATE_CELL;
}