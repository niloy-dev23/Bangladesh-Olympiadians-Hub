import SectionWrapper from "../components/SectionWrapper";
import { FiCalendar, FiClock } from "react-icons/fi";

const contests = [
  { id: 1, title: "BOH Math Olympiad 2026", date: "April 15, 2026", status: "Upcoming" },
  { id: 2, title: "National Physics Challenge", date: "March 30, 2026", status: "Ongoing" },
  { id: 3, title: "Chemistry Invitational", date: "May 10, 2026", status: "Upcoming" },
  { id: 4, title: "Informatics Sprint Round", date: "March 28, 2026", status: "Ongoing" },
  { id: 5, title: "Biology Qualifier 2025", date: "Dec 15, 2025", status: "Past" },
  { id: 6, title: "BOH Math Prelims 2025", date: "Nov 20, 2025", status: "Past" },
];

const statusStyle = {
  Upcoming: "bg-accent/20 text-accent-foreground",
  Ongoing: "bg-secondary/20 text-secondary",
  Past: "bg-muted text-muted-foreground",
};

const sections = ["Ongoing", "Upcoming", "Past"];

export default function Contests() {
  return (
    <>
      <SectionWrapper className="pt-20 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Contests
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Compete in olympiad-level contests and prove your mettle.
          </p>
        </div>
      </SectionWrapper>

      {sections.map((s) => {
        const items = contests.filter((c) => c.status === s);
        if (!items.length) return null;
        return (
          <SectionWrapper key={s} className="py-8">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                {s === "Ongoing" ? <FiClock className="text-secondary" /> : <FiCalendar className="text-primary" />}
                {s} Contests
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((c) => (
                  <div
                    key={c.id}
                    className="rounded-2xl bg-card border border-border p-6 card-hover group flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-heading font-semibold text-lg">{c.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${statusStyle[c.status]}`}>
                        {c.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
                      <FiCalendar size={14} /> {c.date}
                    </p>
                    <button className="mt-auto w-full py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                      {c.status === "Past" ? "View Details" : "Participate"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        );
      })}
    </>
  );
}
