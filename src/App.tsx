import { useState } from "react";


// ---------- Image configuration (replace URLs anytime) ----------
const images = {
  hero: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2000&q=80",
  exterior: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  reception: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=80",
  rooms: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80",
  dining: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1600&q=80",
  conference: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=80",
  garden: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
  gazebo: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=80",
};

const PHONE = "+254703500113";
const PHONE_DISPLAY = "+254 703 500 113";
const WHATSAPP = "254703500113";
const EMAIL = "royaltavern89@gmail.com";
const MAPS_URL = "https://www.google.com/maps/place/Royal+Tavern+Othaya/";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Royal+Tavern+Othaya&output=embed";

function RoyalTavern() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Nav open={open} setOpen={setOpen} />
      <Hero />
      <ContactStrip />
      <About />
      <Experiences />
      <Conferences />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ---------------- Navigation ---------------- */
function Nav({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const links = [
    ["About", "#about"],
    ["Experiences", "#experiences"],
    ["Events", "#events"],
    ["Location", "#location"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <a href="#top" className="flex flex-col leading-tight">
          <span className="font-display text-xl sm:text-2xl">Royal Tavern</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone">Othaya · Kenya</span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-[13px] uppercase tracking-[0.22em] text-charcoal/80 hover:text-forest">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href={`tel:${PHONE}`} className="text-[13px] uppercase tracking-[0.22em] text-forest hover:text-gold">
            {PHONE_DISPLAY}
          </a>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-[2px] w-6 bg-charcoal before:absolute before:left-0 before:top-[-7px] before:h-[2px] before:w-6 before:bg-charcoal after:absolute after:left-0 after:top-[7px] after:h-[2px] after:w-6 after:bg-charcoal" />
        </button>
      </div>
      {open && (
        <div className="border-t border-line bg-cream md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-line/60 py-3 text-[13px] uppercase tracking-[0.22em] text-charcoal"
              >
                {label}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className="py-3 text-[13px] uppercase tracking-[0.22em] text-forest">
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
        <img
          src={images.hero}
          alt="Royal Tavern Hotel exterior at dusk"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-deep/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 sm:pb-20">
            <span className="eyebrow text-gold-soft">Othaya · Nyeri County</span>
            <h1 className="mt-5 max-w-3xl font-display text-[44px] leading-[1.02] text-cream sm:text-6xl md:text-7xl">
              Where Othaya<br />comes together.
            </h1>
            <p className="mt-6 max-w-xl text-base text-cream/85 sm:text-lg">
              Comfortable rooms, unhurried dining, gardens to gather in and quiet
              spaces to meet — all in the heart of Nyeri County.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`tel:${PHONE}`} className="btn-primary">Book your stay</a>
              <a href="#events" className="btn-ghost">Plan an event</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact strip (prominent) ---------------- */
function ContactStrip() {
  return (
    <section className="border-b border-line bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-cream/15 px-5 py-6 text-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8">
        <a href={`tel:${PHONE}`} className="flex items-center gap-3 py-3 sm:py-2 sm:pr-6 hover:text-gold-soft">
          <IconPhone /> <div><div className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">Call</div><div>{PHONE_DISPLAY}</div></div>
        </a>
        <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 py-3 sm:py-2 sm:px-6 hover:text-gold-soft">
          <IconWhatsApp /> <div><div className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">WhatsApp</div><div>{PHONE_DISPLAY}</div></div>
        </a>
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 py-3 sm:py-2 sm:pl-6 hover:text-gold-soft">
          <IconMail /> <div><div className="text-[10px] uppercase tracking-[0.28em] text-gold-soft">Email</div><div className="break-all">{EMAIL}</div></div>
        </a>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <span className="eyebrow">A note from Othaya</span>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            A house built for visitors, neighbours and the people in between.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <span className="rule mb-6" />
          <p className="text-lg leading-relaxed text-charcoal/85">
            Royal Tavern sits a short walk from the centre of Othaya, opposite the
            police station along the Kanyange road. We've been hosting travellers
            passing through Nyeri, families gathering for weekends, and local
            businesses meeting over long lunches for years.
          </p>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            There's nothing pretentious about us. Rooms are comfortable, the garden
            is generous, food comes from kitchens that know the season, and there
            is always somewhere quiet to sit and talk.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experiences ---------------- */
function Experiences() {
  const items = [
    {
      n: "01",
      title: "Accommodation",
      img: images.rooms,
      body:
        "Quiet rooms with proper beds, fresh linen and morning light. A place to land after the road, or to settle in for the weekend.",
    },
    {
      n: "02",
      title: "Private Dining",
      img: images.dining,
      body:
        "A long table, candlelight, and food worth lingering over. We host birthdays, anniversaries and family lunches that run into evening.",
    },
    {
      n: "03",
      title: "Garden Gatherings",
      img: images.garden,
      body:
        "Lawns, jacarandas and an unhurried pace. Bring a celebration, a small wedding, or simply afternoon tea with people you like.",
    },
    {
      n: "04",
      title: "The Gazebo",
      img: images.gazebo,
      body:
        "A sheltered corner of the garden for quiet conversations, intimate ceremonies or a cold drink after a long drive.",
    },
  ];
  return (
    <section id="experiences" className="border-y border-line bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 flex flex-col items-start gap-4">
          <span className="eyebrow">Experiences</span>
          <h2 className="font-display text-4xl sm:text-5xl">Stay, eat, gather, meet.</h2>
        </div>
        <div className="space-y-20">
          {items.map((it, i) => (
            <article key={it.n} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={it.img} alt={it.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className={`md:col-span-5 ${i % 2 ? "md:order-1 md:pr-6" : "md:pl-6"}`}>
                <div className="font-mono text-xs tracking-[0.3em] text-gold">{it.n}</div>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl">{it.title}</h3>
                <span className="rule my-5" />
                <p className="text-base leading-relaxed text-charcoal/80">{it.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Conferences ---------------- */
function Conferences() {
  const items = [
    "Executive meetings",
    "Workshops & trainings",
    "Corporate gatherings",
    "Conferences",
    "Private celebrations",
    "Off-sites & retreats",
  ];
  return (
    <section id="events" className="relative overflow-hidden bg-forest text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden">
            <img src={images.conference} alt="Conference room set for a meeting" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
        <div className="md:col-span-7 md:pt-10">
          <span className="eyebrow text-gold-soft">Conferences & Events</span>
          <h2 className="mt-5 font-display text-4xl text-cream sm:text-5xl">
            Rooms that take work seriously.
          </h2>
          <span className="rule my-7" />
          <p className="max-w-xl text-base leading-relaxed text-cream/80">
            Executive boardrooms, larger conference spaces and breakout areas — set
            with stable wi-fi, clear sight lines and tea served on time. We host
            small workshops, day-long planning sessions, AGMs and full-day
            conferences for teams across Nyeri County and beyond.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-y-3 text-cream/90 sm:grid-cols-2">
            {items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-[15px]">
                <span className="mt-2 h-px w-5 bg-gold-soft" />
                {it}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary-on-dark">Enquire by phone</a>
            <a href={`mailto:${EMAIL}?subject=Event%20Enquiry`} className="btn-ghost-on-dark">Send a brief</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */
function Location() {
  return (
    <section id="location" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <span className="eyebrow">Find us</span>
          <h2 className="mt-5 font-display text-4xl sm:text-5xl">Othaya Kanyange.</h2>
          <span className="rule my-6" />
          <p className="text-lg leading-relaxed text-charcoal/85">
            500 metres ahead, directly opposite Othaya Police Station, Othaya,
            Nyeri County, Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-primary">Get directions</a>
            <a href={`tel:${PHONE}`} className="btn-ghost">Call ahead</a>
          </div>
        </div>
        <div className="md:col-span-7">
          <div className="aspect-[4/3] w-full overflow-hidden border border-line">
            <iframe
              title="Royal Tavern Hotel — Map"
              src={MAPS_EMBED}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="border-t border-line bg-cream-soft py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow">Get in touch</span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              We're easiest to reach by phone.
            </h2>
            <span className="rule my-6" />
            <p className="text-base leading-relaxed text-charcoal/80">
              Call or message us on WhatsApp for bookings, event enquiries or
              directions. We answer through the working week.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid gap-px bg-line sm:grid-cols-2">
              <ContactTile label="Phone" value={PHONE_DISPLAY} href={`tel:${PHONE}`} icon={<IconPhone />} />
              <ContactTile label="WhatsApp" value={PHONE_DISPLAY} href={`https://wa.me/${WHATSAPP}`} external icon={<IconWhatsApp />} />
              <ContactTile label="Email" value={EMAIL} href={`mailto:${EMAIL}`} icon={<IconMail />} />
              <ContactTile label="Address" value="Othaya Kanyange, opp. Police Station" href={MAPS_URL} external icon={<IconPin />} />
              <ContactTile label="Instagram" value="@royaltavernhotel" href="https://instagram.com/royaltavernhotel" external icon={<IconIG />} />
              <ContactTile label="TikTok" value="@royal.tavern.hotel" href="https://tiktok.com/@royal.tavern.hotel" external icon={<IconTT />} />
              <ContactTile label="Facebook" value="Royal Tavern Hotel" href="https://www.facebook.com/1040053862515202" external icon={<IconFB />} />
              <div className="bg-cream p-6">
                <div className="text-[10px] uppercase tracking-[0.28em] text-gold">Hours</div>
                <ul className="mt-3 space-y-1 text-sm text-charcoal/85">
                  <li className="flex justify-between"><span>Mon – Fri</span><span>9:00 – 17:00</span></li>
                  <li className="flex justify-between"><span>Saturday</span><span>Closed</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactTile({ label, value, href, icon, external }: { label: string; value: string; href: string; icon: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group flex items-start gap-4 bg-cream p-6 transition-colors hover:bg-forest hover:text-cream"
    >
      <span className="mt-1 text-forest group-hover:text-gold-soft">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[10px] uppercase tracking-[0.28em] text-gold">{label}</span>
        <span className="mt-1 block break-words text-[15px]">{value}</span>
      </span>
    </a>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-forest-deep py-14 text-cream/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-display text-3xl text-cream">Royal Tavern Hotel</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-gold-soft">Othaya · Nyeri County · Kenya</div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm">
            <a href={`tel:${PHONE}`} className="hover:text-gold-soft">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="hover:text-gold-soft">{EMAIL}</a>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="hover:text-gold-soft">Directions</a>
          </div>
        </div>
        <div className="mt-10 h-px bg-cream/15" />
        <div className="mt-6 flex flex-col gap-3 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 Royal Tavern Hotel. All rights reserved.</div>
          <div>
            Designed & developed by <span className="text-cream/80">Wabacha</span> ·{" "}
            <a href="tel:+254768426579" className="hover:text-gold-soft">+254 768 426 579</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- WhatsApp floating button ---------------- */
function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=Hello%20Royal%20Tavern%2C%20I%27d%20like%20to%20enquire`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}

/* ---------------- Icons ---------------- */
function IconPhone() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/></svg>); }
function IconMail() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m3 7 9 6 9-6"/></svg>); }
function IconPin() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>); }
function IconWhatsApp({ className = "h-[18px] w-[18px]" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M19.05 4.91A10 10 0 0 0 2.2 17.39L1 23l5.74-1.5A10 10 0 1 0 19.05 4.9Zm-7.04 15.3a8.3 8.3 0 0 1-4.24-1.16l-.3-.18-3.4.89.91-3.31-.2-.34a8.3 8.3 0 1 1 7.23 4.1Zm4.78-6.22c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.59.13-.17.26-.67.85-.82 1.02-.15.18-.3.2-.56.07a6.83 6.83 0 0 1-3.43-3 7.6 7.6 0 0 1-1.42-1.77c-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.18.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5a.96.96 0 0 0-.7.33 2.94 2.94 0 0 0-.92 2.19c0 1.29.94 2.54 1.07 2.71.13.18 1.85 2.83 4.49 3.97a14.92 14.92 0 0 0 1.5.55c.63.2 1.2.17 1.66.1.5-.07 1.54-.63 1.76-1.24.22-.6.22-1.13.15-1.24-.07-.11-.24-.18-.5-.31Z"/></svg>); }
function IconIG() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>); }
function IconTT() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 1.7 1.3 3.2 2.8 4 .8.5 1.7.7 2.7.7v3.2a8.3 8.3 0 0 1-5.4-1.8v6.6a6 6 0 1 1-6-6c.4 0 .8 0 1.1.1v3.3a2.7 2.7 0 1 0 1.9 2.6V3h2.9Z"/></svg>); }
function IconFB() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.93.26-1.56 1.6-1.56h1.7V4.27A22.7 22.7 0 0 0 14.3 4c-2.46 0-4.14 1.5-4.14 4.25v2.55H7.5V14h2.66v8h3.34Z"/></svg>); }

/* ---------------- Reusable button classes via inline style overrides ---------------- */

export default RoyalTavern;
