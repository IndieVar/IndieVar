import {Outlet, useLocation} from "react-router-dom";
import useLocalizeDocumentAttributes from "../../app/i18n/useLocalizeDocumentAttributes.js";
import ScrollToTop from "../components/elements/ScrollToTop.jsx";
import {useEffect} from "react";
import Header from "../components/elements/Header.jsx";
import ContactForm from "../components/forms/ContactForm.jsx";
import Alert from "../components/elements/Alert.jsx";
import Footer from "../components/elements/Footer.jsx";

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
                <ContactForm/>
                <Alert/>
                <Outlet/>
            </div>
            <ScrollToTop/>
            <Footer/>
        </div>
    )
}

export default Layout;
