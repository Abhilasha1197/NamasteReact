import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import RestaurantDetailPage from "./components/RestaurantDetailPage";
import Profile from "./components/Profile";
import { lazy, Suspense, useState } from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./pages/Cart";
  

//import Instamart from "./pages/Instamart";

const Instamart = lazy(() => import("./pages/Instamart"));
// when on demand loading=> on render=>react suspend loading.1
//chunking
//on demand loading
//code splitting
//lazy loading
// dynamic bundling
//dynamic import



const AppLayout = () => {
  const [userr, setUserr] = useState({
    name: "Abhilasha Tiwari",
    email: "abhilasha15597@gmail.com",
  });
  return (
    <div className="app">
      <Provider store={store}>
      <userContext.Provider value={{ user: userr }}>
        <Header />
        <Outlet />
      </userContext.Provider>
      <Footer />
      </Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // no need to provide '/'
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: (
          <Body user={{ name: "abhi", roll: "116", address: "india" }} />
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetailPage />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
