import { Component, For } from "solid-js";
import { Social } from "../../../types.ts";

interface SocialsProps {
  socials: Social[];
}

const Socials: Component<SocialsProps> = (props) => {
  return (
    <For each={props.socials}>
      {(social) => {
        const icon = <social.icon class="size-4" />;

        if (social.href) {
          return (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-circle"
            >
              {icon}
            </a>
          );
        }

        return (
          <button
            type="button"
            class="btn btn-circle"
          >
            {icon}
          </button>
        );
      }}
    </For>
  );
};

export default Socials;
