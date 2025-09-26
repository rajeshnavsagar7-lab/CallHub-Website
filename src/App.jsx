import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#F8FAFC] to-[#E0E7FF]">
      <Header />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;