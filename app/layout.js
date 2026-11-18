import "@fontsource/fredoka/500.css";
import "@fontsource/fredoka/600.css";
import "@fontsource/fredoka/700.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/500.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";
import "./_styles/globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: { default: "Little Acorn Learning Center", template: "%s" },
  description:
    "Infant care through Pre-K, in a warm and secure learning environment. A demo site built for the MyClickAid gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      style={{
        "--font-fredoka": "'Fredoka'",
        "--font-nunito": "'Nunito Sans'",
      }}
    >
      <body className='font-body text-navy bg-skywhite min-h-screen flex flex-col'>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
