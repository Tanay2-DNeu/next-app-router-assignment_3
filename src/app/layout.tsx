import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js App Router Examples",
  description: "Client fetch, Server components and ISR examples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial", padding: "20px" }}>
        <h1>Next.js App Router Assignment</h1>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/">Home</a> | <a href="/client-fetch"> Client Fetch</a>{" "}
          <a href="/server-fetch">Server Fetch</a>{" "}
          <a href="/users/1">User dynamic route</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
