import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainHero from "./components/MainHero/MainHero";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/Item/ItemDetailContainer'
import ComingSoon from './components/ComingSoon/Comingsoon'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHero />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        {/* <Route
          path="/category/star_wars"
          element={<ComingSoon />}
        /> */}
        <Route path="/item/:category/:id" element={ <ItemDetailContainer /> }></Route>
        <Route path="/ofertas" element={<ComingSoon />} />
        <Route path="/contacto" element={<ComingSoon />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
