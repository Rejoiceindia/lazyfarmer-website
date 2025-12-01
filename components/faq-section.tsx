import Link from "next/link"
import { Play } from "lucide-react"

export function FaqSection() {
  return (
    <section className="border-y border-border bg-muted/30">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Learn More</p>

          <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl lg:text-4xl">
            Want to know more about us?
          </h2>

          <p className="mt-4 text-muted-foreground md:text-lg">
            We share detailed insights, success stories, and updates on our YouTube channel. See how we are building
            farmland ventures across Bharat.
          </p>

          <Link
            href="https://www.youtube.com/@realestatewithprashant"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 font-medium text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground md:px-8 md:py-4 cursor-pointer"
          >
            <Play className="h-5 w-5" />
            <span>Watch on YouTube</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
