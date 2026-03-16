import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-6 text-center">
      <Image
        src="/images/logo.png"
        alt="VVH Construction Group"
        width={300}
        height={100}
        className="mb-8"
      />
      <h1 className="font-display text-6xl text-white mb-4">COMING SOON</h1>
      <p className="mb-12 max-w-md text-lg text-gray-500">
        Our new website is under construction. In the meantime, here&apos;s our
        crew hard at work.
      </p>
      <Image
        src="/images/prank.png"
        alt="VVH Crew Hard at Work"
        width={800}
        height={533}
        className="rounded-2xl border-2 border-red shadow-2xl"
        priority
      />
      <p className="mt-8 text-sm italic text-gray-700">
        &quot;Building What&apos;s Next&quot; ...right after this song
      </p>
    </div>
  );
}
