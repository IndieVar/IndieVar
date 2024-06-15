import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function BackBtn() {
    const navigate = useNavigate()
    const {t} = useTranslation('admin')

    return (
        <div className="flex ml-4">
            <button
                onClick={() => navigate(-1, {state: null, replace: true})}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
                {t('back')}
            </button>
        </div>
    )
}