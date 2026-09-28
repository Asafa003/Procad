import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = ComponentProps<typeof Link> & {
  external?: boolean;
};

export function TextLink({ className, external, href, children, ...props }: TextLinkProps) {
  const classes = cn(
    "text-sm text-secondary transition-colors duration-200 hover:text-foreground",
    className,
  );

  const hrefString = typeof href === "string" ? href : null;
  const isNative =
    external ||
    Boolean(hrefString && /^(https?:|mailto:|tel:)/.test(hrefString));

  if (isNative && hrefString) {
    const isHttp = hrefString.startsWith("http");
    return (
      <a
        href={hrefString}
        className={classes}
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
