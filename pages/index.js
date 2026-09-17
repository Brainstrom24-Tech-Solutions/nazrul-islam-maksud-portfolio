import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiMenu,
  FiX,
} from "react-icons/fi";
import LenisProvider from "../components/LenisProvider";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    year: "2020 — Present",
    role: "Senior General Manager — Marketing & Sales / Chief Marketing Officer",
    company: "Anondo Housing Society",
    text: "Lead senior-level marketing and sales strategy for real estate projects, connecting brand building, customer acquisition, digital marketing, CRM and sales priorities with organizational objectives.",
  },
  {
    year: "2015 — 2019",
    role: "Director — Marketing & Sales",
    company: "Richmond Group",
    text: "Led marketing and sales planning, client acquisition, negotiation, team performance and business development activities, contributing to brand promotion, customer relationships and sales growth.",
  },
  {
    year: "2011 — 2015",
    role: "Director — Media & Communication",
    company: "Ashiyan Group",
    text: "Led media, communication, public relations and brand visibility initiatives, managing advertising, promotional communication, customer messaging and media relationships.",
  },
  {
    year: "2010 — 2011",
    role: "Director — Project Operation",
    company: "Ashiyan City — Ashiyan Lands Development Ltd.",
    text: "Oversaw project operations with exposure to land development, organizational planning, coordination, compliance, resource planning and customer-facing execution.",
  },
  {
    year: "2008 — 2010",
    role: "Head of Marketing & Sales",
    company: "Ashiyan City — Ashiyan Lands Development Ltd.",
    text: "Led marketing and sales teams, project promotion, client acquisition, negotiation and customer relationship management for large-scale land development.",
  },
  {
    year: "2000 — 2008",
    role: "General Manager",
    company: "Pink City, Xenovalley Model Town Ltd.",
    text: "Built long-term general management and commercial experience across real estate marketing, sales, operations, team leadership and business growth.",
  },
];

const expertise = [
  [
    "01",
    "Strategy & Leadership",
    "Corporate Strategy · Business Planning · Team Leadership · Corporate Governance · Budgeting · Resource Planning",
  ],
  [
    "02",
    "Real Estate Marketing",
    "Project Marketing · Property Positioning · Buyer Behavior · Market Research · Competitive Analysis · Go-to-Market",
  ],
  [
    "03",
    "Brand & Communication",
    "Brand Management · Advertising & Promotion · PR · Media Management · Integrated Campaigns · Customer Communication",
  ],
  [
    "04",
    "Digital & CRM",
    "Digital Marketing · Lead Generation · CRM · Conversion Funnel · Customer Journey · Campaign Analytics · ROI Focus",
  ],
  [
    "05",
    "Sales & Growth",
    "Sales Strategy · Client Negotiation · Customer Acquisition · Business Development · Revenue Growth · Customer Retention",
  ],
  [
    "06",
    "Operations",
    "Land Development · Process Design · Compliance · Procurement · Management Audit · Regulatory Coordination",
  ],
];

const books = [
  {
    "title": "The Quran: What and Why",
    "cover": "/books/al-quran-ki-o-keno.png",
    "width": 1049,
    "height": 1500,
    "url": "https://www.rokomari.com/book/286975/all-quran-ki-o-keno"
  },
  {
    "title": "The Key to Success",
    "cover": "/books/safollyer-mulmontro.png",
    "width": 1049,
    "height": 1500,
    "url": "https://www.rokomari.com/book/224031/safollyer-mulmontro"
  },
  {
    "title": "The Purpose of Human Life",
    "cover": "/books/manob-jiboner-uddeshsho.png",
    "width": 1049,
    "height": 1500,
    "url": "https://www.rokomari.com/book/554273/manob-jiboner-uddeshsho"
  },
  {
    "title": "Knowing the Creator",
    "cover": "/books/knowing-the-creator.jpeg",
    "width": 843,
    "height": 1264,
    "url": null
  }
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "about"],
    ["Career", "career"],
    ["Expertise", "expertise"],
    ["Writing", "writing"],
    ["Contact", "contact"],
  ];
  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <a href="#home" className="brand">
          <span>N</span>
          <div>
            <strong>NAZRUL ISLAM MAKSUD</strong>
            <small>REAL ESTATE · MARKETING · LEADERSHIP</small>
          </div>
        </a>
        <nav className="desktop-nav">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="mailto:nimaksud@gmail.com">
            Let's Talk <FiArrowUpRight />
          </a>
        </nav>
        <button
          className="mobile-menu"
          aria-label="Open menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && (
        <div className="mobile-nav">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a href="mailto:nimaksud@gmail.com" onClick={() => setOpen(false)}>
            Let's Talk <FiArrowUpRight />
          </a>
        </div>
      )}
    </header>
  );
}

