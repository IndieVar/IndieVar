import axios from "axios";
import {API_URL} from "../../../app/constants.js";
import {useLoaderData} from "react-router-dom";
import PostCard from "../../components/features/PostCard.jsx";
import {useTranslation} from "react-i18next";
import {Helmet, HelmetProvider} from "react-helmet-async";

export const postsLoader = async () => {
    const {data} = await axios.get(`${API_URL}/posts`);
    return data
}

export default function PostsPage() {
    const posts = useLoaderData();
    const {t} = useTranslation()

    return (
        <>
            <Meta/>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {t('blog.page_title')}
                    </h1>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {t('blog.subtitle')}
                    </p>
                </div>
                <div
                    className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post}/>
                    ))}
                </div>
            </div>
        </>
    )
}

function Meta() {
    const {t, i18n} = useTranslation('meta');
    const currentUrl = window.location.href;

    return (
        <HelmetProvider>
            <Helmet>
                <title>{t("blog_page.title")}</title>
                <meta name="description" content={t("blog_page.description")}/>
                <meta name="keywords" content="react, meta tags, seo"/>
                <meta name="author" content="Aleksandr Varlamov"/>
                <meta property="og:title" content={t("blog_page.title")}/>
                <meta property="og:description" content={t("blog_page.description")}/>
                <meta property="og:image" content="/Home_page_meta_image.png"/>
                <meta property="og:url" content={currentUrl}/>
                <meta name="twitter:title" content={t("blog_page.title")}/>
                <meta name="twitter:description" content={t("blog_page.description")}/>
                <meta name="twitter:image" content="/Home_page_meta_image.png"/>
                <meta name="twitter:card" content="/Home_page_meta_image.png"/>
            </Helmet>
        </HelmetProvider>
    )
}