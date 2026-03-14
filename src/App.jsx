import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ExpertisePage from "./pages/Expertise";
import ProjectsPage from "./pages/Projects";
import InsightsPage from "./pages/Insights";
import ContactPage from "./pages/Contact";
import NotFoundPage from "./pages/NotFound";

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/expertise" element={<ExpertisePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
