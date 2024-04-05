import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./pages/Login";
import Layout from "./components/ui/Layout";
import Ui from "./pages/Ui";
import ProtectedRoute from "./components/ProtectedRoute";
import WishList from "./components/WishList";
import MyCart from "./components/ShoppingCart/MyCart";
import Shop from "./components/Shop";
import CheckOut from "./components/CheckOut";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/shop",
        element: (
          <ProtectedRoute>
            <Shop />
          </ProtectedRoute>
        ),
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      { path: "/ui", element: <Ui /> },
      {
        path: "login",
        element: <Login currentForm="login" />,
      },
      {
        path: "register",
        element: <Login currentForm="register" />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
};
export default App;
