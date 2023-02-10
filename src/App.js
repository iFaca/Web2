import './App.css';
import Main from '../src/Components/Main/Main'
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Main/>
      <Services/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
