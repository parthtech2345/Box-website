"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Upload,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  FileCheck,
  X,
  Loader2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ContactInquiryForm() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "Product Inquiry",
    category: "Corrugated Boxes",
    boxType: "5-Ply Double Wall",
    quantity: "1,000 - 5,000 units",
    message: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [inquiryId, setInquiryId] = useState("");
  const [apiError, setApiError] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Handle File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "File size must be under 10MB.",
        }));
        return;
      }
      setSelectedFile(file);
      setErrors((prev) => {
        const next = { ...prev };
        delete next.file;
        return next;
      });
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Validate form client-side
  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Full name is required (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please provide a valid email address.";
    }

    const phoneRegex = /^[0-9+\s\-()]{7,20}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.trim())) {
      errs.phone = "Please enter a valid phone/WhatsApp number (min 7 digits).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errs.message = "Please describe your packaging requirements (at least 5 characters).";
    }

    return errs;
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      let response: Response;

      if (selectedFile) {
        // Send as FormData if file attached
        const bodyFormData = new FormData();
        Object.entries(formData).forEach(([k, v]) => bodyFormData.append(k, v));
        bodyFormData.append("file", selectedFile);

        response = await fetch("/api/inquiry", {
          method: "POST",
          body: bodyFormData,
        });
      } else {
        // Send as JSON
        response = await fetch("/api/inquiry", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setSuccessMessage(result.message);
        setInquiryId(result.inquiryId || `INQ-${Date.now().toString().slice(-6)}`);
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          inquiryType: "Product Inquiry",
          category: "Corrugated Boxes",
          boxType: "5-Ply Double Wall",
          quantity: "1,000 - 5,000 units",
          message: "",
        });
        setSelectedFile(null);
      } else {
        setApiError(result.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setApiError("A network error occurred. Please verify your connection or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="inquiry-form"
      ref={sectionRef}
      className="w-full bg-[#FAF7F2] py-14 sm:py-14 lg:py-14 border-b border-[#E4DED3] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* =========================================================================
              LEFT COLUMN: Main Inquiry Form (7 cols)
          ========================================================================= */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E4DED3] shadow-md">
            {submitSuccess ? (
              /* Success Confirmation Card */
              <div className="py-8 sm:py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#78846A]/15 text-[#78846A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-[#202A2E]">
                  Inquiry Received Successfully!
                </h3>
                <p className="text-sm text-[#62574D] max-w-md mx-auto leading-relaxed">
                  {successMessage}
                </p>
                {inquiryId && (
                  <div className="inline-block p-2.5 px-4 rounded-lg bg-[#FAF7F2] border border-[#E4DED3] font-mono text-xs text-[#A65D32]">
                    Reference ID: <strong>{inquiryId}</strong>
                  </div>
                )}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 rounded-full bg-[#202A2E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#E97835] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Form Header */}
                <div className="border-b border-[#E4DED3] pb-5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#A65D32] block mb-1">
                    DIRECT INQUIRY DESK
                  </span>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#202A2E] tracking-tight">
                    Send Us Your Inquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-[#62574D] mt-1">
                    Tell us a little about your packaging requirements. Our team will review your inquiry and get back to you.
                  </p>
                </div>

                {apiError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{apiError}</span>
                  </div>
                )}

                {/* --- Section A: Personal & Company Details --- */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#202A2E] border-l-2 border-[#A65D32] pl-2">
                    1. Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Patel"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors ${errors.name
                          ? "border-red-400 focus:border-red-500 bg-red-50/30"
                          : "border-[#E4DED3] focus:border-[#A65D32] focus:bg-white"
                          }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Acme Logistics Pvt Ltd"
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors ${errors.email
                          ? "border-red-400 focus:border-red-500 bg-red-50/30"
                          : "border-[#E4DED3] focus:border-[#A65D32] focus:bg-white"
                          }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Phone / WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 00000"
                        className={`w-full px-3.5 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors ${errors.phone
                          ? "border-red-400 focus:border-red-500 bg-red-50/30"
                          : "border-[#E4DED3] focus:border-[#A65D32] focus:bg-white"
                          }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* --- Section B: Packaging & Inquiry Details --- */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#202A2E] border-l-2 border-[#A65D32] pl-2">
                    2. Packaging Specifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Inquiry Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors cursor-pointer"
                      >
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Custom Packaging">Custom Packaging CAD</option>
                        <option value="Bulk Order">Bulk Production Order</option>
                        <option value="General Inquiry">General Business Inquiry</option>
                        <option value="Other">Other Requirement</option>
                      </select>
                    </div>

                    {/* Packaging Category */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Product Category
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors cursor-pointer"
                      >
                        <option value="Corrugated Boxes">Corrugated Boxes (3/5/7-Ply)</option>
                        <option value="Printed Corrugated Boxes">Printed Branded Boxes</option>
                        <option value="Die-Cut Boxes">Die-Cut Self-Locking Mailers</option>
                        <option value="Industrial Packaging">Industrial & Partitions</option>
                        <option value="Food Packaging">Food & Beverage Packaging</option>
                        <option value="E-Commerce Packaging">E-Commerce Packaging</option>
                      </select>
                    </div>

                    {/* Box Type */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Box Construction / Ply
                      </label>
                      <select
                        name="boxType"
                        value={formData.boxType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors cursor-pointer"
                      >
                        <option value="3-Ply Single Wall">3-Ply Single Wall</option>
                        <option value="5-Ply Double Wall">5-Ply Double Wall (Standard)</option>
                        <option value="7-Ply Triple Wall">7-Ply Triple Wall (Export)</option>
                        <option value="Die-Cut Custom">Die-Cut / Auto-Lock</option>
                        <option value="Not Sure / Need Advice">Not Sure / Need Advice</option>
                      </select>
                    </div>

                    {/* Required Quantity */}
                    <div>
                      <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                        Target Quantity
                      </label>
                      <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#E4DED3] focus:border-[#A65D32] focus:bg-white rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors cursor-pointer"
                      >
                        <option value="500 - 1,000 units">500 – 1,000 units</option>
                        <option value="1,000 - 5,000 units">1,000 – 5,000 units</option>
                        <option value="5,000 - 10,000 units">5,000 – 10,000 units</option>
                        <option value="10,000+ units">10,000+ units (Bulk)</option>
                        <option value="Sample / Prototyping">Sample / CAD Prototyping</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                      Message / Additional Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify box dimensions (L x W x H in mm/inches), payload weight, printing requirements, or destination..."
                      className={`w-full px-3.5 py-2.5 bg-[#FAF7F2] border rounded-xl text-xs sm:text-sm text-[#202A2E] focus:outline-hidden transition-colors resize-y ${errors.message
                        ? "border-red-400 focus:border-red-500 bg-red-50/30"
                        : "border-[#E4DED3] focus:border-[#A65D32] focus:bg-white"
                        }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Optional File Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-[#202A2E] mb-1.5">
                      Upload Reference Drawing / Artwork <span className="text-[#8C989E] font-normal">(Optional, PDF/JPG/PNG up to 10MB)</span>
                    </label>

                    {selectedFile ? (
                      <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] border border-[#D1B48C]">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileCheck className="w-4 h-4 text-[#A65D32] shrink-0" />
                          <span className="text-xs text-[#202A2E] truncate font-medium">
                            {selectedFile.name}
                          </span>
                          <span className="text-[10px] text-[#8C989E] shrink-0">
                            ({(selectedFile.size / 1024).toFixed(1)} KB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1 text-[#8C989E] hover:text-red-600 transition-colors"
                          aria-label="Remove uploaded file"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="p-4 border-2 border-dashed border-[#E4DED3] hover:border-[#A65D32] rounded-xl text-center cursor-pointer transition-colors bg-[#FAF7F2] hover:bg-white group"
                      >
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.png,.jpg,.jpeg"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Upload className="w-5 h-5 text-[#8C989E] group-hover:text-[#A65D32] mx-auto mb-1 transition-colors" />
                        <span className="text-xs text-[#62574D] block font-medium">
                          Click to select CAD drawing, photo, or specifications
                        </span>
                      </div>
                    )}
                    {errors.file && (
                      <p className="text-[11px] text-red-600 mt-1">{errors.file}</p>
                    )}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E97835] hover:bg-[#d46927] disabled:bg-[#E97835]/70 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#8C989E] mt-2.5">
                    Your information will only be used to respond to your inquiry.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* =========================================================================
              RIGHT COLUMN: 2 Balanced Visual Showcase Cards (Image Up & Image Down)
          ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* 1. Top Image Card: Packaging Solutions */}
            <div className="flex-1 bg-white rounded-3xl p-5 border border-[#E4DED3] shadow-xs hover:border-[#D1B48C] transition-all group flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-[#FAF7F2] mb-4">
                  <Image
                    src="/custom pack/Minimal Kraft Packaging Arrangement.png"
                    alt="AAVRIT PACKAGING Custom Kraft Packaging Solutions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#A65D32]/10 border border-[#A65D32]/25 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A65D32]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A65D32]">
                    CUSTOM PACKAGING
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg text-[#202A2E] leading-snug">
                  Precision-Cut Corrugated Solutions
                </h4>
                <p className="text-xs sm:text-sm text-[#62574D] mt-1.5 leading-relaxed">
                  Tailored flute calibers and custom-dimensioned master cartons designed to match your product weight, drop tests, and transit demands.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E4DED3]/70 flex flex-wrap gap-2 text-[11px] font-semibold text-[#A65D32]">
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E4DED3]">
                  • 3 / 5 / 7-Ply Caliber
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E4DED3]">
                  • CAD Prototyping
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E4DED3]">
                  • Custom Flexo Print
                </span>
              </div>
            </div>

            {/* 2. Bottom Image Card: Manufacturing Facility */}
            <div className="flex-1 bg-white rounded-3xl p-5 border border-[#E4DED3] shadow-xs hover:border-[#D1B48C] transition-all group flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-[#FAF7F2] mb-4">
                  <Image
                    src="/machinery/gallery-plant-overview.png"
                    alt="AAVRIT PACKAGING High-Speed Corrugation Facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#78846A]/15 border border-[#78846A]/30 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#78846A]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#78846A]">
                    MANUFACTURING PLANT
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg text-[#202A2E] leading-snug">
                  High-Speed Corrugation Plant
                </h4>
                <p className="text-xs sm:text-sm text-[#62574D] mt-1.5 leading-relaxed">
                  Phase II GIDC Industrial Estate, Gujarat. Operating advanced multi-station corrugators and flexo slotters for reliable B2B dispatches.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E4DED3]/70 flex flex-wrap gap-2 text-[11px] font-semibold text-[#78846A]">
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E4DED3]">
                  • Direct Plant Pricing
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E4DED3]">
                  • High-Volume Capacity
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] border border-[#E4DED3]">
                  • Rigorous QA Lab
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
