import { Route, Routes } from "react-router-dom";

/** Style */
import "./App.css";

/** Components */
import Footer from "./components/Footer";

/** Pages */
import Home from "./pages/Home";
import EditTimeline from "./pages/EditTimeline";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import TeamData from "./pages/TeamData";
import Login from "./pages/Login";
import AddTeam from "./pages/AddTeam";
import AddMember from "./pages/AddMember";
import EditMember from "./pages/EditMember";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="app_container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-timeline" element={<EditTimeline />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<TeamData />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/add-team" element={<AddTeam />} />
        <Route path="/dashboard/:id/add-member" element={<AddMember />} />
        <Route path="/dashboard/:id/edit-member/:id_member" element={<EditMember />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
