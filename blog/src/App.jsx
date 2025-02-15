
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'; // Import the Tailwind CSS file

import Home from './pages/Home';
import './App.css';
import AppLayout from './components/Layout/AppLayout';
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Chat from "./pages/Chat"
import Landing from "./pages/Landing"; 





const App = () => {

 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/login",
          element: <LogIn />
        },
        {
          path: "/chat",
          element: <Chat />
        },
        {
          path: "/landing",
          element: <Landing />
        },
        // {
        //   path: "/profile",
        //   element: <Profile />
        // }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
