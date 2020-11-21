import React, { FC, useState } from "react";
import { queueSubscribe, IQueue } from "state0";
import { IAppProps, IToastState } from "../types";

export const withState0 = (
  queue: IQueue<IAppProps | IToastState>,
  Component: FC<any>,
  path: string
) => {
  const ComponentWrapper: FC<any> = (): JSX.Element => {
    const [props, setProps] = useState({});
    const subscriber = (data: any) => {
      setProps({ ...props, ...data });
    };
    queueSubscribe(queue, [{ type: path, trigger: subscriber }]);
    Component.defaultProps = props;
    return <Component props={props} />;
  };

  return ComponentWrapper;
};
