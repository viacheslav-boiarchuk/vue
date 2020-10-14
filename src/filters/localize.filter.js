import store from '../store';

const locales = {
    'ru-RU': {
        ProfileTitle: 'Профиль',
    },
    'en-EN': {
        Профиль: 'ProfileTitle',
    },
};

export default function localizeFilter(key) {
    const locale = store.getters.info.locale || 'ru-RU';
    return locales[locale][key] || `Didn't find correct locales ${key}`;
}
