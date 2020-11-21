import { dispatcher } from ".";
import { IAppProps } from "../types";
import {
  CONTAINER_CLICKER_AMOUNT,
  CONTAINER_CLICKER_AMOUNT_INIT,
} from "./containers";
import { initialState } from "./initialState";

const incrementAction = (prevState: IAppProps, nextState: IAppProps) => {
  console.log(prevState, nextState);
  return { ...prevState, amount: prevState.amount + nextState.amount };
};

const initialStateAction = (prevState: IAppProps, nextState: IAppProps) => {
  dispatcher.emit(CONTAINER_CLICKER_AMOUNT, nextState);
  return nextState;
};

export const registerActions = () => {
  // start of by registering the action who listens for the initial data.
  dispatcher.when(CONTAINER_CLICKER_AMOUNT_INIT, initialStateAction);

  // put rest of actions here.
  dispatcher.when(CONTAINER_CLICKER_AMOUNT, incrementAction);

  // always set initial state after registering all actions.
  dispatcher.setInitialState(CONTAINER_CLICKER_AMOUNT, initialState);

  // @ts-ignore
  window.dispatcher = dispatcher;
};
