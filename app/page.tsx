import AquacultureHome from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/Arriere.jpg')`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center h-full">

        <header className="w-full text-center pt-24">
          <Image src="/plan/Logo.svg" alt="ANDA Logo" width={700} height={146} className="mx-auto mb-20" />
        </header>
      </div>
      <AquacultureHome />
    </main>
  );
}
