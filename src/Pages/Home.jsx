import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Capabilities from '../components/Capabilities';
import Leadership from '../components/Leadership';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onQuoteClick={openModal} />
      <main className='min-w-screen'>
        <Hero onQuoteClick={openModal} />
        <About />
        <Services />
        <Capabilities />
        <Leadership />
        <ContactCTA onQuoteClick={openModal} />
      </main>
      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
