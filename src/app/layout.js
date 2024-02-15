import "./globals.css";

export const metadata = {
  title: "MSF",
  description: "Welcome to MSF page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
