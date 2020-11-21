import { CONTAINER_TOASTS } from "./containers";
import { dispatcher } from ".";

export const showToast = (value: string) =>
  dispatcher.emit(CONTAINER_TOASTS, { toasts: [value] });
