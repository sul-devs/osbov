import NavigationBar from "@/components/NavigationBar";
import Hero from "@/components/Hero";

export default function Header({
  heading,
  description,
  ctaText,
  bgImg,
}: {
  heading: string;
  description: string;
  ctaText: string;
  bgImg: string;
}) {
  <header>
    <NavigationBar />
    <Hero heading={heading} description={description} ctaText={ctaText} />
  </header>;
}
