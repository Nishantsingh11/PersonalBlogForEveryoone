import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Foram from './Components/Foram';
import AddBlog from './Components/AddBlog';
import Navbar from './Components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/blog" element = {<Blog/>} />
        <Route path = "/addblog" element = {<AddBlog/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/contactus" element = {<Contactus/>} />
        <Route path = "/foram" element = {<Foram/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
