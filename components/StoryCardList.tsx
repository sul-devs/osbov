import React, { JSX } from "react";
import Button from "./button";

export default function StoryCardList({
  cards,
  heading,
  description,
  button,
}: {
  cards: JSX.Element;
  heading: string;
  description: string;
  button: JSX.Element;
}) {
  return (
    <section>
      <h2>{heading}</h2>
      <p>{description}</p>
      <div>{cards}</div>;{button}
    </section>
  );
}
