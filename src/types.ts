import { LucideIcon } from "lucide-solid";

type IconType = LucideIcon;

interface Route {
  key: string;
  path: string;
  icon: IconType;
}

interface Social {
  icon: IconType;
  label: string;
  href: string;
}

export type { IconType, Route, Social };
