import { Avatar, AvatarProps } from "./components/Avatar";
import React from "react";
import ReactDOM from "react-dom";

const props: AvatarProps = { user: { name: "somename" } };

const avatar = <Avatar user={props.user} />;

ReactDOM.render(avatar, document.getElementById("root"));
