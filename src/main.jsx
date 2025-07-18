import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Body from "./components/Body.jsx";
import WatchPage from "./components/WatchPage.jsx";
import ChannelSection from "./components/ChannelSection.jsx";
import ShortsPage from "./components/ShortsPage.jsx";
import SearchResults from "./components/SearchResults.jsx";

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
        {
          path: "/channel/:cid",
          element: <ChannelSection></ChannelSection>,
        },
        {
          path: "/shorts",
          element: <ShortsPage></ShortsPage>,
        },
        {
          path: "/search",
          element: <SearchResults></SearchResults>,
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
