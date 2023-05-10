import "@styles/globals.css";

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
          {/* navbar */}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
