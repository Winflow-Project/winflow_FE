import { PageLoaderProvider } from "@/context/pageLoaderContext/PageLoaderContext";
import "./globals.css";
import PageLoader from "@/common/loader/pageloader";


export const metadata = {
  title: "Winflow",
  description: "Where Knowledge Flows, Innovation Thrives, and Expertise Connects.",
  icons: {
    icon: "/Logo Frame 3.png",
    apple: "/apple-touch-icon.png",
  },
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoaderProvider>
          <PageLoader />
          {children}
        </PageLoaderProvider>
      </body>
    </html>
  );
}
