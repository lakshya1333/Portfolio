import type { Metadata } from "next";
import PageHead from "../components/PageHead";
import Contact from "../components/Contact";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHead />
      <main id="main" className="contact-page">
        <Contact headingLevel={1} />
      </main>
    </>
  );
}
