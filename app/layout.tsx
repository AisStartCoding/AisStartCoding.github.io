import './globals.css';
import CursorFollower from './components/Cursor/CursorFollower';
import ProfileSidebar from './components/Profile/ProfileSidebar';
import Navigation from './components/Navigation/Navigation';
import BlackholeBackground from './components/Background/BlackholeBackground';

export const metadata = {
  title: 'Abdullah - Senior Full Stack Developer',
  description: 'Senior Full Stack Developer & AI/ML Engineer specializing in scalable applications and cloud solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0A0F" />
        {/* Font Awesome for icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="relative bg-[#0A0A0F] overflow-x-hidden">
        {/* Background Effects - Uncomment if component exists */}
        {/* <BlackholeBackground /> */}
        
        {/* Cursor Follower - Uncomment if component exists */}
        {/* <CursorFollower /> */}
        
        {/* Main Layout */}
        <div className="relative min-h-screen">
          {/* The cosmic portfolio is a single-page app with fixed nav */}
          {/* So we don't need sidebar or separate nav components */}
          {/* The navigation is built into the page component itself */}
          
          <main className="relative z-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}