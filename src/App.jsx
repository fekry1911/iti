import LoginPage from "./pages/loginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import AuthMainLayOut from "./layOuts/authMainLayOut";
import MainLayout from "./layOuts/mainLayout";
import LandingPage from "./pages/LandingPage";
import HomeComponent from "./Components/HomeComponent";
import ErrorPage from "./pages/errorPage";
import ProductDetails from "./Components/productDetails";
import CartProvider from "./context/cardProvider";
import { WishContext } from "./context/wishContext";
import WishProvider from "./context/wishProvider";
import Cart from "./Components/cart";
import AllProducts from "./Components/allProducts";
import AboutCompo from "./Components/aboutCompo";
import AllProductsInCateg from "./Components/getAllProductOfCategory";
import Contact from "./Components/contact";

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
      { path: "cart", element: <Cart /> },
      { path: "all", element: <AllProducts /> },
      { path: "about", element: <AboutCompo /> },
      { path: "categ/:id", element: <AllProductsInCateg /> },
      { path: "contact", element: <Contact /> },
      { path: "details/:id", element: <ProductDetails /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

function App() {
  return (
    <WishProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </WishProvider>
  );
}

export default App;
