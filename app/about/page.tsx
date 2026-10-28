import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import About from "../components/About";
import Contact from "../components/Contact";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHead />
      <main id="main">
        <About headingLevel={1} />
      </main>
      <Contact />
    </>
  );
}
