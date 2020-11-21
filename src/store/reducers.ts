import { IAppProps } from "../types";
import { ACTION_CLICK_INCREASE } from "./actionTypes";

export const clickReducer = {
  type: ACTION_CLICK_INCREASE,
  trigger: (prevState: IAppProps, nextState: IAppProps): IAppProps => {
    return { amount: prevState.amount + nextState.amount };
  },
};
