import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <>
      <PageHead />
      <main id="main">
        <Experience headingLevel={1} />
      </main>
      <Contact />
    </>
  );
}
