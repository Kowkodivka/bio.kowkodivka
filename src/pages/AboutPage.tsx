import { Social } from "@/types";
import { siFuraffinity, siGithub, siTelegram, siX } from "simple-icons";
import ProfileDetailsSection from "@/components/about/ProfileDetailsSection";
import ProfileUserSummary from "@/components/about/ProfileUserSummary";
import Socials from "@/components/about/Socials";

const socials: Social[] = [
  {
    icon: siGithub,
    link: "https://github.com/Kowkodivka",
  },
  {
    icon: siTelegram,
    link: "https://t.me/lesbiansexlover",
  },
  {
    icon: siX,
    link: "https://x.com/kowkodivka",
  },
  {
    icon: siFuraffinity,
    link: "https://www.furaffinity.net/user/kowkodivka/",
  },
];

const AboutPage = () => (
  <div class="flex items-start sm:items-center justify-center min-h-svh">
    <div class="flex flex-col sm:flex-row max-w-2xl w-full gap-3 sm:gap-6 px-4 py-10 mx-auto overflow-y-auto">
      <ProfileUserSummary socials={socials} />
      <Socials
        socials={socials}
        class="flex sm:hidden flex-row w-full justify-around"
      />
      <ProfileDetailsSection />
    </div>
  </div>
);

export default AboutPage;
