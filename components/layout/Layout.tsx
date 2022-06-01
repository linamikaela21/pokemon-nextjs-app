import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";

interface Props {
  title?: string;
  children?: ReactNode | undefined;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Lina Gutierrez Arribas"></meta>
        <meta
          name="description"
          content={`Information about ${title} pokemon`}
        ></meta>
        <meta name="keywords" content={`${title}, pokemon, pokedex`}></meta>
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This is the page of ${title} pokemon`}
        />
        <meta
          property="og:image"
          content={`${origin}/img/banner.png`}
        />
      </Head>
      <NavBar />
      <main style={{ padding: "20px 30px" }}>{children}</main>
    </>
  );
};