export default function Home() {
  const page = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
      });
      gsap.from(".hero-line", {
        yPercent: 110,
        opacity: 0,
        duration: 1.1,
        stagger: 0.1,
        delay: 0.2,
        ease: "power4.out",
      });
      gsap.from(".hero-copy", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.65,
        ease: "power3.out",
      });
      gsap.from(".hero-portrait", {
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        delay: 0.35,
        ease: "power4.out",
      });
      gsap.utils.toArray(".reveal").forEach((el) =>
        gsap.fromTo(
          el,
          { y: 45, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 84%" },
          },
        ),
      );
      gsap.utils.toArray(".career-card").forEach((el, i) =>
        gsap.fromTo(
          el,
          { x: i % 2 ? 30 : -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          },
        ),
      );
      gsap.to(".gold-orb", {
        y: -35,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, page);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={page} className="site-shell">
      <Head>
        <title>
          Nazrul Islam Maksud — Real Estate Marketing & Business Leader
        </title>
        <meta
          name="description"
          content="Executive portfolio of Nazrul Islam Maksud, a real estate marketing and business leader with 25+ years of experience."
        />
        <meta name="theme-color" content="#090909" />
      </Head>
      <LenisProvider />
      <Navbar />

      <main>
        <section id="home" className="hero">
          <div className="gold-orb" />
          <div className="hero-grid container">
            <div className="hero-left">
              <div className="hero-kicker">
                <span /> SENIOR GENERAL MANAGER · DHAKA, BANGLADESH
              </div>
              <h1>
                <span className="hero-mask">
                  <span className="hero-line">A career</span>
                </span>
                <span className="hero-mask">
                  <span className="hero-line italic">built on</span>
                </span>
                <span className="hero-mask">
                  <span className="hero-line">experience.</span>
                </span>
              </h1>
              <div className="hero-copy">
                <p>
                  Real estate marketing and business leadership shaped by{" "}
                  <em>25+ years</em> across strategy, sales, brand, media,
                  customer relationships and project operations.
                </p>
                <div className="hero-actions">
                  <a href="#career" className="gold-button">
                    Explore career <FiArrowDown />
                  </a>
                  <a href="mailto:nimaksud@gmail.com" className="text-link">
                    Professional enquiries <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-portrait">
                <div className="portrait-frame">
                  <Image
                    src="/nazrul-maksud.jpg"
                    alt="Nazrul Islam Maksud"
                    fill
                    priority
                    sizes="(max-width: 900px) 90vw, 44vw"
                  />
                </div>
                <div className="portrait-label">
                  <span>NAZRUL ISLAM MAKSUD</span>
                  <small>GENERAL MANAGER · CMO</small>
                </div>
              </div>
              <div className="hero-number">
                01 <span>/ 06</span>
              </div>
            </div>
          </div>
          <div className="scroll-cue">
            <span>Scroll to explore</span>
            <div />
          </div>
        </section>

        <section id="about" className="section light-section">
          <div className="container">
            <div className="section-intro reveal">
              <div className="eyebrow">01 / Executive profile</div>
              <h2>
                Leadership with a <i>commercial point of view.</i>
              </h2>
              <p>
                Senior real estate marketing and sales leader with extensive
                leadership across property development, project operations,
                brand management, sales, media and customer relationship
                management.
              </p>
            </div>
            <div className="stat-grid reveal">
              <div>
                <strong>
                  25<span>+</span>
                </strong>
                <small>Years of professional experience</small>
              </div>
              <div>
                <strong>06</strong>
                <small>Leadership domains</small>
              </div>
              <div>
                <strong>04</strong>
                <small>Published books</small>
              </div>
              <div>
                <strong>∞</strong>
                <small>Customer relationships</small>
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="section dark-section">
          <div className="container">
            <div className="section-intro dark reveal">
              <div className="eyebrow">02 / Career</div>
              <h2>
                A quarter century of <i>progressive responsibility.</i>
              </h2>
              <p>
                A leadership journey across some of Bangladesh's established
                real estate and property development organizations.
              </p>
            </div>
            <div className="career-list">
              {experience.map((item, i) => (
                <article className="career-card" key={item.company + item.year}>
                  <div className="career-year">
                    {item.year}
                    <span>0{i + 1}</span>
                  </div>
                  <div className="career-main">
                    <h3>{item.role}</h3>
                    <div className="company">{item.company}</div>
                    <p>{item.text}</p>
                  </div>
                  <FiArrowUpRight className="career-arrow" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="expertise"
          className="section light-section expertise-section"
        >
          <div className="container">
            <div className="section-intro reveal">
              <div className="eyebrow">03 / Expertise</div>
              <h2>
                The disciplines behind <i>the results.</i>
              </h2>
            </div>
            <div className="expertise-grid">
              {expertise.map(([n, title, text]) => (
                <article className="expertise-card reveal" key={title}>
                  <span className="expertise-no">{n}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <div className="card-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="section gold-section">
          <div className="container writing-grid">
            <div className="reveal">
              <div className="eyebrow dark-text">
                04 / Writing & publications
              </div>
              <h2>
                Ideas beyond
                <br />
                <i>the boardroom.</i>
              </h2>
            </div>
            <div className="writing-copy reveal">
              <div className="big-four">04</div>
              <p>
                Published books and numerous newspaper articles reflect a
                long-standing interest in communication, ideas and public
                discourse.
              </p>
              <div className="publication-rule" />
              <span>Books · Articles · Professional commentary</span>
            </div>
          </div>
          <div className="container selected-books">
            <div className="eyebrow dark-text reveal">Selected books</div>
            <div className="books-grid">
              {books.map((book) => {
                const BookWrapper = book.url ? "a" : "div";
                return (
                  <article className="book-card reveal" key={book.cover}>
                    <BookWrapper
                      className="book-link"
                      href={book.url || undefined}
                      target={book.url ? "_blank" : undefined}
                      rel={book.url ? "noopener noreferrer" : undefined}
                      aria-label={book.url ? book.title + " — Buy on Rokomari (opens in a new tab)" : undefined}
                    >
                      <div className="book-artwork">
                        <Image
                          className="book-cover"
                          src={book.cover}
                          alt={book.title + " — Nazrul Islam Maksud"}
                          width={book.width}
                          height={book.height}
                          sizes="(max-width: 560px) 70vw, (max-width: 1100px) 35vw, 240px"
                        />
                      </div>
                      <h3>{book.title}</h3>
                      {book.url ? (
                        <span className="book-buy">
                          Buy on Rokomari <FiArrowUpRight aria-hidden="true" />
                        </span>
                      ) : (
                        <span className="book-buy book-coming-soon">
                          Link will be available soon
                        </span>
                      )}
                    </BookWrapper>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section credentials light-section">
          <div className="container credentials-grid">
            <div className="reveal">
              <div className="eyebrow">05 / Education</div>
              <h2>Academic foundation.</h2>
              <div className="edu-item">
                <span>M.Sc.</span>
                <div>
                  <strong>Physics</strong>
                  <small>University of Dhaka</small>
                </div>
              </div>
              <div className="edu-item">
                <span>B.Sc.</span>
                <div>
                  <strong>Physics — Honours</strong>
                  <small>University of Dhaka</small>
                </div>
              </div>
            </div>
            <div className="reveal personal-card">
              <div className="eyebrow">Professional tools</div>
              <p>
                MS Word · MS Excel · PowerPoint · Visual FoxPro · Visual Basic
                6.0 · OpenAI
              </p>
              <div className="language">
                <span>Communication</span>
                <strong>Bengali & English</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <div className="reveal">
              <div className="eyebrow">06 / Contact</div>
              <h2>
                Let's discuss the
                <br />
                <i>next chapter.</i>
              </h2>
              <p>
                For professional correspondence, strategic conversations,
                partnerships and real estate business opportunities.
              </p>
            </div>
            <div className="contact-grid reveal">
              <a href="tel:+8801917777000">
                <FiPhone />
                <small>Phone</small>
                <strong>+880 1917-777-000</strong>
              </a>
              <a href="mailto:nimaksud@gmail.com">
                <FiMail />
                <small>Email</small>
                <strong>nimaksud@gmail.com</strong>
              </a>
              <div>
                <FiMapPin />
                <small>Based in</small>
                <strong>Mohammadpur, Dhaka</strong>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <span>© {new Date().getFullYear()} Nazrul Islam Maksud</span>
          <span>Real Estate Marketing & Business Leader</span>
          <span>SENIOR GENERAL MANAGER - Portfolio</span>
        </div>
      </footer>
    </div>
  );
}
