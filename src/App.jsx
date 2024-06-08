
import { ContextProvider } from "./context/AppContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { MovieDetail } from "./components/MoviesDetails"
import { Movies } from "./pages/Movies"
import { Series } from "./pages/Series"
function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/> }/>
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
