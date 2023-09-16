import { Outlet, Link } from "react-router-dom";
import Header from "../sections/header/Header";
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
};

export default Layout;