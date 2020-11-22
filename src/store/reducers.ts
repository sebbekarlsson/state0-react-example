import { IAppProps } from "../types";
import { ACTION_CLICK_INCREASE } from "./actionTypes";

export const REDUCER_CLICK_ROOT = "click";

export const clickReducer = {
  type: ACTION_CLICK_INCREASE,
  root: REDUCER_CLICK_ROOT,
  trigger: (prevState: IAppProps, nextState: IAppProps): IAppProps => {
    return { amount: prevState.amount + nextState.amount };
  },
};
