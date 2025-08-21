
import "./globals.css";
import { ClientProviders } from "./Client-providers";
import { PageLoaderProvider } from "@/context/pageLoaderContext/PageLoaderContext";
import PageLoader from "@/common/loader/pageloader";
import DarkModeWrapper from "@/components/DarkModeWrapper";
import { AuthProvider } from "@/context/AuthContext/AuthContext";




export const metadata = {
  title: "Winflow",
  description: "Where Knowledge Flows, Innovation Thrives, and Expertise Connects.",
  icons: {
    icon: "/Group2.png",
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
          <DarkModeWrapper>
            <PageLoaderProvider>
              <PageLoader />
              <AuthProvider>
                {children}
              </AuthProvider>
            </PageLoaderProvider>
          </DarkModeWrapper>
        </ClientProviders>
      </body>
    </html>
  );
}
