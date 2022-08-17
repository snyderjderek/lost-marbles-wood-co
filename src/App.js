import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './views/header/header'
import { About } from './views/about/about';
import { Gallery } from './views/gallery/gallery';
import { CareInstructions } from './views/care/careInstructions';
import { Landing } from './views/landing/landing'
import { Contact } from "./views/contact/contact";



function App() {
  return (
    <Router>
      <div className="h-full w-screen bg-gray-200">
        <Header />
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/about' element={<About /> } />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/care' element={<CareInstructions />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
