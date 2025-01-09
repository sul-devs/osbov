import Button from "@/components/Button";
import { JSX } from "react";

export default function Hero({
  heading,
  paragraph,
  cta,
}: {
  heading: string;
  paragraph: string;
  cta: JSX.Element;
}) {
  return (
    <section id="hero" className="py-20">
      <div className="container">
        <h1>{heading}</h1>
        <p className="py-5">{paragraph}</p>
        {cta}
      </div>
    </section>
  );
}
