import {API_URL} from "../../../app/constants.js";
import axios from "axios";
import {useLoaderData} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {Helmet, HelmetProvider} from "react-helmet-async";
import TechnologySection from "../../components/pageSections/TechnologySection.jsx";
import HeroSection from "../../components/pageSections/HeroSection.jsx";
import BlogSection from "../../components/pageSections/BlogSection.jsx";

export const homeLoader = async () => {
    const {data} = await axios.get(`${API_URL}/home`);
    return data
}

export default function HomePage() {
    const data = useLoaderData()

    return (
        <>
            <Meta/>
            <HeroSection quote={data.quote}/>
            <TechnologySection/>
            <BlogSection posts={JSON.parse(data.posts)}/>
        </>
    )
}


function Meta() {
    const {t, i18n} = useTranslation('meta');
    const currentUrl = window.location.href;

    return (
        <HelmetProvider>
            <Helmet>
                <title>{t("home_page.title")}</title>
                <meta name="description" content={t("home_page.description")} />
                <meta name="keywords" content="react, meta tags, seo" />
                <meta name="author" content="Aleksandr Varlamov" />
                <meta property="og:title" content={t("home_page.title")} />
                <meta property="og:description" content={t("home_page.description")} />
                <meta property="og:image" content={"/Home_page_meta_image.png"} />
                <meta property="og:url" content={currentUrl} />
                <meta name="twitter:title" content={t("home_page.title")} />
                <meta name="twitter:description" content={t("home_page.description")} />
                <meta name="twitter:image" content={"/Home_page_meta_image.png"} />
                <meta name="twitter:card" content="/Home_page_meta_image.png" />
            </Helmet>
        </HelmetProvider>
    )
}