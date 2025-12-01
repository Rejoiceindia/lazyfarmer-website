"use client"

import { Landmark, Clock, Briefcase, Coins } from "lucide-react"

const options = [
  {
    id: 1,
    icon: Landmark,
    title: "Farmland Owner",
    description: "I own farmland and would like to collaborate with other farmland owners.",
    formUrl: "https://forms.google.com/farmland-owner",
    accent: "group-hover:text-amber-600 dark:group-hover:text-amber-400",
    bgAccent: "group-hover:bg-amber-50 dark:group-hover:bg-amber-950/30",
  },
  {
    id: 2,
    icon: Clock,
    title: "Intern",
    description: "I don't have farmland or capital, but can invest my time as an intern.",
    formUrl: "https://forms.google.com/intern",
    accent: "group-hover:text-emerald-600 dark:group-hover:text-emerald-400",
    bgAccent: "group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/30",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Venture Partner",
    description: "I can invest my time and capital as an Addon Venture Partner.",
    formUrl: "https://forms.google.com/venture-partner",
    accent: "group-hover:text-sky-600 dark:group-hover:text-sky-400",
    bgAccent: "group-hover:bg-sky-50 dark:group-hover:bg-sky-950/30",
  },
  {
    id: 4,
    icon: Coins,
    title: "NFT Investor",
    description: "I can invest small capital for passive income as an NFT Investor.",
    formUrl: "https://forms.google.com/nft-investor",
    accent: "group-hover:text-rose-600 dark:group-hover:text-rose-400",
    bgAccent: "group-hover:bg-rose-50 dark:group-hover:bg-rose-950/30",
  },
]

export function OptionsGrid() {
  const handleCardClick = (formUrl: string) => {
    window.open(formUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="container mx-auto px-4 pb-16 md:pb-24">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleCardClick(option.formUrl)}
            className={`group relative flex flex-col items-start rounded-xl border border-border bg-card p-6 text-left transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 md:p-8 cursor-pointer ${option.bgAccent}`}
          >
            <div
              className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-muted transition-colors ${option.bgAccent}`}
            >
              <option.icon className={`h-6 w-6 text-muted-foreground transition-colors ${option.accent}`} />
            </div>

            <h3 className="mb-2 font-serif text-lg font-medium text-foreground md:text-xl">{option.title}</h3>

            <p className="text-sm leading-relaxed text-muted-foreground">{option.description}</p>

            <span className="mt-4 flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Apply now
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
