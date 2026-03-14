import { Helmet } from "react-helmet-async";
import ContactSection from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Idris Kabangu</title>
        <meta
          name="description"
          content="Get in touch with Idris Kabangu to discuss business systems consulting, strategy projects, and operational growth opportunities."
        />
      </Helmet>
      <ContactSection />
    </>
  );
}
