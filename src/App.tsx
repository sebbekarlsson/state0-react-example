import React, { FC, useCallback, useMemo } from "react";
import { dispatcher } from "./store";
import "./App.css";
import { IAppProps } from "./types";
import { CONTAINER_CLICKER_AMOUNT } from "./store/containers";
import { withState0 } from "./store/with";
import prettyFormat from "pretty-format";

const AppComponent: FC<IAppProps> = ({ amount }): JSX.Element => {
  const handleClick = useCallback(() => {
    dispatcher.emit(CONTAINER_CLICKER_AMOUNT, { amount: 1 });
  }, [dispatcher]);

  const raw = useMemo(
    () =>
      prettyFormat({
        state: dispatcher.state,
      }),
    [dispatcher.state, dispatcher.listeners]
  );

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

export const App = withState0(
  dispatcher,
  AppComponent,
  CONTAINER_CLICKER_AMOUNT
);
