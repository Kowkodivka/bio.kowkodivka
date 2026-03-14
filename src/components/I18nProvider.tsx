import * as i18n from "@solid-primitives/i18n";
import type * as en from "../locales/en-US";
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

interface I18nContextValue {
  t: i18n.NullableTranslator<Dictionary>;
  currentLocale: Accessor<Locale>;
  setLocale: (locale: Locale) => Promise<void>;
  duringTransition: Accessor<boolean>;
  languages: readonly { locale: Locale; label: string; name: string }[];
  dict: Resource<Dictionary>;
}

const I18nContext = createContext<I18nContextValue>();

const languages = [
  { locale: "en-US" as const, label: "EN", name: "English" },
  { locale: "ru" as const, label: "RU", name: "Русский" },
] as const;

function getInitialLocale(): Locale {
  const saved = localStorage.getItem("locale") as Locale | null;
  if (saved && languages.some((l) => l.locale === saved)) return saved;

  for (const loc of navigator.languages) {
    if (languages.some((l) => l.locale === loc)) return loc as Locale;
  }

  return "en-US";
}

async function fetchDictionary(locale: Locale): Promise<Dictionary> {
  const { dict }: { dict: RawDictionary } = await import(
    `../locales/${locale}.ts`
  );
  return i18n.flatten(dict);
}

export const I18nProvider: ParentComponent = (props) => {
  const [currentLocale, setCurrentLocale] = createSignal<Locale>(
    getInitialLocale(),
  );
  const [dict] = createResource(currentLocale, fetchDictionary);

  const t = i18n.translator(dict);

  const [duringTransition, startTransition] = useTransition();

  const setLocale = (locale: Locale) =>
    startTransition(() => {
      setCurrentLocale(locale);
      localStorage.setItem("locale", locale);
    });

  const value: I18nContextValue = {
    t,
    currentLocale,
    setLocale,
    duringTransition,
    languages,
    dict,
  };

  return (
    <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>
  );
};

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
