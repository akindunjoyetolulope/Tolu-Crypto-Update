import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/error-page";
import CoinDetails from "./pages/Coin-details";
import HomePage from "./pages/Home-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "coin/:id",
    element: <CoinDetails />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
