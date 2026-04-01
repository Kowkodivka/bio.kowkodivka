import { SimpleIcon } from "simple-icons";
import { JSX } from "solid-js";

const Icon = (
  props: { icon: SimpleIcon } & JSX.HTMLAttributes<HTMLDivElement>,
) => {
  return <div innerHTML={props.icon.svg} {...props} />;
};

export default Icon;
