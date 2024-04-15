import Header from "../components/Header.jsx";
import {Outlet} from "react-router-dom";
import useLocalizeDocumentAttributes from "../i18n/useLocalizeDocumentAttributes.js";

const Layout = () => {
    useLocalizeDocumentAttributes();

    return (
        <div className={"min-h-screen font-roboto pv-20"}>
            <Header/>
            <div className={"container mx-auto py-20"}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;