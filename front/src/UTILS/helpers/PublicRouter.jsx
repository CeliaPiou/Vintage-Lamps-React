import { Navigate, Outlet } from "react-router-dom"

const PublicRouter = () => {
    const auth = localStorage.getItem("auth");
    return auth ? <Navigate to="/"/> :  <Outlet />
}

export default PublicRouter;