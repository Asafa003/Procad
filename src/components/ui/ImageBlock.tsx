import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/project";

interface ImageBlockProps {
  image: ProjectImage;
  aspect?: "portrait" | "square" | "landscape" | "wide";
  zoom?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

const aspectClasses: Record<NonNullable<ImageBlockProps["aspect"]>, string> = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
};

export function ImageBlock({
  image,
  aspect = "portrait",
  zoom = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  className,
}: ImageBlockProps) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", aspectClasses[aspect], className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn(
          "object-cover",
          zoom && "transition-transform duration-500 ease-out group-hover:scale-105",
        )}
      />
    </div>
  );
}
