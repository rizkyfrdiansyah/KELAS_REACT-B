// import './App.css';
import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";

import Kategori from "./pages/Wisata";

import Wisata from "./pages/Wisata";
import DetailWisata from "./pages/DetailWisata";

import Berita from "./pages/Berita";
import DetailBerita from "./pages/DetailBerita";

import Tentang from "./pages/Tentang";

import Login from "./pages/Login";

import NotFound from "./pages/NotFound";

import KelolaWisata from "./pages/KelolaWisata";
import InputWisata from "./pages/InputWisata";
import UbahWisata from "./pages/UbahWisata";

import KelolaBerita from "./pages/KelolaBerita";
import InputBerita from "./pages/InputBerita";
import UbahBerita from "./pages/UbahBerita";

import KelolaUlasan from "./pages/KelolaUlasan";

import KelolaAdmin from "./pages/KelolaAdmin";
import InputAdmin from "./pages/InputAdmin";
import UbahAdmin from "./pages/UbahAdmin";

import PrivateRoutes from "./PrivateRoutes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda />} />

      <Route path="/kategori">
        <Route element={<Kategori />} index />
        <Route path=":category">
          <Route element={<Wisata />} index />
          <Route path="detail-wisata/:id" element={<DetailWisata />} />
        </Route>
      </Route>

      <Route path="/berita">
        <Route element={<Berita />} index />
        <Route path="detail-berita/:id" element={<DetailBerita />} />
      </Route>

      <Route path="/tentang" element={<Tentang />} />
      <Route path="/admin-area/login" element={<Login />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/kelola-wisata">
          <Route element={<KelolaWisata />} index />
          <Route path="input-wisata" element={<InputWisata />} />
          <Route path="ubah-wisata/:id" element={<UbahWisata />} />
        </Route>

        <Route path="/kelola-berita">
          <Route element={<KelolaBerita />} index />
          <Route path="input-berita" element={<InputBerita />} />
          <Route path="ubah-berita/:id" element={<UbahBerita />} />
        </Route>
      </Route>

      <Route path="/kelola-ulasan" element={<KelolaUlasan />} />

      <Route path="/kelola-admin">
        <Route element={<KelolaAdmin />} index />
        <Route path="input-admin" element={<InputAdmin />} />
        <Route path="ubah-admin/:id" element={<UbahAdmin />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
