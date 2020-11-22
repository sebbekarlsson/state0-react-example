import React, { FC, useEffect } from "react";

import { useToasts } from "react-toast-notifications";
import { REDUCER_CLICK_ROOT } from "./store/reducers";
import { ACTION_CLICK_INCREASE } from "./store/actionTypes";
import { withState0 } from "./store/with";
import { IAppProps } from "./types";

export const ToastConsumerComponent: FC<IAppProps> = ({
  amount,
}): JSX.Element => {
  const { addToast } = useToasts();

  useEffect(
    () =>
      addToast(`The new value is: ${amount}`, {
        appearance: "success",
        autoDismiss: true,
      }),
    [amount, addToast]
  );

  return <></>;
};

export const ToastConsumer = withState0(ToastConsumerComponent, [
  { root: REDUCER_CLICK_ROOT, type: ACTION_CLICK_INCREASE, id: "toasts" },
]);
