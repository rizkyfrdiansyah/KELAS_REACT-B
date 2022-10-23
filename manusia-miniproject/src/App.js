import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import Tambah from "./screens/Dashboard/Tambah";
import Edit from "./screens/Dashboard/Edit";
import Homepage from "./screens/Homepage";
import DetailKonten from "./screens/DetailKonten";
import Login from "./screens/Login";
import Daftar from "./screens/Daftar";

function App() {
  return (
    <div className="font-['Inter']">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/tambah" element={<Tambah />} />
          <Route path="admin/edit/:id" element={<Edit />} />
          <Route path="/page/:id" element={<DetailKonten />} />
          <Route path="login" element={<Login />} />
          <Route path="daftar" element={<Daftar />} />
          <Route
            path="*"
            element={
              <div className="flex h-screen">
                <p className="m-auto">There's nothing here: 404!</p>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
