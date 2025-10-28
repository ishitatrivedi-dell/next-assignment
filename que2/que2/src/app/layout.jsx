import Provider from "./theme/Provider";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Project",
  description: "Next.js 15 with App & Pages Router + MUI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
