/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import "solid-devtools";
import { Route, Router } from "@solidjs/router";
import About from "./routes/About";
import App from "./App";
import { I18nProvider } from "./components/I18nProvider";
import DeviceMetricsTracker from "./components/DeviceMetricsTracker";

const root = document.getElementById("root");

render(() => (
  <>
    <DeviceMetricsTracker />
    <I18nProvider>
      <Router root={App}>
        <Route path="/" component={About} />
      </Router>
    </I18nProvider>
  </>
), root!);
