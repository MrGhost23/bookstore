import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./pages/Login";
import Layout from "./components/ui/Layout";
import Ui from "./pages/Ui";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
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
