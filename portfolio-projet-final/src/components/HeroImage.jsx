import image_person from '../assets/main_perso_pic.png';

function HeroImage() {
  return (
    <div className="absolute top-0 right-0">
      <img 
        src={image_person} 
        alt="Madelyn Torff portrait" 
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default HeroImage;