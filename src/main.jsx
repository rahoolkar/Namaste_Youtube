import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body.jsx";
import WatchPage from "./components/WatchPage.jsx";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Body></Body>,
        },
        {
          path: "/watch",
          element: <WatchPage></WatchPage>,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={appRouter}
    ></RouterProvider>
  </StrictMode>
);
