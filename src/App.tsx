import React, { FC, useMemo } from "react";
import "./App.css";
import { IAppProps } from "./types";
import { withState0 } from "./store/with";
import prettyFormat from "pretty-format";
import { queue } from "./store";
import { ACTION_CLICK_INCREASE } from "./store/actionTypes";
import { queueDispatch } from "state0";

const AppComponent: FC<IAppProps> = ({ amount }): JSX.Element => {
  const handleClick = () => {
    queueDispatch(queue, {
      type: ACTION_CLICK_INCREASE,
      payload: { amount: 1 },
    });
  };

  const state = queue.state;
  const raw = useMemo(() => state && prettyFormat(queue), [state]);

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

export const App = withState0(queue, AppComponent, ACTION_CLICK_INCREASE);
