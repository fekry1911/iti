import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import AuthMainLayOut from "./layOuts/authMainLayOut";
import MainLayout from "./layOuts/mainLayout";
import LandingPage from "./pages/LandingPage";
import HomeComponent from "./Components/HomeComponent";
import ErrorPage from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "auth",
    element: <AuthMainLayOut />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "main",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomeComponent />,
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
