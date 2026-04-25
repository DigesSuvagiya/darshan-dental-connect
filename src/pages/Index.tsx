import { MessageCircle, Phone, Mail, MapPin, Clock, ShieldCheck, Truck, Stethoscope } from "lucide-react";
import darshanLogo from "@/assets/darshan-logo.png";
// import bfConoid from "@/assets/brands/bf-conoid.png";
import implants from "@/assets/brands/implants.png";
import vision from "@/assets/brands/vision.png";
import sswhite from "@/assets/brands/sswhite.png";
import neoendo from "@/assets/brands/neoendo.png";
import jeninPlus from "@/assets/brands/jenin-plus.png";
import dpi from "@/assets/brands/dpi.png";
import gdp from "@/assets/brands/gdp.png";
import prime from "@/assets/brands/prime.png";
import goendo from "@/assets/brands/goendo.png";
import zhermack from "@/assets/brands/zhermack.png";
import mani from "@/assets/brands/mani.png";
import gc from "@/assets/brands/gc.png";
import shofu from "@/assets/brands/shofu.png";
import maarc from "@/assets/brands/maarc.png";
import gdc from "@/assets/brands/gdc.png";
import woodpecker from "@/assets/brands/woodpecker.png";
import oro from "@/assets/brands/oro.png";
import ident from "@/assets/brands/ident.png";

const CONTACT = {
  whatsapp: "917622939729",
  phone: "+91 76229 39729",
  phoneHref: "tel:+917622939729",
  email: "darshanvekariya8@gmail.com",
  address: "D-403, Shreedhar Floora, B/H Galaxy Business Park, Nikol, Ahmedabad - 382350",
  hours: "Mon – Sat · 10:00 AM – 8:00 PM",
};

