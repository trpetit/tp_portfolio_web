import HeroText from './HeroText';
import HeroImage from './HeroImage';
import Header from './Header';

function Hero({name}) {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <HeroText name={name}/>
        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;