import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import { Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/" element={<Home/>}/> */}
    </Routes>
  );
}

export default App;
