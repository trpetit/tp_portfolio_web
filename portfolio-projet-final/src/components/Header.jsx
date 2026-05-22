function Header({ name }) {
  return (
    <header className="w-full font-sans text-portfolio-dark font-medium bg-portfolio-lightBg">
      <div className="flex justify-between items-center py-8 px-52">
        <a href="#">{name}</a>
        <nav className="relative z-50">
          <ul className="flex items-center gap-8">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;