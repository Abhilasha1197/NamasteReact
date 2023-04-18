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
import { lazy, Suspense } from "react";

//import Instamart from "./pages/Instamart";

//chunking
//on demand loading
//code splitting
//lazy loading
// dynamic bundling
//dynamic import

const Instamart = lazy(() => import("./pages/Instamart"));
// when on demand loading=> on render=>react suspend loading.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
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
        element: <Body />,
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
