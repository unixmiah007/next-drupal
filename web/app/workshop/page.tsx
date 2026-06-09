import { CtaBanner } from "@/components/home/CtaBanner"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { ArchitectureDiagram } from "@/components/workshop/ArchitectureDiagram"
import { ProjectShowcase } from "@/components/workshop/ProjectShowcase"
import { WorkshopMosaic } from "@/components/workshop/WorkshopMosaic"
import { workshopProjects } from "@/lib/workshop"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Workshop",
  description:
    "Explore desktop and mobile website snapshots — responsive designs built with Drupal and Next.js.",
}

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Workshop" },
        ]}
        badge="Design workshop · Live snapshots"
        title={
          <>
            Website snapshots,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              desktop to mobile
            </span>
          </>
        }
        subtitle="A curated gallery of responsive sites we've crafted — each pairing a full desktop experience with a thumb-friendly mobile version, all powered by Drupal content and Next.js front ends."
        primaryCta={{ href: "#architecture", label: "See architecture" }}
        secondaryCta={{ href: "#showcase", label: "Browse snapshots" }}
        stats={[
          { value: "6", label: "Showcase projects" },
          { value: "2×", label: "Desktop + mobile" },
          { value: "100%", label: "Responsive" },
          { value: "D11", label: "Drupal powered" },
        ]}
      />

      <WorkshopMosaic />

      <ArchitectureDiagram />

      <section id="showcase" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Full showcases"
            title="Project snapshots"
            description="Each project below shows desktop and mobile views together — the same content, two perfectly tailored experiences."
          />

          <div className="mt-14 space-y-10">
            {workshopProjects.map((project, index) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                reversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <SectionHeader
            eyebrow="How we build"
            title="One content source, every screen"
            description="Drupal stores the content once. Next.js renders device-optimized layouts — no duplicate sites, no sync headaches."
            centered
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Design in frames",
                description:
                  "We prototype desktop and mobile together from day one — not as an afterthought.",
              },
              {
                title: "Ship both views",
                description:
                  "Tailwind breakpoints and next/image ensure every device gets the right layout and assets.",
              },
              {
                title: "Editors stay in Drupal",
                description:
                  "Content updates flow to all screen sizes automatically via JSON:API.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 p-6 text-left transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
