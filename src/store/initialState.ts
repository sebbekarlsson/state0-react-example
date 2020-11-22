import { IAppProps } from "../types";
import { IStateRecord } from "state0";
import { REDUCER_CLICK_ROOT } from "./reducers";

export const initialState: IStateRecord<IAppProps> = {
  [REDUCER_CLICK_ROOT]: {
    amount: 0,
  },
};
