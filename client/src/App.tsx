import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login
  },
  {
    path: "/register",
    Component: Register
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}