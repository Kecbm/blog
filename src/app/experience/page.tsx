"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/src/hooks/useTranslation";

interface Experience {
  emoji: string;
  titleKey: "quorum" | "eduzz" | "br24" | "xp";
  period: string;
  technologies: string[];
  companyUrl?: string;
}

const experiences: Experience[] = [
  {
    emoji: "⚖️",
    titleKey: "quorum",
    period: "05/2025 - present",
    technologies: ["Django", "React", "MUI", "TailwindCSS", "SQL Server", "Jenkins", "Datadog", "Sentry", "Grafana", "Opsgenie"],
    companyUrl: "https://www.quorum.us/"
  },
  {
    emoji: "🎓",
    titleKey: "eduzz",
    period: "10/2024 - 05/2025",
    technologies: [".NET", "SQL Server", "Redis", "React", "Ant Design", "Jenkins", "Kubernetes"],
    companyUrl: "https://www.eduzz.com/"
  },
  {
    emoji: "⚡",
    titleKey: "br24",
    period: "05/2023 - 10/2024",
    technologies: ["React", "TailwindCSS", "PHP", "NestJS"],
    companyUrl: "https://br24.io/"
  },
  {
    emoji: "🏦",
    titleKey: "xp",
    period: "09/2022 - 03/2023",
    technologies: [".NET", "SQL Server", "React"],
    companyUrl: "https://www.xpi.com.br/"
  }
];

function ExperienceCard({ experience }: { experience: Experience }) {
  const { t } = useTranslation();
  const expData = t.experience.experiences[experience.titleKey];

  // Replace "present" with translated version
  const translatedPeriod = experience.period.replace("present", t.experience.present);

  const CardContent = () => (
    <>
      <div className="p-4">
        <div className="mb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                {experience.emoji} {expData.title} - {expData.company}
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                {translatedPeriod}
              </p>
              {expData.description && (
                <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
                  {expData.description}
                </p>
              )}
            </div>
            <ArrowUpRight className="size-5 shrink-0 text-[#c59009] transition-all group-hover:rotate-45 group-hover:text-[#f1c40f] dark:text-[#eca414] dark:group-hover:text-[#f3c22c]" />
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  if (experience.companyUrl) {
    return (
      <a
        href={experience.companyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500 mb-6 transition-all cursor-pointer hover:bg-[#f1c40f]/10 dark:hover:bg-[#f3c22c]/10 no-underline"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className="group flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500 mb-6">
      <CardContent />
    </div>
  );
}

export default function ExperiencePage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {t.experience.title}
      </h1>
      <section className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </section>
    </>
  );
}
