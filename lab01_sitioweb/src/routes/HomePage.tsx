import { HeroSection } from "@/components/sections/hero"
import { EducationSection } from "@/components/sections/education"
import { ExperienceSection } from "@/components/sections/experience"
import { SkillsSection } from "@/components/sections/skills"
import { LanguagesSection } from "@/components/sections/languages"
import { ContactSection } from "@/components/sections/contact"

export function HomePage() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <LanguagesSection />
      <ContactSection />
    </>
  )
}
