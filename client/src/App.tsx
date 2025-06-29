import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"
import Register from "./components/Register"

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
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}