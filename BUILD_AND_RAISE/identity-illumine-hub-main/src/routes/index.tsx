import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Hammer,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/alpha-hero.jpg";
import exteriorImage from "@/assets/alpha-exterior.jpg";
import interiorImage from "@/assets/alpha-interior.jpg";
import planningImage from "@/assets/alpha-planning.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Build & Raise Constructions | Bengaluru" },
      { name: "description", content: "Build & Raise Constructions — your trusted partner in quality construction, architectural excellence and innovative building solutions in Bengaluru." },
      { property: "og:title", content: "Build & Raise Constructions | Bengaluru" },
      { property: "og:description", content: "Quality construction, architectural excellence and innovative building solutions in Bengaluru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const phone = "9731274455";
const phoneHref = "tel:+919731274455";
const whatsappHref = "https://wa.me/919731274455";
const address = "Kodipalya, Kengeri, Bengaluru - 560060";
const mapSearch = encodeURIComponent(address);
const navigation = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  { name: "Residential Construction", icon: Home, image: exteriorImage },
  { name: "Commercial Construction", icon: Building2, image: heroImage },
  { name: "Building Renovation", icon: Hammer, image: exteriorImage },
  { name: "Interior Design", icon: Paintbrush, image: interiorImage },
  { name: "Architectural Planning", icon: Ruler, image: planningImage },
  { name: "Turnkey Construction Solutions", icon: Sparkles, image: heroImage },
];

const projectImages = [
  { image: exteriorImage, label: "Residential architecture", size: "md:row-span-2" },
  { image: planningImage, label: "Architectural planning", size: "" },
  { image: interiorImage, label: "Interior design", size: "" },
];

const commitments = [
  "Quality Construction",
  "Customer Satisfaction",
  "Professional Workmanship",
  "Modern Architecture",
  "Timely Project Delivery",
];

const reasons = [
  "Quality Materials",
  "Experienced Professionals",
  "Transparent Pricing",
  "Reliable Execution",
  "Customer-Focused Approach",
];

