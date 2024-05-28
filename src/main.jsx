import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AccordionPage, ButtonPage, DropdownPage, ModalPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <DropdownPage />,
      },
      {
        path: "dropdown",
        element: <DropdownPage />,
      },
      ,
      {
        path: "buttons",
        element: <ButtonPage />,
      },
      {
        path: "accordion",
        element: <AccordionPage />,
      },
      {
        path: "modal",
        element: <ModalPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
