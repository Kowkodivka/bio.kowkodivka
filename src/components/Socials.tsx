import { Component, For } from "solid-js";
import { useI18n } from "./I18nProvider.tsx";
import TooltipCopy from "./TooltipCopy.tsx";
import { socials } from "../routes/About.tsx";

interface SocialsProps {
  socials: typeof socials;
}

const Socials: Component<SocialsProps> = (props) => {
  const { t } = useI18n();

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
          <TooltipCopy
            text={t("copied")}
            copyText={social.text}
          >
            <button
              type="button"
              class="btn btn-circle"
            >
              {icon}
            </button>
          </TooltipCopy>
        );
      }}
    </For>
  );
};

export default Socials;
