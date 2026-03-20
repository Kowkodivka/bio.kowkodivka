import {
  IconType,
  SiDiscord,
  SiGithub,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";

export type Social = {
  icon: IconType;
  href?: string;
  text?: string;
};

const socials: Social[] = [
  {
    icon: SiTelegram,
    href: "https://t.me/lesbiansexlover",
  },
  {
    icon: SiDiscord,
    text: "@kowkodivka",
  },
  {
    icon: SiX,
    href: "https://x.com/kowkodivka",
  },
  {
    icon: SiGithub,
    href: "https://github.com/Kowkodivka",
  },
];

export default function Socials() {
  return socials.map(({ icon: Icon, href, text }) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle"
        >
          <Icon className="size-4" />
        </a>
      );
    }

    if (text) {
      return (
        <button
          type="button"
          className="btn btn-circle"
          onClick={async () => {
            await navigator.clipboard.writeText(text!);
          }}
        >
          <Icon className="size-4" />
        </button>
      );
    }

    return null;
  });
}
