"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll reveal, matching the prototype's IntersectionObserver behaviour:
 * a section fades and rises into place once, then stays put.
 *
 * The `js` class is set on <html> only after hydration, so with JS disabled or
 * still loading the CSS in globals.css leaves everything visible.
 */
export default function Reveal({
  as: Tag = "section",
  id,
  className,
  children,
}: {
  as?: "section" | "div";
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const props = {
    ref: ref as React.Ref<HTMLElement & HTMLDivElement>,
    id,
    className,
    "data-reveal": "",
    ...(shown ? { "data-revealed": "" } : {}),
  };

  return Tag === "div" ? <div {...props}>{children}</div> : <section {...props}>{children}</section>;
}
