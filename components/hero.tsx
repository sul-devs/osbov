import Button from "@/components/button"
export default function Hero({heading, description, ctaText} : {heading: string, description: string, ctaText: string}) {
  return (
    <section id="hero">
      <h1>{heading}</h1>
      <p>{description}</p>
      <Button text={ctaText}/>
    </section>
  );
}
