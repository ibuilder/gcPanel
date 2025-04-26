import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar"; // Import SidebarProvider

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ConstructAI',
  description: 'Construction Management Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font variables to the body */}
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}> {/* Added font-sans as a base */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Consider changing default or removing if relying solely on 'system'
          enableSystem
          disableTransitionOnChange
        >
          {/* Wrap children with SidebarProvider */}
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}


