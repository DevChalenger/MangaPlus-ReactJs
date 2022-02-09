/* import logo from "./logo.svg"; */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
