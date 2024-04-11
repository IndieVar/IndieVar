import {useTranslation} from "react-i18next";

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="...">
            <h1 className="text-3xl font-bold underline">
                You are welcome to IndieVar development <br/>
            </h1>
            <h2>{t("hello_world")}</h2>
        </div>
    )
}
export default HomePage;