
import { ContextProvider } from "./context/AppContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Search } from "./pages/Search"
import { MovieDetail } from "./components/MoviesDetails"
function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Home/> }/>
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
