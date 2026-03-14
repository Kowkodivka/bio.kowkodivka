import { Component, createSignal, onCleanup } from "solid-js";

interface TooltipCopyProps {
  text: string;
  copyText: string;
  children: any;
  duration?: number;
}

const TooltipCopy: Component<TooltipCopyProps> = (props) => {
  const [checked, setChecked] = createSignal(false);

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleClick = async () => {
    await navigator.clipboard.writeText(props.copyText);

    setChecked(true);
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => setChecked(false), props.duration ?? 1000);
  };

  onCleanup(() => clearTimeout(timeoutId));

  return (
    <div
      class="tooltip-copy"
      data-tip={props.text}
      onClick={handleClick}
    >
      <input type="checkbox" class="hidden" checked={checked()} />
      {props.children}
    </div>
  );
};

export default TooltipCopy;
