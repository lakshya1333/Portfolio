import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import Systems from "../components/Systems";
import MoreWork from "../components/MoreWork";
import Contact from "../components/Contact";

export const metadata: Metadata = { title: "Work" };

export default function Projects() {
  return (
    <>
      <PageHead />
      <main id="main">
        <Systems headingLevel={1} />
        <MoreWork />
      </main>
      <Contact />
    </>
  );
}
