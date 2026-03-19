import { define } from "../utils.ts";
import { Book } from "lucide-preact";
import Navbar, { Route } from "./(_components)/Navbar.tsx";
import Dock from "./(_components)/Dock.tsx";

const routes: Route[] = [
  {
    icon: Book,
    name: "Обо мне",
    href: "/",
  },
];

export default define.layout(({ Component, url }) => {
  return (
    <div className="min-h-svh bg-base-100 flex flex-col flex-1">
      <Navbar routes={routes} path={url.pathname} />
      <Component />
      <Dock routes={routes} path={url.pathname} />
    </div>
  );
});
