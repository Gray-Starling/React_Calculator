import React from "react";
import { ACTIONS } from "../tools/actions.js";

export const OperationButton = ({ dispatch, operation }) => {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};
