import { Component, createSignal } from "solid-js";
import avatar from "./assets/avatar.jpeg";
import { Clock, MapPin } from "lucide-solid";
import readmeRaw from "../README.md?raw";
import GitHubMarkdown from "./components/GitHubMarkdown";
import {
  RiLogosDiscordFill,
  RiLogosTelegram2Fill,
  RiLogosTwitterXFill,
} from "solid-icons/ri";

const App: Component = () => {
  const [copied, setCopied] = createSignal(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main class="flex items-center justify-center min-h-svh">
      <div class="fixed inset-0 -z-10 bg-repeat bg-[url('./assets/pattern.png')] invert opacity-5 blur-[1px]" />

      <div class="flex flex-row items-start justify-center py-16 max-w-5xl w-full gap-6">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="relative w-full aspect-square">
            <img
              src={avatar}
              alt="Avatar"
              class="absolute rounded-box dark:invert transition-all"
            />
          </div>

          <div class="space-y-2.5">
            <div class="text-lg">
              <p class="font-bold">Kowkodivka</p>
              <p class="font-light opacity-60">Evgeniy Sobolev • he/him</p>
            </div>

            <p class="text-md">Junior Rust, Typescript developer</p>

            <div class="text-sm opacity-60">
              <div class="flex items-center justify-start gap-1.5">
                <MapPin class="w-3.5 h-3.5" /> <span>Novokuznetsk, Russia</span>
              </div>

              <div class="flex items-center justify-start gap-1.5">
                <Clock class="w-3.5 h-3.5" /> <span>UTC+7</span>
              </div>
            </div>

            <div class="text-sm opacity-60">
              <div class="group flex items-center justify-start gap-1.5">
                <RiLogosTelegram2Fill class="w-3.5 h-3.5" />
                <span>
                  <a
                    class="link link-hover"
                    href="https://t.me/lesbiansexlover"
                  >
                    @lesbiansexlover
                  </a>
                </span>
              </div>

              <div class="flex items-center justify-start gap-1.5">
                <RiLogosDiscordFill class="w-3.5 h-3.5" />
                <span>
                  <p class="link link-hover" onClick={() => copy("kowkodivka")}>
                    @kowkodivka
                  </p>
                </span>
              </div>

              <div class="flex items-center justify-start gap-1.5">
                <RiLogosTwitterXFill class="w-3.5 h-3.5" />
                <span>
                  <a class="link link-hover" href="https://x.com/kowkodivka">
                    @kowkodivka
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-1 border border-base-300 rounded-box p-8 space-y-6 bg-base-100">
          <p class="text-sm font-mono tracking-tight word-spacing-[-0.10em]">
            Kowkodivka <span class="opacity-60">/</span>{" "}
            README<span class="opacity-60">.md</span>
          </p>

          <GitHubMarkdown content={readmeRaw} />
        </div>
      </div>

      {copied() && (
        <div class="fixed top-4 bg-base-200 text-base-content px-4 py-2 rounded-box z-50">
          Copied to clipboard!
        </div>
      )}
    </main>
  );
};

export default App;
