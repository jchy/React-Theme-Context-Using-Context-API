import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import AppContextProvider from "./Context/ApplicationContextProvider";
import ThemeContextProvider from "./Context/ThemeProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AppContextProvider>
  </StrictMode>,
  rootElement
);
