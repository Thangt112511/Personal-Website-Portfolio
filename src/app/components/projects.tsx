"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Reveal from "./Reveal";

export type Project = {
  title: string;
  desc: string;
  readme?: string;
  img: string;
  pbix?: string;
  pdf?: string;
  link?: string;
  tags?: string[];
  featured?: boolean;
  gallery?: string[];
};

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  // --- NEW: refs + heights for equalizing cards ---
  const featuredWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const otherWrappersRef = useRef<(HTMLDivElement | null)[]>([]);
  const [featuredMaxH, setFeaturedMaxH] = useState<number>(0);
  const [otherMaxH, setOtherMaxH] = useState<number>(0);

  // measure tallest in a list of refs
  const measureMax = (els: (HTMLDivElement | null)[]) =>
    Math.max(0, ...els.map((el) => (el ? el.offsetHeight : 0)));

  useEffect(() => {
    const doMeasure = () => {
      setFeaturedMaxH(measureMax(featuredWrappersRef.current));
      setOtherMaxH(measureMax(otherWrappersRef.current));
    };
    // initial
    doMeasure();
    // remeasure on resize
    const onResize = () => requestAnimationFrame(doMeasure);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // remap after data/filter expands/collapses
  useEffect(() => {
    // next tick so DOM has updated
    const id = requestAnimationFrame(() => {
      setFeaturedMaxH(measureMax(featuredWrappersRef.current));
      setOtherMaxH(measureMax(otherWrappersRef.current));
    });
    return () => cancelAnimationFrame(id);
  }, [activeTags, expanded]);

  // -------------------------------------------------

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags ?? []))).sort(),
    [projects]
  );

  const matches = (p: Project) =>
    activeTags.length === 0 || (p.tags ?? []).some((t) => activeTags.includes(t));

  const featuredProjects = projects.filter((p) => p.featured).filter(matches);
  const otherProjects = projects.filter((p) => !p.featured).filter(matches);

  const toggleTag = (t: string) =>
    setActiveTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));
  const clearTags = () => setActiveTags([]);

  function renderProjectCard(p: Project) {
    return (
      <article className="relative z-10 h-full flex flex-col rounded-xl bg-white p-6 text-gray-900 shadow transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
        <h3 className="text-xl font-semibold">{p.title}</h3>

        {p.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-300 px-2.5 py-0.5 text-xs text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {p.img && (
          <Image
            src={p.img}
            alt={`${p.title} screenshot`}
            width={640}
            height={360}
            className="mt-3 rounded-lg border border-gray-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        )}

        <p className="mt-3 text-gray-700">{p.desc}</p>
      </article>
    );
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-semibold">Projects</h2>
      <p className="mt-2 text-white/70">
        Selected work with outcomes. Ask for code samples or deep-dive writeups.
      </p>

      {/* Filters */}
      {allTags.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {allTags.map((t) => {
            const on = activeTags.includes(t);
            return (
              <button
                key={t}
                onClick={() => toggleTag(t)}
                className={[
                  "rounded-full border px-3 py-1.5 text-sm transition",
                  on
                    ? "border-white/80 bg-white/10 text-white"
                    : "border-white/30 text-white/80 hover:border-white/60",
                ].join(" ")}
                aria-pressed={on}
              >
                {t}
              </button>
            );
          })}
          {activeTags.length > 0 && (
            <button
              onClick={clearTags}
              className="rounded-full border border-white/30 px-3 py-1.5 text-sm text-white/80 hover:border-white/60"
            >
              Clear
            </button>
          )}
        </div>
      )}

      {/* Featured */}
     <h3 className="mt-10 text-2xl font-semibold">Featured</h3>
<div className="mt-4 grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch">
  {featuredProjects.slice(0, 3).map((p, i) => (
    <div key={p.title} className="flex">
      <Reveal delay={i * 0.08} className="h-full w-full">
        {/* clickable wrapper (group enables hover styles) */}
        <div
          ref={(el) => {featuredWrappersRef.current[i] = el;}}
          className="relative h-full w-full group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
          style={featuredMaxH ? { minHeight: featuredMaxH } : undefined}
          onClick={() => setSelected(p)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setSelected(p);
          }}
          aria-label={`Open details for ${p.title}`}
        >
          {/* offset back piece (turns blue on hover) */}
          <div className="pointer-events-none absolute inset-0 translate-x-[-0.5rem] translate-y-[0.5rem] rounded-xl bg-gray-200 transition-colors duration-300 group-hover:bg-blue-400" />

          {/* actual card */}
          <div className="relative z-10 h-full">{renderProjectCard(p)}</div>
        </div>
      </Reveal>
    </div>
  ))}

  {featuredProjects.length === 0 && (
    <div className="text-white/60 col-span-full">
      No featured projects match the current filter.
    </div>
  )}
</div>


      {/* Toggle */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white/90 hover:border-white/60"
          aria-expanded={expanded}
          aria-controls="more-projects"
        >
          {expanded ? "Show fewer projects" : "Show more projects"}
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
          </svg>
        </button>
      </div>

      {/* Collapsible list */}
      <div
  id="more-projects"
  className={`grid gap-8 md:grid-cols-2 xl:grid-cols-3 items-stretch transition-[grid-template-rows,opacity] ${
    expanded ? "mt-8 opacity-100" : "pointer-events-none h-0 overflow-hidden opacity-0"
  }`}
>
  {otherProjects.map((p, i) => (
    <div key={p.title} className="flex">
      <Reveal delay={i * 0.08} className="h-full w-full">
        <div
          ref={(el) => {otherWrappersRef.current[i] = el;}}
          className="relative h-full w-full group cursor-pointer transition-transform duration-200 hover:-translate-y-1"
          style={otherMaxH ? { minHeight: otherMaxH } : undefined}
          onClick={() => setSelected(p)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setSelected(p);
          }}
          aria-label={`Open details for ${p.title}`}
        >
          <div className="pointer-events-none absolute inset-0 translate-x-[-0.5rem] translate-y-[0.5rem] rounded-xl bg-gray-200 transition-colors duration-300 group-hover:bg-blue-400" />
          <div className="relative z-10 h-full">{renderProjectCard(p)}</div>
        </div>
      </Reveal>
    </div>
  ))}
  {expanded && otherProjects.length === 0 && (
    <div className="text-white/60">No additional projects match the current filter.</div>
  )}
</div>


      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-xl bg-white text-gray-900 shadow-lg transition-all duration-300 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 pb-3">
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 text-gray-400 hover:text-black text-xl"
                aria-label="Close"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold pr-8">{selected.title}</h2>

              {selected.tags?.length ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-300 px-2.5 py-0.5 text-xs text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Scrollable content */}
            <div className="px-6 pb-6 overflow-y-auto max-h-[70vh] pr-2">
              {selected.img && (
                <div className="mt-2">
                  <Image
                    src={selected.img}
                    alt={selected.title}
                    width={800}
                    height={450}
                    className="rounded-lg border"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}

              <div className="mt-4 leading-relaxed text-gray-800 whitespace-pre-line">
                {selected.readme ?? selected.desc}
              </div>

              {selected.gallery?.length ? (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {selected.gallery.map((g, i) => (
                    <Image
                      key={i}
                      src={g}
                      alt=""
                      width={400}
                      height={250}
                      className="rounded-lg border"
                      sizes="(max-width: 768px) 50vw, 400px"
                    />
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap gap-3">
                {selected.pbix && (
                  <a
                    href={selected.pbix}
                    className="rounded bg-black px-3 py-1.5 text-white text-sm hover:opacity-90"
                    download
                  >
                    View Dashboard (Interactive)
                  </a>
                )}
                {selected.pdf && (
                  <a
                    href={selected.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-black px-3 py-1.5 text-sm hover:bg-black hover:text-white"
                  >
                    View PDF (Non-Interactive)
                  </a>
                )}
                {selected.link && selected.link !== "#" && (
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-100"
                  >
                    Open Live Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}