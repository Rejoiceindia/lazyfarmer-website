import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { OptionsGrid } from "@/components/options-grid"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <OptionsGrid />
      <FaqSection />
      <Footer />
    </main>
  )
}
