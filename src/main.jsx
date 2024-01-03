import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/app/store.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <DndProvider backend={HTML5Backend}>
        <Provider store={store}>
          <App />
        </Provider>
      </DndProvider>

    </ThemeProvider>
  </React.StrictMode>
);
