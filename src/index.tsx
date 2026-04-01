/* @refresh reload */
import "@/index.css";
import "solid-devtools";

import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import AboutPage from "@/pages/AboutPage";
import { ParentComponent } from "solid-js";
import { I18nProvider } from "@/providers/I18nProvider";

const root = document.getElementById("root");

const RootLayout: ParentComponent = ({ children }) => <>{children}</>;

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
