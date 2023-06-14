import { Route, Routes} from "react-router-dom";
import Home from './components/Home'
import Header from "./components/Header";


import './App.css'

const App = () => (
  <div className="portfolio-website">
    <div className="content-container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  </div>
)

export default App;
