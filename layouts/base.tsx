import type { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode | ReactNode[];
}
export const BaseLayout = (props: BaseLayoutProps) => {
  return <div>{props.children}</div>;
};
