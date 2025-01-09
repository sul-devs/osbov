import Button from "@/components/Button";
import Hero from "@/components/Hero";

export default function Work() {
  return (
    <>
      <Hero
        heading={"Work"}
        paragraph={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quis similique, nostrum modi exercitationem atque doloribus reiciendis nemo voluptas. Adipisci."
        }
        cta={<Button text={"View our Work below."} href={"#"} />}
      />
    </>
  );
}
