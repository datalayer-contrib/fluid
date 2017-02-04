import * as actions from "./actions";

export interface IOperation {
    // Time, in milliseconds, that the operation occurred on the originating device
    time: number;

    // We follow the Delta pattern of using a key on an object to specify the action.
    // This is probably good regardless since it encapsulates the name of the action as 
    // a string (the key) - which should help with backwards compatability. It also 
    // allows us to statically type the action we set with the type. As opposed to storing
    // an enum with the action which could drift from the true type
    clear: actions.IClearAction;
    stylusDown: actions.IStylusDownAction;
    stylusUp: actions.IStylusUpAction;
    stylusMove: actions.IStylusMoveAction;
}

/**
 * Retrieves the type of action contained within the operation
 */
export function getActionType(operation: IOperation): actions.Type {
    if (operation.clear) {
        return actions.Type.Clear;
    } else if (operation.stylusDown) {
        return actions.Type.StylusDown;
    } else if (operation.stylusUp) {
        return actions.Type.StylusUp;
    } else if (operation.stylusMove) {
        return actions.Type.StylusMove;
    } else {
        throw "Unknown action";
    }
}
