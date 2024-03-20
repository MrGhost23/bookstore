import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./pages/Home";
import MaterLayOut from './components/ui/MasterLayOut/MasterLayOut';
import { Provider } from "react-redux";
import { store } from './store/store';
import Register from "./components/ui/Register/Register";

const router = createBrowserRouter([
  {path:'' , element: <MaterLayOut/> , children:[
    {path:'/',element:<Home/>},
    {path:'login' , element: <Register/>}
    

  ]}
])

const App = () => {
  return (
<>
<Provider store={store}>
     <RouterProvider router={router}>
</RouterProvider>
 </Provider>
</>
 
  );
};
export default App;
