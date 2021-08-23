import { ReactNode } from "react";

export interface LayoutWithChildren {
  children?: ReactNode;
}

export interface MainLayoutProps extends LayoutWithChildren {
  title?: string;
}
