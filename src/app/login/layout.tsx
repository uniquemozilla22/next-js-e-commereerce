interface ILayout {
  children: any;
}

const Layout = ({ children }: ILayout) => {
  return <body>{children}</body>;
};

export default Layout;
