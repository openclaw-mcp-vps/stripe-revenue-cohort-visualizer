import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Revenue Cohort Visualizer",
  description: "Visualize Stripe revenue cohorts beautifully for investor decks and board meetings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dcf9bd95-c4a7-40ef-a84f-531cd83eaa46"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
