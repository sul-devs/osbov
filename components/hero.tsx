import Button from "@/components/button";

export default function Hero({
  heading,
  paragraph,
  cta,
}: {
  heading: string;
  paragraph: string;
  cta: string;
}) {
  return (
    <section id="hero">
      <div className="container">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        <Button text={cta} />
      </div>
    </section>
  );
}
