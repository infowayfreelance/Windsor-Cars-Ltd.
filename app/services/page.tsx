"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    icon: "flight_takeoff",
    title: "Airport Transfers",
    subtitle: "Heathrow · Gatwick · Stansted · Luton · City Airport",
    description:
      "Punctual, stress-free airport transfers to and from all major London airports. We track your flight in real time so your chauffeur is ready the moment you land.",
    features: [
      "Flight monitoring & free waiting time",
      "Meet & greet with name board",
      "All terminals covered 24/7",
      "Fixed pricing — no surge charges",
    ],
    accent: "bg-primary",
    img: "/Airport Transfers.jpg",
  },
  {
    icon: "business_center",
    title: "Executive Business Travel",
    subtitle: "Corporate Accounts · Point-to-Point",
    description:
      "Arrive composed and on time for every meeting. Our discreet, professionally trained chauffeurs provide a mobile office environment with Wi-Fi and phone charging.",
    features: [
      "Dedicated corporate account managers",
      "Monthly invoicing available",
      "Confidential, distraction-free travel",
      "Meet at reception or kerbside",
    ],
    accent: "bg-primary-container",
    img: "/Executive Business Travel.jpg",
  },
  {
    icon: "route",
    title: "City to City Transfers",
    subtitle: "London · Birmingham · Manchester · Leeds · Beyond",
    description:
      "Seamless point-to-point transfers between UK cities in absolute comfort. Ideal for business travel, family trips, or whenever flying or the train won't do.",
    features: [
      "Door-to-door across all major UK cities",
      "Fixed quote — no surprise charges",
      "Comfortable, spacious executive vehicles",
      "Flexible scheduling — early or late",
    ],
    accent: "bg-primary",
    img: "/City to City Transfers.jpg",
  },
  {
    icon: "favorite",
    title: "Wedding Cars",
    subtitle: "Bridal Party · Guests · Getaway",
    description:
      "Make your wedding day truly unforgettable. Our pristine fleet, decorated to your wishes, ensures the bride, groom, and guests arrive in style and comfort.",
    features: [
      "Ribbon & floral decoration available",
      "Fully coordinated bridal party transfers",
      "Punctual arrival guaranteed",
      "Photography-friendly presentation",
    ],
    accent: "bg-tertiary-container",
    img: "/Luxury wedding arrival on city street.webp",
  },
  {
    icon: "celebration",
    title: "Special Events",
    subtitle: "Proms · Anniversaries · Birthdays · Galas · Nights Out",
    description:
      "Celebrate life's milestones in luxury. Whether it's a prom night, anniversary dinner, or a black-tie gala, we make every special moment extraordinary.",
    features: [
      "Prom packages for school leavers",
      "Champagne greeting on request",
      "Flexible collection & drop-off times",
      "Child seats available",
    ],
    accent: "bg-secondary",
    img: "/Special Events Glamorous arrival at a luxury event.webp",
  },
  {
    icon: "schedule",
    title: "Hourly Hire",
    subtitle: "As-Directed · Corporate · Personal",
    description:
      "Need a chauffeur for a few hours? Our hourly hire service gives you a dedicated driver and vehicle at your disposal — perfect for a busy day of meetings or errands.",
    features: [
      "Minimum 2-hour bookings",
      "Wait-and-return between stops",
      "Flexible itinerary — you set the pace",
      "Available city-wide 24/7",
    ],
    accent: "bg-primary",
    img: "/Hourly Hire.jpg",
  },
  {
    icon: "location_city",
    title: "London City Travel",
    subtitle: "City · Canary Wharf · West End · Mayfair",
    description:
      "Navigate the capital effortlessly. From financial district meetings to West End theatre, our drivers know every shortcut to keep you on schedule.",
    features: [
      "Real-time traffic routing",
      "Late-night & early-morning available",
      "Wait-and-return options",
      "Concierge-style service",
    ],
    accent: "bg-primary-container",
    img: "/Luxury pickup at twilight airport terminal Service.webp",
  },
  {
    icon: "groups",
    title: "Corporate Events & Conferences",
    subtitle: "Roadshows · Group Transport · VIP Logistics",
    description:
      "Seamless group transport for conferences, roadshows, and corporate events. We coordinate multiple vehicles and drivers so your delegates travel together in comfort.",
    features: [
      "Multi-vehicle fleet management",
      "Meet-and-greet at venues",
      "Custom itinerary planning",
      "Dedicated event coordinator",
    ],
    accent: "bg-primary",
    img: "/Corporate Transfer figures in a sleek cityscape.webp",
  },
  {
    icon: "directions_car",
    title: "UK-Wide Long Distance",
    subtitle: "Inter-City · Scotland · Wales · Beyond",
    description:
      "Redefine long-distance travel. Our executive vehicles make every mile comfortable, letting you work, rest, or simply enjoy the journey across the UK.",
    features: [
      "Comfort stops planned en route",
      "No mileage limits",
      "Overnight and multi-day bookings",
      "Fixed quote — no surprises",
    ],
    accent: "bg-tertiary-container",
    img: "/UK-Wide Long Distance.jpg",
  },
  {
    icon: "anchor",
    title: "Cruise Port Transfers",
    subtitle: "Southampton · Dover · Tilbury",
    description:
      "Start and end your cruise holiday in style. We deliver you to the terminal on time with all your luggage handled, and collect you when you return.",
    features: [
      "All major UK cruise terminals",
      "Large estate vehicles for luggage",
      "Ship departure time guaranteed",
      "Return transfers coordinated",
    ],
    accent: "bg-secondary",
    img: "/Luxury pickup at twilight airport terminal Service.webp",
  },
  {
    icon: "explore",
    title: "Tourist Day Service",
    subtitle: "Windsor Castle · Stonehenge · Cotswolds · Oxford",
    description:
      "Discover Britain's finest attractions at your own pace with a private chauffeur. We design bespoke sightseeing itineraries tailored entirely to your interests.",
    features: [
      "Fully customisable day itineraries",
      "Knowledgeable local drivers",
      "Multi-stop tours available",
      "Hotel pick-up & drop-off",
    ],
    accent: "bg-primary",
    img: "/Tourist Day Service.jpg",
  },
  {
    icon: "home_pin",
    title: "Local & School Runs",
    subtitle: "Windsor · Slough · Berkshire · Surrounding Areas",
    description:
      "Reliable everyday transport for the school run, medical appointments, or local errands. Our professional drivers bring executive comfort to daily life.",
    features: [
      "Regular schedule bookings",
      "CRB-checked, vetted drivers",
      "Child seat provision",
      "Track via real-time updates",
    ],
    accent: "bg-primary-container",
    img: "/Local & School Runs.jpg",
  },
];

