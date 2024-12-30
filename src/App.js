import './App.css'
import Feature from './components/features/Feature';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Header from './components/header/Header';
import Slide from './components/slides/Slide';
import Step from './components/steps/Step';
import Team from './components/team/Team';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Gallery />
      <Step />
      <Slide />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
