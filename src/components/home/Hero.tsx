import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex h-svh min-h-[640px] w-full items-end overflow-hidden bg-primary">
      <Image
        src="/images/PHOTO-2026-03-14-19-45-03.jpg"
        alt="A Procad Construction custom home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" aria-hidden />

      <div className="container-procad relative z-10 pb-20 pt-40 text-background md:pb-28">
        
        <h1 className="font-display max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Considered homes, built with precision in Nigeria.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-background/85 md:text-lg">
          Procad Construction delivers architecturally designed new homes, additions and
          renovations across Nigeria, built on trust, transparency and exceptional craft.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/projects" showArrow>
            View our projects
          </Button>
          {/* <Button href="/request-a-quote" variant="secondary" className="border-background/40 text-background hover:border-background">
            Request a quote
          </Button> */}
        </div>
      </div>
    </section>
  );
}
