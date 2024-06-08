import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CounterPage from "./pages/CounterPage.jsx";
// import {
//   AccordionPage,
//   ButtonPage,
//   DropdownPage,
//   ModalPage,
//   TabelPage,
// } from "./pages";

// Lazy load each component separately
const AccordionPage = lazy(() => import("./pages/AccordionPage"));
const ButtonPage = lazy(() => import("./pages/ButtonPage"));
const DropdownPage = lazy(() => import("./pages/DropdownPage"));
const ModalPage = lazy(() => import("./pages/ModalPage"));
const TabelPage = lazy(() => import("./pages/TabelPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: (
          <Suspense>
            <DropdownPage />
          </Suspense>
        ),
      },
      {
        path: "dropdown",
        element: (
          <Suspense>
            <DropdownPage />
          </Suspense>
        ),
      },
      ,
      {
        path: "buttons",
        element: (
          <Suspense>
            <ButtonPage />
          </Suspense>
        ),
      },
      {
        path: "accordion",
        element: (
          <Suspense>
            <AccordionPage />
          </Suspense>
        ),
      },
      {
        path: "modal",
        element: (
          <Suspense>
            <ModalPage />
          </Suspense>
        ),
      },
      {
        path: "tabel",
        element: (
          <Suspense>
            <TabelPage />
          </Suspense>
        ),
      },

      {
        path: "counter",
        element: <CounterPage initialCount={5} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
