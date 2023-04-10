import { Route, Routes} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Header from "./components/Header";
import './App.css'


const App = () => (
  <div className="portfolio-website">
    <div className="content-container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>}  />
        <Route exact path="/projects" element={<Projects/>}  />
      </Routes>
    </div>
  </div>
)

export default App;
