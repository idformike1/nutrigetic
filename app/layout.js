import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import CommandPalette from "../components/navigation/CommandPalette";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.nutrigetic.com"),
  title: "Nutrigetic",
  description: "Nutrigetic website overhaul"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="site-shell">
          <CommandPalette />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
