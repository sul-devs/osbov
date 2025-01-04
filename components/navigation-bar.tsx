import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";

export default function NavigationBar() {
  return (
    <nav>
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/twitter-image.png"
            alt="Twitter logo."
            width={90}
            height={60}
          />
        </Link>

        {/* Links */}
        <ul className="flex gap-5">
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
        <Button text="Sign Up" />
      </div>
    </nav>
  );
}
