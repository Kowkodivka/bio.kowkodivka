import { Component, JSX } from "solid-js";
import { Social } from "@/types";
import SiIcon from "@/components/ui/SiIcon";

interface SocialsProps extends JSX.HTMLAttributes<HTMLDivElement> {
  socials: Social[];
}

const Socials: Component<SocialsProps> = (props) => {
  return (
    <div {...props}>
      {props.socials.map(({ icon, link }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-circle"
        >
          <SiIcon icon={icon} class="size-5 dark:invert" />
        </a>
      ))}
    </div>
  );
};

export default Socials;
