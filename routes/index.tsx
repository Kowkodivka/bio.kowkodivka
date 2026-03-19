import { define } from "../utils.ts";
import Socials from "./(_islands)/Socials.tsx";
import {
  IconType,
  SiDaisyui,
  SiDeno,
  SiDocker,
  SiFastapi,
  SiGit,
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
  SiTokio,
  SiTypescript,
  SiUv,
  SiVscodium,
  SiWebstorm,
} from "@icons-pack/react-simple-icons";
import {
  Book,
  CakeSlice,
  Clock,
  Cog,
  Cpu,
  Database,
  FileCode,
  Globe,
  LucideIcon,
  MapPin,
  Puzzle,
  Wrench,
} from "lucide-preact";
import avatar from "../assets/avatar.webp";

type Tool = {
  icon: IconType;
  name: string;
  href: string;
};

type Stack = {
  icon: IconType | LucideIcon;
  name: string;
  tools: Tool[];
};

export const stacks: Stack[] = [
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
      { icon: SiPytorch, name: "PyTorch", href: "https://pytorch.org/" },
      { icon: SiOpencv, name: "OpenCV", href: "https://opencv.org/" },
      { icon: FileCode, name: "OpenSlide", href: "https://openslide.org/" }, // заглушка
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
      {
        icon: Puzzle,
        name: "teloxide",
        href: "https://github.com/teloxide/teloxide/",
      },
      {
        icon: Cog,
        name: "serenity",
        href: "https://github.com/serenity-rs/serenity/",
      },
      { icon: SiTauri, name: "Tauri", href: "https://v2.tauri.app/" },
      {
        icon: Database,
        name: "SeaORM",
        href: "https://www.sea-ql.org/SeaORM/",
      },
    ],
  },
  {
    icon: Globe,
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
      { icon: Cpu, name: "RustRover", href: "https://www.jetbrains.com/rust/" },
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
      { icon: SiSqlite, name: "SQLite", href: "https://www.sqlite.org/" },
    ],
  },
];

export default define.page(() => {
  return (
    <main className="relative p-6 flex-1">
      <div className="flex flex-col max-w-2xl w-full md:flex-row gap-4 md:gap-10 mx-auto overflow-y-auto">
        <div className="flex flex-row md:flex-col items-start md:w-1/3 gap-4">
          <div className="flex items-center justify-center md:w-full">
            <div className="avatar">
              <div className="size-36 md:size-full rounded-full">
                <img src={avatar} alt="Avatar" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col">
              <span className="font-bold text-xl md:text-2xl">
                Евгений Соболев
              </span>

              <div className="flex flex-row items-center text-md md:text-lg text-base-content/50 gap-1">
                <span>Kowkodivka</span>
                <span>•</span>
                <span>он/его</span>
              </div>
            </div>

            <span className="text-sm md:text-md">Full-Stack Developer</span>

            <div className="flex flex-col items-start text-base-content/50 text-xs md:text-sm gap-1">
              <div className="flex items-center gap-1">
                <MapPin class="size-3.5" />
                <span>Новокузнецк, Россия</span>
              </div>

              <div className="flex items-center gap-1">
                <Clock class="size-3.5" />
                <span>МСК+4</span>
              </div>

              <div className="flex items-center gap-1">
                <CakeSlice class="size-3.5" />
                <span className="font-mono">16.08.20XX</span>
              </div>
            </div>

            <div className="hidden flex-row w-full justify-around md:flex">
              <Socials />
            </div>
          </div>
        </div>

        <div className="flex justify-around md:hidden gap-2">
          <Socials />
        </div>

        <div className="flex flex-col gap-2 pb-16 md:w-2/3">
          <div className="collapse collapse-plus bg-base-200 shadow-sm border border-base-content/5">
            <input type="radio" name="about-accordion" checked />

            <div className="collapse-title flex items-center gap-2">
              <Book class="size-4" />
              <h2 className="font-semibold">Обо мне</h2>
            </div>

            <div className="collapse-content space-y-2.5">
              <h2 className="text-xl font-bold">Привет, я Евгений 👋</h2>

              <p>
                Full-stack разработчик, который искренне увлечён созданием
                продуктов, которыми действительно приятно пользоваться.
              </p>

              <p>
                Люблю соединять чувство вкуса в интерфейсах с тягой к чистому,
                понятному и надёжному коду. Для меня важно, чтобы приложение не
                просто запускалось, а закрывало настоящую потребность — при этом
                оставаясь лёгким, минималистичным и без шума.
              </p>

              <p>Когда не пишу код, обычно</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 mb-3">
                <li>погружаюсь в новые инструменты, подходы и паттерны</li>
                <li>
                  делаю pet-проекты или переписываю старые до идеального
                  состояния
                </li>
                <li>
                  копаюсь в чужом open-source коде и иногда отправляю скромные
                  PR
                </li>
              </ul>

              <p>
                Ищу команду и проекты, где можно учиться у сильных людей, брать
                ответственность и расти через сложные задачи. Готов быстро
                вливаться, помогать и учиться на лету.
              </p>

              <p className="mt-4">Буду рад любому общению!</p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-base-200 shadow-sm border border-base-content/5">
            <input type="radio" name="about-accordion" />

            <div className="collapse-title flex items-center gap-2">
              <Cpu class="size-4" />
              <h2 className="font-semibold">Технологический стек</h2>
            </div>

            <div className="collapse-content">
              <div className="flex flex-col gap-2">
                {stacks.map(({ icon: Icon, name, tools }) => (
                  <div className="flex flex-col rounded-2xl bg-base-100 p-2 border border-base-content/10">
                    <div className="badge badge-xl w-fit gap-2 m-1 bg-base-200 text-base-content">
                      <Icon className="size-5" />
                      <span className="font-medium">{name}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 m-1">
                      {tools.map(({ icon: Icon, name, href }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="badge badge-md badge-primary hover:badge-accent transition-all hover:scale-105 active:scale-95"
                        >
                          <Icon className="size-4" />
                          <span className="font-medium">{name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
});
