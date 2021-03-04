import { useLayoutEffect } from "react";

export const useLockBodyScroll = () => {
  useLayoutEffect((): any => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = originalStyle);
  }, []);
};
