import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SpeedInsights />
    </html>
  );
}
