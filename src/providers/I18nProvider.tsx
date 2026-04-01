import * as i18n from "@solid-primitives/i18n";
import type * as en from "@/locales/en-US.ts";
import {
  type Accessor,
  createContext,
  createResource,
  createSignal,
  type ParentComponent,
  Resource,
  useContext,
  useTransition,
} from "solid-js";

type Locale = "en-US" | "ru";
type RawDictionary = typeof en.dict;
type Dictionary = i18n.Flatten<RawDictionary>;

const locales: Locale[] = ["en-US", "ru"];

interface I18nContextValue {
  t: i18n.NullableTranslator<Dictionary>;
  dict: Resource<Dictionary>;
  currentLocale: Accessor<Locale>;
  setCurrentLocale: (locale: Locale) => Promise<void>;
  isTransitioning: Accessor<boolean>;
}

export const I18nContext = createContext<I18nContextValue>();

const I18nProvider: ParentComponent = (props) => {
  function getInitialLocale(): Locale {
    const saved = localStorage.getItem("locale") as Locale | null;
    if (saved && locales.some((l) => l === saved)) return saved;

    for (const language of navigator.languages) {
      if (locales.some((l) => l === language)) return language as Locale;
    }

    return locales[0];
  }

  async function fetchDictionary(locale: Locale): Promise<Dictionary> {
    const { dict }: { dict: RawDictionary } = await import(
      `@/locales/${locale}.ts`
    );
    return i18n.flatten(dict);
  }

  const [locale, setLocale] = createSignal<Locale>(getInitialLocale());
  const [isTransitioning, startTransition] = useTransition();

  const setCurrentLocale = async (newLocale: Locale) => {
    if (newLocale === locale()) return;

    await startTransition(() => {
      setLocale(newLocale);
      localStorage.setItem("locale", newLocale);
    });
  };

  const [dict] = createResource(locale, fetchDictionary);

  const t = i18n.translator(dict);

  const value: I18nContextValue = {
    t,
    dict,
    currentLocale: locale,
    setCurrentLocale,
    isTransitioning,
  };

  return (
    <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>
  );
};

function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export {
  type Locale,
  type RawDictionary,
  type Dictionary,
  locales,
  I18nProvider,
  useI18n,
};
