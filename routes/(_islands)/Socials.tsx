import {
  IconType,
  SiDiscord,
  SiGithub,
  SiTelegram,
  SiX,
} from "@icons-pack/react-simple-icons";

type Social = {
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
  return socials.map(({ icon, href, text }) => {
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-circle"
        >
          {icon}
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
          {icon}
        </button>
      );
    }

    return null;
  });
}
