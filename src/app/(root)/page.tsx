import Hero from "@/components/shared/hero";
import GalleryComponent from "@/components/shared/gallery-component";
import About from "@/components/shared/about";
import Tent from "@/components/shared/tent";
import Feature from "@/components/shared/feature";
import BestChoice from "@/components/shared/best-choice";
import Day from "@/components/shared/day";
import CustomerReview from "@/components/shared/customer-review";
import Cta from "@/components/shared/cta";


export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Tent />
      <Feature />
      <BestChoice />
      <Day />
      <GalleryComponent />
      <CustomerReview />
      <Cta />

    </div>
  );
}
