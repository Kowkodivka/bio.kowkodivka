import { Component } from "solid-js";
import SiIcon from "./SiIcon";
import { Icon } from "@/types";

interface RenderIconProps {
  icon: Icon;
  class?: string;
}

const RenderIcon: Component<RenderIconProps> = (props) => {
  if ("svg" in props.icon) {
    return <SiIcon icon={props.icon} class={`dark:invert ${props.class}`} />;
  }

  const LucideIcon = props.icon;
  return <LucideIcon class={props.class} />;
};

export default RenderIcon;
