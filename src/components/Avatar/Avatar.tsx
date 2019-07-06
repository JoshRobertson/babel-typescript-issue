import React, { FC } from "react";

interface Props {
  user: { name: string };
}

const Avatar: FC<Props> = props => {
  return <div>{props.user.name}</div>;
};

export { Avatar, Props as AvatarProps };
