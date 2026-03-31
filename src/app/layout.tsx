import type { Metadata } from "next";
import { Bricolage_Grotesque, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Kiran Garud | DevOps & Platform Engineer",
  description: "Entry-level DevOps & Platform Engineer based in Pune. Building reliable cloud infrastructure with AWS, Kubernetes, Terraform, and CI/CD pipelines.",
  keywords: ["Kiran Garud", "DevOps Engineer", "Platform Engineer", "AWS", "Kubernetes", "Terraform", "CI/CD", "Infrastructure as Code", "Cloud Infrastructure"],
  authors: [{ name: "Kiran Garud" }],
  openGraph: {
    title: "Kiran Garud | DevOps & Platform Engineer",
    description: "Entry-level DevOps & Platform Engineer based in Pune. Building reliable cloud infrastructure with AWS, Kubernetes, Terraform, and CI/CD pipelines.",
    type: "website",
    locale: "en_US",
    url: "https://kirangarud.com",
    siteName: "Kiran Garud — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Garud | DevOps & Platform Engineer",
    description: "Entry-level DevOps & Platform Engineer based in Pune. Building reliable cloud infrastructure with AWS, Kubernetes, Terraform, and CI/CD pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preload Hero background image so it renders on first paint */}
        <link
          rel="preload"
          href="/abstract-black-futuristic-background.jpg"
          as="image"
          fetchPriority="high"
        />
        {/* Theme init — runs before paint to prevent flash of unstyled content */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':true;if(d)document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
      </head>
      <body className={`${bricolage.variable} ${syne.variable} ${jetbrains.variable} antialiased font-sans`} suppressHydrationWarning>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}