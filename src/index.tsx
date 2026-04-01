/* @refresh reload */
import "@/index.css";
import "solid-devtools";

import { render, Show, Suspense } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import AboutPage from "@/pages/AboutPage";
import { ParentComponent } from "solid-js";
import { I18nProvider, useI18n } from "@/providers/I18nProvider";

const root = document.getElementById("root");

const RootLayout: ParentComponent = ({ children }) => {
  const { dict, isTransitioning } = useI18n();

  return (
    <div classList={{ "opacity-50 transition-opacity": isTransitioning() }}>
      <Suspense>
        <Show when={dict()}>{children}</Show>
      </Suspense>
    </div>
  );
};

render(
  () => (
    <I18nProvider>
      <Router root={RootLayout}>
        <Route path="*" component={AboutPage} />
      </Router>
    </I18nProvider>
  ),
  root!,
);
