import { SUSE } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { OrganizationJsonLd } from "@/components/seo/StructuredData";
import { buildMetadata } from "@/lib/seo";

const suse = SUSE({
  variable: "--font-suse",
  subsets: ["latin"],
});

export const metadata = buildMetadata({
  title: "Procad Construction",
  description:
    "Procad Construction designs and builds premium custom homes and renovations, delivering considered architecture and uncompromising craftsmanship.",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${suse.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main-content" className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
