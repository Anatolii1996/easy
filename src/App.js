import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.scss';
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Detail from "./pages/detail";
import Header from "./components/Header";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/card/:title" element={<Detail/>} />
      </Route>
    </Routes>
  );
}

export default App;
