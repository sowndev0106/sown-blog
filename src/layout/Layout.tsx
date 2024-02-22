import { Outlet, Link } from "react-router-dom";
import Header from "../sections/layout/Header";
import Footer from "../sections/layout/Footer";
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;