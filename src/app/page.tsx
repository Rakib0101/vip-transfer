import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Commitment from '@/components/Commitment';
import Services from '@/components/Services';
import ValueProposition from '@/components/ValueProposition';
import LuxuryTransport from '@/components/LuxuryTransport';
import IstanbulAirport from '@/components/IstanbulAirport';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Commitment />
      <Services />
      <ValueProposition />
      <LuxuryTransport />
      <IstanbulAirport />
      <FAQ />
    </div>
  );
}
