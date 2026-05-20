import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-lightBg font-sans antialiased text-brand-dark">
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer name="Jean Aymar"/>
    </div>
  );
}

export default App;