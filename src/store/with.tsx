import React, { FC, useState } from "react";
import { queueSubscribe, ISubscriber, queueGetStateRoot } from "state0";
import { queue } from ".";

export const withState0 = (
  Component: FC<any>,
  subscribers: Partial<ISubscriber<any>>[]
) => {
  const ComponentWrapperX: FC<any> = (): JSX.Element => {
    const [props, setProps] = useState({
      ...subscribers
        .reduce((prev, subscriber) => [...prev, subscriber.root], [])
        .reduce(
          (prev, root) => ({
            ...prev,
            ...queueGetStateRoot(queue, root),
          }),
          {}
        ),
    });
    const roots: string[] = subscribers.reduce((prev, subscriber) => {
      queueSubscribe(queue, {
        type: subscriber.type,
        id: subscriber.id,
        trigger: (data) => {
          setProps(data);
          Component.defaultProps = data;
        },
        root: subscriber.root,
      });
      return [...prev, subscriber.root];
    }, []);

    Component.defaultProps = {
      ...(Component.defaultProps || {}),
      ...roots.reduce(
        (prev, root) => ({
          ...prev,
          ...queueGetStateRoot(queue, root),
        }),
        {}
      ),
    };
    Component.defaultProps = props;
    return <Component props={props} />;
  };
  return ComponentWrapperX;
};
