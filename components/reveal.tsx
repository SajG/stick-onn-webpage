"use client";

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  type Ref,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  style?: ComponentPropsWithoutRef<T>["style"];
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className" | "style">;

const translatePreset: Record<RevealDirection, { x: string; y: string }> = {
  up: { x: "0px", y: "28px" },
  down: { x: "0px", y: "-28px" },
  left: { x: "28px", y: "0px" },
  right: { x: "-28px", y: "0px" },
  none: { x: "0px", y: "0px" },
};

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  style,
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const nodeRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -5%" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const translate = translatePreset[direction] ?? translatePreset.up;

  const computedStyle = {
    ...(style ?? {}),
    transitionDelay: delay > 0 ? `${delay}ms` : undefined,
  } as ComponentPropsWithoutRef<T>["style"] & Record<string, string | undefined>;

  computedStyle["--reveal-translate-x"] = translate.x;
  computedStyle["--reveal-translate-y"] = translate.y;

  return (
    <Component
      ref={nodeRef as unknown as Ref<HTMLElement>}
      className={cn("reveal-element", className)}
      data-visible={isVisible ? "true" : "false"}
      style={computedStyle}
      {...(rest as ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Component>
  );
}