const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
  "Hi Darshan Enterprise, I'd like to enquire about dental supplies."
)}`;

// Brand logos — add more as user uploads them
const BRANDS: { name: string; logo: string }[] = [
  { name: "implants", logo: implants },
  { name: "Vision", logo: vision },
  { name: "SS White", logo: sswhite },
  { name: "NeoEndo", logo: neoendo },
  { name: "Jenin Plus", logo: jeninPlus },
  { name: "DPI", logo: dpi },
  { name: "GDP+", logo: gdp },
  { name: "Prime Dental", logo: prime },
  { name: "Goendo", logo: goendo },
  { name: "Zhermack", logo: zhermack },
  { name: "Mani", logo: mani },
  { name: "GC", logo: gc },
  { name: "Shofu", logo: shofu },
  { name: "Maarc Dental", logo: maarc },
  { name: "GDC", logo: gdc },
  { name: "Woodpecker", logo: woodpecker },
  { name: "Oro", logo: oro },
  { name: "Ident", logo: ident },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-soft/60 via-background to-background" />
        <div className="mx-auto max-w-5xl px-5 pt-12 pb-10 md:pt-20 md:pb-16">
          {/* Logo orbit — planets around the main logo (all screen sizes) */}
          <div className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px] md:h-[560px] md:w-[560px]">
            {/* soft rings */}
            <div className="absolute inset-6 rounded-full border border-primary/15" />
            <div className="absolute inset-16 rounded-full border border-primary/10" />
            <div className="absolute inset-24 rounded-full bg-primary-soft/40" />

            {/* Main logo */}
            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-card p-3 shadow-soft sm:h-40 sm:w-40 md:h-52 md:w-52 md:p-4">
              <img
                src={darshanLogo}
                alt="Darshan Enterprise logo"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Outer orbit (rotates clockwise) */}
            <div className="pointer-events-none absolute inset-0 animate-orbit">
              {(() => {
                const outer = BRANDS.slice(0, Math.min(8, BRANDS.length));
                return outer.map((b, i) => {
                  const angle = (i / outer.length) * Math.PI * 2 - Math.PI / 2;
                  const x = Math.cos(angle) * 50;
                  const y = Math.sin(angle) * 50;
                  return (
                    <div
                      key={b.name}
                      className="absolute left-1/2 top-1/2 h-16 w-16 sm:h-20 sm:w-20 md:h-28 md:w-28"
                      style={{ transform: `translate(-50%, -50%) translate(${x * 3.4}px, ${y * 3.4}px)` }}
                    >
                      <div className="h-full w-full animate-orbit-reverse">
                        <div
                          className="flex h-full w-full items-center justify-center rounded-full bg-card p-2 shadow-card animate-float md:p-3"
                          style={{ animationDelay: `${i * 0.3}s` }}
                        >
                          <img src={b.logo} alt={b.name} className="h-full w-full object-contain" loading="lazy" />
                        </div>
                      </div>
                    </div>
                  );
                });
              })()}
            </div>

            {/* Inner orbit (rotates counter-clockwise) */}
            {BRANDS.length > 8 && (
              <div className="pointer-events-none absolute inset-0 animate-orbit-reverse">
                {(() => {
                  const inner = BRANDS.slice(8, 14);
                  return inner.map((b, i) => {
                    const angle = (i / inner.length) * Math.PI * 2 - Math.PI / 2 + Math.PI / inner.length;
                    const x = Math.cos(angle) * 32;
                    const y = Math.sin(angle) * 32;
                    return (
                      <div
                        key={b.name}
                        className="absolute left-1/2 top-1/2 h-14 w-14 sm:h-16 sm:w-16 md:h-24 md:w-24"
                        style={{ transform: `translate(-50%, -50%) translate(${x * 3.4}px, ${y * 3.4}px)` }}
                      >
                        <div className="h-full w-full animate-orbit">
                          <div
                            className="flex h-full w-full items-center justify-center rounded-full bg-card p-1.5 shadow-card animate-float md:p-2.5"
                            style={{ animationDelay: `${i * 0.4}s` }}
                          >
                            <img src={b.logo} alt={b.name} className="h-full w-full object-contain" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            )}
          </div>

          {/* Heading */}
          <div className="mx-auto mt-8 max-w-2xl text-center md:mt-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
              Darshan Enterprise
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-4 md:text-lg">
              "Everything Dentists Need, <span className="text-primary font-semibold">In One Place</span>"
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm font-bold italic leading-relaxed text-black md:text-base">
              "Dealing in All Kinds of Dental Products, Surgical Supplies & Equipment"
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 py-12 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            About Us
          </span>
          <h2 className="mt-4 text-2xl font-bold md:text-4xl">Trusted by clinics across the region</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Darshan Enterprise is a trusted distributor of premium dental products and equipment.
            We supply leading brands directly to dental Clinics — fast, reliably, and affordably.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { icon: ShieldCheck, label: "Authorized Distributor" },
              { icon: Truck, label: "Fast Delivery" },
              { icon: Stethoscope, label: "Trusted by Clinics" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-card"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-5 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-gradient-to-b from-primary-soft/70 to-card p-6 shadow-soft md:p-10">
            <div className="text-center">
              <span className="inline-block rounded-full bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Get In Touch
              </span>
              <h2 className="mt-4 text-2xl font-bold md:text-4xl">Reach us in seconds</h2>
              <p className="mt-2 text-base text-muted-foreground">Choose your preferred way to connect.</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-whatsapp text-base font-semibold text-whatsapp-foreground shadow-card transition-transform md:hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <a
                href={CONTACT.phoneHref}
                className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary text-base font-semibold text-primary-foreground shadow-card transition-transform md:hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-primary bg-card text-base font-semibold text-primary transition-colors md:hover:bg-primary-soft active:scale-[0.98]"
              >
                <Mail className="h-5 w-5" />
                Email
              </a>
            </div>

            <div className="mt-8 grid gap-4 border-t border-border pt-6 text-sm md:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Visit Us</div>
                  <div className="text-muted-foreground">{CONTACT.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">Working Hours</div>
                  <div className="text-muted-foreground">{CONTACT.hours}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="px-5 py-12 md:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Brands We Carry
            </span>
            <h2 className="mt-4 text-2xl font-bold md:text-4xl">Premium dental brands</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              Authentic products from the world's most trusted manufacturers.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:mt-12 md:grid-cols-4 md:gap-4 lg:grid-cols-5">
            {BRANDS.map((b) => (
              <div
                key={b.name}
                className="group flex h-24 items-center justify-center rounded-2xl border border-border bg-card p-4 shadow-card transition-all md:h-28 md:hover:shadow-soft"
              >
                <img
                  src={b.logo}
                  alt={b.name}
                  className="h-full w-full object-contain grayscale transition-all md:group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40 px-5 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="text-lg font-extrabold tracking-tight text-primary">Darshan Enterprise</div>
          <p className="mt-1 text-sm text-muted-foreground">Everything Dentists Need, In One Place</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a href={CONTACT.phoneHref} className="hover:text-primary">{CONTACT.phone}</a>
            <span className="hidden sm:inline">·</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            © 2017 Darshan Enterprise. All rights reserved.
          </p>
        </div>
      </footer>

      {/* FLOATING ACTIONS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
        <a
          href={CONTACT.phoneHref}
          aria-label="Call Now"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform active:scale-95 md:h-16 md:w-16 md:hover:scale-110"
        >
          <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-primary/40" />
          <Phone className="h-6 w-6 md:h-7 md:w-7" />
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition-transform active:scale-95 md:h-16 md:w-16 md:hover:scale-110"
        >
          <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        </a>
      </div>
    </div>
  );
};

export default Index;
