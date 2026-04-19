import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.nutrigetic.com"),
  title: "Nutrigetic",
  description: "Nutrigetic website overhaul"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
