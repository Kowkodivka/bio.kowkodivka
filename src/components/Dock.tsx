import { Component, For } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { Route } from "../types.ts";

interface DockProps {
  routes: Route[];
}

const Dock: Component<DockProps> = (props) => {
  const location = useLocation();

  return (
    <div class="dock dock-sm bg-base-200/90 sm:hidden">
      <For each={props.routes}>
        {(route) => (
          <A
            href={route.path}
            classList={{
              "dock-active": route.path === location.pathname,
            }}
          >
            <route.icon />
          </A>
        )}
      </For>
    </div>
  );
};

export default Dock;
