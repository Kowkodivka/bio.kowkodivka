import { useI18n } from "@/providers/I18nProvider";

const AboutPage = () => {
  const { t } = useI18n();

  return (
    <div class="flex items-center justify-center min-h-svh">
      <p>{t("greetings")}</p>
    </div>
  );
};

export default AboutPage;
