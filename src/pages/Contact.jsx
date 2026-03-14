import Seo from "../components/Seo";
import ContactSection from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact | Idris Kabangu"
        description="Contact Idris Kabangu to discuss business systems consulting, finance, operations, and digital growth opportunities."
        path="/contact"
      />
      <h1 className="sr-only">Contact Idris Kabangu</h1>
      <ContactSection />
    </>
  );
}
