"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tripType, setTripType] = useState<"oneway" | "return">("oneway");

  const marqueeItems = [
    "Airport Transfers",
    "Executive Travel",
    "Wedding Cars",
    "Corporate Events",
    "24/7 Service",
    "Fixed Pricing",
    "CRB Checked Chauffeurs",
    "250+ Premium Vehicles",
    "3000+ Weekly Transfers",
    "Founded 1991",
  ];

  const serviceGridCards = [
    {
      name: "Airport Transfers",
      desc: "Real-time flight monitoring and meet-and-greet at all major London airports.",
      img: "/Airport Transfers.jpg",
    },
    {
      name: "City to City",
      desc: "Comfortable, punctual inter-city transfers between all major UK cities.",
      img: "/City to City Transfers.jpg",
    },
    {
      name: "Wedding Cars",
      desc: "Bespoke wedding car hire to make your special day even more memorable.",
      img: "/Luxury wedding arrival on city street.webp",
    },
    {
      name: "Special Events",
      desc: "Glamorous arrivals for proms, galas, anniversaries, and every milestone.",
      img: "/Special Events Glamorous arrival at a luxury event.webp",
    },
    {
      name: "Corporate Events",
      desc: "Professional transport for conferences, meetings, and corporate hospitality.",
      img: "/Corporate Transfer figures in a sleek cityscape.webp",
    },
    {
      name: "Tourist Day Service",
      desc: "Explore the UK's finest landmarks in absolute luxury with a knowledgeable chauffeur.",
      img: "/Tourist Day Service.jpg",
    },
  ];

  const fleetCars = [
    { name: "Mercedes E-Class", badge: "Business Class", img: "/Stylish Mercedes E-Class in front of modern building.webp" },
    { name: "Mercedes S-Class", badge: "First Class", img: "/Mercedes S-Class.webp" },
    { name: "BMW 5 Series", badge: "Business Plus", img: "/BMW 5-Series.webp" },
    { name: "Audi A6/A8", badge: "Luxury Exec", img: "/Sleek Audi sedan at luxury building.webp" },
    { name: "Mercedes V-Class", badge: "6–8 Seater MPV", img: "/Mercedes V-Class.webp" },
    { name: "Executive MPV", badge: "Group Travel", img: "/Executive MPV.webp" },
  ];

  const reviews = [
    {
      initials: "JD",
      name: "James Davidson",
      role: "Corporate Traveler",
      text: "Exceptional service. The driver was 10 minutes early, incredibly professional, and the car was spotless. Windsor Cars is now my go-to for all airport runs.",
    },
    {
      initials: "SH",
      name: "Sarah Hughes",
      role: "Private Client",
      text: "We used them for our wedding and couldn't have been happier. The timing was perfect, and the service was truly royal. Highly recommend!",
    },
    {
      initials: "MK",
      name: "Marcus Knight",
      role: "CEO, Knight Tech",
      text: "Punctuality is vital for my business trips. Windsor Cars has never failed me. Their 24/7 support is top-notch and prices are always transparent.",
    },
  ];

  const faqs = [
    {
      q: "How do I book a vehicle?",
      a: "You can book online via our website, through our mobile app, or by calling our 24/7 dispatch center at 01753 677 677.",
    },
    {
      q: "Do you offer airport meet and greet?",
      a: "Yes, our chauffeurs provide a professional meet and greet service at all major UK airports including Heathrow, Gatwick, Stansted, Luton and more.",
    },
    {
      q: "Are there extra charges for late-night bookings?",
      a: "No, Windsor Cars Ltd operates with transparent fixed pricing and no extra charges for bookings after midnight.",
    },
    {
      q: "Are your chauffeurs CRB checked?",
      a: "Absolutely. Every single chauffeur on our team has undergone thorough CRB (Criminal Records Bureau) checks and professional training.",
    },
    {
      q: "What areas do you cover?",
      a: "We cover Windsor, Datchet, Slough, Eton, all London areas, Oxford, Reading, Manchester and beyond. Contact us to check your specific route.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer flexible cancellations. Please contact us for specific timeframes and requirements for your booking.",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* ===== 1. HERO ===== */}
        <section className="relative flex flex-col overflow-hidden bg-deep-navy">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-20"
              src="/Luxury Chauffeuring Home Page Hero section Image.webp"
              alt="Luxury chauffeur car"
            />
          </div>

          {/* Marquee ticker */}
          <div className="relative z-10 bg-primary/80 py-2 overflow-hidden mt-16 sm:mt-20">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-3 text-white text-xs sm:text-sm font-medium uppercase tracking-widest mx-6"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/60 inline-block" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Main hero content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start lg:items-center">

              {/* Left: Text + trust badges */}
              <div className="flex-1 text-center lg:text-left space-y-5">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Available 24/7 — Book Instantly
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                  Luxury Executive Travel &amp; Airport Transfers
                </h1>

                <p className="text-sm sm:text-base opacity-80 text-white max-w-lg mx-auto lg:mx-0">
                  Windsor Cars Ltd — delivering premium chauffeur services since 1991. Professional, punctual, and perfectly presented for every journey.
                </p>

                {/* Trust badge grid — 3-column on all sizes */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 max-w-xs sm:max-w-sm mx-auto lg:mx-0">
                  {[
                    { icon: "history", label: "Founded", value: "1991" },
                    { icon: "directions_car", label: "Vehicles", value: "250+" },
                    { icon: "swap_horiz", label: "Transfers", value: "3000+" },
                  ].map((b) => (
                    <div
                      key={b.label}
                      className="bg-white/10 border border-white/20 rounded-xl px-2 py-3 text-white text-center"
                    >
                      <span
                        className="material-symbols-outlined text-primary-fixed text-lg sm:text-xl mb-1 block"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {b.icon}
                      </span>
                      <div className="text-base sm:text-lg font-bold leading-none">{b.value}</div>
                      <div className="text-[10px] sm:text-xs opacity-70 mt-0.5">{b.label}</div>
                    </div>
                  ))}
                </div>

                {/* Mobile-only CTA (visible before form scrolls into view) */}
                <div className="flex flex-col sm:flex-row gap-3 pt-1 lg:hidden">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary-container transition-all active:scale-[0.98]"
                  >
                    Book Now
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </Link>
                  <a
                    href="tel:+441753677677"
                    className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-sm"
                  >
                    <span className="material-symbols-outlined text-base">call</span>
                    01753 677 677
                  </a>
                </div>
              </div>

              {/* Right: Booking Form */}
              <div className="w-full lg:max-w-md lg:flex-shrink-0">
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
                  <div className="p-4 sm:p-6">
                    <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
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
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
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

                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm hover:bg-primary-container transition-all active:scale-[0.99]"
                      >
                        Get Instant Quote
                        <span className="material-symbols-outlined text-base">arrow_forward</span>
                      </Link>
                    </form>

                    {/* Trust row */}
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 pt-4 border-t border-gray-100">
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
                  </div>
                </div>

                <p className="text-center text-white/50 text-xs mt-3">
                  Prefer to call?{" "}
                  <a href="tel:+441753677677" className="text-white font-semibold hover:underline">
                    01753 677 677
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. SERVICES STRIP ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Services</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">
                Exquisite Chauffeur &amp; Executive Services
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: "flight_takeoff", title: "Airport Transfers", desc: "Real-time flight tracking and meet-and-greet at all major London airports." },
                { icon: "business_center", title: "Executive Travel", desc: "Premium corporate solutions for the discerning business traveller." },
                { icon: "favorite", title: "Wedding Cars", desc: "Bespoke wedding car hire to make your special day unforgettable." },
                { icon: "groups", title: "Special Events", desc: "Elegant transport for corporate events, galas, and private occasions." },
              ].map((s) => (
                <div
                  key={s.title}
                  className="border border-gray-100 rounded-xl p-4 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                    <span
                      className="material-symbols-outlined text-primary text-xl sm:text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {s.icon}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-deep-navy mb-1 sm:mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. ABOUT SECTION ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left */}
              <div className="flex-1 space-y-5 sm:space-y-6 order-2 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">About Us</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Windsor Cars Ltd — Trusted Executive Chauffeur Service Since 1991
                </h2>
                <blockquote className="border-l-4 border-primary pl-5 text-on-surface-variant italic text-sm sm:text-base lg:text-lg">
                  "We believe every journey should be a first-class experience — from the moment you book to the moment you arrive."
                </blockquote>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  For over three decades, Windsor Cars Ltd has been the trusted choice for airport transfers, executive
                  travel, and special occasion transport across the UK. Our fleet of 250+ premium vehicles and team of
                  CRB-checked, professionally trained chauffeurs ensure every trip meets the highest standards of
                  comfort, punctuality, and discretion.
                </p>

                {/* Stats row */}
                <div className="grid grid-cols-3 divide-x divide-gray-200 pt-2">
                  {[
                    { value: "250+", label: "Premium Vehicles" },
                    { value: "30+", label: "Years of Excellence" },
                    { value: "3000+", label: "Weekly Transfers" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center py-3 px-2">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-deep-navy">{stat.value}</div>
                      <div className="text-[10px] sm:text-xs text-on-surface-variant mt-1 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Learn More
                </Link>
              </div>

              {/* Right: Image */}
              <div className="relative w-full max-w-md lg:max-w-lg flex-shrink-0 order-1 lg:order-2">
                <img
                  src="/Professional Chauffeuring Services.webp"
                  alt="Professional chauffeur"
                  className="w-full h-64 sm:h-80 lg:h-[480px] object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-white text-base sm:text-lg"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified_user
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-deep-navy">100% CRB Checked</div>
                    <div className="text-xs text-on-surface-variant">All chauffeurs verified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. FEATURES SECTION ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left: car image */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src="/Luxury car arrival at dusk.webp"
                  alt="Executive car"
                  className="w-full h-64 sm:h-80 lg:h-[520px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Right: features */}
              <div className="flex-1 space-y-5 sm:space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Unmatched Comfort, Exceptional Service
                </h2>
                <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  From the moment you book to the moment you arrive, every detail is handled with precision,
                  professionalism, and genuine care.
                </p>

                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: "verified_user", title: "Professional Chauffeurs", desc: "CRB-checked, smartly presented, and extensively trained for every occasion." },
                    { icon: "directions_car", title: "Premium Fleet", desc: "250+ meticulously maintained luxury vehicles ready for your journey." },
                    { icon: "sell", title: "Fixed Transparent Pricing", desc: "No hidden costs, no midnight surcharges — just honest, competitive fares." },
                    { icon: "support_agent", title: "Advanced Booking & 24/7 Support", desc: "Book days ahead or last minute. Our team is always on hand to assist." },
                  ].map((f) => (
                    <div key={f.title} className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span
                          className="material-symbols-outlined text-primary text-base sm:text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {f.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-deep-navy text-sm">{f.title}</h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. SERVICES GRID (dark) ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-deep-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed mb-2">What We Offer</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">Explore Our Chauffeur Services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {serviceGridCards.map((card) => (
                <div key={card.name} className="relative group h-56 sm:h-64 lg:h-72 rounded-xl overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <h3 className="text-white font-bold text-sm sm:text-base mb-1">{card.name}</h3>
                    <p className="text-white/70 text-xs mb-3 leading-relaxed line-clamp-2">{card.desc}</p>
                    <Link
                      href="/contact"
                      className="inline-block bg-primary text-white text-xs font-semibold px-4 py-2 rounded-lg hover:brightness-110 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. LOCATIONS SECTION ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
              {/* Left */}
              <div className="flex-1 space-y-5 sm:space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Coverage</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy leading-tight">
                  Chauffeur Services Across Key Locations
                </h2>

                <div className="grid grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h4 className="font-bold text-deep-navy text-sm mb-3">Airport Transfers</h4>
                    <ul className="space-y-2">
                      {["Heathrow", "Gatwick", "Stansted", "Luton", "London City", "Birmingham"].map((loc) => (
                        <li key={loc} className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-deep-navy text-sm mb-3">City Transfers</h4>
                    <ul className="space-y-2">
                      {["Windsor & Datchet", "Slough & Eton", "London All Areas", "Oxford", "Reading", "Manchester & Beyond"].map((loc) => (
                        <li key={loc} className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant">
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          {loc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:brightness-110 transition-all"
                >
                  Check Your Route
                </Link>
              </div>

              {/* Right: map image */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWf7mlGTRMxZurqwcPxCwasSPLBbXOuoR7h9zZH2VOL9QO07RiGMWSJpZw-WXZnSD01ofq9qeblAMtLqSi2cB-PJtPgqY8e91RNZZoW13CtgJR8u_Paxkcp1VlDtaPbjUjfuL70BPvw58Zl6pihDPhXzprPErjnN--0u-nf-pQi9Ma-RTcWUWxCiuX6Dl2tE9lyGoOtGmFaFXWBC0r_dA7I4vexjeZIv1OfGNbVGCqUntyfez6osYYbTUd9Q-9ZjwEYiLPSMGWvJQn"
                  alt="Service coverage map"
                  className="w-full h-64 sm:h-80 lg:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. STEP INTO ELEGANCE CTA ===== */}
        <section className="relative py-16 sm:py-24 bg-[#0d0b22] overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/Luxury Chauffeuring Home Page Hero section Image.webp"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto px-4 space-y-5">
            <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed">Experience Windsor</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Step Into Elegance</h2>
            <p className="text-sm sm:text-base text-white/70 max-w-lg mx-auto">
              Every journey with Windsor Cars is a statement of style, comfort and professionalism. Let us exceed your expectations.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold hover:brightness-110 transition-all text-sm sm:text-base"
            >
              Book Your Journey
            </Link>
          </div>
        </section>

        {/* ===== 8. FLEET SECTION ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Vehicles</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">
                Travel In Comfort With Our Luxury Fleet
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {fleetCars.map((car) => (
                <div
                  key={car.name}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-44 sm:h-48 overflow-hidden">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3 gap-2">
                      <h3 className="font-bold text-deep-navy text-sm sm:text-base">{car.name}</h3>
                      <span className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                        {car.badge}
                      </span>
                    </div>
                    <Link
                      href="/contact"
                      className="block w-full bg-deep-navy text-white text-center text-sm font-semibold py-2.5 rounded-lg hover:bg-primary transition-colors"
                    >
                      Book This Vehicle
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/fleet"
                className="inline-block border-2 border-deep-navy text-deep-navy px-8 py-3 rounded-lg font-bold text-sm hover:bg-deep-navy hover:text-white transition-all"
              >
                View Full Fleet
              </Link>
            </div>
          </div>
        </section>

        {/* ===== 9. REVIEWS SECTION ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Testimonials</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">Our Reviews</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, s) => (
                        <span
                          key={s}
                          className="material-symbols-outlined text-base sm:text-lg"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <span className="material-symbols-outlined text-gray-400 text-base ml-auto">language</span>
                  </div>
                  <p className="text-sm text-on-surface-variant italic flex-1">"{r.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                      {r.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-deep-navy">{r.name}</h4>
                      <p className="text-xs text-on-surface-variant">{r.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 10. FAQ SECTION ===== */}
        <section className="py-10 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Left: accordion */}
              <div className="flex-1 order-2 lg:order-1">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">FAQ</p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy mb-6 sm:mb-8">
                  Your Questions, Answered
                </h2>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      >
                        <span className="font-semibold text-deep-navy text-sm pr-4">{faq.q}</span>
                        <span
                          className={`material-symbols-outlined flex-shrink-0 text-primary transition-transform duration-200 ${
                            openFaq === idx ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm text-on-surface-variant border-t border-gray-100 pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: feature cards — shown at top on mobile */}
              <div className="lg:w-72 xl:w-80 flex-shrink-0 order-1 lg:order-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  <div className="bg-primary text-white rounded-xl p-5 sm:p-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="material-symbols-outlined text-white text-base sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
                    </div>
                    <h4 className="font-bold text-sm sm:text-base mb-1">24/7 Support</h4>
                    <p className="text-xs sm:text-sm text-white/80">Our team is available around the clock for bookings, changes, and assistance.</p>
                  </div>
                  <div className="bg-surface-grey rounded-xl p-5 sm:p-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="material-symbols-outlined text-primary text-base sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    </div>
                    <h4 className="font-bold text-deep-navy text-sm sm:text-base mb-1">Easy Nearby Pickups</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">We come to you — at home, office, hotel, or any location you specify.</p>
                  </div>
                  <div className="bg-surface-grey rounded-xl p-5 sm:p-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                      <span className="material-symbols-outlined text-primary text-base sm:text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
                    </div>
                    <h4 className="font-bold text-deep-navy text-sm sm:text-base mb-1">Quality Large Group Pickups</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Vehicles for up to 8 passengers with ample luggage space for group travel.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 11. FOOTER CTA ===== */}
        <section className="relative py-16 sm:py-24 bg-deep-navy overflow-hidden text-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/Luxury Chauffeuring Home Page Hero section Image.webp"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">Choose Excellence, Ride In Luxury</h2>
            <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              Whether it's an airport run, a corporate event, or a special occasion — Windsor Cars Ltd delivers an exceptional experience every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold hover:brightness-110 transition-all text-sm sm:text-base"
              >
                Book Now
              </Link>
              <a
                href="tel:01753677677"
                className="inline-block border-2 border-white text-white px-7 sm:px-8 py-3 sm:py-3.5 rounded-lg font-bold hover:bg-white/10 transition-all text-sm sm:text-base"
              >
                01753 677 677
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
