import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import NewsItem from "./components/NewsItem";
import NewsBoard from "./components/NewsBoard";
import { useState } from "react";

function App() {

  const [category, setCategory] = useState("general");

  return (
    <div className="App">
      <Navbar
        setCategory={setCategory}
      ></Navbar>
      <NewsBoard></NewsBoard>
      <NewsItem  category={category}/>
    </div>
  );
}

export default App;
