/* @refresh reload */
import "./index.css";

import { render } from "solid-js/web";
import "solid-devtools";
import { Route, Router } from "@solidjs/router";
import About from "./routes/About.tsx";
import App from "./App.tsx";
import { I18nProvider } from "./components/I18nProvider.tsx";

const root = document.getElementById("root");

render(() => (
  <I18nProvider>
    <Router root={App}>
      <Route path="/" component={About} />
    </Router>
  </I18nProvider>
), root!);
