"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [tripType, setTripType] = useState<"oneway" | "return">("oneway");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (!btn) return;
      const originalText = btn.innerText;
      btn.innerText = "Sending...";
      btn.disabled = true;
      btn.style.opacity = "0.7";

      setTimeout(() => {
        btn.innerText = "Message Sent Successfully";
        btn.classList.replace("bg-primary", "bg-green-600");
        form.reset();
        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.replace("bg-green-600", "bg-primary");
          btn.disabled = false;
          btn.style.opacity = "1";
        }, 3000);
      }, 1500);
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[420px] sm:h-[480px] lg:h-[520px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-50"
              alt="Luxury executive chauffeur"
              src="/full-width-hero-banner-contact-us.webp"
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24">
            <div className="max-w-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed mb-3">Get In Touch</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Book Your Journey
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-xl">
                Excellence in executive travel starts here. Fill in your journey details or send us a message — our concierge team responds within minutes.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="tel:+441753677677"
                  className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  01753 677 677
                </a>
                <a
                  href="mailto:bookings@windsorcars.com"
                  className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/20 transition-all"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  bookings@windsorcars.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form + Contact Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 -mt-10 sm:-mt-14 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* Left: Booking Form (matches home page style) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Card header */}
                <div className="bg-deep-navy px-5 sm:px-6 py-4 sm:py-5">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="material-symbols-outlined text-primary-fixed text-xl sm:text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      directions_car
                    </span>
                    <h2 className="text-base sm:text-lg font-bold text-white">Book Your Journey</h2>
                  </div>
                  <p className="text-white/50 text-xs mb-3">Premium executive transport — instant confirmation</p>
                  <div className="flex rounded-lg overflow-hidden border border-white/15">
                    <button
                      onClick={() => setTripType("oneway")}
                      className={`flex-1 py-2 text-xs font-bold transition-colors ${
                        tripType === "oneway" ? "bg-primary text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      One Way
                    </button>
                    <div className="w-px bg-white/15" />
                    <button
                      onClick={() => setTripType("return")}
                      className={`flex-1 py-2 text-xs font-bold transition-colors ${
                        tripType === "return" ? "bg-primary text-white" : "text-white/60 hover:text-white"
                      }`}
                    >
                      Return
                    </button>
                  </div>
                </div>

                {/* Form body */}
                <div className="p-5 sm:p-8">
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                          Full Name
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                            person
                          </span>
                          <input
                            className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-sm placeholder:text-gray-400"
                            type="text"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                          Phone Number
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                            call
                          </span>
                          <input
                            className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-sm placeholder:text-gray-400"
                            type="tel"
                            placeholder="+44 (0) 7700 000 000"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pickup */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Pickup Location
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-lg">
                          my_location
                        </span>
                        <input
                          className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-sm placeholder:text-gray-400"
                          type="text"
                          placeholder="Enter pickup address or airport"
                        />
                      </div>
                    </div>

                    {/* Dropoff */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Drop-off Location
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                          location_on
                        </span>
                        <input
                          className="w-full pl-10 pr-3 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-sm placeholder:text-gray-400"
                          type="text"
                          placeholder="Enter destination"
                        />
                      </div>
                    </div>

                    {/* Date + Time */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                          Date
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                            calendar_today
                          </span>
                          <input
                            className="w-full pl-10 pr-1 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-xs sm:text-sm"
                            type="date"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                          Time
                        </label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                            schedule
                          </span>
                          <input
                            className="w-full pl-10 pr-1 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-xs sm:text-sm"
                            type="time"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Passengers */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5">
                        Passengers
                      </label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                          group
                        </span>
                        <select className="w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white outline-none transition-all text-sm appearance-none text-gray-700">
                          <option value="">Select passengers</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n} Passenger{n > 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm hover:bg-deep-navy transition-all active:scale-[0.99]"
                    >
                      Get Instant Quote
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </button>
                  </form>

                  {/* Trust row */}
                  <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] sm:text-xs">
                      <span className="material-symbols-outlined text-xs sm:text-sm">lock</span>
                      Secure
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] sm:text-xs">
                      <span className="material-symbols-outlined text-xs sm:text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                      No Hidden Fees
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1 text-gray-400 text-[10px] sm:text-xs">
                      <span className="material-symbols-outlined text-xs sm:text-sm">support_agent</span>
                      24/7 Support
                    </div>
                  </div>

                  <p className="text-center text-gray-400 text-xs mt-3">
                    Prefer to call?{" "}
                    <a href="tel:+441753677677" className="text-deep-navy font-semibold hover:underline">
                      01753 677 677
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Details & Map */}
            <div className="lg:col-span-5 space-y-5">
              {/* Contact Details Card */}
              <div className="bg-deep-navy text-white p-6 sm:p-8 rounded-2xl">
                <h3 className="text-lg sm:text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-primary-fixed text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Head Office</p>
                      <p className="opacity-70 text-sm leading-relaxed">
                        1st Floor Hardware House,<br />
                        Datchet, Slough, SL3 9BJ
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-primary-fixed text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        call
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Phone</p>
                      <a href="tel:+441753677677" className="opacity-70 text-sm hover:opacity-100 transition-opacity">
                        01753 677 677
                      </a>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-primary-fixed text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Email</p>
                      <a href="mailto:bookings@windsorcars.com" className="opacity-70 text-sm hover:opacity-100 transition-opacity break-all">
                        bookings@windsorcars.com
                      </a>
                    </div>
                  </div>
                  <div className="h-px bg-white/10" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-primary-fixed text-lg"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        schedule
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Operating Hours</p>
                      <p className="opacity-70 text-sm">24 hours / 7 days a week</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 24/7 Support Banner */}
              <div className="bg-primary/10 border-l-4 border-primary p-5 rounded-xl flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                <div>
                  <p className="font-bold text-deep-navy text-sm sm:text-base">24/7 Concierge Support</p>
                  <p className="text-on-surface-variant text-xs sm:text-sm">Always available for bookings, changes, and assistance.</p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-md h-[260px] sm:h-[300px]">
                <iframe
                  title="Windsor Cars Ltd – Office Location"
                  src="https://maps.google.com/maps?q=Hardware+House,+Datchet,+Slough+SL3+9BJ,+UK&output=embed&z=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* General Enquiry Form */}
        <section className="bg-surface-grey py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: text */}
              <div className="space-y-4 sm:space-y-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Send A Message</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Have a Question? We'd Love to Hear From You.
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  Whether you're planning a corporate account, a special occasion, or simply want more information about our services — our team is ready to help.
                </p>
                <div className="space-y-3 pt-2">
                  {[
                    { icon: "bolt", text: "Replies within 30 minutes during business hours" },
                    { icon: "verified_user", text: "CRB-checked, professional chauffeurs on every booking" },
                    { icon: "sell", text: "Fixed, transparent pricing with no hidden charges" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {item.icon}
                        </span>
                      </div>
                      <p className="text-sm text-on-surface-variant">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: message form */}
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                <form ref={formRef} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Name</label>
                      <input
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400"
                        placeholder="Your full name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
                      <input
                        className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400"
                        placeholder="email@company.com"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone (optional)</label>
                    <input
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400"
                      placeholder="+44 (0) 7700 000 000"
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                    <textarea
                      className="border border-gray-200 rounded-xl px-4 py-3 text-sm bg-gray-50 focus:ring-1 focus:ring-primary focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 resize-none"
                      placeholder="How can we assist with your journey?"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm hover:bg-deep-navy transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Accounts CTA */}
        <section className="bg-deep-navy py-14 sm:py-20 text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 sm:space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed">Corporate Travel</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Corporate Accounts Available
            </h2>
            <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Streamline executive travel for your entire team. Dedicated account managers, priority booking, monthly invoicing, and bespoke reporting — all tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a
                href="mailto:bookings@windsorcars.com?subject=Corporate Account Inquiry"
                className="inline-block bg-primary text-white px-8 py-3 sm:py-3.5 rounded-lg font-bold text-sm hover:brightness-110 transition-all"
              >
                Apply for Corporate Account
              </a>
              <a
                href="tel:+441753677677"
                className="inline-block border-2 border-white/30 text-white px-8 py-3 sm:py-3.5 rounded-lg font-bold text-sm hover:bg-white/10 transition-all"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
