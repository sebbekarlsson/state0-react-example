import { makeQueue } from "state0";
import { IAppProps } from "../types";
import { clickReducer } from "./reducers";
import { initialState } from "./initialState";

export const queue = makeQueue<IAppProps>(initialState, [clickReducer]);
