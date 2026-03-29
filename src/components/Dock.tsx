import { Component, For } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { routes } from "../App";

interface DockProps {
  routes: typeof routes;
}

const Dock: Component<DockProps> = (props) => {
  const location = useLocation();

  return (
    <div class="dock dock-sm bg-base-200/90 sm:hidden">
      <For each={props.routes}>
        {(route) => (
          <A
            href={route.path}
            class={[
              route.path === location.pathname && "dock-active",
              route.disabled && "hidden",
            ].filter(Boolean).join(" ")}
          >
            <route.icon />
          </A>
        )}
      </For>
    </div>
  );
};

export default Dock;
