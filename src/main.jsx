import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTimes,
  faCity,
  faPencil,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faCity, faPencil, faBookBookmark);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
