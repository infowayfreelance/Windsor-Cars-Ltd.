"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[580px] lg:h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt="Executive Chauffeur Service"
              className="w-full h-full object-cover"
              src="/full-width-hero-banner-about-us.webp"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/70 to-transparent"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Our Legacy of Excellence
              </h1>
              <p className="text-base sm:text-lg opacity-95 leading-relaxed max-w-xl">
                Experience the pinnacle of professional chauffeur services across the United Kingdom, where every journey is treated with the utmost discretion and luxury.
              </p>
            </div>
          </div>
        </section>

        {/* History & Slough Hub */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* History Card */}
            <div className="md:col-span-8 bg-surface-container-low p-6 sm:p-8 lg:p-12 rounded-xl flex flex-col justify-center scroll-reveal">
              <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">Since 1991</span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-deep-navy">The Windsor Journey</h2>
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Established in 1991, Windsor Cars has grown into one of the UK's leading executive hire services. Over three decades, we have evolved from a local boutique service to a national leader in professional transport, maintaining the same commitment to punctuality and grace that defined our very first trip.
              </p>
            </div>
            {/* Slough Hub Card */}
            <div className="md:col-span-4 bg-deep-navy text-white p-6 sm:p-8 lg:p-12 rounded-xl flex flex-col justify-between scroll-reveal">
              <div>
                <span className="material-symbols-outlined text-3xl sm:text-4xl mb-4 sm:mb-6 text-primary-fixed block">location_on</span>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">The Slough Hub</h3>
                <p className="text-sm sm:text-base opacity-80">Located in the heart of Datchet, serving Slough, Windsor, and the UK.</p>
              </div>
              <div className="mt-6 sm:mt-8">
                <img
                  alt="Service Map Area"
                  className="w-full h-40 sm:h-48 object-cover rounded-lg shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWf7mlGTRMxZurqwcPxCwasSPLBbXOuoR7h9zZH2VOL9QO07RiGMWSJpZw-WXZnSD01ofq9qeblAMtLqSi2cB-PJtPgqY8e91RNZZoW13CtgJR8u_Paxkcp1VlDtaPbjUjfuL70BPvw58Zl6pihDPhXzprPErjnN--0u-nf-pQi9Ma-RTcWUWxCiuX6Dl2tE9lyGoOtGmFaFXWBC0r_dA7I4vexjeZIv1OfGNbVGCqUntyfez6osYYbTUd9Q-9ZjwEYiLPSMGWvJQn"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-surface-grey py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 scroll-reveal">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy">Our Core Values</h2>
              <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
              {[
                { icon: "verified_user", title: "Reliability", desc: "Punctuality isn't just a goal; it's our standard. We monitor traffic and flight data in real-time to ensure we're always ahead of schedule." },
                { icon: "business_center", title: "Professionalism", desc: "Our chauffeurs are meticulously trained in executive etiquette, ensuring a quiet, productive, and respectful environment for every passenger." },
                { icon: "diamond", title: "Luxury", desc: "From our pristine fleet to the subtle amenities on board, we provide a premium experience that reflects the status of our clientele." },
              ].map((value) => (
                <div key={value.title} className="text-center scroll-reveal">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-md">
                    <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">{value.icon}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-deep-navy mb-3 sm:mb-4">{value.title}</h4>
                  <p className="text-sm sm:text-base text-on-surface-variant px-2 sm:px-4">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team & Safety */}
        <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10 sm:gap-16">
            <div className="w-full md:w-1/2 scroll-reveal">
              <div className="relative">
                <img
                  alt="Professional Chauffeur"
                  className="rounded-xl shadow-2xl w-full"
                  src="/about-us-your-safety-our-priority.webp"
                />
                <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-primary text-white p-5 sm:p-8 rounded-xl hidden sm:block">
                  <p className="text-2xl sm:text-3xl font-bold">100%</p>
                  <p className="text-xs sm:text-sm opacity-80">CRB Checked Staff</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 scroll-reveal">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy mb-5 sm:mb-6">Your Safety, Our Priority</h2>
              <p className="text-sm sm:text-base lg:text-lg text-on-surface-variant mb-6 sm:mb-8 leading-relaxed">
                The cornerstone of Windsor Cars Ltd. is the safety and security of our passengers. Every member of our driving team undergoes rigorous background checks (CRB) and continuous professional development.
              </p>
              <ul className="space-y-4 sm:space-y-5">
                {[
                  { title: "Professional Chauffeurs:", desc: "Expertly trained in defensive driving and client confidentiality." },
                  { title: "CRB Checked:", desc: "Full background verification for total peace of mind." },
                  { title: "Regular Maintenance:", desc: "Our fleet is inspected daily to meet the highest safety standards." },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3 sm:gap-4">
                    <span className="material-symbols-outlined text-primary text-xl flex-shrink-0 mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                    <div>
                      <strong className="text-deep-navy text-sm sm:text-base">{item.title}</strong>
                      <p className="text-on-surface-variant text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-14 sm:py-20 lg:py-24 bg-primary px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto scroll-reveal">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 sm:mb-8">Ready for a Premium Journey?</h2>
            <p className="text-sm sm:text-base lg:text-lg text-white opacity-90 mb-8 sm:mb-10">
              Whether for corporate travel or a special occasion, experience the Windsor difference today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-primary px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-opacity-90 transition-all"
              >
                Book Online
              </Link>
              <a
                href="tel:+441753677677"
                className="inline-block bg-transparent border-2 border-white text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base hover:bg-white hover:text-primary transition-all"
              >
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