const steps = [
  { number: "01", icon: "edit_note", title: "Tell Us Your Journey", body: "Enter your pickup, destination, date, and vehicle preference via our booking form or phone." },
  { number: "02", icon: "confirmation_number", title: "Instant Confirmation", body: "Receive your booking confirmation immediately by email with full journey details and driver info." },
  { number: "03", icon: "hail", title: "Meet Your Chauffeur", body: "Your uniformed chauffeur arrives on time — or greets you in arrivals with a personalised name board." },
  { number: "04", icon: "star", title: "Travel in Comfort", body: "Relax in a premium vehicle and arrive refreshed, on time, and ready for whatever awaits." },
];

const pillars = [
  { icon: "verified_user", title: "CRB-Checked Drivers", body: "Every chauffeur is fully licensed, DBS-checked, and professionally trained for executive service." },
  { icon: "schedule", title: "Always On Time", body: "We monitor traffic, flights, and routes live — your punctuality is our priority, every single trip." },
  { icon: "attach_money", title: "Fixed, Transparent Fares", body: "No hidden fees, no surge pricing, no nasty surprises. The price you see is the price you pay." },
  { icon: "support_agent", title: "24/7 Support", body: "Our team is available around the clock by phone or email to assist with any booking or query." },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative h-[520px] sm:h-[600px] lg:h-[660px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="/Services Page Hero Section Image.webp"
              alt="Luxury chauffeur service"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/75 to-deep-navy/30" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24">
            <div className="max-w-2xl text-white">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-white/50 mb-4 border border-white/20 px-3 py-1 rounded-full">
                Premium Chauffeur Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                Every Journey,<br />
                <span className="text-white/70">Delivered in Luxury</span>
              </h1>
              <p className="text-base sm:text-lg text-white/75 mb-8 leading-relaxed max-w-xl">
                From airport transfers to UK-wide corporate travel, Windsor Cars has provided premium
                chauffeur services since 1991. Explore our full range of tailored transport solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95 text-sm"
                >
                  Book a Service
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <a
                  href="tel:+441753677677"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3 rounded-lg font-bold hover:bg-white/20 transition-all text-sm"
                >
                  <span className="material-symbols-outlined text-base">call</span>
                  01753 677 677
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center text-white">
            {[
              { value: "33+", label: "Years of Service" },
              { value: "250+", label: "Vehicles in Fleet" },
              { value: "3,000+", label: "Weekly Transfers" },
              { value: "24/7", label: "Always Available" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl sm:text-2xl font-bold">{s.value}</p>
                <p className="text-xs text-white/70 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Services Grid ── */}
        <section className="py-14 sm:py-20 lg:py-24 bg-surface-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-xs font-bold tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-full">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-deep-navy mt-4 mb-4">
                Our Full Range of Services
              </h2>
              <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
                Twelve specialist transport services, all delivered with the same hallmark of quality,
                punctuality, and discretion that has defined Windsor Cars since 1991.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                >
                  {/* Service photo */}
                  <div className="h-44 sm:h-52 overflow-hidden relative flex-shrink-0">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Icon + title */}
                  <div className="px-6 pt-5 pb-4 flex items-start gap-4">
                    <div className={`${service.accent} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span
                        className="material-symbols-outlined text-white text-xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {service.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-deep-navy leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-primary font-semibold mt-0.5 tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-surface-container mx-6" />

                  {/* Body */}
                  <div className="px-6 py-5 flex-1 flex flex-col">
                    <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-charcoal-text">
                          <span
                            className="material-symbols-outlined text-primary text-base flex-shrink-0"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check_circle
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
                    >
                      Enquire & Book
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-primary border border-primary/30 px-3 py-1 rounded-full">
                Our Commitment
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mt-4 mb-3">
                Why Choose Windsor Cars?
              </h2>
              <p className="text-base text-on-surface-variant max-w-xl mx-auto">
                For over three decades we have set the benchmark for luxury transport in Berkshire and beyond.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {pillars.map((p) => (
                <div key={p.title} className="text-center p-5 sm:p-6 rounded-2xl bg-surface-grey hover:bg-primary/5 transition-colors group">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <span
                      className="material-symbols-outlined text-primary text-xl sm:text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="font-bold text-deep-navy mb-2 text-sm sm:text-base">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-14 sm:py-20 bg-deep-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-10 sm:mb-12">
              <span className="text-xs font-bold tracking-widest uppercase text-white/50 border border-white/20 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-3">
                How It Works
              </h2>
              <p className="text-base text-white/60 max-w-xl mx-auto">
                Booking your executive transfer takes less than two minutes.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {steps.map((step, i) => (
                <div key={step.number} className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px border-t border-dashed border-white/20" />
                  )}
                  <div className="text-center">
                    <div className="relative inline-flex mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-white text-xl sm:text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {step.icon}
                        </span>
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center leading-none">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm sm:text-base">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-white/55 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-deep-navy mb-4">
              Ready to Book Your Journey?
            </h2>
            <p className="text-base sm:text-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
              Our team is available 24/7 to assist with bookings, quotes, or bespoke corporate accounts.
              Get in touch and we'll handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-9 py-4 rounded-lg font-bold hover:bg-primary-container transition-all shadow-lg text-sm"
              >
                <span className="material-symbols-outlined text-base">edit_note</span>
                Book Online
              </Link>
              <a
                href="tel:+441753677677"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-9 py-4 rounded-lg font-bold hover:bg-primary/5 transition-all text-sm"
              >
                <span className="material-symbols-outlined text-base">call</span>
                Call 01753 677 677
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
