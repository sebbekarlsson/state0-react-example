import React, { FC, useState, useCallback } from "react";
import { dispatcher } from "./store";
import "./App.css";
import { IAppProps } from "./types";
import { CONTAINER_CLICKER_AMOUNT } from "./store/containers";
import { withState0 } from "./store/with";

const AppComponent: FC<IAppProps> = ({ amount }): JSX.Element => {
  const handleClick = useCallback(() => {
    dispatcher.emit(CONTAINER_CLICKER_AMOUNT, { amount: 1 });
  }, [dispatcher]);
  return (
    <div>
      <section>
        <button onClick={handleClick}>Press Me</button>
      </section>
      <section>
        <p>You have pressed me {amount} times.</p>
      </section>
    </div>
  );
};

export const App = withState0(
  dispatcher,
  AppComponent,
  CONTAINER_CLICKER_AMOUNT
);
