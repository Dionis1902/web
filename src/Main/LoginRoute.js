import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Context from "./context";

function LoginRoute(){
  const {login} = useContext(Context);
  return login ? <Outlet /> : <Navigate to="/login" />;
}

export default LoginRoute;