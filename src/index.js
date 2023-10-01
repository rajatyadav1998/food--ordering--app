import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import { RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestraunMenu from "./components/RestraunMenu";
import { Provider } from "react-redux";
import appStore from "./utils.js/appStore";
import Cart from "./components/Cart";


const App=()=>{
    return(
      <Provider store={appStore}>
        <div className="app">
        <Header/>
       <Outlet/>
        </div>
        </Provider>


    );
}

const appRouter=createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        children:[
            {
              path:"/",
              element:<Body/>
            },
            {
             
            path:"/about",
            element:<About/>,
            
            },
            {
             path:"/contact",
             element:<Contact/>,
             
            },
            {
              path:"/cart",
              element:<Cart/>,
              
             },
            {
            path:"/restraun/:resid",
            element:<RestraunMenu/>,
            
           }
        ],
            errorElement:<Error/>,
          }
       ]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
