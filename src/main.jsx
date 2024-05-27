import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AccordionPage, ButtonPage, DropdownPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "buttons",
        element: <ButtonPage />,
      },
      {
        path: "accordion",
        element: <AccordionPage />,
      },
      {
        path: "dropdown",
        element: <DropdownPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