function Brand() {
  return (
    <a href="#home" className="flex min-w-0 items-center gap-3" aria-label="Build & Raise Constructions home">
      <span className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-accent" aria-hidden="true">
        <Building2 className="h-7 w-7" strokeWidth={1.7} />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-base font-bold text-primary sm:text-lg">Build &amp; Raise</span>
        <span className="mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.65rem]">Constructions</span>
      </span>
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      "Hello Build & Raise Constructions, I would like to request a quote.",
      `Name: ${String(data.get("name") ?? "")}`,
      `Phone: ${String(data.get("phone") ?? "")}`,
      `Email: ${String(data.get("email") || "Not provided")}`,
      `Message: ${String(data.get("message") ?? "")}`,
    ].join("\n");
    window.open(`${whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setFormSent(true);
    form.reset();
  };

  return (
    <div id="home" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-[4.5rem] max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary">{item.label}</a>
            ))}
            <Button asChild variant="default" className="ml-1"><a href="#contact">Get a Quote <ArrowRight /></a></Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-3 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="border-b border-border/70 py-3 text-sm font-medium last:border-0">{item.label}</a>
              ))}
              <Button asChild className="mt-3"><a href="#contact" onClick={() => setMenuOpen(false)}>Get a Quote <ArrowRight /></a></Button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative isolate flex min-h-[calc(92svh-4.5rem)] items-end overflow-hidden bg-hero sm:min-h-[calc(100svh-5rem)]" aria-labelledby="hero-title">
          <img src={heroImage} alt="Modern construction with contemporary architectural details" width={1600} height={1000} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]" />
          <div className="hero-lighting absolute inset-0 -z-10" />
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-12 pt-24 text-hero-foreground sm:pb-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8 lg:pb-20">
            <div className="max-w-3xl">
              <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-muted"><span className="h-px w-10 bg-accent" /> Build &amp; Raise Constructions</p>
              <h1 id="hero-title" className="max-w-3xl text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">Building dreams.<br /><span className="text-accent">Raising lives.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-hero-foreground/85 sm:text-lg sm:leading-8">Your Trusted Partner in Quality Construction, Architectural Excellence and Innovative Building Solutions.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="hero" size="lg"><a href="#projects">Explore Our Projects <ArrowRight /></a></Button>
                <Button asChild variant="heroOutline" size="lg"><a href="#contact">Contact Us</a></Button>
              </div>
            </div>
            <a href={phoneHref} className="group hidden items-center gap-3 border-l border-accent/70 pl-5 text-hero-foreground transition-colors hover:text-accent lg:flex" aria-label={`Call Build & Raise Constructions at ${phone}`}>
              <Phone className="h-5 w-5 text-accent" />
              <span><small className="block text-xs uppercase tracking-[0.16em] text-hero-foreground/60">Speak with our team</small><span className="mt-1 block font-semibold">{phone}</span></span>
            </a>
          </div>
          <a href="#about" className="absolute bottom-6 right-6 hidden items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-hero-foreground/70 sm:flex" aria-label="Scroll to About Us">
            Discover <ChevronRight className="h-4 w-4 rotate-90" />
          </a>
        </section>

        <section id="about" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
            <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px]">
              <img src={exteriorImage} alt="Contemporary residential architecture" width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 border-[10px] border-background/25" />
              <div className="absolute bottom-0 left-0 bg-primary px-6 py-5 text-primary-foreground sm:px-8">
                <Building2 className="mb-3 h-7 w-7 text-accent" />
                <p className="font-display text-xl font-semibold">Build &amp; Raise</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-primary-foreground/70">Constructions</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Us</p>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">Quality construction. Thoughtful architecture.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">Your Trusted Partner in Quality Construction, Architectural Excellence and Innovative Building Solutions.</p>
              <ul className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium leading-6"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center bg-accent/20 text-primary"><Check className="h-3.5 w-3.5" /></span>{item}</li>
                ))}
              </ul>
              <Button asChild className="mt-8"><a href="#contact">Talk to our team <ArrowRight /></a></Button>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">Our Services</p><h2 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">Building solutions, from plan to finish.</h2></div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/85 transition-colors hover:text-accent">Discuss a project <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ name, icon: Icon, image }, index) => (
                <article key={name} className="group relative isolate flex min-h-[300px] flex-col justify-end overflow-hidden bg-hero">
                  <img src={image} alt="" aria-hidden="true" width={1024} height={1024} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" />
                  <div className="service-shade absolute inset-0 -z-10" />
                  <div className="p-6 sm:p-7">
                    <div className="flex items-center justify-between"><Icon className="h-7 w-7 text-accent" aria-hidden="true" /><span className="text-xs text-primary-foreground/60">0{index + 1}</span></div>
                    <h3 className="mt-12 max-w-xs font-display text-2xl font-semibold text-primary-foreground">{name}</h3>
                    <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-muted transition-colors hover:text-primary-foreground">Learn More <ArrowRight className="h-4 w-4" /></a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Projects</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Ideas take shape.</h2></div>
              <p className="max-w-md text-sm leading-6 text-muted-foreground">Illustrative architectural imagery. Project photographs have not been provided.</p>
            </div>
            <div className="mt-9 grid auto-rows-[220px] gap-4 sm:grid-cols-2 sm:auto-rows-[250px] lg:grid-cols-3">
              {projectImages.map(({ image, label, size }) => (
                <figure key={label} className={`group relative isolate overflow-hidden bg-muted ${size}`}>
                  <img src={image} alt={label} width={1024} height={1024} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="project-shade absolute inset-0 -z-10" />
                  <figcaption className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-12 font-display text-xl font-medium text-hero-foreground">{label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-hero py-20 text-hero-foreground sm:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-muted">Why Choose Us</p><h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Built around what matters.</h2></div>
            <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((item) => (
                <li key={item} className="flex items-center gap-4 border-b border-hero-foreground/15 py-4 text-base font-medium sm:text-lg"><ShieldCheck className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 bg-secondary py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact Us</p>
              <h2 className="mt-3 max-w-xl text-4xl font-semibold sm:text-5xl">Let’s talk about what you’re building.</h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">Build &amp; Raise Constructions<br />Proprietor: Rajesh</p>
              <div className="mt-8 space-y-5">
                <a href={phoneHref} className="flex items-center gap-4 text-base transition-colors hover:text-primary"><span className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span><span><small className="block text-muted-foreground">Phone</small>{phone}</span></a>
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-base transition-colors hover:text-primary"><span className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground"><MessageIcon /></span><span><small className="block text-muted-foreground">WhatsApp</small>Message our team</span></a>
                <div className="flex items-start gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center bg-primary text-primary-foreground"><MapPin className="h-5 w-5" /></span><address className="max-w-sm not-italic leading-7"><small className="block text-muted-foreground">Address</small>{address}</address></div>
              </div>
              <Button asChild className="mt-7" size="lg"><a href={`https://www.google.com/maps/dir/?api=1&destination=${mapSearch}`} target="_blank" rel="noreferrer">Get Directions <ArrowRight /></a></Button>
              <div className="mt-9 min-h-[260px] overflow-hidden border border-border bg-muted sm:min-h-[320px]">
                <iframe title="Build & Raise Constructions location in Kodipalya, Kengeri" src={`https://www.google.com/maps?q=${mapSearch}&z=15&output=embed`} className="h-full min-h-[260px] w-full border-0 sm:min-h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
            <div className="lg:pl-8">
              <div className="border-b border-border pb-5"><p className="font-display text-2xl font-semibold">Request a quote</p><p className="mt-2 text-sm text-muted-foreground">Share a few details and continue in WhatsApp.</p></div>
              <form onSubmit={submitQuote} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium">Name<input name="name" autoComplete="name" required className="h-12 min-w-0 border border-input bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring" /></label>
                  <label className="grid gap-2 text-sm font-medium">Phone Number<input name="phone" type="tel" autoComplete="tel" required className="h-12 min-w-0 border border-input bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring" /></label>
                </div>
                <label className="grid gap-2 text-sm font-medium">Email<input name="email" type="email" autoComplete="email" className="h-12 min-w-0 border border-input bg-background px-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring" /></label>
                <label className="grid gap-2 text-sm font-medium">Message<textarea name="message" required rows={5} className="min-h-32 resize-y border border-input bg-background px-3 py-3 font-normal outline-none transition focus-visible:ring-2 focus-visible:ring-ring" /></label>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg">Get a Free Quote <ArrowRight /></Button>
                  {formSent && <p role="status" className="text-sm text-primary">Your message is ready to send in WhatsApp.</p>}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-hero py-14 text-hero-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_1fr_1fr] lg:px-8">
          <div><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center bg-hero-foreground/10 text-accent"><Building2 className="h-7 w-7" /></span><span className="font-display text-lg font-semibold">Build &amp; Raise<br /><span className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-hero-foreground/70">Constructions</span></span></div><p className="mt-5 max-w-sm text-sm leading-6 text-hero-foreground/65">Quality Construction, Architectural Excellence and Innovative Building Solutions.</p></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">Quick Links</h3><nav className="mt-4 flex flex-col gap-3" aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href} className="text-sm text-hero-foreground/70 transition-colors hover:text-hero-foreground">{item.label}</a>)}</nav></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">Services</h3><ul className="mt-4 flex flex-col gap-3">{services.map((item) => <li key={item.name} className="text-sm text-hero-foreground/70">{item.name}</li>)}</ul></div>
          <div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-gold-muted">Contact</h3><div className="mt-4 space-y-3 text-sm text-hero-foreground/70"><a href={phoneHref} className="block transition-colors hover:text-hero-foreground">{phone}</a><a href={whatsappHref} target="_blank" rel="noreferrer" className="block transition-colors hover:text-hero-foreground">WhatsApp</a><p className="leading-6">{address}</p></div></div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-hero-foreground/15 px-5 pt-6 text-xs text-hero-foreground/50 lg:px-8">© {new Date().getFullYear()} Build &amp; Raise Constructions. All rights reserved.</div>
      </footer>

      <a href={whatsappHref} target="_blank" rel="noreferrer" className="fixed bottom-5 left-5 z-40 grid h-12 w-12 place-items-center bg-primary text-primary-foreground shadow-xl transition-transform hover:-translate-y-1" aria-label="Message Build & Raise Constructions on WhatsApp"><MessageIcon /></a>
      <a href="#home" className="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center border border-border bg-background text-foreground shadow-xl transition-transform hover:-translate-y-1" aria-label="Back to top"><ChevronRight className="h-5 w-5 -rotate-90" /></a>
    </div>
  );
}

function MessageIcon() {
  return <span className="relative grid h-5 w-5 place-items-center" aria-hidden="true"><Phone className="h-4 w-4" /><span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full border border-primary bg-accent" /></span>;
}