import footerIcons from '../assets/footer_icons.svg';

function Footer({name}) {
  return (
    <footer className="bg-white py-8 border-t border-brand-muted/20">
      <div className="container mx-auto px-4 text-center">
        {}
        <img 
          src={footerIcons} 
          alt="Icônes de réseaux sociaux" 
          className="mx-auto mt-4" 
        />      
        <p className="text-brand-gray text-sm font-medium tracking-wide">
          {name}  2026
          </p>
        </div>
    </footer>
  );
}

export default Footer;