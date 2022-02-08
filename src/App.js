import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./component/MovieDetail";
import MovieList from "./component/MovieList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MovieList />} />
        <Route path="/MovieDetail/:id" element={<MovieDetail/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
