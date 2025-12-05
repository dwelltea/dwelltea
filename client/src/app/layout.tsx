import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: "Dwelltea - Real Estate Insights",
  description: "Find your property's true value and understand what really drives it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <style dangerouslySetInnerHTML={{
          __html: `
            html { 
              font-size: 16px; 
              -webkit-text-size-adjust: 100%;
              text-size-adjust: 100%;
            }
            body { 
              margin: 0; 
              padding: 0; 
              overflow-x: hidden; 
              width: 100%; 
              max-width: 100vw;
              background-color: #faf8f3;
              position: relative;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
            * { 
              box-sizing: border-box; 
            }
            #__next {
              width: 100%;
              max-width: 100vw;
              overflow-x: hidden;
            }
            header {
              width: 100%;
              background-color: #ffffff;
              border-bottom: 1px solid #e5e7eb;
              padding: 16px 0;
            }
            section {
              background-color: #faf8f3;
              padding: 64px 0;
            }
            img {
              max-width: 100%;
              height: auto;
            }
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
