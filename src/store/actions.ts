import { dispatcher } from ".";
import { IAppProps, IToastRemoveAction, IToastState } from "../types";
import {
  CONTAINER_CLICKER_AMOUNT,
  CONTAINER_CLICKER_AMOUNT_INIT,
  CONTAINER_TOASTS_REMOVE,
  CONTAINER_TOASTS,
  CONTAINER_TOASTS_INIT,
} from "./containers";
import { initialState } from "./initialState";
import { showToast } from "./uiActions";

// increments our click counter
const incrementAction = (prevState: IAppProps, nextState: IAppProps) => {
  const nextValue = prevState.amount + nextState.amount;
  showToast(`Next value: ${nextValue}`);
  return { ...prevState, amount: nextValue };
};

// pushes toasts to our toasts state
const showToastAction = (prevState: IToastState, nextState: IToastState) => {
  return { toasts: [...(prevState.toasts || []), ...nextState.toasts] };
};

// consumes a toast, removes it from our toasts list
const consumeToastAction = (
  _: IToastRemoveAction,
  nextState: IToastRemoveAction
) => {
  return dispatcher.emit(CONTAINER_TOASTS, {
    toasts: (dispatcher.prevState[
      CONTAINER_TOASTS
    ] as IToastState).toasts.filter((toast) => toast !== nextState.toast),
  });
};

// initial state for the click counter
const initialStateAction = (_: IAppProps, nextState: IAppProps) => {
  dispatcher.emit(CONTAINER_CLICKER_AMOUNT, nextState);
  return nextState;
};

// initial state for our toasts
const initialToastStateAction = (_: IAppProps, nextState: IAppProps) => {
  dispatcher.emit(CONTAINER_TOASTS, nextState);
  return nextState;
};

export const registerActions = () => {
  dispatcher.setInitialState(CONTAINER_TOASTS, { toasts: [] });

  // start of by registering the action who listens for the initial data.
  dispatcher.when(CONTAINER_TOASTS_INIT, initialToastStateAction);
  dispatcher.when(CONTAINER_CLICKER_AMOUNT_INIT, initialStateAction);

  // put rest of actions here.
  dispatcher.when(CONTAINER_CLICKER_AMOUNT, incrementAction);
  dispatcher.when(CONTAINER_TOASTS, showToastAction);
  dispatcher.on(CONTAINER_TOASTS_REMOVE, consumeToastAction);

  // set initial state after other triggers in case you want some
  // component to be updated with this initial state on render.
  dispatcher.setInitialState(CONTAINER_CLICKER_AMOUNT, initialState);

  // @ts-ignore (just for debugging)
  window.dispatcher = dispatcher;
};
