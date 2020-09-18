interface Translation {
  [key: string]: string;
}

interface Translations {
  de: Translation;
  fr: Translation;
  it: Translation;
  en: Translation;
}

const DEFAULT_LANGUAGE: 'en' = 'en';

const SUPPORTED_LANGUAGES: string[] = ['de', 'fr', 'it', 'en'];

const TRANSLATIONS: Translations = {
  de: {
    sign: 'unterschreiben',
  },
  fr: {
    sign: 'signer',
  },
  it: {
    sign: 'firmare',
  },
  en: {
    sign: 'sign',
  },
};

// Source: ngx-translate / https://github.com/ngx-translate/core/blob/a13b700db0e3a509e0e81ef4fe846b7e87f1396b/projects/ngx-translate/core/src/lib/translate.service.ts#L506
function getBrowserLang(): string | undefined {
  if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
    return undefined;
  }

  let browserLang: string | null = window.navigator.languages && window.navigator.languages.length > 0 ? window.navigator.languages[0] : null;
  // @ts-ignore
  browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

  if (typeof browserLang === 'undefined') {
    return undefined;
  }

  if (browserLang.indexOf('-') !== -1) {
    browserLang = browserLang.split('-')[0];
  }

  if (browserLang.indexOf('_') !== -1) {
    browserLang = browserLang.split('_')[0];
  }

  return browserLang;
}

const lang: string | undefined = getBrowserLang();

export function translate(key: string): string {
  return TRANSLATIONS[lang !== undefined && SUPPORTED_LANGUAGES.indexOf(lang) > -1 ? lang : DEFAULT_LANGUAGE][key];
}
