import { Component } from "solid-js";
import avatar from "../assets/avatar.webp";
import { Atom, CakeSlice, Clock, MapPin } from "lucide-solid";
import {
  RiLogosDiscordFill,
  RiLogosGithubFill,
  RiLogosTelegramFill,
  RiLogosTwitterXFill,
} from "solid-icons/ri";
import { useI18n } from "../components/I18nProvider.tsx";
import Socials from "../components/Socials.tsx";

export const socials = [
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
    <div class="flex flex-col max-w-2xl w-full md:flex-row gap-4 md:gap-8 mx-auto overflow-y-auto">
      <div class="flex flex-row md:flex-col items-start md:w-1/3 gap-4">
        <div class="flex items-center justify-center md:w-full">
          <div class="avatar">
            <div class="size-36 md:size-full rounded-full">
              <img src={avatar} alt="Avatar" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-1.5">
          <div class="flex flex-col">
            <span class="font-bold text-xl md:text-2xl">{t("about.name")}</span>

            <div class="flex flex-row items-center text-md md:text-lg text-base-content/50 gap-1">
              <span>Kowkodivka</span>
              <span>•</span>
              <span>{t("about.pronouns")}</span>
            </div>
          </div>

          <span class="text-sm md:text-md">{t("about.role")}</span>

          <div class="flex flex-col items-start text-base-content/50 text-xs md:text-sm gap-1">
            <div class="flex items-center gap-1">
              <MapPin class="size-3.5" />
              <span>{t("about.location")}</span>
            </div>

            <div class="flex items-center gap-1">
              <Clock class="size-3.5" />
              <span>{t("about.timezone")}</span>
            </div>

            <div class="flex items-center gap-1">
              <CakeSlice class="size-3.5" />
              <span class="font-mono">16.08.20XX</span>
            </div>
          </div>
        </div>

        <div class="hidden flex-row w-full justify-around md:flex">
          <Socials socials={socials} />
        </div>
      </div>

      <div class="flex justify-around sm:justify-start md:hidden gap-2">
        <Socials socials={socials} />
      </div>

      <div class="flex flex-col gap-6 md:w-2/3">
        <div class="card bg-base-200">
          <div class="card-body">
            <div class="flex items-center gap-1.5">
              <Atom class="size-5" />
              <h2 class="card-title">{t("techStack.title")}</h2>
            </div>

            <p>{t("techStack.description")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
