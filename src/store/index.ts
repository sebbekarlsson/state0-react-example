import { Dispatcher } from "state0";
import { IAppProps } from "../types";

export const dispatcher = new Dispatcher<IAppProps>();

// @ts-ignore (just for debugging)
window.dispatcher = dispatcher;
