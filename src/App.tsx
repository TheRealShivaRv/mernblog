import Header from './components/Header';
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import * as Pages from "./pages";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Pages.Home />}/>
        <Route path="/sample-post" element={<Pages.Post />} />
      </Routes>    
      <Footer />
    </div>
  );
}

export default App;
