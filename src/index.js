import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { GifosProvider } from "./Context/GifosContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <GifosProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </GifosProvider>,
  rootElement
);
