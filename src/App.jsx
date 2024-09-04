import './App.css'
import Navbar from './components/Nav/Navbar'
import Home from './components/Nav/Home/home.jsx';
import Feature from '././components/Features/Feature.jsx';
import Courses from './components/Courses/Courses.jsx';
import Register from "./components/Register/Register.jsx";
import Community from './components/Community/Community.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Feature/>
      <Courses/>
      <Register/>
      <Community/>
      <Footer/>
    </>
  )
}

export default App
