import { Link } from "react-router";
import { FiAward, FiBookOpen, FiUsers, FiTrendingUp } from "react-icons/fi";
import trophy from "../assets/trophy.png";
import SectionWrapper from "../components/SectionWrapper";

const features = [
  { icon: <FiBookOpen size={28} />, title: "Structured Practice", desc: "Curated problems across all olympiad subjects." },
  { icon: <FiUsers size={28} />, title: "Community", desc: "Connect with fellow olympiadians nationwide." },
  { icon: <FiAward size={28} />, title: "Competitions", desc: "Regular contests to test your skills." },
  { icon: <FiTrendingUp size={28} />, title: "Progress Tracking", desc: "Track your growth and performance." },
];

const categories = ["Mathematics", "Physics", "Chemistry", "Biology", "Informatics", "Astronomy"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
              <span className="gradient-text">Bangladesh</span>
              <br />
              <span className="gradient-text">Olympiadians Hub</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              Empowering the next generation of world-class olympiadians from Bangladesh.
              Practice, compete, and grow together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                Join Community
              </a>
              <Link
                to="/practice"
                className="px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
              >
                Start Practice
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-end animate-fade-up-delay">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/15 blur-3xl scale-75" />
              <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl scale-90 animate-pulse" />
              <img
                src={trophy}
                alt="Trophy"
                width={400}
                height={400}
                className="relative animate-float drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
              />
            </div>
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm font-heading font-semibold tracking-[0.3em] uppercase gradient-text">
                Excellence • Dedication • Victory
              </p>
              <p className="text-xs text-muted-foreground/70 tracking-wide">
                Empowering Bangladesh's brightest minds since 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center gradient-text mb-12">
            Why Join Us?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-card border border-border card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Categories */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center gradient-text mb-12">
            Olympiad Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat}
                className="p-6 rounded-2xl bg-card border border-border text-center card-hover cursor-pointer group"
              >
                <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                  {cat}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
              Join hundreds of olympiadians and start your preparation today.
            </p>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-xl bg-accent text-accent-foreground font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Join Now
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
