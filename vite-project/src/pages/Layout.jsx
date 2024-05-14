import Header from "../components/Header.jsx";
import {Outlet, useLocation} from "react-router-dom";
import useLocalizeDocumentAttributes from "../../app/i18n/useLocalizeDocumentAttributes.js";
import Footer from "../components/Footer.jsx";
import Alert from "../components/Alert.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import {useEffect} from "react";

const Layout = () => {
    useLocalizeDocumentAttributes();

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])


    return (
        <div className={"min-h-screen font-roboto pv-20 overflow-hidden scroll-smooth"}>
            <Header/>
            <div className={"container mx-auto py-20 relative"}>
                <Alert/>
                <Outlet/>
            </div>
            <ScrollToTop/>
            <Footer/>
        </div>
    )
}

export default Layout;
