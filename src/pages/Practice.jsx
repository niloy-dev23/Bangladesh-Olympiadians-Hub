import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";

const problems = [
  { id: 1, subject: "Mathematics", difficulty: "Easy", title: "Sum of Primes", desc: "Find the sum of the first 50 prime numbers.", answer: "5117" },
  { id: 2, subject: "Physics", difficulty: "Medium", title: "Projectile Motion", desc: "Calculate the maximum height (in meters) of a projectile launched at 45° with initial velocity 20 m/s. (g=10)", answer: "10" },
  { id: 3, subject: "Chemistry", difficulty: "Hard", title: "Reaction Kinetics", desc: "Determine the rate constant for a second-order reaction.", answer: "0.5" },
  { id: 4, subject: "Mathematics", difficulty: "Medium", title: "Combinatorics", desc: "How many ways can 10 people sit around a circular table?", answer: "362880" },
  { id: 5, subject: "Biology", difficulty: "Easy", title: "Cell Division", desc: "How many phases does mitosis have?", answer: "4" },
  { id: 6, subject: "Informatics", difficulty: "Hard", title: "Graph Traversal", desc: "What is the shortest path from A to D in a graph A-B(2), B-C(3), A-C(4), C-D(1)?", answer: "5" },
  { id: 7, subject: "Physics", difficulty: "Easy", title: "Ohm's Law", desc: "Calculate current (in Amperes) through a 10Ω resistor with 20V supply.", answer: "2" },
  { id: 8, subject: "Mathematics", difficulty: "Hard", title: "Number Theory", desc: "What is the smallest prime of the form 4k+3 greater than 10?", answer: "11" },
];

const subjects = ["All", ...new Set(problems.map((p) => p.subject))];
const difficulties = ["All", "Easy", "Medium", "Hard"];

const diffColors = {
  Easy: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  Medium: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  Hard: "bg-rose-500/15 text-rose-400 border border-rose-500/30",
};

export default function Practice() {
  const [subject, setSubject] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState({});

  const filtered = problems.filter(
    (p) =>
      (subject === "All" || p.subject === subject) &&
      (difficulty === "All" || p.difficulty === difficulty)
  );

  const handleSubmit = (problem) => {
    const userAnswer = (answers[problem.id] || "").trim();
    if (!userAnswer) return;
    setResults((prev) => ({
      ...prev,
      [problem.id]: userAnswer.toLowerCase() === problem.answer.toLowerCase() ? "correct" : "wrong",
    }));
  };

  return (
    <>
      <SectionWrapper className="pt-20 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
            Practice
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sharpen your skills with curated problems across multiple olympiad subjects.
          </p>
        </div>
      </SectionWrapper>

      {/* Filters */}
      <div className="container mx-auto px-4 mb-8 flex flex-wrap gap-3 justify-center">
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                subject === s
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                difficulty === d
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Problem Cards */}
      <SectionWrapper className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl bg-card border border-border p-6 card-hover group flex flex-col"
              >
                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {p.subject}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${diffColors[p.difficulty]}`}>
                    {p.difficulty}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">{p.desc}</p>

                {/* Answer Input */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Type your answer..."
                    value={answers[p.id] || ""}
                    onChange={(e) => setAnswers((prev) => ({ ...prev, [p.id]: e.target.value }))}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit(p)}
                    className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  />
                  <button
                    onClick={() => handleSubmit(p)}
                    className="w-full py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20"
                  >
                    Submit
                  </button>
                  {results[p.id] === "correct" && (
                    <p className="text-sm font-medium text-emerald-400 text-center animate-fade-up">✅ Correct!</p>
                  )}
                  {results[p.id] === "wrong" && (
                    <p className="text-sm font-medium text-rose-400 text-center animate-fade-up">❌ Incorrect, try again!</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No problems match your filters.</p>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
