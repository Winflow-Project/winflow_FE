import "./globals.css";
import { ClientProviders } from "./Client-providers";
import { PageLoaderProvider } from "@/context/pageLoaderContext/PageLoaderContext";
import PageLoader from "@/common/loader/pageloader";
import DarkModeToggle from "@/components/DarModeToggle/DarkModeToggle";

export const metadata = {
  title: "Winflow",
  description: "Where Knowledge Flows, Innovation Thrives, and Expertise Connects.",
  icons: {
    icon: "/Logo Frame 3.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <PageLoaderProvider>
            <PageLoader />

            {children}

          </PageLoaderProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
