import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found | Idris Kabangu"
        description="The page you are looking for does not exist. Return to Idris Kabangu's professional website."
        path="/404"
      />
      <section className="mx-auto flex min-h-[60vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Page not found</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            The page you requested is unavailable. Use the main navigation or return to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Go to Homepage
            </Link>
            <Link to="/contact" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
