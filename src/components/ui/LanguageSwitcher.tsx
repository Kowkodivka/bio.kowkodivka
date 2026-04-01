import { Component, For } from "solid-js";
import { ChevronDown, Globe } from "lucide-solid";
import { locales, useI18n } from "@/providers/I18nProvider";

const LanguageSwitcher: Component = () => {
  const { currentLocale, setCurrentLocale } = useI18n();

  return (
    <div class="dropdown dropdown-end">
      <div tabIndex="0" role="button" class="btn btn-sm btn-ghost gap-1 px-1.5">
        <Globe class="opacity-70 size-4" />
        <ChevronDown class="mt-px hidden size-2 opacity-60 sm:inline-block" />
      </div>

      <div
        tabIndex="0"
        class="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-10 w-56 overflow-y-auto shadow-2xl border-[length:--border] border-white/5 outline-[length:--border] outline-black/5"
      >
        <ul class="menu menu-sm w-full">
          <For each={locales}>
            {(locale) => (
              <li>
                <button
                  type="button"
                  onClick={() => setCurrentLocale(locale)}
                  classList={{
                    "menu-active": currentLocale() === locale,
                  }}
                >
                  <span class="pe-4 font-mono font-bold opacity-40">
                    {locale.label}
                  </span>

                  <span class="font-[sans-serif]">{locale.name}</span>
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
