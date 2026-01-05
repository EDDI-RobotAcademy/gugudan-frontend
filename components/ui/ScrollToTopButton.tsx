"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

type Props = {
  showAfterPx?: number;
  className?: string;
};

export default function ScrollToTopButton({
  showAfterPx = 420,
  className = "",
}: Props) {
  const [visible, setVisible] = useState(false);
  const thresholdRef = useRef(showAfterPx);

  useEffect(() => {
    thresholdRef.current = showAfterPx;
  }, [showAfterPx]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= thresholdRef.current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label="상단으로 이동"
      title="상단으로"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "fixed bottom-6 right-6 z-50",
        "h-12 w-12 rounded-full grid place-items-center",
        "bg-white/90 dark:bg-neutral-900/80",
        "border border-black/10 dark:border-white/10",
        "text-gray-900 dark:text-gray-100",
        "backdrop-blur shadow-lg",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-xl",
        "active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-neutral-950",
        className,
      ].join(" ")}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.5} />
    </button>
  );
}
