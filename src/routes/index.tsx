import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../pages/Signin";
import SignUp from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

export const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router