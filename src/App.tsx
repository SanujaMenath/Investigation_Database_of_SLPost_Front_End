import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Investigation from "./pages/Investigation";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import UpdateInv from "./pages/UpdateInv";
import UpdateInterimReport from "./pages/UpdateInterimReport";

function App() {
const router = createBrowserRouter([
{
path: "/",
element: <Root />,
children: [
{ index: true, element: <Home /> },
{ path: "/new-investigation", element: <Investigation /> },
{ path: "/update-investigation", element: <UpdateInv /> },
{
path: "/update-investigation/update-interim-report",
element: <UpdateInterimReport />,
},
{ path: "/search", element: <Search /> },
{ path: "/contact", element: <Contact /> },
{ path: "/login", element: <Login /> },
],
},
]);

return (
<React.StrictMode>
<main className="font-sans">
<RouterProvider router={router} />
</main>
</React.StrictMode>
);
}

export default App;