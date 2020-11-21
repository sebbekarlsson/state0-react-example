import React, { FC, useState } from 'react';
import { Dispatcher } from "state0";
import { IAppProps } from "../types";

export const withState0 = (
  dispatcher: Dispatcher<IAppProps>,
  Component: FC<any>,
  path: string
) => {
  const ComponentWrapper: FC<any> = (): JSX.Element => {
    const [props, setProps] = useState({});
    dispatcher.on(path, (_, nextState: any) => {
      setProps(nextState);
    });
    Component.defaultProps = props;
    return <Component props={props} />;
  };

  return ComponentWrapper;
};
