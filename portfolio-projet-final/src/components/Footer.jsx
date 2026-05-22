import footerIcons from '../assets/footer_icons.svg';

import footerWave from '../assets/footer_wave.svg';

function Footer({name}) {
  return (
    <footer className=" py-8 ">
      <div className="container mx-auto px-4 text-center">
        {}
        <img 
          src={footerIcons} 
          alt="Icônes de réseaux sociaux" 
          className="mx-auto mt-4" 
        />      
      <p className="text-portfolio-gray font-sans text-sm font-medium tracking-wide">          {name}  2026
          </p>
        </div>
      <img 
        src={footerWave} 
        alt="Vague décorative pour le pied de page" 
        className="w-full -mt-24"
      />
    </footer>
  );
}

export default Footer;