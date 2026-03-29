import { Component, For } from "solid-js";
import avatar from "../assets/avatar.webp";
import {
  CakeSlice,
  Clock,
  Cpu,
  Database,
  Dock,
  Info,
  MapPin,
  Wrench,
} from "lucide-solid";
import { useI18n } from "../components/I18nProvider.tsx";
import Socials from "../components/Socials.tsx";
import {
  SiDaisyui,
  SiDeno,
  SiDiscord,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJavascript,
  SiLinux,
  SiNumpy,
  SiOpencv,
  SiPycharm,
  SiPython,
  SiPytorch,
  SiReact,
  SiRust,
  SiSolid,
  SiSqlite,
  SiTailwindcss,
  SiTauri,
  SiTelegram,
  SiTokio,
  SiTypescript,
  SiUv,
  SiVscodium,
  SiWebstorm,
  SiX,
} from "solid-icons/si";

export const socials = [
  {
    icon: SiTelegram,
    label: "Telegram",
    href: "https://t.me/lesbiansexlover",
  },
  {
    icon: SiDiscord,
    label: "Discord",
    text: "@kowkodivka",
  },
  {
    icon: SiX,
    label: "X",
    href: "https://x.com/kowkodivka",
  },
  {
    icon: SiGithub,
    label: "GitHub",
    href: "https://github.com/Kowkodivka",
  },
] as const;

const techStacks = [
  {
    icon: SiPython,
    name: "Python",
    tools: [
      { icon: SiUv, name: "uv", href: "https://docs.astral.sh/uv" },
      {
        icon: SiFastapi,
        name: "FastAPI",
        href: "https://fastapi.tiangolo.com/",
      },
      {
        icon: SiPytorch,
        name: "PyTorch",
        href: "https://pytorch.org/",
      },
      { icon: SiOpencv, name: "OpenCV", href: "https://opencv.org/" },
      { name: "OpenSlide", href: "https://openslide.org/" },
      { icon: SiNumpy, name: "NumPy", href: "https://numpy.org/" },
    ],
  },
  {
    icon: SiRust,
    name: "Rust",
    tools: [
      {
        icon: SiTokio,
        name: "Tokio",
        href: "https://github.com/tokio-rs/tokio",
      },
      {
        icon: SiTokio,
        name: "Axum",
        href: "https://github.com/tokio-rs/axum/",
      },
      { name: "teloxide", href: "https://github.com/teloxide/teloxide/" },
      { name: "serenity", href: "https://github.com/serenity-rs/serenity/" },
      { icon: SiTauri, name: "Tauri", href: "https://v2.tauri.app/" },
      { name: "SeaORM", href: "https://www.sea-ql.org/SeaORM/" },
    ],
  },
  {
    icon: Dock,
    name: "Web",
    tools: [
      {
        icon: SiJavascript,
        name: "JavaScript",
        href: "https://www.ecma-international.org/",
      },
      {
        icon: SiTypescript,
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
      },
      { icon: SiDeno, name: "Deno", href: "https://deno.com/" },
      { icon: SiReact, name: "React", href: "https://react.dev/" },
      { icon: SiSolid, name: "Solid.js", href: "https://www.solidjs.com/" },
      {
        icon: SiTailwindcss,
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
      },
      { icon: SiDaisyui, name: "daisyUI", href: "https://daisyui.com/" },
    ],
  },
  {
    icon: Wrench,
    name: "DevOps & Tools",
    tools: [
      { icon: SiDocker, name: "Docker", href: "https://www.docker.com/" },
      { icon: SiGit, name: "Git", href: "https://git-scm.com/" },
      {
        icon: SiLinux,
        name: "Linux",
        href: "https://en.wikipedia.org/wiki/Linux",
      },
      { icon: SiVscodium, name: "VSCodium", href: "https://vscodium.com/" },
      {
        icon: SiWebstorm,
        name: "WebStorm",
        href: "https://www.jetbrains.com/webstorm/",
      },
      { name: "RustRover", href: "https://www.jetbrains.com/rust/" },
      {
        icon: SiPycharm,
        name: "PyCharm",
        href: "https://www.jetbrains.com/pycharm/",
      },
    ],
  },
  {
    icon: Database,
    name: "Databases",
    tools: [
      { icon: SiSqlite, name: "Sqlite", href: "https://www.sqlite.org/" },
    ],
  },
] as const;

const About: Component = () => {
  const { t } = useI18n();

  return (
    <div class="flex flex-col max-w-2xl w-full md:flex-row gap-4 md:gap-10 mx-auto overflow-y-auto">
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
              <span class="font-mono">{t("about.birthday")}</span>
            </div>
          </div>
        </div>

        <div class="hidden flex-row w-full justify-around md:flex">
          <Socials socials={socials} />
        </div>
      </div>

      <div class="flex justify-around md:hidden gap-2">
        <Socials socials={socials} />
      </div>

      <div class="flex flex-col gap-2 pb-16 md:w-2/3">
        <div class="collapse collapse-plus bg-base-200 shadow-sm border border-base-content/5">
          <input type="radio" name="about-accordion" checked="checked" />

          <div class="collapse-title flex items-center gap-2">
            <Info class="size-4" />
            <h2 class="font-semibold">{t("about.accordion.about")}</h2>
          </div>

          <div class="collapse-content space-y-2.5">
            <h2 class="text-xl font-bold">{t("about.greeting.title")}</h2>

            <p>{t("about.greeting.intro")}</p>

            <p>{t("about.greeting.philosophy")}</p>

            <p>{t("about.greeting.whenNotCoding")}</p>
            <ul class="list-disc pl-5 space-y-1 mt-2 mb-3">
              <For each={t("about.greeting.activities") as string[]}>
                {(item) => <li>{item}</li>}
              </For>
            </ul>

            <p>{t("about.greeting.lookingFor")}</p>

            <p class="mt-4">{t("about.greeting.closing")}</p>
          </div>
        </div>

        <div class="collapse collapse-plus bg-base-200 shadow-sm border border-base-content/5">
          <input type="radio" name="about-accordion" />

          <div class="collapse-title flex items-center gap-2">
            <Cpu class="size-4" />
            <h2 class="font-semibold">{t("about.accordion.techStack")}</h2>
          </div>

          <div class="collapse-content">
            <div class="flex flex-col gap-2">
              <For each={techStacks}>
                {(stack) => (
                  <div class="flex flex-col rounded-2xl bg-base-100 p-2 border border-base-content/10">
                    <div class="badge badge-xl w-fit gap-2 m-1 bg-base-200 text-base-content">
                      <stack.icon class="size-5" />
                      <span class="font-medium">{stack.name}</span>
                    </div>

                    <div class="flex flex-wrap gap-2 m-1">
                      <For each={stack.tools}>
                        {(tool) => (
                          <a
                            href={tool.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="badge badge-md badge-primary hover:badge-accent transition-all hover:scale-105 active:scale-95"
                          >
                            {tool.icon && <tool.icon class="size-4" />}
                            {tool.name && (
                              <span class="font-medium">{tool.name}</span>
                            )}
                          </a>
                        )}
                      </For>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
