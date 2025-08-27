export const metadata = {
  title: "CSR App",
  description: "Next.js Client-Side Rendering Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
