import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';
import FormulaireContact from './components/FormulaireContact';



function App() {
  const monNom = "Jean Aymar";
  return (
    <div className=" min-h-screen w-full bg-portfolio-lightBg text-portfolio-dark font-sans antialiased relative">
<div className=" font-sans antialiased text-portfolio-dark relative">
        <Header name={monNom} />
      <main>
        <Hero name={monNom} />
        <Projects />
        <FormulaireContact />
      </main>
      <Footer name={monNom} />
    </div>
    </div>
  );
}

export default App;