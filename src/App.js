

import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Detail from './components/OrchidsDetail';
import OrchidFeature from './components/Orchids';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<OrchidFeature />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
