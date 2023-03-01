import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Menubar from "./Menubar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Menubar />
        {children}
      </body>
    </html>
  );
}
