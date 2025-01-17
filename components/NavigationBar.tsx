import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

export default function NavigationBar() {
  return (
    <nav className="bg-lime-500 py-5 w-full text-center">
      <div className="container flex items-center justify-between">
        {/* Logo image */}
        <Link href="/">
          <Image
            src="/twitter-image.png"
            alt="Twitter logo."
            width={75}
            height={65}
          />
        </Link>

        {/* Links */}
        <ul className="gap-6 hidden sm:flex">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Button */}
        <Button text="Sign Up" href={"#"} />
      </div>
    </nav>
  );
}
