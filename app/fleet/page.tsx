"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FleetPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[580px] lg:h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-50"
              alt="Luxury executive sedan"
              src="/full-width-hero-banner-our-fleet.webp"
            />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Our Premium Fleet
              </h1>
              <p className="text-base sm:text-lg text-white/80 max-w-xl">
                Experience the pinnacle of executive travel with our meticulously maintained fleet
                of world-class vehicles, tailored for the discerning professional.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet Catalog */}
        <section className="py-12 sm:py-16 bg-surface-grey">
          <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
            {/* Quality Note */}
            <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 bg-white border-l-4 border-primary fleet-card-shadow rounded-lg gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-deep-navy mb-2">
                  Excellence as Standard
                </h2>
                <p className="text-on-surface-variant text-sm sm:text-base">
                  All our vehicles are maintained to the highest standards, ensuring punctuality,
                  safety, and comfort for every journey.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                  <span
                    className="material-symbols-outlined text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Professional Valeting
                </span>
              </div>
            </div>

            {/* Vehicle Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Mercedes E-Class */}
              <div className="bg-white rounded-xl overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mercedes E-Class executive sedan"
                    src="/Stylish Mercedes E-Class in front of modern building.webp"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy">Mercedes E-Class</h3>
                    <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-xs font-medium flex-shrink-0">
                      Business Class
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: "wifi", label: "Free WiFi" },
                      { icon: "ac_unit", label: "Climate Control" },
                      { icon: "airline_seat_recline_extra", label: "Leather Seats" },
                      { icon: "usb", label: "Chargers" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[18px]">{f.icon}</span>
                        <span className="text-xs sm:text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="block w-full bg-deep-navy text-white py-3 rounded-lg font-semibold text-sm text-center hover:bg-primary transition-colors">
                    Book E-Class
                  </Link>
                </div>
              </div>

              {/* Mercedes S-Class */}
              <div className="bg-white rounded-xl overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mercedes S-Class luxury sedan"
                    src="/Mercedes S-Class.webp"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy">Mercedes S-Class</h3>
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded text-xs font-medium flex-shrink-0">
                      First Class
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: "wifi", label: "High-speed WiFi" },
                      { icon: "water_bottle", label: "Still Water" },
                      { icon: "airline_seat_recline_extra", label: "Heated Seats" },
                      { icon: "bolt", label: "Fast Charging" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[18px]">{f.icon}</span>
                        <span className="text-xs sm:text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="block w-full bg-deep-navy text-white py-3 rounded-lg font-semibold text-sm text-center hover:bg-primary transition-colors">
                    Book S-Class
                  </Link>
                </div>
              </div>

              {/* BMW 5 Series */}
              <div className="bg-white rounded-xl overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="BMW 5 Series executive sedan"
                    src="/BMW 5-Series.webp"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy">BMW 5 Series</h3>
                    <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-xs font-medium flex-shrink-0">
                      Business Plus
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: "wifi", label: "Free WiFi" },
                      { icon: "ac_unit", label: "Air Con" },
                      { icon: "airline_seat_recline_extra", label: "Leather Interior" },
                      { icon: "usb", label: "USB-C Ports" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[18px]">{f.icon}</span>
                        <span className="text-xs sm:text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="block w-full bg-deep-navy text-white py-3 rounded-lg font-semibold text-sm text-center hover:bg-primary transition-colors">
                    Book BMW 5
                  </Link>
                </div>
              </div>

              {/* Audi A6/A8 */}
              <div className="bg-white rounded-xl overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Audi A8 luxury interior"
                    src="/Sleek Audi sedan at luxury building.webp"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy">Audi A6/A8</h3>
                    <span className="bg-primary-container text-on-primary-container px-3 py-1 rounded text-xs font-medium flex-shrink-0">
                      Luxury Exec
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: "wifi", label: "Pro WiFi" },
                      { icon: "privacy_tip", label: "Privacy Glass" },
                      { icon: "airline_seat_recline_extra", label: "Extra Legroom" },
                      { icon: "usb", label: "Charging Hub" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[18px]">{f.icon}</span>
                        <span className="text-xs sm:text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="block w-full bg-deep-navy text-white py-3 rounded-lg font-semibold text-sm text-center hover:bg-primary transition-colors">
                    Book Audi
                  </Link>
                </div>
              </div>

              {/* Executive People Carrier - redesigned as standard card */}
              <div className="bg-white rounded-xl overflow-hidden fleet-card-shadow transition-transform duration-300 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Mercedes V-Class executive people carrier"
                    src="/Mercedes V-Class.webp"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-deep-navy">Executive People Carrier</h3>
                    <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded text-xs font-medium flex-shrink-0">
                      6/7/8 Seater
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {[
                      { icon: "group", label: "Up to 8 Pax" },
                      { icon: "luggage", label: "Ample Luggage" },
                      { icon: "wifi", label: "High-speed WiFi" },
                      { icon: "usb", label: "Multi-chargers" },
                    ].map((f) => (
                      <div key={f.label} className="flex items-center gap-2 text-on-surface-variant">
                        <span className="material-symbols-outlined text-primary text-[18px]">{f.icon}</span>
                        <span className="text-xs sm:text-sm">{f.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/contact" className="block w-full bg-deep-navy text-white py-3 rounded-lg font-semibold text-sm text-center hover:bg-primary transition-colors">
                    Book People Carrier
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 sm:py-20 bg-deep-navy text-white text-center">
          <div className="px-4 sm:px-6 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready for your next journey?</h2>
            <p className="text-sm sm:text-base mb-8 sm:mb-10 opacity-80">
              Book your vehicle today and enjoy the peace of mind that comes with professional
              chauffeur service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-primary-container transition-all"
              >
                Book Your Vehicle Today
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-white/30 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
