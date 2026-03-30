import { Component, For } from "solid-js";
import { ChevronDown, Globe } from "lucide-solid";
import { useI18n } from "../../../providers/I18nProvider.tsx";

const LanguageSwitcher: Component = () => {
  const { languages, currentLocale, setLocale } = useI18n();

  return (
    <div class="dropdown dropdown-end">
      <div
        tabIndex="0"
        role="button"
        class="btn btn-sm btn-ghost gap-1 px-1.5"
      >
        <Globe class="opacity-70 size-4" />
        <ChevronDown class="mt-px hidden size-2 opacity-60 sm:inline-block" />
      </div>

      <div
        tabIndex="0"
        class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-10 w-56 overflow-y-auto shadow-2xl border-[length:--border] border-white/5 outline-[length:--border] outline-black/5"
      >
        <ul class="menu menu-sm w-full">
          <For each={languages}>
            {(language) => (
              <li>
                <button
                  type="button"
                  onClick={() => setLocale(language.locale)}
                  classList={{
                    "menu-active": currentLocale() === language.locale,
                  }}
                >
                  <span class="pe-4 font-mono font-bold opacity-40">
                    {language.label}
                  </span>

                  <span class="font-[sans-serif]">
                    {language.name}
                  </span>
                </button>
              </li>
            )}
          </For>
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
