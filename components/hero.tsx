import Button from "@/components/button";
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
    <section id="hero">
      <div className="container">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        {cta}
      </div>
    </section>
  );
}
