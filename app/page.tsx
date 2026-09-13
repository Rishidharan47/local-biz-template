import DemoBanner from "@/components/DemoBanner";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import LocationHours from "@/components/LocationHours";
import NoticeBar from "@/components/NoticeBar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/config";
import { buildLocalBusinessJsonLd } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-gray-900 focus:shadow-lg"
      >
        Skip to content
      </a>
      <DemoBanner />
      <NoticeBar />
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Feature />
        <Reviews />
        <LocationHours />
      </main>
      <Footer />
      <WhatsAppButton />
      {/* No structured data in demo mode: the site isn't the business's own yet */}
      {!site.demo && <JsonLd data={buildLocalBusinessJsonLd(site)} />}
    </>
  );
}
