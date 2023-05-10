import Provider from "@components/Provider";
import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  icons: {
    icon: "/logo.svg",
  },
  title: "CodeBits",
  description: "Discover and share code snippets with the community.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>
          <Provider>
            {/* navbar */}
            <Nav />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
