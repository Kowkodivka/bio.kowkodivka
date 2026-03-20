import { LucideIcon } from "lucide-preact";
import Logo from "./Logo.tsx";

export type Route = {
  icon: LucideIcon;
  name: string;
  href: string;
};

interface NavbarProps {
  routes: Route[];
  path: string;
}

export default function Navbar({ routes, path }: NavbarProps) {
  return (
    <div className="bg-base-100/10 text-base-content sticky z-30 top-0 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100">
      <nav className="navbar w-full py-4 px-6 sm:px-12">
        <div className="flex flex-1 items-center gap-1">
          <a href="/" className="flex shrink-0 items-center">
            <Logo />
          </a>
        </div>

        <div className="flex gap-1">
          <div className="hidden flex-none sm:block">
            <ul className="menu menu-sm menu-horizontal rounded-box">
              {routes.map(({ icon: Icon, name, href }) => {
                const isActive = path === href;

                return (
                  <li
                    className={`
                      rounded-box
                      ${isActive && "menu-active"}
                    `}
                  >
                    <a href={href}>
                      <Icon className="size-4 opacity-50" />
                      {name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
