import React from "react";
import { createRoot } from "react-dom/client";

import Application from "./Application";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Application />
  </React.StrictMode>
);
