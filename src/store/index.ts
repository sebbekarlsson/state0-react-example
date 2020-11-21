import { Dispatcher } from "state0";
import { IAppProps, IToastState, IToastRemoveAction } from "../types";

export const dispatcher = new Dispatcher<
  IAppProps | IToastState | IToastRemoveAction
>();

// @ts-ignore (just for debugging)
window.dispatcher = dispatcher;
