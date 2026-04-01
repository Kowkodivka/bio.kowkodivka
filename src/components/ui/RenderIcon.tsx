import { Component } from "solid-js";
import { SimpleIcon } from "simple-icons";
import { LucideIcon } from "lucide-solid";
import SiIcon from "./SiIcon";

type Icon = LucideIcon | SimpleIcon;

const RenderIcon: Component<{ icon: Icon; class?: string }> = (props) => {
  if ("svg" in props.icon) {
    return <SiIcon icon={props.icon} class={`dark:invert ${props.class}`} />;
  }

  const Lucide = props.icon;
  return <Lucide class={props.class} />;
};

export default RenderIcon;
