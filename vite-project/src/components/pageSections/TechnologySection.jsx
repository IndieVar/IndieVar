import {useTranslation} from "react-i18next";
import {technologyList} from "../../../app/data/technologyList.js";

export default function TechnologySection() {
    const {t} = useTranslation()

    return (
        <section className="m-4 md:m-10 dark:text-gray-100">
            <div className="container p-4 mx-auto my-6 space-y-1 text-center">
                <h2 className="pb-3 text-3xl font-bold md:text-4xl text-gray-800">{t('technology.title')}</h2>
                <p className="text-gray-700 dark:text-gray-400">{t('technology.subtitle')}</p>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {technologyList && technologyList.map((technology) => (
                    <a href={technology.link}
                          key={technology.name}
                          target={"_blank"} title={technology.name + " official website"}
                          className="flex flex-col items-center p-4 rounded-lg
                      hover:border hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 group">
                        <img src={technology.logo}
                               alt={technology.name + " logotype"}
                               width={115}
                               height={115}
                        />
                        <h3 className="my-3 text-xl font-semibold">{technology.name}</h3>
                        <div className="space-y-1 leadi text-base text-center flex justify-center">
                            <p className="flex-1 mb-4 text-base leadi
                    text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-300">
                                {t('technology.' + technology.text_key)}
                            </p>
                        </div>
                    </a>))}
            </div>
        </section>
    )
}