import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Visualiser from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Visualiser />
  </StrictMode>
);

export { default } from "./main.js";
