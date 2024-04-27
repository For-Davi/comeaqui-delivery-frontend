import { pt } from './pt.json';
import { en } from './en.json';

const languages = { pt, en }

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'pt-BR',
    messages: languages
}))