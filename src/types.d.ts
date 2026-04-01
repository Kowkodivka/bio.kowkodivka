import { LucideIcon } from "lucide-solid";
import { SimpleIcon } from "simple-icons";

type Icon = LucideIcon | SimpleIcon;

interface Social {
  icon: SimpleIcon;
  link: string;
}

interface Tool {
  icon?: Icon;
  name: string;
  link: string;
}

interface TechStack {
  icon: Icon;
  name: string;
  tools: Tool[];
}
