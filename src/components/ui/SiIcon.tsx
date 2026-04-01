import { SimpleIcon } from "simple-icons";
import { Component, JSX } from "solid-js";

interface SiIconProps extends JSX.HTMLAttributes<HTMLDivElement> {
  icon: SimpleIcon;
}

const SiIcon: Component<SiIconProps> = (props) => {
  return <div innerHTML={props.icon.svg} {...props} />;
};

export default SiIcon;
