import { Component, For } from "solid-js";
import avatar from "../assets/avatar.webp";
import { CakeSlice, Clock, MapPin } from "lucide-solid";
import {
  RiLogosDiscordFill,
  RiLogosGithubFill,
  RiLogosTelegramFill,
  RiLogosTwitterXFill,
} from "solid-icons/ri";
import TooltipCopy from "../components/TooltipCopy.tsx";
import { useI18n } from "../components/I18nProvider.tsx";

const socials = [
  {
    icon: RiLogosTelegramFill,
    href: "https://t.me/lesbiansexlover",
  },
  {
    icon: RiLogosDiscordFill,
    text: "@kowkodivka",
  },
  {
    icon: RiLogosTwitterXFill,
    href: "https://x.com/kowkodivka",
  },
  {
    icon: RiLogosGithubFill,
    href: "https://github.com/Kowkodivka",
  },
] as const;

const About: Component = () => {
  const { t } = useI18n();

  return (
    <div class="flex flex-col max-w-2xl w-full md:flex-row md:gap-8 mx-auto">
      <div class="flex flex-row md:flex-col items-center md:items-start md:w-1/3 gap-4">
        <div class="flex items-center justify-center md:w-full">
          <div class="avatar">
            <div class="size-42 md:size-full rounded-full">
              <img src={avatar} alt="Avatar" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <div class="flex flex-col">
            <span class="font-bold text-2xl">{t("about.name")}</span>

            <div class="flex flex-row items-center text-lg text-base-content/50 gap-1">
              <span>Kowkodivka</span>
              <span>•</span>
              <span>{t("about.pronouns")}</span>
            </div>
          </div>

          <span class="text-md">{t("about.role")}</span>

          <div class="flex flex-col items-start text-base-content/50 gap-1">
            <div class="flex items-center text-sm gap-1">
              <MapPin class="size-3.5" />
              <span>{t("about.location")}</span>
            </div>

            <div class="flex items-center text-sm gap-1">
              <Clock class="size-3.5" />
              <span>{t("about.timezone")}</span>
            </div>

            <div class="flex items-center text-sm gap-1">
              <CakeSlice class="size-3.5" />
              <span class="font-mono">16.08.20XX</span>
            </div>
          </div>
        </div>

        <div class="hidden flex-row w-full justify-around md:flex">
          <For each={socials}>
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
        </div>
      </div>

      <div class="mt-6 md:mt-0 md:w-2/3">
        <p class="text-base-content">
          ...
        </p>
      </div>
    </div>
  );
};

export default About;
