import React, { JSX } from "react";
import Button from "./Button";

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
      <div className="container block pb-5">
        <h2>{heading}</h2>
        <p>{description}</p>
        <div className="flex">{cards}</div>;{button}
      </div>
    </section>
  );
}
