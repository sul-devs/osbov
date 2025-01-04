import NavigationBar from "@/components/navigation-bar"
import Hero from "@/components/hero"

export default function Header({heading, description, ctaText, bgImg} : {heading: string, description: string, ctaText: string, bgImg: string}) {
    <header>
        <NavigationBar />
        <Hero heading={heading} description={description} ctaText={ctaText} />
    </header>
}