import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import AuthMainLayOut from "./layOuts/authMainLayOut";
import MainLayout from "./layOuts/mainLayout";
import LandingPage from "./pages/LandingPage";
import HomeComponent from "./Components/HomeComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "auth",
    element: <AuthMainLayOut />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
  {
    path: "main",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomeComponent />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
