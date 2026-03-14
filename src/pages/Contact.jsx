import { Helmet } from "react-helmet-async";
import ContactSection from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Idris Kabangu</title>
        <meta
          name="description"
          content="Contact Idris Kabangu to discuss business systems consulting, finance, operations, and digital growth opportunities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Idris Kabangu" />
        <meta property="og:description" content="Contact Idris Kabangu to discuss business systems consulting, finance, operations, and digital growth opportunities." />
        <meta property="og:url" content="https://www.ikabangu.com/contact" />
        <meta property="og:image" content="https://www.ikabangu.com/preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Idris Kabangu" />
        <meta name="twitter:description" content="Contact Idris Kabangu to discuss business systems consulting, finance, operations, and digital growth opportunities." />
        <meta name="twitter:image" content="https://www.ikabangu.com/preview.jpg" />
      </Helmet>
      <h1 className="sr-only">Contact Idris Kabangu</h1>
      <ContactSection />
    </>
  );
}
