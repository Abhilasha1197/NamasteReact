import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import RestaurantDetailPage from "./components/RestaurantDetailPage";
import Profile from "./components/Profile";




const AppLayout = ()=>{
   return (
   <div className="app">
     <Header />
     <Outlet/>
     <Footer/>
   </div>
   )
}


const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout/>,
  errorElement : <NotFoundPage/>,
  children:[
    {
     path: "/about",
      element: <About/>,
      children:[
        {
          path: "profile",    // no need to provide '/'
          element:<Profile/>
        }
      ]
    },{
      path: "/contact",
      element: <Contact/>
    },{
      path:"/",
      element:<Body/>
    },{
      path: "/restaurant/:id",
      element: <RestaurantDetailPage/>
    }
  ]
}])



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);