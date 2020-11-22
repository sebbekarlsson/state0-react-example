import React, { FC, useMemo } from "react";
import "./App.css";
import { IAppProps } from "./types";
import { withState0 } from "./store/with";
import prettyFormat from "pretty-format";
import { queue } from "./store";
import { ACTION_CLICK_INCREASE } from "./store/actionTypes";
import { queueDispatch, STATE0_DEBUG_LOCALSTORAGE_ACTIONS } from "state0";
import { REDUCER_CLICK_ROOT } from "./store/reducers";

const AppComponent: FC<IAppProps> = ({ amount }): JSX.Element => {
  const handleClick = () => {
    queueDispatch(queue, {
      type: ACTION_CLICK_INCREASE,
      payload: { amount: 1 },
    });
  };

  const actions = window.localStorage.getItem(
    STATE0_DEBUG_LOCALSTORAGE_ACTIONS
  );
  const raw = useMemo(() => prettyFormat(actions), [actions]);

  return (
    <div className="wrapper">
      <section>
        <button onClick={handleClick}>Press Me</button>
      </section>
      <section>
        <p>You have pressed me {amount} times.</p>
      </section>
      {raw && (
        <section>
          <i
            style={{ marginTop: "1rem", display: "block", fontSize: "0.8rem" }}
          >
            What it looks like inside
          </i>
          <pre className="textarea">{raw}</pre>
        </section>
      )}
    </div>
  );
};

export const App = withState0(AppComponent, [
  {
    root: REDUCER_CLICK_ROOT,
    type: ACTION_CLICK_INCREASE,
    id: "clickComponent",
  },
]);
