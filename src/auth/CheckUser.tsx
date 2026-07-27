import { Navigate, Outlet } from "react-router-dom"

export default function CheckUser({islogin} : {islogin : boolean}) {
   if(!islogin){
    return <Navigate to="/" replace/>
   }
   return <Outlet/>
}
