;
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Home/>
        <Education />
        <Experience />
        <Skills  />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} Hitesh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;