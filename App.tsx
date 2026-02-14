
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { PersonalMessage } from './components/PersonalMessage';
import { AboutGon } from './components/AboutGon';
import { ProductOffer } from './components/ProductOffer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BusinessHealthCheck } from './components/BusinessHealthCheck';
import { CheckoutModal } from './components/CheckoutModal';

const App: React.FC = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [remainingSlots, setRemainingSlots] = useState(100);

  useEffect(() => {
    // Simulate countdown for scarcity
    const timer = setInterval(() => {
      setRemainingSlots(prev => (prev > 12 ? prev - Math.floor(Math.random() * 2) : prev));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const openCheckout = () => setIsCheckoutOpen(true);
  const closeCheckout = () => setIsCheckoutOpen(false);

  return (
    <div className="min-h-screen">
      {/* Sticky CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t z-40 md:hidden">
        <button 
          onClick={openCheckout}
          className="w-full bg-orange-600 text-white font-bold py-3 rounded-full shadow-lg hover:bg-orange-700 transition-all transform active:scale-95"
        >
          สั่งซื้อเลย - รับไฟล์ทันที (40.-)
        </button>
      </div>

      <Hero openCheckout={openCheckout} />
      
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-24">
        <PersonalMessage />
        <PainPoints />
        
        <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <h2 className="text-3xl font-bold mb-6 text-center">ความจริงคือ...</h2>
          <p className="text-xl text-center text-slate-300">
            การปั้นธุรกิจให้แตะระดับ "พันล้าน" ไม่ใช่เรื่องของความขยันแบบเอาเป็นเอาตาย
          </p>
          <p className="text-2xl font-bold mt-4 text-center text-orange-400">
            แต่มันคือ "ระบบการจัดการจังหวะเงิน" ที่เรียนรู้ได้
          </p>
        </section>

        <AboutGon />
        
        <BusinessHealthCheck />

        <ProductOffer remainingSlots={remainingSlots} openCheckout={openCheckout} />
        
        <FAQ />
      </main>

      <Footer />

      {isCheckoutOpen && <CheckoutModal onClose={closeCheckout} />}
    </div>
  );
};

export default App;
