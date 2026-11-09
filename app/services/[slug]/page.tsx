import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData, getServiceBySlug } from "@/data/services";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  HelpCircle,
  Package,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} in Chennai | ${companyData.name}`,
    description: service.shortBenefit,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-surface">
      {/* Service Hero */}
      <section className="bg-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange/20 text-orange font-bold text-xs uppercase tracking-wider">
                <span>Specialized Moving Division</span>
              </div>
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-semibold border border-white/10">
                  {service.pricingRange}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-1.5 border border-emerald-500/30">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  100% Transit Insured
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 rounded-xl bg-orange hover:bg-orange-hover text-white text-xs font-bold uppercase tracking-wider transition shadow-glow-orange flex items-center justify-center gap-2"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${companyData.phones.primary}`}
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/20 transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange" />
                  <span>Call {companyData.phones.primaryFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-auto sm:h-80 lg:h-96 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Features */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy mb-4">
                  Overview & Quality Assurance
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-heading font-bold text-xl text-navy mb-4">
                  What&apos;s Included in Our Service:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              {service.processSteps && service.processSteps.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-6">
                    Execution Blueprint
                  </h3>
                  <div className="space-y-4">
                    {service.processSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-navy">{step.title}</div>
                          <div className="text-xs text-slate-600 mt-1">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy mb-4 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-orange" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 border border-slate-200"
                      >
                        <div className="font-bold text-sm text-navy mb-2">
                          {faq.question}
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-navy text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden">
                <div className="text-orange font-bold text-xs uppercase tracking-wider mb-2">
                  Fast Assistance
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  Need an Immediate Relocation Quote?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  Talk directly with our senior shift coordinators. Get a binding estimate in 10 minutes.
                </p>

                <a
                  href={`tel:${companyData.phones.primary}`}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-orange to-amber text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mb-3 shadow-glow-orange"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {companyData.phones.primaryFormatted}</span>
                </a>

                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Other Services list */}
              <div className="bg-slate-50 border border-slate-200 p-6 rounded-3xl">
                <h4 className="font-heading font-bold text-base text-navy mb-4">
                  Other Relocation Solutions
                </h4>
                <div className="space-y-2">
                  {otherServices.slice(0, 5).map((os) => (
                    <Link
                      key={os.slug}
                      href={`/${os.slug}`}
                      className="block p-2.5 rounded-xl hover:bg-white text-xs font-semibold text-slate-700 hover:text-orange transition border border-transparent hover:border-slate-200"
                    >
                      {os.title} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

