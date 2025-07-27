import { EngineList } from "@/components/custom/engineList";
import { getDatabaseEngine } from "@/lib/repository/repository";
import Image from "next/image";

export default function HomePage() {

  const engines = getDatabaseEngine();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-black">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
          SQL <span className="text-[#000088]">GEN</span>
        </h1>
        {/* list engines */}
        <EngineList urlPrefix="/engines" engines={engines} />
      </div>
    </main>
  );
}
