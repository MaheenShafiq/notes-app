import { Navigate, Outlet } from "react-router-dom";

export default function RedirectIfAuthed({ islogin }: { islogin: boolean }) {
    if (islogin) {
        return <Navigate to="/notes" replace />;
    }
    return <Outlet />
}
