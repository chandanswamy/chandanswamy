import { Route, Routes} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";

import './App.css'

const wallpaperColors = ['original','grey', 'oceanview', 'fire']

const randomIndex = Math.floor(Math.random() * wallpaperColors.length);

const bgcolor = wallpaperColors[randomIndex]

const App = () => (
  <div className={`portfolio-website ${bgcolor} `}>
    <div className="content-container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>}  />
        <Route exact path="/projects" element={<Projects/>}  />
        <Route exact path="/about/education" element={<Education />} />
        <Route exact path="/about/experience" element={<Experience />} />
      </Routes>
    </div>
  </div>
)

export default App;
