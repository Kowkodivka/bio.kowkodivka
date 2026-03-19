import { LucideIcon } from "lucide-preact";

export type Route = {
  icon: LucideIcon;
  name: string;
  href: string;
};

interface DockProps {
  routes: Route[];
  path: string;
}

export default function Dock({ routes, path }: DockProps) {
  return (
    <div className="dock dock-sm bg-base-200/90 sm:hidden">
      {routes.map(({ icon: Icon, href }) => {
        const isActive = path === href;

        return (
          <a
            href={href}
            className={isActive ? "dock-active" : ""}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
