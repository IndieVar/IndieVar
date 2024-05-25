import {useTranslation} from "react-i18next";
import PostCard from "../../components/features/PostCard.jsx";
import {NavLink} from "react-router-dom";

export default function BlogComponent({posts}) {
    const {t} = useTranslation()
    return (
        <div className="bg-white pt-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {t('blog.component')}
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {t('blog.subtitle')}
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
                <div className={"flex justify-center mt-8"}>
                    <NavLink to={"/posts"}
                             className="font-semibold leading-6 text-gray-700 hover:text-gray-900 hover:underline"
                    >
                        {t("blog.all_posts")} <span aria-hidden="true">→</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
