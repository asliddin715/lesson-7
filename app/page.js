import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-start pt-4">
      <Link
        className="text-start p-4 border-collapse border-2 bg-black text-white"
        href={"/complex-dashboard"}
      >
        Go to Complex-Dashboard
      </Link>
    </main>
  );
}
