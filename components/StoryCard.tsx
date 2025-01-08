import React, { JSX } from "react";

export default function StoryCard({
  headshot,
  order = "default",
  summary,
  name,
  cta,
}: {
  headshot: JSX.Element;
  order: "default" | "reversed";
  summary: string;
  name: string;
  cta: JSX.Element;
}) {
  if (order === "default") {
    return (
      <article>
        <div>{headshot}</div>
        <p>{summary}</p>
        <h3>{name}</h3>
        {cta}
      </article>
    );
  } else {
    return <></>;
  }
}
