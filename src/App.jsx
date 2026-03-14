import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const HomePage = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/About"));
const ExpertisePage = lazy(() => import("./pages/Expertise"));
const ProjectsPage = lazy(() => import("./pages/Projects"));
const InsightsPage = lazy(() => import("./pages/Insights"));
const ContactPage = lazy(() => import("./pages/Contact"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900 focus:shadow">
            Skip to main content
          </a>
          <ScrollToTop />
          <Navbar />
          <main id="main-content">
            <Suspense fallback={<div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500 lg:px-8">Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/expertise" element={<ExpertisePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
