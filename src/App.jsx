import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

import Error from "./pages/Error";
import InnerPage from "./pages/InnerPage";
import MainLayout from "./layout/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "innerpage/:id",
          element: <InnerPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
