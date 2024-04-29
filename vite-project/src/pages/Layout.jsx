import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import useLocalizeDocumentAttributes from "../../app/i18n/useLocalizeDocumentAttributes.js";
import Footer from "../components/Footer.jsx";
import Alert from "../components/Alert.jsx";

const Layout = () => {
    useLocalizeDocumentAttributes();

    return (
        <div className={"min-h-screen font-roboto pv-20"}>
            <Header/>
            <div className={"container mx-auto py-20 relative"}>
                <Alert/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;