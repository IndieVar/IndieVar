import {useTranslation} from "react-i18next";
import {supportedLngs} from "../../app/i18n/config";

export default function LocaleSwitcher() {
    const {i18n} = useTranslation();

    return (
        <div className="-ml-3">
            <select
                value={i18n.resolvedLanguage}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                className={"border-0 text-sm font-semibold leading-6 text-gray-500 hover:text-gray-900 hover:cursor-pointer"}
            >
                {Object.entries(supportedLngs).map(([code, name]) => (
                    <option value={code} key={code}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
}