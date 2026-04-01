import { useI18n } from "@/providers/I18nProvider";
import { Component, createSignal, onCleanup, onMount } from "solid-js";
import { Cake, Clock, MapPin } from "lucide-solid";
import avatar from "@/assets/avatar.jpeg";
import Socials from "@/components/about/Socials";
import type { Social } from "@/types";

interface ProfileUserSummaryProps {
  socials: Social[];
}

const ProfileUserSummary: Component<ProfileUserSummaryProps> = ({
  socials,
}) => {
  const { t } = useI18n();
  const [relativeTime, setRelativeTime] = createSignal("");

  const myTimezone = t("about.timezone.id");
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const updateTime = () => {
    const now = new Date();

    const myTimeParts = new Intl.DateTimeFormat("default", {
      timeZone: myTimezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
      .format(now)
      .split(":")
      .map((x) => parseInt(x, 10));

    const myDate = new Date(now);
    myDate.setHours(myTimeParts[0], myTimeParts[1], myTimeParts[2]);

    const userTimeString = new Intl.DateTimeFormat(undefined, {
      timeZone: userTimezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(myDate);

    setRelativeTime(userTimeString);
  };

  onMount(() => {
    updateTime();

    const interval = setInterval(updateTime, 1000);

    onCleanup(() => clearInterval(interval));
  });

  return (
    <div class="flex flex-row gap-4 sm:w-1/3 sm:flex-col">
      <div class="flex items-center justify-center sm:w-full">
        <div class="relative">
          <div class="avatar">
            <div class="size-36 rounded-full sm:size-full">
              <a
                href="https://x.com/KUROFENNEK/status/2026002714300440634"
                target="_blank"
                rel="noopener noreferrer"
                title={t("about.avatarAuthor")}
              >
                <img src={avatar} alt="Avatar" />
              </a>
            </div>
          </div>

          <p
            class="flex absolute bottom-2 left-full -translate-x-6 items-center justify-center bg-base-100 rounded-full size-6 sm:size-10 text-xs sm:text-sm shadow-md border border-base-300 z-10 hover:w-auto hover:px-3 group"
            onClick={() => {
              if (window.innerWidth > 640) return;
              window.alert(t("about.status.details"));
            }}
          >
            <span class="shrink-0">{t("about.status.icon")}</span>
            <span class="hidden group-hover:block ml-1.5 whitespace-nowrap">
              {t("about.status.details")}
            </span>
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-1.5">
        <div class="flex flex-col gap-0.5">
          <p class="text-xl font-bold sm:text-2xl">{t("about.name")}</p>
          <p class="text-md space-x-1 text-base-content/50 sm:text-lg">
            <span>Kowkodivka</span>
            <span>•</span>
            <span>{t("about.pronouns")}</span>
          </p>
        </div>

        <p class="text-sm sm:text-md">{t("about.role")}</p>

        <div class="flex flex-col gap-0.5 text-xs text-base-content/50 sm:text-sm">
          <div class="flex items-center gap-1">
            <MapPin class="size-3.5" />
            <p>{t("about.location")}</p>
          </div>

          <div class="flex items-center gap-1">
            <Clock class="size-3.5" />
            <p>{relativeTime()}</p>
          </div>

          <div class="flex items-center gap-1">
            <Cake class="size-3.5" />
            <p>{t("about.birthday")}</p>
          </div>
        </div>
      </div>

      <Socials
        socials={socials}
        class="hidden w-full flex-row justify-around sm:flex"
      />
    </div>
  );
};

export default ProfileUserSummary;
