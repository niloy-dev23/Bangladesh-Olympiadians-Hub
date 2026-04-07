import SectionWrapper from "../components/SectionWrapper";
import { FiUser } from "react-icons/fi";

const president = {
  name: "Dr. Ahmed Rahman",
  role: "President",
  desc: "IMO gold medalist (2018) and passionate advocate for olympiad education in Bangladesh. Leading BOH's mission to nurture the next generation.",
};

const executives = [
  { name: "Fatima Akhter", role: "Vice President" },
  { name: "Rahim Hossain", role: "Secretary General" },
  { name: "Nusrat Jahan", role: "Head of Academics" },
  { name: "Tanvir Islam", role: "Head of Competitions" },
  { name: "Priya Das", role: "Communications Lead" },
  { name: "Kamal Uddin", role: "Tech Lead" },
];

function MemberCard({
  name,
  role,
  desc,
  large,
}) {
  return (
    <div
      className={`rounded-2xl bg-card border border-border p-6 card-hover group ${
        large ? "md:col-span-2 lg:col-span-3 text-center" : ""
      }`}
    >
      <div
        className={`mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 ${
          large ? "w-24 h-24" : "w-16 h-16"
        }`}
      >
        <FiUser size={large ? 40 : 28} />
      </div>
      <h3 className={`font-heading font-bold ${large ? "text-xl" : "text-lg"}`}>{name}</h3>
      <p className="text-primary text-sm font-medium">{role}</p>
      {desc && <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">{desc}</p>}
    </div>
  );
}

export default function About() {
  return (
    <>
      <SectionWrapper className="pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            About Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a community of passionate olympiadians dedicated to advancing science and
            mathematics education in Bangladesh.
          </p>
        </div>
      </SectionWrapper>

      {/* President */}
      <SectionWrapper className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Our President</h2>
          <div className="grid">
            <MemberCard {...president} large />
          </div>
        </div>
      </SectionWrapper>

      {/* Executives */}
      <SectionWrapper className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">Executive Members</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {executives.map((m) => (
              <MemberCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
