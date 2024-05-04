import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/blog",
        element: <Blog />,
    } 
    // {
    //     path: "/profile",
    //     element: <Profile />,
    // },
    // {
    //     path: "/auth",
    //     element: <AuthLayout />,
    //     children: [
    //         {
    //             index: true,
    //             element: <Login />,
    //         },
    //     ],
    // }  
];