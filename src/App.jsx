import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import AuthMainLayOut from "./layOuts/authMainLayOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthMainLayOut />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
