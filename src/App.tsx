import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Movie from "./Routes/Movie";
import Join from "./Routes/Join";
import About from "./Routes/About";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies/:movieId" element={Movie} />
        </Route>
        <Route path="/tv" element={<Tv />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="join" element={<Join />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
