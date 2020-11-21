import { makeQueue } from "state0";
import { IAppProps, IToastState } from "../types";
import { clickReducer } from "./reducers";
import { initialState } from "./initialState";

export const queue = makeQueue<IAppProps | IToastState>(
  [clickReducer],
  initialState,
  [],
  []
);
