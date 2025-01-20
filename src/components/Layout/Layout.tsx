import LayoutContainer from "./Layout.style";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return <LayoutContainer>{children}</LayoutContainer>;
}
