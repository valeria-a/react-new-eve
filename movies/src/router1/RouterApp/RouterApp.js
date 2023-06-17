import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RouterApp = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default RouterApp;