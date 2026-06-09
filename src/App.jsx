import Footer from "./components/Footer";
import Header from "./components/Heder"; // 🛠️ "Heder" -> "Header" deb to'g'rilandi
import Home from "./pages/Home";
import  Section from "./pages/About/Sections"
import { Routes, Route } from "react-router-dom"; 
import Book from "./pages/Book/Book";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={<Book/>} />
        <Route path="/about" element={<Section/>} /> 
        
       
        <Route path="*" element={<h2>Bunday sahifa mavjud emas (404)</h2>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
