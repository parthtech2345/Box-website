"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, Phone, Mail, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function FinalInquiryCTA() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    boxType: "5-ply",
    dimensions: "",
    quantity: "5000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="w-full bg-[#202A2E] text-white py-14 border-b border-[#202A2E] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D1B48C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E97835]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Side: Editorial Pitch & Direct Contact (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E97835]/20 text-[#E97835] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
              Fast Turnaround Quote
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Let's Build the Right Packaging for Your Business.
            </h2>

            <p className="text-base text-[#F5F2EB]/80 leading-relaxed mb-8">
              Tell us about your product dimensions, target payload, and monthly volume. Our technical engineering desk will calculate the exact board specification and dispatch a quote within 24 hours.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href="tel:+919876543210"
                className="p-4 bg-white/5 border border-white/10 hover:border-[#D1B48C] rounded-xl flex items-center gap-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#E97835] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#D1B48C] block font-semibold">Instant Technical Support (India)</span>
                  <span className="text-sm sm:text-base font-bold text-white">+91 98765 43210</span>
                </div>
              </a>

              <a
                href="mailto:inquiry@boxpackaging.in"
                className="p-4 bg-white/5 border border-white/10 hover:border-[#D1B48C] rounded-xl flex items-center gap-4 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#273338] border border-white/10 flex items-center justify-center text-[#D1B48C] shrink-0 group-hover:border-[#E97835] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#687378] block font-semibold">Email Technical RFP</span>
                  <span className="text-sm sm:text-base font-bold text-white">inquiry@boxpackaging.in</span>
                </div>
              </a>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#F5F2EB]/80 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B8D78]" />
                <span>Free CAD Box Samples</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E97835]" />
                <span>24-Hour Quote Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Side: Quote Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#273338] rounded-2xl p-6 sm:p-10 border border-[#D1B48C]/30 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Request a Custom Packaging Quote
                  </h3>
                  <span className="text-xs text-[#D1B48C]">
                    All dimensions and specifications are treated with commercial confidentiality.
                  </span>
                </div>
              </div>

              {submitted ? (
                <div className="p-8 bg-white/5 rounded-xl border border-[#7B8D78] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#7B8D78] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-white">
                    Inquiry Received Successfully
                  </h4>
                  <p className="text-sm text-[#F5F2EB]/80 max-w-md mx-auto">
                    Thank you. Our Indian packaging engineering team has logged your specifications. You will receive a formal quotation and board recommendation within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#E97835] underline font-semibold"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Auto Components Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Mobile Number (India) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Board Ply Type
                      </label>
                      <select
                        value={formData.boxType}
                        onChange={(e) => setFormData({ ...formData, boxType: e.target.value })}
                        className="w-full px-3 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835]"
                      >
                        <option value="3-ply">3-Ply Single Wall</option>
                        <option value="5-ply">5-Ply Double Wall</option>
                        <option value="7-ply">7-Ply Triple Wall</option>
                        <option value="die-cut">Die-Cut Mailer</option>
                        <option value="not-sure">Engineer Recommendation</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Dimensions (L × W × H)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 400 × 300 × 250 mm"
                        value={formData.dimensions}
                        onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                        className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                        Quantity / Order
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5,000 units"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#F5F2EB]/90 block mb-1.5">
                      Product Details / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Payload weight, stacking requirements, moisture exposure, or printing preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#202A2E] text-white text-sm rounded-lg border border-white/15 focus:outline-none focus:border-[#E97835]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#E97835] hover:bg-[#d46927] text-white font-semibold text-base rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg active:scale-[0.99]"
                  >
                    <span>Submit Request for Quotation</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
