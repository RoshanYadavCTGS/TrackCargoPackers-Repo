"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone } from "lucide-react";
import confetti from "canvas-confetti";
import { companyData } from "@/data/company";
import WhatsAppIcon from "@/components/shared/WhatsAppIcon";

interface CityQuoteFormProps {
  defaultFrom?: string;
  defaultTo?: string;
  cityName: string;
}

export default function CityQuoteForm({
  defaultFrom = "",
  defaultTo = "",
  cityName,
}: CityQuoteFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [movingFrom, setMovingFrom] = useState(defaultFrom || cityName);
  const [movingTo, setMovingTo] = useState(defaultTo || "");
  const [itemType, setItemType] = useState("Few items");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch (err) {}
    }, 600);
  };

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-soft">
      {/* Red/Orange Header Tab matching user's screenshot */}
      <div className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange to-amber text-white font-heading font-extrabold text-center text-sm uppercase tracking-wider shadow-glow-orange mb-6">
        Request A Free Quote
      </div>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-base text-navy">
            Quote Request Received!
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Thank you, <span className="font-semibold">{name || "Customer"}</span>. Our {cityName} shifting coordinator will call you back within 15 minutes with our best rate.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${companyData.phones.primary}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-orange hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Or Call: {companyData.phones.primaryFormatted}</span>
            </a>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setEmail("");
              setPhone("");
              setMessage("");
            }}
            className="text-[11px] text-slate-400 hover:text-slate-600 underline block mx-auto pt-2"
          >
            Submit another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Your Name */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Full Name"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
            />
          </div>

          {/* Your Email */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Your Email *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Mobile Number *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91-XXXXX-XXXXX"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Shifting Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
            />
          </div>

          {/* Moving From & To */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Moving From *
              </label>
              <input
                type="text"
                required
                value={movingFrom}
                onChange={(e) => setMovingFrom(e.target.value)}
                placeholder="Origin City / Area"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                Moving To *
              </label>
              <input
                type="text"
                required
                value={movingTo}
                onChange={(e) => setMovingTo(e.target.value)}
                placeholder="Destination City"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
              />
            </div>
          </div>

          {/* Items Dropdown */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Shifting Items
            </label>
            <select
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition"
            >
              <option value="Few items">Few items / Luggage</option>
              <option value="1 BHK Household">1 BHK Household</option>
              <option value="2 BHK Household">2 BHK Household</option>
              <option value="3 BHK Household">3 BHK Household</option>
              <option value="4+ BHK / Villa">4+ BHK / Villa</option>
              <option value="Bike Transport">Bike / Two-Wheeler Transport</option>
              <option value="Car Relocation">Car / Four-Wheeler Transport</option>
              <option value="Office Shifting">Office / Commercial Move</option>
            </select>
          </div>

          {/* Write Message */}
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-1">
              Write Message
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about special requirements (lift, packing, fragile items)..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-orange bg-slate-50/50 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange to-amber hover:from-orange-hover hover:to-orange text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span>Sending Request...</span>
            ) : (
              <>
                <span>Send Request</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}

      {/* Quick Call & WhatsApp Support */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
        <a
          href={`tel:${companyData.phones.primary}`}
          className="flex items-center gap-1.5 text-navy font-bold hover:text-orange transition"
        >
          <Phone className="w-3.5 h-3.5 text-orange" />
          <span>{companyData.phones.primaryFormatted}</span>
        </a>
        <a
          href={companyData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#25D366] hover:text-[#20ba59] font-bold transition"
        >
          <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

