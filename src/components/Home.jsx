import { Link } from "react-router-dom";
import profileImage from "../assets/missionary-picture.jpg";

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-10 top-20 h-32 w-32 rounded-full border border-blue-200" />
        <div className="absolute right-16 top-24 h-48 w-48 rounded-full border border-slate-300" />
        <div className="absolute bottom-10 left-1/3 h-24 w-24 rounded-full border border-blue-300" />
        <div className="absolute right-1/4 top-1/2 h-px w-32 bg-slate-300" />
        <div className="absolute left-1/4 top-1/3 h-px w-24 bg-blue-300" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Business Systems & Strategy • Finance • Operations • Digital Growth
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            I help organizations move from confusion to clarity by building systems, improving execution, and making growth more disciplined.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            As a business systems and strategy professional at the intersection of finance, operations, and digital growth, I bring structure to complexity, translate vision into process, and connect numbers with execution—so decisions are data-driven, operations are reliable, and growth is sustainable. According to the Project Management Institute (PMI), structured operational processes can improve efficiency by up to 30% (PMI, 'Pulse of the Profession 2024').
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/about" className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
              Learn more
            </Link>
            <Link to="/insights" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
              View insights
            </Link>
            <Link to="/contact" className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
              Contact
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-56 w-56 overflow-hidden rounded-3xl bg-white shadow-lg">
              <img
                src={profileImage}
                alt="Idris Kabangu"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-medium text-slate-500">Professional Philosophy</p>
            <div className="mt-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Clarity over complexity</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  The best systems make decisions easier, communication clearer, and work more sustainable.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Systems over shortcuts</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Long-term progress comes from structure, not temporary fixes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Outcomes over noise</h3>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  Strategy should create meaningful results, not simply more activity.
                </p>
              </div>
            </div>
            <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 text-sm italic text-slate-600">
              "The future is created at the intersection of business, technology, design, and culture." — Nathan Shedroff
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}