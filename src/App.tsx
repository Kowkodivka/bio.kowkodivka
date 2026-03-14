import { Component, Show, Suspense } from "solid-js";
import { Book, Hammer, Link } from "lucide-solid";
import { RouteSectionProps } from "@solidjs/router";
import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import { useI18n } from "./components/I18nProvider";

export const routes = [
  {
    key: "nav.projects",
    path: "/projects",
    icon: Hammer,
  },
  {
    key: "nav.about",
    path: "/",
    icon: Book,
  },
  {
    key: "nav.socials",
    path: "/socials",
    icon: Link,
  },
] as const;

const App: Component<RouteSectionProps> = (props) => {
  const { dict, duringTransition } = useI18n();

  return (
    <div style={{ opacity: duringTransition() ? 0.5 : 1 }}>
      <Suspense>
        <Show when={dict()}>
          <div class="bg-base-100">
            <Navbar routes={routes} />

            <main>
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
