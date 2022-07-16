import { Routes, Route, HashRouter } from "react-router-dom";
import NotFoundPage from "../pages/404/404";
import Home from "../pages/home/Home";
import UpcomingFeatures from "../pages/upcomingFeatures/UpcomingFeatures";
import Images from "../pages/images/Images";
import BuildPatchModal from "../BuildPatchModal";

function Main() {
  return (
    <div>
      <BuildPatchModal></BuildPatchModal>
      <HashRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={Home()} />
            <Route path="/upcoming" element={UpcomingFeatures()} />
            <Route path="/images" element={Images()} />
            <Route path="*" element={NotFoundPage()} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default Main;
