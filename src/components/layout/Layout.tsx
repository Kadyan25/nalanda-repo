
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageTransition from './PageTransition';
import AnimatedBackdrop from './AnimatedBackdrop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <AnimatedBackdrop />
      <Navbar />
      <div className="relative z-10 flex-grow">
        <PageTransition>
          <main className="flex-grow">
            {children}
          </main>
        </PageTransition>
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
