import { Component, Show, Suspense } from "solid-js";
import { Info } from "lucide-solid";
import { RouteSectionProps } from "@solidjs/router";
import Dock from "./components/dock/index.tsx";
import Navbar from "./components/navbar/index.tsx";
import { useI18n } from "./providers/I18nProvider.tsx";
import { Route } from "./types.ts";

const routes: Route[] = [
  {
    key: "nav.about",
    path: "/",
    icon: Info,
  },
];

const App: Component<RouteSectionProps> = (props) => {
  const { dict, duringTransition } = useI18n();

  return (
    <div
      class="min-h-svh flex flex-col"
      style={{ opacity: duringTransition() ? 0.5 : 1 }}
    >
      <Suspense>
        <Show when={dict()}>
          <div class="bg-base-100 flex flex-col flex-1">
            <Navbar routes={routes} />

            <main class="relative p-6 flex-1">
              {props.children}
            </main>

            <Dock routes={routes} />
          </div>
        </Show>
      </Suspense>
    </div>
  );
};

export default App;
