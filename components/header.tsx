"use client"

import { Moon, Sun, Sprout, MessageCircle } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20 md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 md:h-11 md:w-11">
            <Sprout className="h-5 w-5 text-primary md:h-6 md:w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-wide text-foreground md:text-xl">
              LazyFarmer
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:block">
              .org.in
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            href="https://wa.me/917021766299"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 md:px-4 md:py-2.5 md:text-sm cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Chat with us</span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full cursor-pointer"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </header>
  )
}
