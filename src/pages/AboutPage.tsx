import { useI18n } from "@/providers/I18nProvider";

const AboutPage = () => {
  const { t, currentLocale, setCurrentLocale } = useI18n();

  const toggleLocale = async () => {
    const newLocale = currentLocale() === "en-US" ? "ru" : "en-US";
    await setCurrentLocale(newLocale);
  };

  return (
    <div class="flex flex-col items-center justify-center min-h-svh gap-8">
      <p class="text-2xl">{t("greetings")}</p>

      <button
        onClick={toggleLocale}
        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all active:scale-95 flex items-center gap-2"
      >
        🌐 {currentLocale() === "en-US" ? "Русский" : "English"}
      </button>

      <p class="text-sm text-gray-500">
        Current: <span class="font-mono">{currentLocale()}</span>
      </p>
    </div>
  );
};

export default AboutPage;
