import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import SiteShell from "../component/SIteShell";
import { PageHero } from "../component/PageHero";

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories = [
  {
    name: "Student Security",
    posts: [
      { title: "Why Every School Needs Student Tracking Technology", excerpt: "How GPS, smart cards and digital attendance reshape student safety." },
      { title: "Improving Student Safety Through Technology",        excerpt: "Practical steps schools can take to protect students on and off campus." },
    ],
  },
  {
    name: "School Management",
    posts: [
      { title: "How Digital Attendance Improves School Operations", excerpt: "Cut administrative work and improve accuracy with NFC attendance." },
      { title: "Benefits of School Management Systems",             excerpt: "A guide for principals weighing a move to integrated school software." },
    ],
  },
  {
    name: "Cashless Schools",
    posts: [
      { title: "The Future of Cashless Education",          excerpt: "How student wallets are changing payments inside school gates." },
      { title: "Protecting Students from Cash-Related Risks", excerpt: "Why removing cash on campus reduces theft and bullying." },
    ],
  },
  {
    name: "Educational Technology",
    posts: [
      { title: "Smart Schools in Africa",                        excerpt: "What the next generation of African schools looks like." },
      { title: "The Role of Technology in Modern Education", excerpt: "Beyond devices — building a connected learning environment." },
    ],
  },
] as const;

// ─── Blog ─────────────────────────────────────────────────────────────────────

export default function Blog() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            The <span className="text-amber-400">WinExpress Blog</span>
          </>
        }
        subtitle="Ideas, research and best practices for building safer, smarter schools."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h2 className="text-2xl font-black text-slate-900">{cat.name}</h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {cat.posts.map((p) => (
                  <article
                    key={p.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-600">
                      {cat.name}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{p.excerpt}</p>
                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-500"
                    >
                      Read more{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}