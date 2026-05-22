import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  const monNom = "Jean Aymar";
  return (
<div className="min-h-screen bg-portfolio-lightBg font-sans antialiased text-portfolio-dark relative">
        <Header name={monNom} />
      <main>
        <Hero name={monNom}/>
        <Projects />
      </main>
      <Footer name={monNom}/>
    </div>
  );
}

export default App;