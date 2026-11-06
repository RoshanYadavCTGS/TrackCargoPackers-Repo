import Link from "next/link";
import { companyData } from "@/data/company";
import { Home, Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface px-4 py-16">
      <div className="max-w-md w-full text-center bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-soft space-y-6">
        <div className="w-16 h-16 rounded-full bg-orange/10 text-orange font-extrabold text-2xl flex items-center justify-center mx-auto">
          404
        </div>
        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-2xl text-navy">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been moved or does not exist. Our relocation services and tracking radar are active.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange to-amber text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>

          <a
            href={`tel:${companyData.phones.primary}`}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 hover:text-navy font-semibold text-xs flex items-center justify-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-orange" />
            <span>Support Helpdesk</span>
          </a>
        </div>
      </div>
    </div>
  );
}

