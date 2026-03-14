import { Component } from "solid-js";
import { socials } from "../routes/About.tsx";
import TooltipCopy from "./TooltipCopy.tsx";
import { useI18n } from "./I18nProvider.tsx";

interface SocialsProps {
  socials: typeof socials;
}

const Socials: Component<SocialsProps> = (props) => {
  const { t } = useI18n();

  return (
    <For each={props.socials}>
      {(social) => {
        return (
          <div class="flex items-center gap-2">
            {social.href
              ? (
                <a href={social.href} class="btn btn-circle">
                  <social.icon class="size-4" />
                </a>
              )
              : (
                <TooltipCopy text={t("copied")} copyText={social.text}>
                  <button class="btn btn-circle">
                    <social.icon class="size-4" />
                  </button>
                </TooltipCopy>
              )}
          </div>
        );
      }}
    </For>
  );
};

export default Socials;
