import { A, useLocation } from "@solidjs/router";
import { Component, For } from "solid-js";
import { routes } from "../App";
import { useI18n } from "./I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  routes: typeof routes;
}

const Navbar: Component<NavbarProps> = (props) => {
  const { t } = useI18n();
  const location = useLocation();

  return (
    <div class="bg-base-100/90 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center backdrop-blur transition-shadow duration-100">
      <nav class="navbar w-full py-0">
        <div class="flex flex-1 items-center md:gap-1 lg:gap-2">
          <A href="/" class="flex shrink-0 items-center p-2">
            <span class="text-4xl font-[inspiration] font-extrabold tracking-tight">
              Kowkodivka
            </span>
          </A>
        </div>

        <div class="flex xl:gap-2">
          <For each={props.routes}>
            {(route) => (
              <div class="hidden flex-none items-center sm:inline-block">
                <A
                  href={route.path}
                  class={"btn btn-sm btn-ghost font-normal" + (route.path === location.pathname ? " btn-active" : "")}
                >
                  <route.icon class="size-4 opacity-50" />
                  {t(route.key)}
                </A>
              </div>
            )}
          </For>

          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
