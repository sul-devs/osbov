import Link from "next/link";

export default function Button({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="bg-orange-600 py-3 px-4 rounded hover:bg-orange-700 text-white"
    >
      {text}
    </Link>
  );
}
