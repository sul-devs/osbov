import Button from "@/components/Button";
import Hero from "@/components/Hero";
import StoryCard from "@/components/StoryCard";
import headshot from "@/app/twitter-image.png";
import Image from "next/image";
import StoryCardList from "@/components/StoryCardList";

export default async function Home() {
  return (
    <>
      <Hero
        heading={"Home"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error fugit repellendus perspiciatis, repudiandae suscipit totam eum necessitatibus ipsum incidunt!"
        }
        cta={<Button href={"/about"} text={"Learn more"} />}
      />
      <StoryCardList
        cards={
          <>
            <StoryCard
              headshot={
                <Image
                  src={headshot}
                  width={30}
                  height={30}
                  alt="Doctor man."
                />
              }
              order={"default"}
              summary={"I am doctor man. That's me."}
              name={"Doctor Man"}
              cta={<Button text={"Read more"} href={"/contact"} />}
            />
            <StoryCard
              headshot={
                <Image
                  src={headshot}
                  width={30}
                  height={30}
                  alt="Doctor man."
                />
              }
              order={"default"}
              summary={"I am doctor man. That's me."}
              name={"Doctor Man"}
              cta={<Button text={"Read more"} href={"/contact"} />}
            />
            <StoryCard
              headshot={
                <Image
                  src={headshot}
                  width={30}
                  height={30}
                  alt="Doctor man."
                />
              }
              order={"default"}
              summary={"I am doctor man. That's me."}
              name={"Doctor Man"}
              cta={<Button text={"Read more"} href={"/contact"} />}
            />
            <StoryCard
              headshot={
                <Image
                  src={headshot}
                  width={30}
                  height={30}
                  alt="Doctor man."
                />
              }
              order={"default"}
              summary={"I am doctor man. That's me."}
              name={"Doctor Man"}
              cta={<Button text={"Read more"} href={"/contact"} />}
            />
          </>
        }
        heading={""}
        description={""}
        button={<Button text={"hello"} href={"/contact"} />}
      />
    </>
  );
}
