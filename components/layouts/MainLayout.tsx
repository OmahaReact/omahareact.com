import Head from "next/head";
import { MainLayoutProps } from "Models/LayoutProps";
import Footer from "components/Footer";
import Header from "components/Header";

const MainLayout = ({ title, children }: MainLayoutProps) => {
  return (
    <div className="bg-white">
      <Head>
        <title>{title ? title : "Omaha React/Node/NextJs Group"}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="relative overflow-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
