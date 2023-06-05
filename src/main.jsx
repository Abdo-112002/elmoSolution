import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App.jsx";
import "./styles/main.scss";

// Dependency
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>
);
