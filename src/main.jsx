import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Error from "./components/Error.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainBody from "./components/MainBody.jsx";
import WatchPage from "./components/WatchPage.jsx";
import FeedBody from "./components/FeedBody.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <MainBody /> },
      { path: "/:wid", element: <FeedBody></FeedBody> },
      { path: "/watch", element: <WatchPage></WatchPage> },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
