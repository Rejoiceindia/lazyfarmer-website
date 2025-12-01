import Link from "next/link"
import { Youtube, BookOpen, Sprout, MessageCircle } from "lucide-react"

function RedditIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
    </svg>
  )
}

const socialLinks = [
  {
    icon: Youtube,
    href: "https://www.youtube.com/@realestatewithprashant",
    label: "YouTube",
  },
  {
    icon: BookOpen,
    href: "https://medium.com",
    label: "Medium",
  },
  {
    icon: RedditIcon,
    href: "https://www.reddit.com/r/DFE_India/",
    label: "Reddit",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/917021766299",
    label: "WhatsApp",
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Sprout className="h-5 w-5 text-primary" />
            </div>
            <span className="font-serif text-lg font-semibold tracking-wide text-foreground">LazyFarmer</span>
          </div>

          {/* Tagline */}
          <p className="font-serif text-sm italic text-muted-foreground">Nurturing Growth, Lazily.</p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground cursor-pointer"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">©2025 lazyfarmer.org.in. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
