import React /*, { FC, useEffect }*/ from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastProvider /*, useToasts */ } from "react-toast-notifications";
import { queueStepNext } from "state0";
import { queue } from "./store";
//import { IToastState } from "./types";
//import { withState0 } from "./store/with";
//import { CONTAINER_TOASTS_REMOVE, CONTAINER_TOASTS } from "./store/containers";

/*const ToastConsumerComponent: FC<IToastState> = ({
  toasts = [],
}): JSX.Element => {
  const { addToast } = useToasts();

  useEffect(() => {
    toasts.forEach((toast: string) => {
      addToast(toasts, { appearance: "success", autoDismiss: true });
      dispatcher.emit(CONTAINER_TOASTS_REMOVE, { toast: toast });
    });
  }, [toasts, addToast]);

  return <></>;
};

const ToastConsumer = withState0(
  dispatcher,
  ToastConsumerComponent,
  CONTAINER_TOASTS
);*/

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider autoDismissTimeout={1500}>
      <App />
      {/* <ToastConsumer /> */}
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
queueStepNext(queue);
